This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
recipe-vault
├─ .agents
├─ .firebaserc
├─ AGENTS.md
├─ app
│  ├─ create
│  │  ├─ error.tsx
│  │  ├─ loading.tsx
│  │  └─ page.tsx
│  ├─ edit
│  │  └─ [id]
│  │     ├─ error.tsx
│  │     ├─ loading.tsx
│  │     ├─ not-found.tsx
│  │     └─ page.tsx
│  ├─ error.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ loading.tsx
│  ├─ manifest.ts
│  ├─ not-found.tsx
│  ├─ page.tsx
│  ├─ recipe
│  │  └─ [id]
│  │     ├─ loading.tsx
│  │     ├─ not-found.tsx
│  │     └─ page.tsx
│  ├─ robots.ts
│  └─ sitemap.ts
├─ CLAUDE.md
├─ components
│  ├─ auth
│  │  └─ GoogleLoginButton.tsx
│  ├─ common
│  │  ├─ BackButton.tsx
│  │  ├─ ConfirmDialog.tsx
│  │  ├─ DeleteRecipeDialog.tsx
│  │  ├─ EmptyState.tsx
│  │  ├─ FloatingBackground.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Loading.tsx
│  │  ├─ PageContainer.tsx
│  │  ├─ PageTransition.tsx
│  │  ├─ ScrollToTop.tsx
│  │  ├─ SectionTitle.tsx
│  │  └─ ThemeToggle.tsx
│  ├─ dashboard
│  │  ├─ CategoryFilter.tsx
│  │  ├─ DashboardActions.tsx
│  │  ├─ DashboardHeader.tsx
│  │  ├─ DashboardHero.tsx
│  │  ├─ DashboardLayout.tsx
│  │  ├─ DashboardStats.tsx
│  │  ├─ DiscoveryRail.tsx
│  │  ├─ EmptyState.tsx
│  │  ├─ QuickActions.tsx
│  │  ├─ RecentRecipes.tsx
│  │  ├─ RecipeAnalytics.tsx
│  │  ├─ RecipeInsights.tsx
│  │  ├─ RecipeOfTheDay.tsx
│  │  ├─ RecipeStats.tsx
│  │  ├─ SearchBar.tsx
│  │  ├─ SortDropdown.tsx
│  │  └─ TopCategories.tsx
│  ├─ dropdown-menu.tsx
│  ├─ layout
│  │  └─ Navbar.tsx
│  ├─ providers
│  │  └─ ThemeProvider.tsx
│  ├─ recipe
│  │  ├─ DeleteRecipeButton.tsx
│  │  ├─ FavoriteButton.tsx
│  │  ├─ ImageLightbox.tsx
│  │  ├─ ImageUpload.tsx
│  │  ├─ RecipeActions.tsx
│  │  ├─ RecipeCard.tsx
│  │  ├─ RecipeForm.tsx
│  │  ├─ RecipeGrid.tsx
│  │  ├─ RecipeGridSkeleton.tsx
│  │  ├─ RecipeHeader.tsx
│  │  └─ RecipeSkeleton.tsx
│  ├─ select.tsx
│  ├─ separator.tsx
│  ├─ sheet.tsx
│  └─ ui
│     ├─ alert-dialog.tsx
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ dialog.tsx
│     ├─ input.tsx
│     ├─ sonner.tsx
│     └─ textarea.tsx
├─ components.json
├─ config
│  ├─ app.ts
│  ├─ categories.ts
│  ├─ firestore.ts
│  ├─ navigation.ts
│  └─ theme.ts
├─ context
│  └─ AuthContext.tsx
├─ eslint.config.mjs
├─ firebase.json
├─ firestore.indexes.json
├─ firestore.rules
├─ hooks
│  ├─ useRecentlyViewed.ts
│  ├─ useRecipe.ts
│  └─ useRecipes.ts
├─ lib
│  ├─ auth.ts
│  ├─ constants.ts
│  ├─ firebase.ts
│  ├─ firestore.ts
│  ├─ storage.ts
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ services
│  ├─ recipe.service.ts
│  └─ storage.service.ts
├─ storage.rules
├─ structure.txt
├─ tsconfig.json
└─ types
   └─ recipe.ts

```