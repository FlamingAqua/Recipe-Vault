# 🍽️ Recipe Vault

Recipe Vault is a modern, cloud-powered recipe management application that helps you create, organize, and manage your personal cookbook. Built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Firebase Firestore, it offers a clean, responsive, and elegant user experience with real-time cloud synchronization.

---

## ✨ Features

- 🍳 Create new recipes
- ✏️ Edit existing recipes
- 🗑️ Delete recipes
- ☁️ Store recipes securely in Firebase Firestore
- 🔍 Instant recipe search
- 🥗 Filter by category (Veg, Non Veg, Dessert)
- 📊 Dashboard with live recipe statistics
- ⭐ Mark favorite recipes
- 📅 Track recipe creation date
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎨 Modern and minimal UI

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Database:** Firebase Firestore
- **Storage:** Firebase Storage *(Upcoming)*
- **Animations:** Framer Motion
- **Icons:** Lucide React

---

## 📂 Project Structure

```
recipe-vault/
│
├── app/
├── components/
│   ├── common/
│   ├── dashboard/
│   ├── layout/
│   ├── recipe/
│   └── ui/
│
├── hooks/
├── lib/
├── public/
├── types/
├── firebase/
└── services/
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/recipe-vault.git
```

### Navigate to the Project

```bash
cd recipe-vault
```

### Install Dependencies

```bash
npm install
```

### Configure Firebase

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
```

### Start the Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🎯 Roadmap

- [x] Dashboard
- [x] Recipe Management
- [x] Search
- [x] Category Filters
- [x] Dashboard Statistics
- [ ] Recipe Images
- [ ] Rich Text Editor
- [ ] Export Recipes
- [ ] Import Recipes
- [ ] Offline Support
- [ ] PWA Support

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/my-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Manesh**

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Firebase Firestore.
