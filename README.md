# berkahryan.com

Situs perusahaan **CV. Berkah Ryan Heavy Equipment** — jasa sewa crane dan alat berat
di Cilegon, Banten.

## Stack

| Bagian     | Teknologi                            |
| ---------- | ------------------------------------ |
| Framework  | Next.js 16 (App Router)              |
| UI         | React 19                             |
| Styling    | CSS Modules + `app/globals.css`      |
| Animasi    | GSAP, WebGL shader (`LiquidHero`)    |
| Bahasa     | TypeScript                           |
| Hosting    | Netlify (`@netlify/plugin-nextjs`)   |

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka <http://localhost:3000>.

## Perintah

| Perintah        | Fungsi                                    |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Development server                        |
| `npm run build` | Production build (prerender 27 halaman)   |
| `npm start`     | Menjalankan hasil build                   |
| `npm run lint`  | ESLint                                    |

## Struktur

```
app/
├─ components/      Komponen bersama (Navbar, Footer, CoverageMarquee, QuotationForm, …)
├─ data/            siteData.ts — sumber data layanan, armada, proyek, blog
├─ layanan/         Halaman layanan + rute dinamis [slug]
├─ proyek/          Halaman proyek + rute dinamis [slug]
├─ blog/            Artikel + rute dinamis [slug]
├─ armada/          Katalog unit
├─ tentang-kami/    Profil perusahaan
├─ kontak/          Saluran kontak, peta, form penawaran
├─ sitemap.ts       Sitemap dinamis
├─ robots.ts        robots.txt
└─ globals.css      Design token & utility global
```

## Deploy ke Netlify

Konfigurasi sudah tersedia di [`netlify.toml`](./netlify.toml).

### Lewat dashboard

1. **Add new site → Import an existing project**, hubungkan repo
   `whatwouldciwdo/berkahryanv2`.
2. Netlify membaca `netlify.toml`, sehingga build settings terisi otomatis:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs`
3. Klik **Deploy**.

### Lewat CLI

```bash
npm i -g netlify-cli
netlify login
netlify init      # tautkan ke site Netlify
netlify deploy --build --prod
```

### Domain

Setelah deploy, tambahkan domain `berkahryan.com` di
**Site configuration → Domain management**. Nilai `metadataBase`,
`app/sitemap.ts`, dan `app/robots.ts` sudah dikunci ke `https://berkahryan.com`,
jadi tidak ada environment variable yang wajib diisi.
