import { StyleSheet, Platform } from "react-native";

/**
 * =========================================================================================
 * 🎨 External Styles (استایل‌های خارجی - بخش نمره‌دهی)
 * SEARCH KEYWORD: "External Styles"
 * -----------------------------------------------------------------------------------------
 * This file contains all base layout and design rules using StyleSheet.create.
 * =========================================================================================
 */
export const styles = StyleSheet.create({
  // کانتینر اصلی صفحه با رنگ پس‌زمینه سیستم iOS
  mainContainer: {
    flex: 1,
    backgroundColor: "#F2F2F7", // رنگ پس‌زمینه استاندارد iOS Grouped
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "web" ? 75 : 16, // فاصله کافی برای وب تا زیر نوار Expo قرار نگیرد
    paddingBottom: 110, // فاصله کافی از پایین جهت عدم تداخل با بار شناور سفارش
  },

  // ---------------------------------------------------------
  // ۱. هدر اپل (Apple Large Title Navigation Bar)
  // ---------------------------------------------------------
  headerContainer: {
    marginBottom: 20,
    paddingTop: Platform.OS === "web" ? 10 : (Platform.OS === "ios" ? 16 : 24),
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  headerGreeting: {
    fontSize: 13,
    fontWeight: "600",
    color: "#8E8E93", // رنگ متن ثانویه iOS
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: "800",
    color: "#1C1C1E", // مشکی مات اپل
    letterSpacing: -0.5,
  },
  profileAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  // ---------------------------------------------------------
  // ۲. بنر کارت رستوران (Hero Card با سایه و انحنای اپل)
  // ---------------------------------------------------------
  heroCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.07,
    shadowRadius: 16,
    elevation: 4,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.04)",
  },
  heroBadgeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF2F2",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  heroBadgeText: {
    color: "#FF3B30", // قرمز معروف اپل
    fontSize: 12,
    fontWeight: "700",
    marginLeft: 4,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 14,
    color: "#8E8E93",
    lineHeight: 20,
  },

  // ---------------------------------------------------------
  // ۳. عناوین بخش‌ها (Section Titles)
  // ---------------------------------------------------------
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C1C1E",
    letterSpacing: -0.3,
  },
  sectionCountBadge: {
    backgroundColor: "#E5E5EA",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  sectionCountText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#636366",
  },

  // ---------------------------------------------------------
  // ۴. دکمه‌های فیلتر دسته‌بندی (Pill Categories)
  // ---------------------------------------------------------
  categoriesScrollView: {
    marginBottom: 22,
  },
  categoryPillBase: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  categoryPillTextBase: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
  },

  // ---------------------------------------------------------
  // ۵. کارت‌های منوی غذا (Food Menu Card)
  // ---------------------------------------------------------
  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.03)",
  },
  foodEmojiBox: {
    width: 68,
    height: 68,
    borderRadius: 16,
    backgroundColor: "#F2F2F7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  foodEmojiText: {
    fontSize: 34,
  },
  cardContent: {
    flex: 1,
  },
  cardTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  foodName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  foodDescription: {
    fontSize: 13,
    color: "#8E8E93",
    marginBottom: 8,
    lineHeight: 18,
  },
  cardFooterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FF3B30", // رنگ قرمز اپل برای قیمت
  },
  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF9E6",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 8,
    marginLeft: 8,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FF9500", // نارنجی اپل
    marginLeft: 3,
  },

  // دکمه اضافه کردن به سبد خرید
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#007AFF", // آبی اپل
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },

  // ---------------------------------------------------------
  // ۶. بار شناور پایین صفحه (Apple Floating Glass Summary Bar)
  // ---------------------------------------------------------
  floatingCartBar: {
    position: "absolute",
    bottom: 24,
    left: 20,
    right: 20,
    backgroundColor: "#1C1C1E", // تیره شیک اپل
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 8,
  },
  cartInfoCol: {
    flexDirection: "column",
  },
  cartItemsLabel: {
    fontSize: 12,
    color: "#8E8E93",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  cartTotalPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  checkoutButton: {
    backgroundColor: "#FF3B30",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
    marginRight: 6,
  },
});
