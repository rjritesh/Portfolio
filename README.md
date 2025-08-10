# Ritesh Kumar Jha - Portfolio Website

A modern, space-themed portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful dark/light mode toggle, animated starfield background, and responsive design.

![Portfolio Preview](https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200)

## ✨ Features

- **🌌 Space-themed Design**: Deep space minimal aesthetic with animated starfield
- **🌓 Dark/Light Mode**: Smooth theme toggle with localStorage persistence
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **⚡ Performance Optimized**: Fast loading with smooth animations
- **♿ Accessible**: WCAG compliant with proper focus states
- **🎨 Modern UI/UX**: Beautiful animations and micro-interactions
- **📊 Project Filtering**: Filter projects by technology stack
- **📧 Contact Form**: Working contact form with validation
- **🔍 SEO Ready**: Meta tags, Open Graph, and JSON-LD schema

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + Custom CSS
- **Icons**: React Icons (Feather Icons)
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 📋 Sections

1. **Header** - Navigation with smooth scroll and mobile menu
2. **Hero** - Eye-catching introduction with animated elements
3. **About** - Personal information and background
4. **Skills** - Interactive tech stack showcase
5. **Projects** - Filterable project gallery with demos
6. **Contact** - Working contact form and social links
7. **Footer** - Simple footer with social links

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/riteshkumarjha/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors
The color scheme uses CSS custom properties defined in `tailwind.config.js`:
- **Electric Blue**: `#38bdf8` - Primary accent color
- **Cosmic Purple**: `#8b5cf6` - Secondary accent
- **Cosmic Magenta**: `#ec4899` - Tertiary accent
- **Space Gray**: Custom gray scale for dark mode

### Fonts
- **Body Text**: Inter (clean, readable sans-serif)
- **Headings**: Space Grotesk (futuristic, modern headings)

### Theme Toggle
The theme system:
- Respects `prefers-color-scheme`
- Stores preference in `localStorage`
- Smooth transitions between modes
- Accessible with proper ARIA labels

## 📸 Screenshots

### Light Mode
![Light Mode](https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800)

### Dark Mode
![Dark Mode](https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800)

### Mobile Responsive
![Mobile View](https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800)

## 🌟 Key Features Explained

### Animated Starfield
- Canvas-based particle system
- Optimized performance with `requestAnimationFrame`
- Responsive to window resizing
- Only visible in dark mode

### Project Filtering
- Filter by technology stack
- Smooth animations during filtering
- Maintains responsive layout

### Contact Form
- Form validation
- Loading states
- Success feedback
- Accessible form labels

### Performance
- Lazy loading for images
- Optimized bundle size
- Smooth scrolling
- Intersection Observer for animations

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects if needed

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Ritesh Kumar Jha
- **Email**: riteshkumarjha@example.com
- **LinkedIn**: [linkedin.com/in/riteshkumarjha](https://linkedin.com/in/riteshkumarjha)
- **GitHub**: [github.com/riteshkumarjha](https://github.com/riteshkumarjha)

## 🙏 Acknowledgments

- Images from [Pexels](https://pexels.com)
- Icons from [Feather Icons](https://feathericons.com)
- Fonts from [Google Fonts](https://fonts.google.com)
- Inspiration from modern space and technology websites

---

⭐ **Star this repository if you found it helpful!**