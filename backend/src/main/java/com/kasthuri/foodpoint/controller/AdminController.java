package com.kasthuri.foodpoint.controller;

import com.kasthuri.foodpoint.dto.AdminStats;
import com.kasthuri.foodpoint.entity.Order;
import com.kasthuri.foodpoint.repository.MenuItemRepository;
import com.kasthuri.foodpoint.repository.OrderRepository;
import com.kasthuri.foodpoint.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MenuItemRepository menuItemRepository;

    @GetMapping("/stats")
    public ResponseEntity<AdminStats> getStats() {
        List<Order> orders = orderRepository.findAll();
        long totalOrders = orders.size();
        BigDecimal totalRevenue = orders.stream()
                .map(Order::getTotalAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        long totalCustomers = userRepository.count();

        // Simple mock category stats for demonstration
        Map<String, Long> categories = new HashMap<>();
        categories.put("Kottu", 45L);
        categories.put("Fried Rice", 30L);
        categories.put("Devilled", 25L);

        return ResponseEntity.ok(new AdminStats(totalOrders, totalRevenue, totalCustomers, categories));
    }

    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderRepository.findAll());
    }

    @PutMapping("/orders/{id}/status")
    public ResponseEntity<?> updateOrderStatus(@PathVariable Long id, @RequestParam String status) {
        return orderRepository.findById(id).map(order -> {
            order.setStatus(status);
            orderRepository.save(order);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
