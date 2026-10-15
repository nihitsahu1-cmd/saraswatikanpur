# Saraswati Vidya Niketan

Official website for Saraswati Vidya Niketan Inter College - A premier educational institution.

## Tech Stack

### Frontend Framework
- **React** - UI library for building user interfaces
- **Vite** - Build tool and development server

### Styling
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **PostCSS** - CSS transformation tool

### Routing
- **React Router DOM** - Client-side routing for navigation

### Animations
- **Framer Motion** - Production-ready motion library for React

### Icons
- **Lucide React** - Beautiful & consistent icon toolkit

### Forms
- Custom form components for Admissions, Contact, and Hostel inquiries

## Project Structure

```
website/
├── public/
│   ├── images/              # Static images (hero, campus, facilities, etc.)
│   └── icons.svg            # SVG icons
├── src/
│   ├── assets/
│   │   └── Images/          # Additional image assets
│   ├── components/
│   │   ├── common/          # Reusable components (Button, SectionHeading, WhatsAppButton)
│   │   ├── forms/           # Form components (AdmissionForm, ContactForm, HostelForm)
│   │   ├── hero/            # Hero section component
│   │   ├── layout/          # Layout components (Navbar, TopStrip, Footer, PageContainer)
│   │   └── sections/        # Page sections (About, Academics, Facilities, etc.)
│   ├── data/                # Data files (schoolData, navigationData, galleryData, etc.)
│   ├── lib/                 # Utility functions
│   ├── pages/               # Page components (Home, About, Academics, etc.)
│   ├── services/            # External services (whatsappService)
│   ├── App.jsx              # Main App component
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Vaishnotiwari12/Saraswati_Vidya_Niketan.git
```

2. Navigate to the project directory
```bash
cd website
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

This project is proprietary and confidential.
