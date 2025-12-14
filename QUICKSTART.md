# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## 🚀 Installation (3 steps)

### 1️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

Seed database with sample data:
```bash
npm run seed
```

Start backend:
```bash
npm run dev
```

✅ Backend running at `http://localhost:5000`

---

### 2️⃣ Frontend Setup

Open **new terminal**:

```bash
cd frontend
npm install
npm run dev
```

✅ Frontend running at `http://localhost:3000`

---

### 3️⃣ Open in Browser

Navigate to: **http://localhost:3000**

🎉 **Done!** Your portfolio is live!

---

## 📝 Customize Your Portfolio

### Update Personal Info (5 minutes)

1. **Hero Section** - `frontend/src/components/Hero.jsx`
   ```jsx
   // Line 52: Change your name
   <h1>Your Name</h1>
   
   // Line 60: Change your title
   <p>Your Professional Title</p>
   
   // Line 67: Update your bio
   <p>Your description here...</p>
   
   // Line 40: Update profile image
   src="your-image-url-here"
   
   // Line 77-95: Update social links
   href="https://github.com/yourusername"
   href="https://linkedin.com/in/yourusername"
   href="mailto:your.email@example.com"
   ```

2. **About Section** - `frontend/src/components/About.jsx`
   ```jsx
   // Line 72: Update about text
   // Line 77: Update second paragraph
   // Line 84-94: Update stats
   ```

3. **Contact Info** - `frontend/src/components/Contact.jsx`
   ```jsx
   // Line 43-57: Update email, phone, location
   ```

4. **Footer** - `frontend/src/components/Footer.jsx`
   ```jsx
   // Line 18-20: Update social links
   // Line 58: Update your name
   ```

---

## 🎨 Add Your Content

### Add a Project via API

Use Postman, Thunder Client, or curl:

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Project",
    "description": "Project description",
    "technologies": ["React", "Node.js", "MongoDB"],
    "image": "https://example.com/image.jpg",
    "githubLink": "https://github.com/yourusername/project",
    "liveLink": "https://project.com",
    "featured": true
  }'
```

### Add Skills

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "name": "React",
    "category": "Frontend",
    "level": 90
  }'
```

Categories: `Frontend`, `Backend`, `Database`, `Tools`, `Other`

### Add Experience

```bash
curl -X POST http://localhost:5000/api/experience \
  -H "Content-Type: application/json" \
  -d '{
    "company": "Company Name",
    "position": "Your Position",
    "duration": "Jan 2023 - Present",
    "description": "Job description",
    "responsibilities": ["Task 1", "Task 2"],
    "location": "Location"
  }'
```

---

## 🎨 Change Colors

Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Change to your color
    600: '#0284c7',  // Darker shade
    700: '#0369a1',  // Even darker
  },
}
```

Pick colors from [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)

---

## 🐛 Common Issues

### ❌ Cannot connect to MongoDB

**Local MongoDB:**
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**Or use MongoDB Atlas** (Free cloud database):
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster
3. Get connection string
4. Update `.env`:
```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
```

### ❌ Port already in use

Change port in `backend/.env`:
```env
PORT=5001
```

### ❌ Styles not showing

```bash
cd frontend
npm install
npm run dev
```

---

## 📦 Project Structure

```
mern-portfolio/
├── backend/              # Express API
│   ├── config/          # DB config
│   ├── controllers/     # Business logic
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── server.js        # Main server
│   └── seed.js          # Sample data
│
├── frontend/            # React app
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── App.jsx      # Main app
│   │   └── index.css    # Styles
│   └── vite.config.js
│
└── README.md
```

---

## 🔥 Pro Tips

1. **Use sample data** - Run `npm run seed` to populate database
2. **Keep both terminals open** - Backend + Frontend
3. **Save often** - Changes auto-reload
4. **Check console** - Press F12 in browser for errors
5. **Test API** - Use `http://localhost:5000/api/health`

---

## 📚 Next Steps

- [ ] Customize all personal information
- [ ] Add your real projects
- [ ] Add your skills and experience
- [ ] Replace sample images
- [ ] Change color scheme
- [ ] Deploy to production

---

## 🚀 Deployment

### Vercel (Frontend)
```bash
cd frontend
npm run build
# Upload to Vercel
```

### Railway/Heroku (Backend)
- Connect GitHub repo
- Set environment variables
- Deploy

---

## 💡 Need Help?

- 📖 Full setup guide: `SETUP_GUIDE.md`
- 📝 Documentation: `README.md`
- 🐛 Issues: GitHub Issues
- 📧 Email: your.email@example.com

---

**Happy Coding! 🎉**

