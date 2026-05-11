# ☀️ SolarLink Platform

<p align="center">
  A specialized digital marketplace designed to bridge the gap between Nigerian residential/commercial customers and verified solar energy providers.
</p>

---

## 🚀 Overview

The **SolarLink** frontend provides a seamless, high-performance, and trust-driven user experience. It empowers users to explore solar solutions, compare providers, and manage installations, all within a sleek, modern interface.

### Key Features
- **🌐 Explore Providers:** Browse a comprehensive directory of verified solar companies and wholesalers.
- **⚖️ Compare Quotes:** Request, receive, and compare installation quotes from multiple providers.
- **🛡️ Verify Credentials:** View blockchain-backed credentials and verified, authentic customer reviews.
- **📊 Dedicated Dashboards:** Tailored dashboard experiences for both customers and solar vendors to manage leads, track installations, and monitor performance.
- **⚡ High Performance:** Built with Next.js App Router for optimal Server-Side Rendering (SSR) and Static Site Generation (SSG).

## 🛠 Tech Stack

### Core Technologies
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Frontend Library:** [React 19](https://react.dev/)

### Styling & UI
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Utility Libraries:** 
  - `clsx` & `tailwind-merge` (Class name merging)
  - `class-variance-authority` (Variant-driven styles)

### Animation & Effects
- **Animations:** `tw-animate-css`

### Development Tools
- **Linting:** ESLint (v9)
- **PostCSS:** `@tailwindcss/postcss` (v4)

## 📂 Project Structure

```text
solarlink-platform/
├── app/                  # Next.js App Router
│   ├── (auth)/           # Authentication pages (login, register)
│   ├── (dashboard)/      # Protected dashboard layouts and pages
│   ├── (marketing)/      # Public-facing pages (home, explore, company profile)
│   └── layout.tsx        # Root layout including global Navbar & Footer
├── assets/               # Static assets, images, logos, and global styles
├── components/           # React Components
│   ├── modules/          # Feature-specific, complex components (e.g., CompanyCard)
│   ├── shared/           # Reusable layout components (Navbar, Footer, SearchBar)
│   └── ui/               # Atomic shadcn/ui components (Buttons, Inputs, Dialogs)
├── data/                 # Mock data or static data definitions
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions (e.g., cn for Tailwind)
├── services/             # API client services and integrations
└── types/                # Global TypeScript definitions and interfaces
```

## 🚦 Getting Started

### Prerequisites
- **Node.js**: `v20.0.0` or higher recommended.
- **Package Manager**: npm (default), yarn, pnpm, or bun.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HashimGhalib/SolarLink-Marketplace-Platform.git
   cd solarlink-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application will hot-reload automatically as you modify the files.

## 📜 Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Creates an optimized production build.
- `npm run start`: Starts the application in production mode (requires a successful build first).
- `npm run lint`: Runs ESLint to catch and fix code issues.

## 🎨 UI Architecture

This project leverages **shadcn/ui** for its component architecture. Components in `components/ui/` are owned by the project and can be customized heavily.
We use `Tailwind CSS v4` for all styling. Global design tokens are defined in our CSS structure, and customized components reside in `components/`.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
