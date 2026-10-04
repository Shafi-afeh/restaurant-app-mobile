import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

/**
 * =========================================================================================
 * 🔴 External Styles (فراخوانی استایل خارجی)
 * SEARCH KEYWORD: "External Styles"
 * -----------------------------------------------------------------------------------------
 * This imports the external styles defined in the separate file styles.ts:
 * import { styles } from "./styles";
 * =========================================================================================
 */
import { styles } from "./styles";

/**
 * =========================================================================================
 * 🔴 Type & Array of Objects (تایپ‌ها، اینترفیس و آرایه اشیاء)
 * SEARCH KEYWORD: "Type & Array of Objects"
 * -----------------------------------------------------------------------------------------
 * 1. Type: Union type for categories (FoodCategory)
 * 2. Interface: Structure with required, optional (?), and readonly fields (MenuItem)
 * 3. Array of Objects: Typed list of restaurant dishes (RESTAURANT_MENU: MenuItem[])
 * =========================================================================================
 */

// 1. Type Declaration (Union Type)
export type FoodCategory = "all" | "burgers" | "pizza" | "desserts" | "drinks";

// 2. Interface Declaration (Object Structure with required, optional ?, and readonly fields)
export interface MenuItem {
  readonly id: string;       // Immutable unique ID
  name: string;              // Food dish name
  price: number;             // Numeric price
  description: string;       // Food description
  category: FoodCategory;    // Category using the FoodCategory Type above
  rating: number;            // Rating out of 5
  calories: number;          // Calories count
  emoji: string;             // Display emoji
  isPopular?: boolean;       // Optional boolean property
}

// 3. Array of Objects (Typed with MenuItem[])
const RESTAURANT_MENU: MenuItem[] = [
  {
    id: "m1",
    name: "Truffle Smash Burger",
    price: 14.99,
    description: "Double Angus beef, black truffle aioli, aged cheddar & brioche bun.",
    category: "burgers",
    rating: 4.9,
    calories: 680,
    emoji: "🍔",
    isPopular: true,
  },
  {
    id: "m2",
    name: "Classic Smokehouse BBQ",
    price: 12.5,
    description: "Smoked brisket, crispy onion rings, BBQ drizzle on sesame bun.",
    category: "burgers",
    rating: 4.7,
    calories: 720,
    emoji: "🍔",
  },
  {
    id: "m3",
    name: "Margherita di Bufala",
    price: 16.0,
    description: "San Marzano tomatoes, fresh buffalo mozzarella & organic basil.",
    category: "pizza",
    rating: 4.8,
    calories: 550,
    emoji: "🍕",
    isPopular: true,
  },
  {
    id: "m4",
    name: "Diavola Spicy Salami",
    price: 17.5,
    description: "Spicy calabrian salami, chili oil, mozzarella & roasted garlic.",
    category: "pizza",
    rating: 4.6,
    calories: 640,
    emoji: "🍕",
  },
  {
    id: "m5",
    name: "Classic Italian Tiramisu",
    price: 8.5,
    description: "Espresso-soaked ladyfingers with rich mascarpone and cocoa powder.",
    category: "desserts",
    rating: 4.9,
    calories: 380,
    emoji: "🍰",
    isPopular: true,
  },
  {
    id: "m6",
    name: "Molten Lava Cake",
    price: 9.0,
    description: "Warm dark chocolate ganache center served with Madagascar vanilla.",
    category: "desserts",
    rating: 4.8,
    calories: 450,
    emoji: "🍫",
  },
  {
    id: "m7",
    name: "Cold Brew Tonic & Lime",
    price: 5.5,
    description: "Single-origin Ethiopian cold brew with artisanal sparkling tonic.",
    category: "drinks",
    rating: 4.7,
    calories: 45,
    emoji: "🥤",
  },
  {
    id: "m8",
    name: "Matcha Cloud Latte",
    price: 6.0,
    description: "Ceremonial grade Uji matcha with steamed oat milk & cloud foam.",
    category: "drinks",
    rating: 4.9,
    calories: 120,
    emoji: "🍵",
    isPopular: true,
  },
];

/**
 * Categories Array for Filter Pills
 */
const CATEGORIES: { key: FoodCategory; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { key: "all", label: "All Items", icon: "restaurant-outline" },
  { key: "burgers", label: "Burgers", icon: "fast-food-outline" },
  { key: "pizza", label: "Pizzas", icon: "pizza-outline" },
  { key: "desserts", label: "Desserts", icon: "ice-cream-outline" },
  { key: "drinks", label: "Drinks", icon: "cafe-outline" },
];

/**
 * =========================================================================================
 * 🔴 Custom Function Declaration & Loops (توابع سفارشی و حلقه‌ها)
 * SEARCH KEYWORD: "Custom Function Declaration & Loops"
 * -----------------------------------------------------------------------------------------
 * 1. Custom Function with Loop: calculateTotalCost() uses a traditional for loop
 * 2. Custom Function: filterMenuItems() filters items by category and search keyword
 * 3. Custom Function: formatPrice() formats numbers to currency strings
 * 4. Loops in JSX: .map() loops are used below to render categories and menu cards
 * =========================================================================================
 */

// Custom Function 1: Calculates total cost using a traditional "for loop" (Primitive Loop)
function calculateTotalCost(items: MenuItem[]): number {
  let total = 0;
  // Traditional for loop outside JSX
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

// Custom Function 2: Filters menu items by category and search query
function filterMenuItems(
  items: MenuItem[],
  category: FoodCategory,
  searchQuery: string
): MenuItem[] {
  return items.filter((item) => {
    const matchesCategory = category === "all" || item.category === category;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

// Custom Function 3: Formats numeric amount to currency string
function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

/**
 * =========================================================================================
 * Main Component: RestaurantApp
 * Designed with Apple iOS Human Interface Guidelines (Clean, Cards, Soft Shadows)
 * =========================================================================================
 */
export default function RestaurantApp() {
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);

  // Calling Custom Function 2
  const displayedItems = filterMenuItems(RESTAURANT_MENU, selectedCategory, searchQuery);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => [...prev, item]);
    Alert.alert("Added to Bag 🛍️", `${item.name} has been added to your order.`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert("Bag is Empty", "Please add at least one delicious dish to order!");
      return;
    }
    // Calling Custom Function 1 (which runs the for loop)
    const totalAmount = calculateTotalCost(cartItems);
    Alert.alert(
      "Order Placed! 🎉",
      `Thank you! Your ${cartItems.length} items totaling ${formatPrice(
        totalAmount
      )} are being prepared by our chef.`,
      [{ text: "OK", onPress: () => setCartItems([]) }]
    );
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* -------------------------------------------------------------
            1. Header Section
            ------------------------------------------------------------- */}
        <View style={styles.headerContainer}>
          <View style={styles.headerTopRow}>
            <View>
              <Text style={styles.headerGreeting}>Cupertino Bistro</Text>
              <Text style={styles.headerTitle}>Gourmet Menu</Text>
            </View>
            <View style={styles.profileAvatar}>
              <Ionicons name="person" size={20} color="#007AFF" />
            </View>
          </View>

          {/**
           * ===============================================================================
           * 🔴 Inline Styles (استایل‌های اینلاین - بخش ۱)
           * SEARCH KEYWORD: "Inline Styles"
           * -------------------------------------------------------------------------------
           * In this search box, style={{ ... }} is written directly as an Inline Style
           * ===============================================================================
           */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#E5E5EA",
              borderRadius: 14,
              paddingHorizontal: 12,
              paddingVertical: 10,
              marginTop: 12,
            }}
          >
            <Ionicons name="search" size={18} color="#8E8E93" style={{ marginRight: 8 }} />
            <TextInput
              placeholder="Search burgers, pizzas, desserts..."
              placeholderTextColor="#8E8E93"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={{
                flex: 1,
                fontSize: 15,
                color: "#1C1C1E",
                padding: 0,
              }}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <Ionicons name="close-circle" size={18} color="#8E8E93" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* -------------------------------------------------------------
            2. Hero Card Section
            ------------------------------------------------------------- */}
        <View style={styles.heroCard}>
          <View style={styles.heroBadgeRow}>
            <View style={styles.heroBadge}>
              <Ionicons name="flame" size={14} color="#FF3B30" />
              <Text style={styles.heroBadgeText}>CHEF'S SPECIALS</Text>
            </View>
          </View>
          <Text style={styles.heroTitle}>Artisanal & Handcrafted 🍕</Text>
          <Text style={styles.heroSubtitle}>
            Fresh farm-to-table ingredients prepared with Italian culinary passion.
          </Text>
        </View>

        {/* -------------------------------------------------------------
            3. Categories Section
            ------------------------------------------------------------- */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Categories</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScrollView}
        >
          {/**
           * ===============================================================================
           * 🔴 Custom Function Declaration & Loops (حلقه دسته‌بندی‌ها)
           * 🔴 Inline Styles (استایل‌های اینلاین شرطی - بخش ۲)
           * SEARCH KEYWORDS: "Loops" | "Inline Styles"
           * -------------------------------------------------------------------------------
           * 1. Loop: CATEGORIES.map() loops through category pills
           * 2. Inline Style: Changes backgroundColor and borderColor dynamically:
           *    style={[styles.categoryPillBase, { backgroundColor: isSelected ? "#FF3B30" : "#FFFFFF" }]}
           * ===============================================================================
           */}
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <TouchableOpacity
                key={cat.key}
                onPress={() => setSelectedCategory(cat.key)}
                activeOpacity={0.7}
                style={[
                  styles.categoryPillBase, // External Style from styles.ts
                  {
                    // Dynamic Inline Style
                    backgroundColor: isSelected ? "#FF3B30" : "#FFFFFF",
                    borderColor: isSelected ? "#FF3B30" : "transparent",
                    borderWidth: 1,
                  },
                ]}
              >
                <Ionicons
                  name={cat.icon}
                  size={16}
                  color={isSelected ? "#FFFFFF" : "#1C1C1E"}
                />
                <Text
                  style={[
                    styles.categoryPillTextBase,
                    { color: isSelected ? "#FFFFFF" : "#1C1C1E" },
                  ]}
                >
                  {cat.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* -------------------------------------------------------------
            4. Menu Items List
            ------------------------------------------------------------- */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Available Dishes</Text>
          <View style={styles.sectionCountBadge}>
            <Text style={styles.sectionCountText}>{displayedItems.length} items</Text>
          </View>
        </View>

        {displayedItems.length === 0 ? (
          <View
            style={{
              padding: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              marginTop: 10,
            }}
          >
            <Ionicons name="search-outline" size={48} color="#C7C7CC" />
            <Text style={{ marginTop: 12, fontSize: 16, color: "#8E8E93", fontWeight: "600" }}>
              No dishes found matching your search.
            </Text>
          </View>
        ) : (
          /**
           * ===============================================================================
           * 🔴 Custom Function Declaration & Loops (حلقه رندر کارت‌های غذا)
           * SEARCH KEYWORD: "Loops"
           * -------------------------------------------------------------------------------
           * Loop: displayedItems.map() loops through Array of Objects to render each card
           * ===============================================================================
           */
          displayedItems.map((item) => (
            <View key={item.id} style={styles.menuCard}>
              <View style={styles.foodEmojiBox}>
                <Text style={styles.foodEmojiText}>{item.emoji}</Text>
              </View>

              <View style={styles.cardContent}>
                <View style={styles.cardTitleRow}>
                  <Text style={styles.foodName}>{item.name}</Text>
                  {item.isPopular && (
                    <View
                      style={{
                        backgroundColor: "#FFF0F0",
                        paddingHorizontal: 8,
                        paddingVertical: 2,
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: "#FFE0E0",
                      }}
                    >
                      <Text style={{ color: "#FF3B30", fontSize: 10, fontWeight: "700" }}>
                        POPULAR
                      </Text>
                    </View>
                  )}
                </View>

                <Text style={styles.foodDescription} numberOfLines={2}>
                  {item.description}
                </Text>

                <View style={styles.cardFooterRow}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.priceText}>{formatPrice(item.price)}</Text>
                    <View style={styles.ratingBadge}>
                      <Ionicons name="star" size={11} color="#FF9500" />
                      <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => handleAddToCart(item)}
                    activeOpacity={0.7}
                  >
                    <Ionicons name="add" size={22} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      {/* -------------------------------------------------------------
          5. Apple Floating Cart Summary Bar
          ------------------------------------------------------------- */}
      {cartItems.length > 0 && (
        <View style={styles.floatingCartBar}>
          <View style={styles.cartInfoCol}>
            <Text style={styles.cartItemsLabel}>
              {cartItems.length} {cartItems.length === 1 ? "Dish" : "Dishes"} Selected
            </Text>
            {/* Calling calculateTotalCost (Custom Function with for loop) */}
            <Text style={styles.cartTotalPrice}>
              {formatPrice(calculateTotalCost(cartItems))}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={handleCheckout}
            activeOpacity={0.8}
          >
            <Text style={styles.checkoutButtonText}>Order Now</Text>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}