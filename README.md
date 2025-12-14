# 🌟 MERN Stack Professional Portfolio

A beautiful, responsive, and professional portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled with Tailwind CSS.

![Portfolio Preview](https://via.placeholder.com/1200x600/0ea5e9/ffffff?text=Professional+Portfolio)

## ✨ Features

### 🎨 **Modern UI/UX**
- Beautiful gradient hero section with animations
- Smooth scrolling navigation
- Responsive design for all devices
- Professional color scheme and typography
- Framer Motion animations for engaging user experience

### 📊 **Dynamic Content**
- Projects section with filtering
- Skills showcase with progress bars
- Work experience timeline
- Education and certifications
- Contact form with backend integration

### 🚀 **Technical Features**
- RESTful API architecture
- MongoDB database integration
- React hooks and context
- Tailwind CSS for styling
- Axios for HTTP requests
- Form validation
- Responsive navigation

## 🛠️ Tech Stack

### Frontend
- **React** (v18.2) - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Cors** - Cross-origin resource sharing
- **Dotenv** - Environment variables

## 📁 Project Structure

```
mern-portfolio/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── projectController.js  # Project business logic
│   │   ├── experienceController.js
│   │   └── contactController.js
│   ├── models/
│   │   ├── Project.js            # Project schema
│   │   ├── Experience.js
│   │   ├── Skill.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── projectRoutes.js      # Project API routes
│   │   ├── experienceRoutes.js
│   │   ├── skillRoutes.js
│   │   └── contactRoutes.js
│   ├── .env                      # Environment variables
│   ├── server.js                 # Main server file
│   ├── seed.js                   # Sample data seeder
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Navigation component
│   │   │   ├── Hero.jsx          # Hero section
│   │   │   ├── About.jsx         # About section
│   │   │   ├── Skills.jsx        # Skills showcase
│   │   │   ├── Projects.jsx      # Projects portfolio
│   │   │   ├── Experience.jsx    # Work experience
│   │   │   ├── Education.jsx     # Education section
│   │   │   ├── Contact.jsx       # Contact form
│   │   │   └── Footer.jsx        # Footer
│   │   ├── App.jsx               # Main app component
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mern-portfolio.git
   cd mern-portfolio
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

   For MongoDB Atlas, use:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

4. **Seed the Database** (Optional - adds sample data)
   ```bash
   npm run seed
   ```

5. **Start the Backend Server**
   ```bash
   npm run dev
   ```
   Server will run on `http://localhost:5000`

6. **Frontend Setup** (Open a new terminal)
   ```bash
   cd frontend
   npm install
   ```

7. **Start the Frontend**
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:3000`

8. **Access the Application**
   
   Open your browser and navigate to `http://localhost:3000`

## 📝 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/category/:category` - Get skills by category
- `POST /api/skills` - Create new skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Experience
- `GET /api/experience` - Get all experiences
- `GET /api/experience/:id` - Get single experience
- `POST /api/experience` - Create new experience
- `PUT /api/experience/:id` - Update experience
- `DELETE /api/experience/:id` - Delete experience

### Contact
- `GET /api/contact` - Get all messages
- `POST /api/contact` - Send new message
- `PATCH /api/contact/:id/read` - Mark message as read
- `DELETE /api/contact/:id` - Delete message

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `frontend/src/components/Hero.jsx`
   - Change name, title, description
   - Update profile image
   - Modify social links

2. **About Section** - Edit `frontend/src/components/About.jsx`
   - Update bio and description
   - Change stats (years, projects, clients)

3. **Education** - Edit `frontend/src/components/Education.jsx`
   - Add your degrees and certifications

4. **Footer** - Edit `frontend/src/components/Footer.jsx`
   - Update social links and contact info

### Add Your Data

Use the seed script or API endpoints to add your:
- Projects
- Skills
- Work Experience

### Change Colors

Edit `frontend/tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Change this
    600: '#0284c7',  // And this
    // ...
  }
}
```

## 🚀 Deployment

### Backend Deployment (Heroku/Railway)

1. Create account on Heroku or Railway
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

### Frontend Deployment (Vercel/Netlify)

1. Create account on Vercel or Netlify
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable for API URL
6. Deploy

### MongoDB Atlas (Production Database)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `.env` with production MongoDB URI

## 📱 Features Breakdown

### ✅ Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Hamburger menu for mobile

### ✅ Performance
- Lazy loading images
- Code splitting
- Optimized animations
- Fast load times

### ✅ SEO Ready
- Meta tags configured
- Semantic HTML
- Proper heading structure

### ✅ Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader friendly

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourusername](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Unsplash](https://unsplash.com/) for images
- [React Icons](https://react-icons.github.io/react-icons/)

## 📞 Support

If you have any questions or need help, please open an issue or contact me directly.

---

⭐ **If you like this project, please give it a star!** ⭐

