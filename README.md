# Mobile Programming - Module 1: Basic Syntax & UI

## Project Information
- Course: Mobile Programming Laboratory
- Institution: University of Muhammadiyah Malang (Informatics Laboratory)
- Module: Module 1 - Basic Syntax & User Interface
- Project Theme: Restaurant Application (Cupertino Bistro)
- Framework: React Native with Expo Router
- Language: TypeScript

---

## 1. Project Overview
This project represents the practical implementation of Mobile Programming Module 1. It delivers a mobile application designed under modern mobile interface guidelines (Apple iOS Human Interface Guidelines), featuring an interactive restaurant menu with categorization, real-time search filtering, dynamic cart calculation, and clean separation between layout styling and business logic.

The codebase strictly adheres to the grading criteria established in the assessment section of Module 1.

---

## 2. Fulfillment of Assessment Criteria

### 2.1. Custom Function Declarations and Loops
- Function `calculateTotalCost`: Implements a traditional primitive `for` loop to iterate through the list of selected menu items and compute the aggregated order total.
- Function `filterMenuItems`: Accepts the menu array, selected category, and search query string to filter items dynamically based on compound conditional evaluation.
- Function `formatPrice`: Utility function that formats numeric amounts into two-decimal currency strings.
- JSX Iteration: Employs `.map()` loops to render the list of category selection pills and individual food menu cards.

### 2.2. Type and Array of Objects
- Union Type (`FoodCategory`): Defines a strict union type constraining category values to `"all" | "burgers" | "pizza" | "desserts" | "drinks"`.
- Interface (`MenuItem`): Defines the formal shape of restaurant menu items, featuring:
  - `readonly id: string`: Immutable unique identifier.
  - Required fields: `name: string`, `price: number`, `description: string`, `category: FoodCategory`, `rating: number`, `calories: number`, `emoji: string`.
  - Optional field: `isPopular?: boolean`.
- Array of Objects (`RESTAURANT_MENU`): A fully typed array containing structured culinary dishes conforming to the `MenuItem` interface.

### 2.3. Inline and External Styling
- External Styling (`src/app/styles.ts`): Built with `StyleSheet.create` to maintain separation of concerns. Contains structured definitions for containers, typography, card elevation, soft shadows, rounded corners, and spacing.
- Inline Styling (`src/app/index.tsx`): Strategically applied using `style={{ ... }}` for dynamic and state-dependent properties, including:
  - Active and inactive background color transitions for category filter pills.
  - Search input container layout and padding adjustments.
  - Conditional badge highlighting for popular items.

### 2.4. Core React Native Components & Packages
- Native Components: `View`, `Text`, `TextInput`, `ScrollView`, `TouchableOpacity`, `StatusBar`.
- Third-Party Packages: `@expo/vector-icons` (`Ionicons`) for navigation, search, rating indicators, and interactive button icons.

---

## 3. Codelabs Overview (Laboratory Exercises)
The repository also includes the laboratory codelab exercises completed during the module:
- Codelab 1 (Section 3.1): Basic internal styling using `StyleSheet.create`.
- Codelab 2: Core React Native components (`View`, `Text`, `TextInput`, `Button`).
- Codelab 3: Custom component styling with layout and border definitions.
- Codelab 4: Vector icons integration (`Ionicons`) and custom touchable button components.
- Codelab 5: Standalone TypeScript exercise demonstrating interfaces, conditions, array mapping, and console output (`exercise.ts`).

---

## 4. Directory Structure
```
MyApp/
├── src/
│   ├── app/
│   │   ├── _layout.tsx      # Main application layout and theme provider
│   │   ├── index.tsx        # Main Restaurant application screen
│   │   ├── styles.ts        # External styling stylesheet
│   │   └── explore.tsx      # Inline styling demonstration screen
│   ├── components/          # Reusable UI components and tab configurations
│   ├── constants/           # Color palettes and global theme constants
│   └── hooks/               # Custom hooks for theme and color schemes
├── exercise.ts              # Codelab 5 standalone TypeScript script
├── exercise.js              # Compiled JavaScript version for Node.js execution
├── package.json             # Project dependencies and script declarations
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

---

## 5. Getting Started

### Prerequisites
- Node.js (version 18 or newer recommended)
- npm or yarn
- Expo Go application on iOS or Android (optional for mobile preview)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Shafi-afeh/restaurant-app-mobile.git
   cd restaurant-app-mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Run the Codelab 5 TypeScript script independently:
   ```bash
   node exercise.js
   ```

---

## 6. Verification and Type Safety
The project passes strict TypeScript compilation with zero errors:
```bash
npx tsc --noEmit
```
All components are fully typed, clean, and ready for laboratory evaluation.
