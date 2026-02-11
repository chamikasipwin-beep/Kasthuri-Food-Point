package com.kasthuri.foodpoint.controller;

import com.kasthuri.foodpoint.entity.Order;
import com.kasthuri.foodpoint.entity.OrderItem;
import com.kasthuri.foodpoint.entity.MenuItem;
import com.kasthuri.foodpoint.service.OrderService;
import com.kasthuri.foodpoint.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = { "http://localhost:5173", "http://localhost:3000" })
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private MenuService menuService;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Map<String, Object> orderRequest) {
        // Extract customer details
        String customerName = (String) orderRequest.get("customerName");
        String customerPhone = (String) orderRequest.get("customerPhone");
        String customerAddress = (String) orderRequest.get("customerAddress");

        // Create order
        Order order = new Order();
        order.setCustomerName(customerName);
        order.setCustomerPhone(customerPhone);
        order.setCustomerAddress(customerAddress);

        // Process order items
        List<Map<String, Object>> items = (List<Map<String, Object>>) orderRequest.get("items");
        java.math.BigDecimal totalAmount = java.math.BigDecimal.ZERO;

        for (Map<String, Object> item : items) {
            Long menuItemId = Long.valueOf(item.get("menuItemId").toString());
            Integer quantity = Integer.valueOf(item.get("quantity").toString());

            MenuItem menuItem = menuService.getMenuItemById(menuItemId)
                    .orElseThrow(() -> new RuntimeException("Menu item not found"));

            java.math.BigDecimal itemPrice = menuItem.getPrice();
            java.math.BigDecimal itemTotal = itemPrice.multiply(java.math.BigDecimal.valueOf(quantity));
            totalAmount = totalAmount.add(itemTotal);

            OrderItem orderItem = new OrderItem(menuItem, quantity, itemPrice);
            order.addOrderItem(orderItem);
        }

        order.setTotalAmount(totalAmount);
        Order savedOrder = orderService.createOrder(order);

        return ResponseEntity.ok(savedOrder);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Long id,
            @RequestBody Map<String, String> statusUpdate) {
        String status = statusUpdate.get("status");
        Order updatedOrder = orderService.updateOrderStatus(id, status);
        if (updatedOrder != null) {
            return ResponseEntity.ok(updatedOrder);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }
}
