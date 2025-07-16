# Saim Raza | Software Engineer | GenAI, Backend

  [![Portfolio](https://img.shields.io/badge/Portfolio-rsaim.info-purple?style=flat&logo=google-chrome)](https://rsaim.info)

  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://linkedin.com/in/rsaim)
  [![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/rsaim)

<h3>Modern, Interactive Portfolio Built with React & Advanced Web Technologies</h3>
</div>

![1751754428979](image/README/1751754428979.png)

## 🎯 Key Features

- **Interactive Experience Timeline**: Custom-built with React Flow, featuring smooth animations and dynamic data visualization
- **Modern Tech Stack**: React.js with Hooks, Custom CSS Modules, and Performance Optimizations
- **Responsive Design**: Mobile-first approach with fluid layouts and breakpoints
- **Performance Focused**: Optimized bundle size, lazy loading, and efficient state management
- **Accessibility**: WCAG compliant with ARIA labels and keyboard navigation
- **CI/CD**: Automated deployment pipeline with GitHub Actions

## 🛠️ Technical Architecture

```mermaid
graph TD
    A[React Frontend] --> B[Component Layer]
    B --> C[Custom Hooks]
    B --> D[State Management]
    B --> E[UI Components]
    E --> F[Timeline]
    E --> G[Project Cards]
    E --> H[Interactive Elements]
    I[Performance Layer] --> J[Code Splitting]
    I --> K[Asset Optimization]
    I --> L[Cache Strategy]
```

### Core Technologies

| Category              | Technologies                                                                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**    | ![React](https://img.shields.io/badge/React-18-blue?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript)                 |
| **Styling**     | ![CSS Modules](https://img.shields.io/badge/CSS-Modules-orange) ![SASS](https://img.shields.io/badge/SASS-Latest-pink?logo=sass)                                |
| **Performance** | ![Webpack](https://img.shields.io/badge/Webpack-5-blue?logo=webpack) ![Optimization](https://img.shields.io/badge/Optimization-Advanced-green)                  |
| **Deployment**  | ![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-black?logo=github) ![CI/CD](https://img.shields.io/badge/CI%2FCD-Automated-green?logo=github-actions) |

## 💻 Development

```bash
# Clone repository
git clone https://github.com/rsaim/rsaim.github.io.git

# Install dependencies with exact versions
npm ci

# Start development server with hot reload
npm start

# Run test suite
npm test

# Build optimized production bundle
npm run build
```

## 🔧 Environment Variables

This project uses EmailJS for contact form functionality. Environment variables are required:

### Required Variables
- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID` 
- `REACT_APP_EMAILJS_PUBLIC_KEY`

### Setup
- **Local**: Create `.env` file in root directory
- **Production**: Add as GitHub Secrets in repository settings

The contact form will show an error if these variables are not configured.

## 🎨 UI/UX Features

- **Dark Theme**: Modern dark theme with carefully chosen purple accents
- **Interactive Elements**: Hover states, transitions, and micro-interactions
- **Custom Animations**: Smooth page transitions and component animations
- **Responsive Images**: Optimized loading with WebP format and srcset
- **Performance Metrics**:
  - Lighthouse Score: 95+ on all metrics
  - First Contentful Paint: < 1s
  - Time to Interactive: < 2s

## 📊 Code Quality & Testing

- **Static Analysis**: ESLint with custom rule set
- **Type Safety**: TypeScript with strict mode
- **Unit Tests**: Jest with React Testing Library
- **E2E Tests**: Cypress for critical user paths
- **Code Coverage**: >90% on core components

## 🚀 Performance Optimizations

```javascript
// Example of optimized React component with code splitting
const Timeline = React.lazy(() => import('./components/Timeline'));

const TimelineWrapper = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Timeline />
  </Suspense>
);
```

## 📱 Responsive Design Strategy

| Breakpoint | Target Devices | Layout Changes               |
| ---------- | -------------- | ---------------------------- |
| < 480px    | Mobile         | Single column, condensed nav |
| 480-768px  | Tablet         | Two columns, expanded cards  |
| 768-1024px | Small Desktop  | Grid layout, hover effects   |
| > 1024px   | Large Desktop  | Full experience, animations  |

## 🔜 Roadmap

- [ ] Add WebGL-powered 3D background animations
- [ ] Implement server-side rendering for better SEO
- [ ] Add blog section with MDX support
- [ ] Integrate with Notion API for dynamic content
- [ ] Add interactive project demos

## 📈 Analytics & Monitoring

- **Performance Monitoring**: Google Analytics 4
- **Error Tracking**: Sentry integration
- **User Behavior**: Hotjar heatmaps
- **API Monitoring**: Custom dashboard

## 🚀 Deployment

This project uses GitHub Actions for automated deployment to GitHub Pages. The deployment process:

1. **Automatic Triggers**: Deploys on every push to the `main` branch
2. **Environment Variables**: Automatically injects secrets during build
3. **Build Process**: Creates optimized production bundle
4. **Deployment**: Publishes to GitHub Pages with custom domain

### Manual Deployment
You can also trigger deployment manually:
1. Go to repository → Actions
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

## 🔒 Domain & GitHub Pages Verification

After making any changes to the repository, verify the following:

### CNAME File Check
- [ ] Verify CNAME file exists in the root directory
- [ ] Confirm CNAME contains exactly: `www.rsaim.info` (no http/https prefix)
- [ ] Check if recent changes accidentally modified/deleted the CNAME file

### GitHub Pages Settings
- [ ] Go to repository → Settings → Pages
- [ ] Verify custom domain is configured as `www.rsaim.info`
- [ ] Confirm "Enforce HTTPS" is enabled
- [ ] Wait for GitHub Pages to finish deployment
- [ ] Test the live site at https://www.rsaim.info

## 🤝 Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

```bash
# Development workflow
git checkout -b feature/new-feature
npm test
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

## 📬 Let's Connect

I'm always interested in new opportunities and collaborations. Feel free to reach out!

<div align="center">
  <a href="https://rsaim.info/contact">
    <img src="https://img.shields.io/badge/Contact-Me-purple?style=for-the-badge&logo=gmail" alt="Contact Me" />
  </a>
</div>

---

<div align="center">
  <sub>Built with 💜 by Saim Raza | © 2024 All Rights Reserved</sub>
</div>
