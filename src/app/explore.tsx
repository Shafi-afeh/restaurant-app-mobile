// وارد کردن React جهت ساخت کامپوننت‌های تابعی
import React from "react";
// وارد کردن کامپوننت‌های View و Text از React Native
import { View, Text } from "react-native";

/**
 * بخش ۳.۳: استایل‌دهی درون‌خطی (Inline Styling)
 * 
 * استایل درون‌خطی چیست؟
 * حالتی است که استایل‌ها را مستقیماً داخل خود پراپرتی style تگ می‌نویسیم بدون آنکه
 * یک شیء StyleSheet بسازیم.
 * 
 * چرا از دو جفت آکولاد style={{ ... }} استفاده می‌شود؟
 * ۱. آکولاد بیرونی {}: به ری‌اکت می‌گوید که قصد داریم وارد محیط جاوااسکریپت شویم.
 * ۲. آکولاد درونی {}: یک آبجکت (Object) ساده جاوااسکریپتی است که خصوصیات استایل را نگه می‌دارد.
 * 
 * چه زمان‌هایی باید از Inline Style استفاده کرد؟
 * - برای تست‌های سریع، دیباگ یا نمونه‌سازی اولیه (Prototyping).
 * - زمانی که استایل وابستگی مستقیم به متغیرهای داینامیک دارد (مانند: backgroundColor: isSelected ? 'green' : 'gray').
 * نکته: نباید برای صفحات بزرگ و پیچیده زیاده‌روی کرد چون خوانایی JSX را کاهش می‌دهد
 * و قابلیت‌های کش و بهینه‌سازی StyleSheet.create را ندارد.
 */
export default function InlineStyleExample() {
  return (
    // استایل درون‌خطی برای کانتینر اصلی
    <View
      style={{
        // اشغال ۱۰۰٪ ارتفاع و عرض صفحه
        flex: 1,
        // رنگ پس‌زمینه آبی ملایم
        backgroundColor: "#e0f2fe",
        // تراز کردن المان‌ها در مرکز محور عمودی
        justifyContent: "center",
        // تراز کردن المان‌ها در مرکز محور افقی
        alignItems: "center",
        // ایجاد فاصله داخلی ۲۰ پیکسلی
        padding: 20,
      }}
    >
      {/* استایل درون‌خطی چندخطی برای عنوان */}
      <Text
        style={{
          // اندازه قلم ۲۴ پیکسل
          fontSize: 24,
          // حالت فونت درشت و برجسته
          fontWeight: "bold",
          // رنگ متن آبی تیره
          color: "#0369a1",
          // وسط‌چین کردن متن
          textAlign: "center",
          // فاصله ۱۰ پیکسلی از زیر تا متن بعدی
          marginBottom: 10,
        }}
      >
        Quick Inline Style
      </Text>

      {/* استایل درون‌خطی تک‌خطی فشرده برای زیرنویس (توضیح مستقیم بدون StyleSheet) */}
      <Text style={{ fontSize: 16, color: "#334155", textAlign: "center" }}>
        Directly styled without StyleSheet.create()
      </Text>
    </View>
  );
}
