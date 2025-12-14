# 📖 Complete Setup Guide

This guide will walk you through setting up the MERN Stack Portfolio from scratch.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Backend Configuration](#backend-configuration)
4. [Frontend Configuration](#frontend-configuration)
5. [Database Setup](#database-setup)
6. [Running the Application](#running-the-application)
7. [Adding Your Content](#adding-your-content)
8. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Software

1. **Node.js and npm**
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation:
     ```bash
     node --version  # Should be v14 or higher
     npm --version   # Should be 6 or higher
     ```

2. **MongoDB**
   
   Choose one of these options:
   
   **Option A: Local MongoDB**
   - Download from [mongodb.com](https://www.mongodb.com/try/download/community)
   - Install and start MongoDB service
   - Default connection: `mongodb://localhost:27017`

   **Option B: MongoDB Atlas (Recommended for beginners)**
   - Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster (Free tier available)
   - Get connection string

3. **Git**
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify: `git --version`

4. **Code Editor**
   - VS Code (recommended) from [code.visualstudio.com](https://code.visualstudio.com/)

## Initial Setup

### 1. Download the Project

```bash
# Clone the repository
git clone https://github.com/yourusername/mern-portfolio.git

# Navigate to project folder
cd mern-portfolio
```

Or download as ZIP and extract.

### 2. Project Structure Overview

```
mern-portfolio/
├── backend/     # Express server & API
├── frontend/    # React application
└── README.md
```

## Backend Configuration

### Step 1: Install Dependencies

```bash
# Navigate to backend folder
cd backend

# Install all packages
npm install
```

This installs:
- express
- mongoose
- cors
- dotenv
- nodemon

### Step 2: Create Environment File

Create a file named `.env` in the `backend` folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

**For MongoDB Atlas:**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
NODE_ENV=development
```

Replace `username`, `password`, and cluster URL with your actual credentials.

### Step 3: Test Backend

```bash
# Start the server
npm run dev
```

You should see:
```
✅ MongoDB Connected: localhost
🚀 Server running in development mode on port 5000
```

### Step 4: Seed Sample Data

```bash
# In backend folder
npm run seed
```

This adds sample:
- Projects (6 examples)
- Skills (25+ skills)
- Experience (3 positions)

## Frontend Configuration

### Step 1: Install Dependencies

Open a **new terminal** (keep backend running):

```bash
# Navigate to frontend folder
cd frontend

# Install all packages
npm install
```

This installs:
- react
- react-dom
- vite
- tailwindcss
- framer-motion
- axios
- react-icons
- react-scroll

### Step 2: Verify Configuration

The following files should already be configured:
- ✅ `vite.config.js` - Vite configuration with proxy
- ✅ `tailwind.config.js` - Tailwind CSS settings
- ✅ `postcss.config.js` - PostCSS configuration

### Step 3: Start Frontend

```bash
# In frontend folder
npm run dev
```

You should see:
```
VITE v5.0.x ready in xxx ms

➜  Local:   http://localhost:3000/
```

## Database Setup

### MongoDB Atlas Setup (Detailed)

1. **Create Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free

2. **Create Cluster**
   - Choose "Build a Database"
   - Select "Free" tier (M0)
   - Choose your preferred cloud provider and region
   - Click "Create Cluster"

3. **Configure Access**
   
   **Database User:**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Username: `portfoliouser`
   - Password: Generate secure password
   - User Privileges: "Read and write to any database"
   - Click "Add User"

   **Network Access:**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Or add your specific IP address
   - Click "Confirm"

4. **Get Connection String**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your actual password
   - Replace `<dbname>` with `portfolio`

5. **Update .env**
   ```env
   MONGODB_URI=mongodb+srv://portfoliouser:yourpassword@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

## Running the Application

### Development Mode

You need **TWO terminals**:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Access the Application

Open browser and go to:
```
http://localhost:3000
```

You should see your portfolio with:
- ✅ Hero section with animations
- ✅ About section
- ✅ Skills with progress bars
- ✅ Sample projects
- ✅ Experience timeline
- ✅ Contact form

## Adding Your Content

### Method 1: Using API (Postman/Thunder Client)

**Add a Project:**
```http
POST http://localhost:5000/api/projects
Content-Type: application/json

{
  "title": "My Awesome Project",
  "description": "Description of the project",
  "technologies": ["React", "Node.js", "MongoDB"],
  "image": "https://example.com/image.jpg",
  "githubLink": "https://github.com/yourusername/project",
  "liveLink": "https://project-demo.com",
  "featured": true
}
```

**Add a Skill:**
```http
POST http://localhost:5000/api/skills
Content-Type: application/json

{
  "name": "React",
  "category": "Frontend",
  "level": 90
}
```

### Method 2: Modify Seed File

Edit `backend/seed.js` and add your data, then run:
```bash
npm run seed
```

### Method 3: Direct Database (MongoDB Compass)

1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect using your connection string
3. Navigate to `portfolio` database
4. Add documents manually

## Customization Checklist

### Personal Information

- [ ] Update name in `Hero.jsx`
- [ ] Change profile photo URL in `Hero.jsx`
- [ ] Update social links (GitHub, LinkedIn, Email)
- [ ] Modify about description in `About.jsx`
- [ ] Update stats (years, projects, clients)
- [ ] Add your education in `Education.jsx`
- [ ] Update contact information in `Contact.jsx`
- [ ] Change footer details in `Footer.jsx`

### Content

- [ ] Add your projects via API or seed file
- [ ] Add your skills via API or seed file
- [ ] Add your work experience via API or seed file
- [ ] Replace placeholder images with actual images

### Styling (Optional)

- [ ] Change primary color in `tailwind.config.js`
- [ ] Modify fonts if needed
- [ ] Adjust spacing and layout

## Troubleshooting

### Issue: "Cannot connect to MongoDB"

**Solution:**
1. Check if MongoDB is running (local setup)
2. Verify connection string in `.env`
3. For Atlas: Check Network Access whitelist
4. Check database user credentials

### Issue: "Port 5000 already in use"

**Solution:**
```bash
# Change port in backend/.env
PORT=5001
```

### Issue: "Module not found"

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue: "CORS error"

**Solution:**
- Verify proxy in `frontend/vite.config.js`
- Check backend CORS configuration in `server.js`

### Issue: "Frontend not connecting to backend"

**Solution:**
1. Ensure backend is running on port 5000
2. Check console for errors
3. Verify API URLs in frontend components
4. Check proxy configuration in Vite

### Issue: "Styles not loading"

**Solution:**
```bash
# In frontend folder
npm run dev
```

Ensure Tailwind is properly configured.

## Next Steps

### Add More Features

1. **Admin Dashboard**
   - Add authentication
   - CRUD interface for content

2. **Blog Section**
   - Create blog post model
   - Add blog components

3. **Testimonials**
   - Add testimonial model
   - Create testimonial slider

4. **Analytics**
   - Integrate Google Analytics
   - Track visitor stats

### Deployment

See main README.md for deployment instructions.

## Getting Help

If you encounter issues:

1. Check the error message carefully
2. Search in the troubleshooting section above
3. Check browser console (F12)
4. Check terminal output
5. Create an issue on GitHub
6. Contact via email or social media

## Useful Commands

### Backend
```bash
npm install           # Install dependencies
npm run dev          # Start development server
npm start            # Start production server
npm run seed         # Seed database
```

### Frontend
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### MongoDB
```bash
# Local MongoDB
mongod               # Start MongoDB
mongo                # Open MongoDB shell
```

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Need more help?** Contact me at your.email@example.com

