# Keita Higaki - Portfolio

Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in Next.js SEO features
- **Fast Performance**: Optimized for speed and performance
- **Easy to Update**: Simple data structures for easy content updates

## 📁 Project Structure

```
higakikeita-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles
│   │   ├── publications/        # Publications page
│   │   ├── talks/               # Talks & speaking page
│   │   ├── projects/            # OSS projects page
│   │   └── articles/            # Technical articles page
│   ├── components/              # Reusable components (TBD)
│   └── content/                 # Content in MDX format (TBD)
│       ├── books/
│       ├── talks/
│       ├── articles/
│       └── oss/
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📝 Updating Content

### Adding Publications

Edit `src/app/publications/page.tsx` and add your publication to the `publications` array:

```typescript
{
  title: "Your Book Title",
  role: "Author / Co-author / Technical Reviewer",
  publisher: "Publisher Name",
  year: 2024,
  description: "Brief description of the book",
  link: "https://amazon.com/..."
}
```

### Adding Talks

Edit `src/app/talks/page.tsx` and add your talk to the `talks` array:

```typescript
{
  title: "Your Talk Title",
  event: "Conference Name",
  date: "2024-12",
  type: "Conference" | "Lightning Talk" | "Workshop" | "Booth" | "Webinar",
  description: "Brief description",
  slides: "https://speakerdeck.com/...",
  video: "https://youtube.com/..."
}
```

### Adding Projects

Edit `src/app/projects/page.tsx` and add your project to the `projects` array:

```typescript
{
  name: "project-name",
  description: "Project description",
  tech: ["Tech1", "Tech2", "Tech3"],
  github: "https://github.com/user/repo",
  link: "https://project-demo.com",
  stars: 100
}
```

### Adding Articles

Edit `src/app/articles/page.tsx` and add your article to the `articles` array:

```typescript
{
  title: "Article Title",
  platform: "Zenn" | "Qiita" | "Note" | "LinkedIn" | "Sysdig Blog" | "Other",
  date: "2024-12",
  description: "Brief description",
  link: "https://zenn.dev/...",
  tags: ["Tag1", "Tag2", "Tag3"]
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push this repository to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

or use Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Google Cloud Run
- Your own server with Node.js

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Fonts

Add custom fonts in `src/app/layout.tsx`.

### Meta Tags

Update SEO metadata in `src/app/layout.tsx`.

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome via issues.

---

Built with ❤️ by Keita Higaki
