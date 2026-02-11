package com.kasthuri.foodpoint.dto;

import java.math.BigDecimal;
import java.util.Map;

public class AdminStats {
    private long totalOrders;
    private BigDecimal totalRevenue;
    private long totalCustomers;
    private Map<String, Long> ordersByCategory;

    public AdminStats(long totalOrders, BigDecimal totalRevenue, long totalCustomers,
            Map<String, Long> ordersByCategory) {
        this.totalOrders = totalOrders;
        this.totalRevenue = totalRevenue;
        this.totalCustomers = totalCustomers;
        this.ordersByCategory = ordersByCategory;
    }

    // Getters
    public long getTotalOrders() {
        return totalOrders;
    }

    public BigDecimal getTotalRevenue() {
        return totalRevenue;
    }

    public long getTotalCustomers() {
        return totalCustomers;
    }

    public Map<String, Long> getOrdersByCategory() {
        return ordersByCategory;
    }
}
