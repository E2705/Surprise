# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Deploy en GitHub Pages (repo: `Surprise`)

Este proyecto se publica en GitHub Pages usando GitHub Actions.

- **URL**: `https://e2705.github.io/Surprise/`
- **Workflow**: `.github/workflows/deploy.yml`

Requisitos en GitHub:

1. Ve a **Settings → Pages**
2. En **Build and deployment**, selecciona **Source: GitHub Actions**
3. Haz push a la rama `main` y espera a que termine el workflow “Deploy to GitHub Pages”
