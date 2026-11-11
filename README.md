# CompressMyPic — Professional Online Image Compressor

CompressMyPic is a production-ready, client-side image compression web application built with React, TypeScript, Vite, and Tailwind CSS. All image processing executes directly inside the user's web browser using native HTML5 Canvas APIs, ensuring absolute privacy, zero server uploads, and near-instant processing speeds.

---

## 🌟 Key Features

- **100% Client-Side Privacy**: Images never leave the user's device. No server uploads, no cloud databases, and no telemetry tracking of image data.
- **Multi-Format Support**: Compress, optimize, and convert **JPG/JPEG**, **PNG**, and **WebP** formats.
- **Granular Compression Engine**:
  - **Low Compression** (85% Quality): Maximum visual fidelity for portfolios and print-ready photography.
  - **Balanced Compression** (70% Quality): Optimal sweet spot for web performance and bandwidth savings.
  - **High Compression** (50% Quality): Maximum space reduction for fast previews and storage conservation.
  - **Custom Quality Slider**: Smooth 10% to 100% slider control.
- **Aspect Ratio & Alpha Preservation**:
  - Strictly preserves original image dimensions and aspect ratios without distortion.
  - Intelligently detects and preserves alpha transparency for PNG and WebP files.
  - Displays transparency notice when converting alpha-channel files to JPEG.
- **Interactive Visual Comparison**:
  - Interactive split-screen slider: drag back and forth to inspect exact pixel fidelity before and after.
  - Side-by-side mode and zoom controls (50% to 250%).
- **Bulk Batch Processing**:
  - Upload dozens of files simultaneously via drag-and-drop, native file picker, or clipboard paste (`Ctrl+V`).
  - Real-time quantitative calculations: Original Size, Compressed Size, Space Saved, and Reduction Percentage.
  - Single-click individual downloads or bundled **"Download All (ZIP)"** packaging powered by JSZip.
- **SEO & Search Engine Quality**:
  - Semantic HTML with a single H1, proper H2/H3 hierarchy, and descriptive alt attributes.
  - Pre-configured OpenGraph and Twitter Cards metadata.
  - Schema.org structured data (`WebApplication` and FAQ).
  - XML Sitemap (`/sitemap.xml`) and `robots.txt` with easy canonical domain replacement.
- **Google AdSense & Analytics Readiness**:
  - Reserved, policy-compliant ad containers clearly labeled and decoupled from functional controls.
  - Configurable slots for Google AdSense Publisher ID, Google Analytics 4 (GA4), and Google Search Console verification.
- **Legal & Trust Pages**:
  - Accessible modals for **About Us**, **Contact Us** (with interactive message submission), **Privacy Policy**, and **Terms of Service**.

---

## 🚀 Quick Start & Local Development

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed.

### 1. Installation

Clone or extract the repository and install dependencies:

```bash
npm install
```

### 2. Start the Local Development Server

Run the local development server:

```bash
npm run dev
```

Open your browser at `http://localhost:3000` to interact with the application.

### 3. Build for Production

To create an optimized, minified production build:

```bash
npm run build
```

The compiled static assets will be located in the `dist/` directory.

---

## 🌐 Deployment Instructions

### Option 1: Cloudflare Pages (Recommended)

1. Push your code to a GitHub repository (see GitHub instructions below).
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages**.
3. Select **Connect to Git** and authorize your repository.
4. Configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18` or higher
5. Click **Save and Deploy**. Cloudflare will build and deploy your site to a global CDN edge with free SSL and lightning-fast speeds.

### Option 2: Vercel / Netlify

- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Option 3: Static Web Host (Nginx, Apache, AWS S3 / CloudFront)

Simply upload the contents of the `dist/` folder to your web server's root web directory.

---

## 🐙 GitHub Upload Instructions

To publish this project to GitHub:

```bash
# 1. Initialize git repository (if not already initialized)
git init

# 2. Add all files
git add .

# 3. Commit changes
git commit -m "Initial commit: CompressMyPic image compressor"

# 4. Create a new repository on GitHub (e.g. https://github.com/your-username/compress-my-pic)

# 5. Link your local repo and push
git remote add origin https://github.com/your-username/compress-my-pic.git
git branch -M main
git push -u origin main
```

---

## ⚙️ Configuration & Customization

### 1. Domain & Canonical URLs
In `index.html` and `public/sitemap.xml`, replace the placeholder `https://YOURDOMAIN.com` with your actual live domain.

### 2. Google AdSense Integration
Once your Google AdSense account is approved:
1. Open `index.html` and add your AdSense script tag to the `<head>`:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
2. Replace the placeholder containers in `src/components/AdSlot.tsx` with your `<ins class="adsbygoogle" ...></ins>` ad snippets.

### 3. Google Analytics 4 (GA4)
To enable tracking, insert your GA4 measurement ID in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔒 Security & Privacy Architecture

- **No Remote Transmission**: Image files are loaded into browser memory via `URL.createObjectURL(file)` and processed via `canvas.toBlob()`.
- **Memory Safety**: Object URLs are revoked explicitly upon deletion or component unmount to prevent browser memory leaks.
- **Strict Content Handling**: No user-uploaded script execution or unsafe DOM rendering.

---

## 📄 License

Apache-2.0. Open-source and free for personal and commercial usage.
