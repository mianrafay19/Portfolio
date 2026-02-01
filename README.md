# 🚀 Angular Portfolio (Angular 19)

A personal portfolio web app built with **Angular 19**. It showcases About, Education, Projects, Skills and Contact sections, includes a document viewer for PDFs, theming, and toast notifications.

---

## 📂 Full Folder Structure (exact as provided)

```
📦my-portfolio
 ┣ 📂public
 ┃ ┗ 📂assets
 ┃ ┃ ┣ 📂pdf
 ┃ ┃ ┃ ┣ 📜BSIT.pdf
 ┃ ┃ ┃ ┣ 📜Experience_Letter.pdf
 ┃ ┃ ┃ ┣ 📜Intelliage.pdf
 ┃ ┃ ┃ ┗ 📜Muhammad-Asad-Munir-Resume.pdf
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┣ 📜dp.jpg
 ┃ ┃ ┃ ┣ 📜dp.png
 ┃ ┃ ┃ ┣ 📜dp2.jpg
 ┃ ┃ ┃ ┗ 📜dp3.jpg
 ┃ ┃ ┣ 📂projects
 ┃ ┃ ┃ ┣ 📜angular_material.png
 ┃ ┃ ┃ ┣ 📜asadshop.png
 ┃ ┃ ┃ ┗ 📜courseecho.png
 ┃ ┃ ┗ 📜logo.png
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┃ ┣ 📜about.component.html
 ┃ ┃ ┃ ┃ ┣ 📜about.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜about.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜about.component.ts
 ┃ ┃ ┃ ┣ 📂contact
 ┃ ┃ ┃ ┃ ┣ 📜contact.component.html
 ┃ ┃ ┃ ┃ ┣ 📜contact.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜contact.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜contact.component.ts
 ┃ ┃ ┃ ┣ 📂education
 ┃ ┃ ┃ ┃ ┣ 📜education.component.html
 ┃ ┃ ┃ ┃ ┣ 📜education.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜education.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜education.component.ts
 ┃ ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┃ ┣ 📜header.component.html
 ┃ ┃ ┃ ┃ ┣ 📜header.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜header.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜header.component.ts
 ┃ ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┃ ┣ 📜home.component.html
 ┃ ┃ ┃ ┃ ┣ 📜home.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜home.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜home.component.ts
 ┃ ┃ ┃ ┣ 📂projects
 ┃ ┃ ┃ ┃ ┣ 📜projects.component.html
 ┃ ┃ ┃ ┃ ┣ 📜projects.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜projects.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜projects.component.ts
 ┃ ┃ ┃ ┣ 📂reusable
 ┃ ┃ ┃ ┃ ┣ 📂avatar
 ┃ ┃ ┃ ┃ ┃ ┣ 📂document-viewer-dialog
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜document-viewer-dialog.component.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜avatar.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜avatar.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜avatar.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜avatar.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂document-viewer-dialog
 ┃ ┃ ┃ ┃ ┃ ┣ 📜document-viewer-dialog.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜document-viewer-dialog.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜document-viewer-dialog.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜document-viewer-dialog.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂tab
 ┃ ┃ ┃ ┃ ┃ ┣ 📜tab.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜tab.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜tab.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜tab.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂theme
 ┃ ┃ ┃ ┃ ┃ ┣ 📜theme.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜theme.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜theme.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜theme.component.ts
 ┃ ┃ ┃ ┗ 📂skills
 ┃ ┃ ┃ ┃ ┣ 📜skills.component.html
 ┃ ┃ ┃ ┃ ┣ 📜skills.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜skills.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜skills.component.ts
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┣ 📜portfolio-data.ts
 ┃ ┃ ┃ ┗ 📜portfolio-interfaces.ts
 ┃ ┃ ┣ 📂module
 ┃ ┃ ┃ ┗ 📜mat.module.ts
 ┃ ┃ ┣ 📂pipes
 ┃ ┃ ┃ ┗ 📂safe-url
 ┃ ┃ ┃ ┃ ┣ 📜safe-url.pipe.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜safe-url.pipe.ts
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┣ 📂file
 ┃ ┃ ┃ ┃ ┣ 📜file.service.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜file.service.ts
 ┃ ┃ ┃ ┣ 📂google-sheet
 ┃ ┃ ┃ ┃ ┣ 📜google-sheet.service.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜google-sheet.service.ts
 ┃ ┃ ┃ ┗ 📂toaster
 ┃ ┃ ┃ ┃ ┣ 📜toast.service.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜toast.service.ts
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┣ 📜_animations.scss
 ┃ ┃ ┃ ┣ 📜_imports.scss
 ┃ ┃ ┃ ┣ 📜_shared-componnet.scss
 ┃ ┃ ┃ ┣ 📜_themes.scss
 ┃ ┃ ┃ ┣ 📜_toast.scss
 ┃ ┃ ┃ ┗ 📜_variables.scss
 ┃ ┃ ┣ 📜app.component.html
 ┃ ┃ ┣ 📜app.component.scss
 ┃ ┃ ┣ 📜app.component.spec.ts
 ┃ ┃ ┣ 📜app.component.ts
 ┃ ┃ ┣ 📜app.config.ts
 ┃ ┃ ┗ 📜app.routes.ts
 ┣ 📜index.html
 ┣ 📜main.ts
 ┗ 📜styles.scss

```

> **Note:** I have *not* included some common Angular config files that you said are not in your repo (e.g. `karma.conf.js`, `.browserslistrc`, `.eslintrc.json`, `.prettierignore`, `.prettierrc`, `LICENSE`). If you want them added, tell me which ones and I can generate sensible defaults.

---

## 🔧 Tech Stack

* Angular 19
* TypeScript
* SCSS
* Angular Material (used in `mat.module.ts`)
* Custom Pipes & Services (safe-url pipe, google-sheet, file service, toaster)

---

## 🚀 Getting Started (local)

### Prerequisites

* Node.js (LTS recommended)
* npm
* Angular CLI (optional, or use `npx @angular/cli`)

### Install

```bash
# from project root
npm install
```

### Serve (development)

```bash
# typical (if you have Angular CLI installed)
ng serve
# or, if your package.json has a start script
npm run start
```

Then open [http://localhost:4200](http://localhost:4200)

### Build (production)

```bash
ng build --configuration production
# or
npm run build
```

---

## ✅ Common NPM scripts (add to `package.json` if missing)

```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "preview": "npx http-server ./dist/your-app-name"
  }
}
```

> Replace `your-app-name` with the actual output folder name in `dist/`.

---

## 🧪 Tests & Linting

* Your components include `.spec.ts` files — run `npm run test` if you have `karma`/`jest` configured.
* Run `npm run lint` if you add ESLint/TSLint configuration.

---

## 📦 Deployment (short)

1. `ng build --configuration production`
2. Upload the `dist/<app-name>/` folder to any static host (Netlify, Vercel, Firebase Hosting, GitHub Pages).

If you want, I can add a step-by-step deployment guide for Netlify, Vercel, or Firebase.

---

## 🤝 Contributing

* Fork the repo
* Create a branch: `git checkout -b feature/your-feature`
* Commit your changes: `git commit -m "feat: add ..."`
* Push: `git push origin feature/your-feature`
* Open a PR

---

## 📌 Notes / TODOs

* Add a `LICENSE` file if you want to specify reuse terms (MIT recommended for open source).
* Consider adding `.browserslistrc` and ESLint config for consistent linting and browser support.
* Add screenshots to the README (place images in `public/assets/projects/` and reference them).

---

If you want the `README.md` saved to your repo root as a real file, I can generate the file contents for you to copy, or create a downloadable file. Tell me which you prefer.
