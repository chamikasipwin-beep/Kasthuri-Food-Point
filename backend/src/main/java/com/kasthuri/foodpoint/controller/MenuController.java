package com.kasthuri.foodpoint.controller;

import com.kasthuri.foodpoint.entity.MenuItem;
import com.kasthuri.foodpoint.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = { "http://localhost:5173", "http://localhost:3000" })
public class MenuController {
    @Autowired
    private MenuService menuService;

    @GetMapping
    public ResponseEntity<List<MenuItem>> getAllMenuItems() {
        return ResponseEntity.ok(menuService.getAvailableMenuItems());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MenuItem> getMenuItemById(@PathVariable Long id) {
        return menuService.getMenuItemById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<MenuItem>> getMenuItemsByCategory(@PathVariable String category) {
        return ResponseEntity.ok(menuService.getMenuItemsByCategory(category));
    }

    @PostMapping
    public ResponseEntity<MenuItem> createMenuItem(@RequestBody MenuItem menuItem) {
        return ResponseEntity.ok(menuService.saveMenuItem(menuItem));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MenuItem> updateMenuItem(@PathVariable Long id, @RequestBody MenuItem menuItem) {
        menuItem.setId(id);
        return ResponseEntity.ok(menuService.saveMenuItem(menuItem));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMenuItem(@PathVariable Long id) {
        menuService.deleteMenuItem(id);
        return ResponseEntity.noContent().build();
    }
}
