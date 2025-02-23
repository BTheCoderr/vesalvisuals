# Vesal Visuals 📸

A professional photography and visual content creation portfolio website showcasing premium photography services, visual content creation, and bundled packages.

## 🎯 About

Vesal Visuals is a premium photography and visual content creation service based in [Your Location]. We specialize in:

- 📸 Professional Photography (Events, Lifestyle, Portraits, Studio, Sports)
- 🎥 Visual Content Creation (Reels, Recaps, Vlogs, Short-term Content)
- ✨ Premium Bundled Services

## 🛠️ Tech Stack

- **Framework:** [Next.js 13](https://nextjs.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Deployment:** [Netlify](https://www.netlify.com/)
- **Email Service:** Nodemailer with Gmail SMTP
- **Fonts:** Playfair Display, Inter

## 🚀 Features

- Responsive design optimized for all devices
- Modern, clean UI with smooth animations
- Contact form with email integration
- Service showcase with dynamic image galleries
- Smooth scrolling navigation
- SEO optimized

## 📦 Project Structure

```
vesal-visuals/
├── app/
│   ├── components/
│   │   ├── ContactForm.tsx   # Contact form with email integration
│   │   ├── Header.tsx        # Navigation header
│   │   └── ServiceCard.tsx   # Service showcase component
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Email handling API route
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   └── page.tsx              # Home page
├── public/
│   └── logo.svg
└── package.json
```

## 🎨 Color Scheme

```css
Navy: #1B2B4B    /* Primary text and buttons */
Cream: #F5F5F5   /* Background */
Accent: #2A9D8F  /* Highlights and CTAs */
```

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vesal-visuals.git
   ```

2. Install dependencies:
   ```bash
   cd vesal-visuals
   npm install
   ```

3. Create a `.env.local` file:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## 📞 Contact

For inquiries and bookings:
- 📧 Email: vesalvisuals@gmail.com
- 📸 Instagram: [@vesalvisuals](https://instagram.com/vesalvisuals)
- 🎥 YouTube: [@Vesal.Visuals](https://youtube.com/@Vesal.Visuals)

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by [Your Name]
