# EvolveGSMain — Evolve Global Solutions Public Portal

Modern public portal for **Evolve Global Solutions**, deployed as an
[Azure Static Web App](https://azure.microsoft.com/products/app-service/static)
from this repository's `main` branch.

- **Live URL:** https://salmon-island-097a9700f.7.azurestaticapps.net
  (and `https://www.evolvegs.com` once the custom domain is pointed at it)
- **Azure resource:** `EvolveGSMain` in resource group `MainEvolve`
- **Framework:** [Astro 4](https://astro.build) + [Tailwind CSS](https://tailwindcss.com)
- **Hosting:** Azure Static Web Apps (Free tier, Global)
- **CI/CD:** GitHub Actions workflow at
  `.github/workflows/azure-static-web-apps-salmon-island-097a9700f.yml`

---

## What's in this site

| Page | Path | Purpose |
| ---- | ---- | ------- |
| Home | `/` | Hero, services overview, why-Evolve, partners strip, CTA |
| About | `/about` | Story, principles, how we engage |
| Services | `/services` | Six service lines with deep detail |
| Products | `/products` | Evolve Approval AI + accelerators |
| Partners | `/partners` | Microsoft, Azure, Fabric, ARAS, Copilot Studio |
| Power BI showcase | `/powerbi` | Sample dashboards (placeholders) |
| Blog | `/blog`, `/blog/<slug>` | MDX-based posts, three seeded |
| Contact | `/contact` | mailto-based form, no backend required |
| 404 | `/404` | Graceful not-found |

---

## Local development

Requires **Node.js 20+**.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serves ./dist locally
```

---

## How deployment works

The Azure Static Web App `EvolveGSMain` is already wired to the
`guillermobustamante/EvolveGSMain` GitHub repository, `main` branch.

When you push to `main`:

1. GitHub Actions runs the workflow at
   `.github/workflows/azure-static-web-apps-salmon-island-097a9700f.yml`.
2. The workflow installs Node 20, runs `npm run build`, and publishes
   `./dist` to Azure Static Web Apps.
3. The deployment token is read from the repository secret
   `AZURE_STATIC_WEB_APPS_API_TOKEN_SALMON_ISLAND_097A9700F` — this secret
   is automatically created by Azure when the SWA is connected to GitHub.
   You do **not** need to create it manually.

If for any reason the secret is missing, regenerate it from the
Azure portal:
**Static Web App → Overview → Manage deployment token → copy the token →
GitHub → Settings → Secrets and variables → Actions → New repository secret**
named exactly `AZURE_STATIC_WEB_APPS_API_TOKEN_SALMON_ISLAND_097A9700F`.

---

## Publishing this code to your repo

From the folder that contains this README:

```bash
git init
git add .
git commit -m "Rebuild portal on Astro + Tailwind for Azure Static Web Apps"
git branch -M main
git remote add origin https://github.com/guillermobustamante/EvolveGSMain.git
git push -u origin main
```

If the repo already has content you want to preserve, push to a feature
branch first and open a pull request:

```bash
git checkout -b rebuild-2026
git push -u origin rebuild-2026
```

The SWA workflow will run a preview build on the PR and post a staging URL.

---

## Custom domain

Once deployment is green:

1. In the Azure portal: **EvolveGSMain → Custom domains → + Add**.
2. Add `www.evolvegs.com` and follow the CNAME validation steps.
3. Update your DNS provider with the CNAME Azure provides.

---

## Editing content

- **Hero copy, services, products, partners** — edit the matching file in
  `src/pages/`. Lists of services and products are defined in plain
  TypeScript at the top of each `.astro` file.
- **Blog posts** — drop new Markdown or MDX files into
  `src/content/blog/`. Required frontmatter:
  ```yaml
  ---
  title: "Post title"
  description: "One-sentence summary"
  pubDate: 2026-05-26
  tags: ["Optional", "Tag", "List"]
  heroEyebrow: "Optional label"
  ---
  ```
- **Navigation** — edit `nav` in `src/components/Header.astro`.
- **Brand colors, typography, gradients** — edit `tailwind.config.mjs`.

---

## Notes

- The contact form uses a `mailto:` action — no backend, no SMTP, no spam
  filtering needed. If you outgrow this, swap the submit handler in
  `src/pages/contact.astro` for an Azure Function POST or a Formspree
  endpoint.
- The Power BI showcase page uses CSS placeholders. To embed real
  reports, replace each `<div class="aspect-[4/3]...">` block with an
  `<iframe>` from **Power BI → File → Embed report → Website or portal**.
- The footer auto-renders the current year.

© Evolve Global Solutions Inc.
