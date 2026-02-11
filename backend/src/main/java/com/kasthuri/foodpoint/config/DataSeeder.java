package com.kasthuri.foodpoint.config;

import com.kasthuri.foodpoint.entity.MenuItem;
import com.kasthuri.foodpoint.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class DataSeeder implements CommandLineRunner {
    @Autowired
    private MenuItemRepository menuItemRepository;

    @Override
    public void run(String... args) throws Exception {
        // Clear existing data
        menuItemRepository.deleteAll();

        // Seed menu items
        menuItemRepository.save(new MenuItem(
                "Chicken Biryani",
                "Aromatic basmati rice cooked with tender chicken pieces and traditional spices",
                new BigDecimal("250.00"),
                "Main Course",
                "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400"));

        menuItemRepository.save(new MenuItem(
                "Mutton Biryani",
                "Flavorful biryani with succulent mutton pieces and fragrant spices",
                new BigDecimal("300.00"),
                "Main Course",
                "https://images.unsplash.com/photo-1633945274309-2c8c6d8c8c8c?w=400"));

        menuItemRepository.save(new MenuItem(
                "Vegetable Biryani",
                "Delicious mixed vegetable biryani with aromatic basmati rice",
                new BigDecimal("180.00"),
                "Main Course",
                "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400"));

        menuItemRepository.save(new MenuItem(
                "Chicken 65",
                "Spicy and crispy fried chicken appetizer",
                new BigDecimal("150.00"),
                "Appetizer",
                "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400"));

        menuItemRepository.save(new MenuItem(
                "Paneer Tikka",
                "Grilled cottage cheese marinated in spices",
                new BigDecimal("180.00"),
                "Appetizer",
                "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400"));

        menuItemRepository.save(new MenuItem(
                "Butter Chicken",
                "Creamy tomato-based curry with tender chicken pieces",
                new BigDecimal("280.00"),
                "Main Course",
                "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400"));

        menuItemRepository.save(new MenuItem(
                "Dal Tadka",
                "Yellow lentils tempered with aromatic spices",
                new BigDecimal("120.00"),
                "Main Course",
                "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400"));

        menuItemRepository.save(new MenuItem(
                "Naan",
                "Soft and fluffy Indian flatbread",
                new BigDecimal("40.00"),
                "Bread",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"));

        menuItemRepository.save(new MenuItem(
                "Garlic Naan",
                "Naan bread topped with fresh garlic and butter",
                new BigDecimal("50.00"),
                "Bread",
                "https://images.unsplash.com/photo-1619881589935-d0e2d1d3f6f3?w=400"));

        menuItemRepository.save(new MenuItem(
                "Gulab Jamun",
                "Sweet milk-solid dumplings soaked in sugar syrup",
                new BigDecimal("60.00"),
                "Dessert",
                "https://images.unsplash.com/photo-1589301773859-34e2e5d2e9f0?w=400"));

        menuItemRepository.save(new MenuItem(
                "Mango Lassi",
                "Refreshing yogurt-based mango drink",
                new BigDecimal("80.00"),
                "Beverage",
                "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400"));

        menuItemRepository.save(new MenuItem(
                "Masala Chai",
                "Traditional Indian spiced tea",
                new BigDecimal("30.00"),
                "Beverage",
                "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400"));

        System.out.println("✅ Database seeded with " + menuItemRepository.count() + " menu items!");
    }
}
