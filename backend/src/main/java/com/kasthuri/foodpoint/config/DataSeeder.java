package com.kasthuri.foodpoint.config;

import com.kasthuri.foodpoint.entity.MenuItem;
import com.kasthuri.foodpoint.entity.Role;
import com.kasthuri.foodpoint.entity.User;
import com.kasthuri.foodpoint.repository.MenuItemRepository;
import com.kasthuri.foodpoint.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Collections;

@Component
public class DataSeeder implements CommandLineRunner {
        @Autowired
        private MenuItemRepository menuItemRepository;

        @Autowired
        private UserRepository userRepository;

        @Autowired
        private PasswordEncoder passwordEncoder;

        @Override
        public void run(String... args) throws Exception {
                // Seed Users
                if (!userRepository.existsByUsername("admin")) {
                        User admin = new User("admin", passwordEncoder.encode("admin123"), "admin@kasthuri.com",
                                        "Admin User");
                        admin.setRoles(Collections.singleton(Role.ROLE_ADMIN));
                        userRepository.save(admin);
                }

                if (!userRepository.existsByUsername("customer")) {
                        User customer = new User("customer", passwordEncoder.encode("customer123"),
                                        "customer@gmail.com", "John Doe");
                        customer.setRoles(Collections.singleton(Role.ROLE_CUSTOMER));
                        userRepository.save(customer);
                }

                menuItemRepository.deleteAll();

                // 1. Kottu
                menuItemRepository.save(new MenuItem("Vegi Kottu",
                                "Traditional shredded roti with fresh vegetables and Sri Lankan spices",
                                new BigDecimal("700.00"), "Kottu",
                                "https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Egg Kottu", "Spicy shredded roti with scrambled eggs and veggies",
                                new BigDecimal("800.00"), "Kottu",
                                "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Chicken Kottu",
                                "The classic Sri Lankan favorite with seasoned chicken", new BigDecimal("1000.00"),
                                "Kottu", "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Beef Kottu", "Rich and savory kottu with tender beef pieces",
                                new BigDecimal("1200.00"), "Kottu",
                                "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Seafood Kottu", "Kottu loaded with fresh ocean treasures",
                                new BigDecimal("1300.00"), "Kottu",
                                "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Mix Kottu",
                                "The ultimate combo of chicken, beef, seafood, and eggs", new BigDecimal("1500.00"),
                                "Kottu", "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Cheese Kottu", "Creamy and delicious kottu with melted cheese",
                                new BigDecimal("1300.00"), "Kottu",
                                "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Dolphin Kottu", "Special large-cut kottu with unique spices",
                                new BigDecimal("1300.00"), "Kottu",
                                "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800"));

                // 2. Fried Rice
                menuItemRepository.save(new MenuItem("Vegi Fried Rice", "Wok-fried rice with farm-fresh vegetables",
                                new BigDecimal("700.00"), "Fried Rice",
                                "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Egg Fried Rice", "Classic fried rice with seasoned eggs",
                                new BigDecimal("800.00"), "Fried Rice",
                                "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Chicken Fried Rice", "Savory rice with tender chicken chunks",
                                new BigDecimal("1000.00"), "Fried Rice",
                                "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Beef Fried Rice", "Hearty fried rice with flavorful beef",
                                new BigDecimal("1200.00"), "Fried Rice",
                                "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Seafood Fried Rice",
                                "Bounty of the sea mixed with golden fried rice", new BigDecimal("1300.00"),
                                "Fried Rice", "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Mix Fried Rice", "A grand mix of all proteins for the hungry",
                                new BigDecimal("1500.00"), "Fried Rice",
                                "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800"));

                // 3. Noodles
                menuItemRepository.save(new MenuItem("Vegi Noodles", "Stir-fried noodles with fresh garden vegetables",
                                new BigDecimal("700.00"), "Noodles",
                                "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Egg Noodles", "Classic stir-fry with seasoned eggs",
                                new BigDecimal("800.00"), "Noodles",
                                "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Chicken Noodles", "Savory noodles with tender chicken strips",
                                new BigDecimal("1000.00"), "Noodles",
                                "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Beef Noodles", "Hearty noodles with savory beef slices",
                                new BigDecimal("1200.00"), "Noodles",
                                "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Seafood Noodles", "Fresh catch stir-fry with golden noodles",
                                new BigDecimal("1300.00"), "Noodles",
                                "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Mix Noodles", "The definitive noodle mix for the ultimate fan",
                                new BigDecimal("1500.00"), "Noodles",
                                "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800"));

                // 4. Pasta
                menuItemRepository.save(new MenuItem("Vegi Pasta", "Delicious pasta with garden vegetables",
                                new BigDecimal("700.00"), "Pasta",
                                "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Egg Pasta", "Savory pasta tossed with golden eggs",
                                new BigDecimal("800.00"), "Pasta",
                                "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Chicken Pasta", "Creamy or savory pasta with chicken pieces",
                                new BigDecimal("1000.00"), "Pasta",
                                "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Beef Pasta", "Hearty pasta with tender beef chunks",
                                new BigDecimal("1200.00"), "Pasta",
                                "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Seafood Pasta", "Delightful pasta loaded with fresh seafood",
                                new BigDecimal("1300.00"), "Pasta",
                                "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Mix Pasta", "A grand mix for the pasta enthusiast",
                                new BigDecimal("1500.00"), "Pasta",
                                "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=800"));

                // 5. Devilled Dish
                menuItemRepository.save(new MenuItem("Devilled Chicken", "Spicy Sri Lankan style devilled chicken",
                                new BigDecimal("1000.00"), "Devilled Dish",
                                "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Devilled Sausages", "Tangy and spicy devilled sausages",
                                new BigDecimal("800.00"), "Devilled Dish",
                                "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Devilled Fish", "Fresh fish pieces in a spicy devil sauce",
                                new BigDecimal("1000.00"), "Devilled Dish",
                                "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Devilled Cuttle Fish",
                                "Crispy and spicy cuttlefish devilled style", new BigDecimal("1000.00"),
                                "Devilled Dish",
                                "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Devilled Prawns", "Succulent prawns in a hot devil sauce",
                                new BigDecimal("1000.00"), "Devilled Dish",
                                "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Devilled Beef", "Tender beef chunks in a fiery devilled stir-fry",
                                new BigDecimal("1400.00"), "Devilled Dish",
                                "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Mix Devilled", "An assorted mix for the ultimate spice kick",
                                new BigDecimal("1500.00"), "Devilled Dish",
                                "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800"));

                // 6. Fried Dish
                menuItemRepository.save(new MenuItem("Fried Chicken", "Crispy and golden fried chicken pieces",
                                new BigDecimal("1000.00"), "Fried Dish",
                                "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Hot Butter Cuttlefish", "Iconic Sri Lankan hot butter cuttlefish",
                                new BigDecimal("1000.00"), "Fried Dish",
                                "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Hot Butter Mushroom",
                                "Crispy button mushrooms tossed in spicy butter", new BigDecimal("500.00"),
                                "Fried Dish",
                                "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Chips Plate", "Golden crispy potato chips",
                                new BigDecimal("800.00"), "Fried Dish",
                                "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800"));

                // 7. Omelette
                menuItemRepository.save(new MenuItem("Sri Lankan Omelette",
                                "Spicy omelette with onions and green chilies", new BigDecimal("300.00"), "Omelette",
                                "https://images.unsplash.com/photo-1510629954389-c1e0da47d4ec?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Cheese Omelette", "Rich and fluffy omelette with melted cheese",
                                new BigDecimal("650.00"), "Omelette",
                                "https://images.unsplash.com/photo-1510629954389-c1e0da47d4ec?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Chicken Omelette",
                                "Savory omelette stuffed with seasoned chicken", new BigDecimal("750.00"), "Omelette",
                                "https://images.unsplash.com/photo-1510629954389-c1e0da47d4ec?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Sausage Omelette", "Tasty omelette with sliced sausages",
                                new BigDecimal("500.00"), "Omelette",
                                "https://images.unsplash.com/photo-1510629954389-c1e0da47d4ec?q=80&w=800"));

                // 8. Family Pack
                menuItemRepository.save(new MenuItem("4 Pack Fried Rice", "Meal for 4 with 4 eggs and 400ml Coke",
                                new BigDecimal("2950.00"), "Family Pack",
                                "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800"));
                menuItemRepository.save(new MenuItem("8 Pack Fried Rice", "Feast for 8 with 8 eggs and 1L Coke",
                                new BigDecimal("5550.00"), "Family Pack",
                                "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800"));
                menuItemRepository.save(new MenuItem("4 Pack Biriyani",
                                "Authentic Biriyani for 4 with 4 eggs and 400ml Coke", new BigDecimal("2950.00"),
                                "Family Pack",
                                "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=800"));
                menuItemRepository.save(new MenuItem("8 Pack Biriyani",
                                "Authentic Biriyani for 8 with 8 eggs and 1L Coke", new BigDecimal("5550.00"),
                                "Family Pack",
                                "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=800"));

                // 9. Specials
                menuItemRepository.save(new MenuItem("Chopsy Rice", "Premium chopsy rice with rich flavors",
                                new BigDecimal("2000.00"), "Specials",
                                "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Vegetable Platter", "Assorted fresh vegetable platter",
                                new BigDecimal("1800.00"), "Specials",
                                "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800"));
                menuItemRepository.save(new MenuItem("Nasi Goreng", "Indonesian spicy fried rice served with fried egg",
                                new BigDecimal("1600.00"), "Specials",
                                "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800"));

                System.out.println("DataSeeder: COMPREHENSIVE Menu extracted and seeded!");
        }
}
