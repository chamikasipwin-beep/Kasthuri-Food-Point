package com.kasthuri.foodpoint.service;

import com.kasthuri.foodpoint.entity.Order;
import com.kasthuri.foodpoint.entity.OrderItem;
import com.kasthuri.foodpoint.repository.OrderRepository;
import com.kasthuri.foodpoint.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public List<Order> getOrdersByStatus(String status) {
        return orderRepository.findByStatus(status);
    }

    @Transactional
    public Order createOrder(Order order) {
        // Save order with all order items
        return orderRepository.save(order);
    }

    @Transactional
    public Order updateOrderStatus(Long id, String status) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            order.setStatus(status);
            return orderRepository.save(order);
        }
        return null;
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}
