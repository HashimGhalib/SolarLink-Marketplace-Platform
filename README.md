# SolarLink Frontend ☀️

**SolarLink** is a specialized digital marketplace designed to bridge the gap between Nigerian residential/commercial customers and verified solar energy providers. This repository contains the frontend application, built for high performance, accessibility, and trust-driven user experiences.

---

## 🚀 Overview
The SolarLink frontend provides a seamless interface for users to:
- **Explore:** Browse a directory of verified solar companies and wholesalers.
- **Compare:** Request and compare installation quotes from multiple providers.
- **Verify:** View blockchain-backed credentials and verified customer reviews.
- **Manage:** A dedicated dashboard for both customers and solar vendors to manage leads and installations.

## 🛠 Tech Stack
- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (based on Radix UI)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) (Client state) & [TanStack Query](https://tanstack.com/query/latest) (Server state)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 📂 Project Structure
```text
solarlink-platform
├── app/              # Next.js App Router (Pages, Layouts, API Route handlers)
    ├── layout.tsx            # Global Layout (Navbar/Footer for everything)
    ├── (marketing)/          
    │   ├── page.tsx          # Home Page (/)
    │   ├── explore/
    │   │   └── page.tsx      # Explore Page (/explore)
    │   └── company/
    │       └── page.tsx      # Company Profile (/company)
    ├── (dashboard)/          
    │   └── dashboard/
    │       └── page.tsx      # User Dashboard (/dashboard)
    └── (auth)/               
        ├── login/
        │   └── page.tsx      # Login Page (/login)
        └── register/
            └── page.tsx      # Register Page (/register)

├── components/       
│   ├── ui/           # Atomic shadcn/ui components (Buttons, Inputs, etc.)
│   ├── shared/       # Common components (Navbar, Footer, SearchBar)
│   ├── modules/      # Feature-specific components (CompanyCard)
│   └── sections/     # Feature-specific sections (About, How it works, etc.)
├── hooks/            # Custom reusable React hooks
├── services/         # API integration logic (Axios/Fetch wrappers)
├── types/            # TypeScript interfaces and type definitions
├── lib/              # Utility functions and shared configurations (utils.ts)
└── assets/           # Static images, logos, and global styles
