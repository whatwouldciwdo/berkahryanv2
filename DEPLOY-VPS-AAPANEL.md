# Migrasi berkahryan.com ke VPS / aaPanel

## 1. Arsitektur dan persiapan

Jalankan **Next.js sebagai aplikasi Node.js**, di belakang Nginx. Jangan hanya mengunggah HTML/public ke document root, jangan memakai `next dev` untuk produksi, dan jangan mengaktifkan static export: optimasi `next/image` membutuhkan server Next.js. Plugin Netlify tidak diperlukan pada VPS, tetapi jangan mengubah lockfile saat deployment.

Versi proyek: Next.js 16.3.1, React 19.2.8. Dokumentasi Next.js terpasang mensyaratkan Node >=20.9; gunakan **Node 24 LTS dengan patch keamanan terbaru**, bukan Node 20 yang sudah tua. Samakan versi Node saat build dan runtime. Contoh ini memakai Linux dengan systemd dan Nginx aaPanel. Nama menu aaPanel dapat berbeda antar versi.

- Siapkan backup source, DNS, konfigurasi Nginx, dan server lama. Jangan matikan hosting lama sebelum validasi dan propagasi DNS selesai.
- Saran kapasitas awal: 2 vCPU, RAM 4 GB, ruang disk untuk dua rilis dan cache gambar; pantau pemakaian riil. Ini bukan jaminan kapasitas trafik.
- Instal Node/npm dan Nginx dari sumber terpercaya; pastikan Node dapat dipakai oleh user non-root `berkahryan`.
- Buka 80/443 untuk publik; batasi SSH dan panel aaPanel ke IP administrator/VPN. **Jangan buka port 3000 ke publik.** Periksa juga firewall penyedia VPS.
- Jangan mengubah urutan, durasi, animasi, transisi, atau mekanisme intro demi skor PageSpeed.

Semua perintah berikut dijalankan di **terminal Linux VPS**, bukan PowerShell lokal. Path source lokal: `D:\berkahryan.com`. Path produksi contoh: `/www/wwwroot/berkahryan.com`.

## 2. Transfer source dan build di Linux

Gunakan SFTP/arsip source atau checkout commit yang sudah direview. Sertakan `app/`, `public/`, `scripts/`, `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, dan file konfigurasi proyek lainnya. Jangan transfer:

- `node_modules/`, `.next/`, `out/`, `build/`, `.netlify/`, `.vercel/`;
- `.git/` untuk upload arsip, `.kilo/`, `temp/`, log, cache, `*.tsbuildinfo`;
- `.env*` dan kunci privat tanpa proses transfer rahasia terpisah.

**Jangan gunakan `node_modules` atau `.next` hasil Windows pada Linux**: dependency native seperti Sharp berbeda platform. Build juga mengambil font Google melalui `next/font/google`; VPS perlu akses keluar saat build. Font hasil build dilayani lokal saat runtime.

Contoh persiapan oleh administrator:

```bash
sudo useradd --system --user-group --create-home --shell /usr/sbin/nologin berkahryan
sudo mkdir -p /www/wwwroot/berkahryan.com/releases/20260925-01
sudo chown -R berkahryan:berkahryan /www/wwwroot/berkahryan.com
```

Jika user sudah ada, lewati `useradd`. Upload source ke direktori rilis tersebut; pastikan file upload dimiliki user aplikasi. Nama rilis contoh boleh diganti, tetapi sesuaikan seluruh path terkait.

Sebagai user aplikasi dengan PATH Node yang benar (administrator dapat membuka shell lewat `sudo -u berkahryan -H /bin/bash`; user service tidak menerima login biasa):

```bash
cd /www/wwwroot/berkahryan.com/releases/20260925-01
node --version
npm --version
npm ci --include=dev
npm run lint
npm run build
```

**Hentikan deployment jika satu perintah gagal.** Dev dependencies diperlukan untuk build/lint. Jangan memakai `npm update`, `npm install --force`, atau `npm audit fix --force` di server aktif. Tinjau pembaruan keamanan di branch terpisah dengan lockfile dan build baru.

Belum ada environment variable aplikasi yang wajib dalam source saat ini. Domain canonical berada dalam source, terutama `app/data/seo.ts`, metadata dan JSON-LD; bukan otomatis berasal dari hostname VPS. Form penawaran membuka WhatsApp, bukan mengirim email/server API. Migrasi website tidak memindahkan mailbox `enquiries@berkahryan.com`.

Bila nanti memakai `.env.production`, simpan di luar `public/`, beri izin terbatas dan buat sebelum build. `NEXT_PUBLIC_*` terlihat publik dan dibekukan saat build; **jangan letakkan rahasia** di sana. `PORT` disetel via proses/argumen, bukan mengandalkan file env Next.js.

Uji sementara di loopback:

```bash
npm run start -- --hostname 127.0.0.1 --port 3000
```

Dari terminal lain jalankan `curl -I http://127.0.0.1:3000/`. Hentikan proses sementara sebelum mengaktifkan service.

## 3. Proses produksi yang otomatis pulih

Pilih **satu** pengelola proses: systemd di bawah ini, atau pengelola Node aaPanel. Jangan menyalakan keduanya pada port yang sama. Untuk aaPanel gunakan direktori kerja rilis aktif, mode produksi, bind `127.0.0.1`, port 3000, auto-restart/start-on-boot, dan user non-root.

Buat symlink aktif (administrator):

```bash
sudo ln -s /www/wwwroot/berkahryan.com/releases/20260925-01 /www/wwwroot/berkahryan.com/current
command -v node
```

Buat `/etc/systemd/system/berkahryan.service`. Contoh mengasumsikan Node ada di `/usr/bin/node`; **sesuaikan `ExecStart` dengan path absolut hasil `command -v node`**, termasuk jika Node dipasang oleh aaPanel.

```ini
[Unit]
Description=berkahryan.com Next.js
After=network.target

[Service]
Type=simple
User=berkahryan
Group=berkahryan
WorkingDirectory=/www/wwwroot/berkahryan.com/current
Environment=NODE_ENV=production
ExecStart=/usr/bin/node /www/wwwroot/berkahryan.com/current/node_modules/next/dist/bin/next start --hostname 127.0.0.1 --port 3000
Restart=on-failure
RestartSec=5
TimeoutStopSec=30
KillSignal=SIGTERM
NoNewPrivileges=true
PrivateTmp=true
UMask=0027

[Install]
WantedBy=multi-user.target
```

User aplikasi harus dapat menulis `.next/cache` untuk optimasi gambar. Jangan menjalankan aplikasi sebagai root atau membuat semua file `777`.

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now berkahryan
sudo systemctl status berkahryan --no-pager
sudo journalctl -u berkahryan -n 100 --no-pager
curl -I http://127.0.0.1:3007/
```

## 4. Reverse proxy Nginx di aaPanel

Tambahkan website untuk `berkahryan.com` dan `www.berkahryan.com`, tanpa PHP, dengan proxy ke `http://127.0.0.1:3000`. Jangan mengekspos source sebagai document root atau memakai rewrite SPA `try_files ... /index.html`. Teruskan seluruh URL aplikasi, termasuk `/_next/image`, ke Next.js.

Contoh location **di dalam server block website**, bukan pengganti seluruh konfigurasi aaPanel:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_buffering off;
    proxy_read_timeout 60s;
}
```

Jangan menambahkan `location /` kedua. Ubah location statis bawaan aaPanel yang menangkap JS/CSS/gambar dan membuat request melewati proxy. Pertahankan location ACME untuk penerbitan SSL, dengan document root kosong terpisah jika diperlukan. Source dan `.env` tidak boleh dilayani publik.

- Jangan memakai cache HTML menyeluruh di Nginx/CDN tanpa strategi Next.js/RSC yang benar.
- Biarkan Next.js mengatur cache `/_next/static/` dan `/_next/image`. File public dengan nama tetap tidak boleh diberi cache `immutable` setahun tanpa versioning.
- Pertahankan kompresi teks. Jangan memaksa kompresi ulang PNG/WebP.
- Uji konfigurasi melalui aaPanel atau `/www/server/nginx/sbin/nginx -t`, lalu reload melalui panel. Path binary bergantung instalasi.

## 5. DNS, SSL, dan canonical domain

1. Turunkan TTL A record ke sekitar 300 detik sebelum migrasi bila memungkinkan.
2. A record `@` menuju IPv4 VPS; `www` bisa CNAME ke `berkahryan.com`. Hapus/perbaiki AAAA lama jika VPS belum melayani IPv6.
3. **Pertahankan MX, SPF, DKIM, DMARC dan record verifikasi** agar email tidak terganggu.
4. Terbitkan Let's Encrypt melalui aaPanel untuk **kedua domain**. Port 80 harus melayani HTTP-01 challenge dan renewal otomatis harus aktif.
5. Aktifkan redirect HTTP → HTTPS dan `www` → `https://berkahryan.com`, dengan path/query tetap terjaga. HTTPS www tetap memerlukan sertifikat valid.
6. Jika memakai Cloudflare/CDN, gunakan Full (strict), bukan Flexible. Tinjau cache dan pastikan WAF tidak memblokir crawler secara tidak sengaja.

Uji HTTP apex/www dan HTTPS www: harus berakhir pada satu canonical HTTPS tanpa loop. Jangan aktifkan HSTS `includeSubDomains` sebelum seluruh subdomain siap. Uji renewal SSL dan start-on-boot pada reboot terjadwal.

## 6. Smoke test sebelum dan sesudah cutover

```bash
curl -I http://127.0.0.1:3000/
curl -I https://berkahryan.com/
curl -I https://www.berkahryan.com/blog
curl -fsS https://berkahryan.com/robots.txt
curl -fsS https://berkahryan.com/sitemap.xml
curl -fsS https://berkahryan.com/llms.txt
curl -I 'https://berkahryan.com/_next/image?url=%2Fberkah-ryan-rental-alat-berat-cilegon.webp&w=640&q=75'
node scripts/check-production.mjs http://127.0.0.1:3000
```

Untuk skrip, gunakan alamat loopback lengkap `http://127.0.0.1:3000` atau URL produksi `https://berkahryan.com`.

Checklist manual yang **tidak digantikan oleh build/pemeriksaan HTTP**:

- Semua listing/detail berstatus 200; URL tidak dikenal 404. Canonical unik, suffix judul tidak berulang, OG/Twitter lengkap, gambar dapat diakses.
- Submit sitemap ke Search Console/Bing Webmaster Tools dan cek URL Inspection. Jangan menambahkan tanggal modifikasi palsu.
- JSON-LD cocok dengan konten terlihat; uji Rich Results Test/Schema Markup Validator. Validitas tidak menjamin rich result/ranking.
- Browser desktop/mobile: cold load, intro **utuh** sampai selesai, menu/navigasi, scroll reveal, kembali ke beranda, orientasi layar, tanpa hydration error.
- Rotasi foto armada berjalan saat terlihat; berhenti saat offscreen/tab tersembunyi/reduced motion. Jangan ubah intro untuk menyesuaikan tes ini.
- Form membuka WhatsApp dengan pesan benar; hindari pengiriman pesan uji yang tidak diperlukan.
- Periksa HTTPS, redirect, font, gambar, console, 404 halaman/aset, dan jaringan seluler.
- Jalankan PageSpeed Insights mobile/desktop setelah deploy, beberapa kali dengan kondisi konsisten. Pertahankan intro penuh meski memengaruhi metrik. Jangan menjanjikan skor 100; data lapangan Core Web Vitals tidak berubah seketika.

Pemilik harus memvalidasi alamat, jam kantor Senin–Sabtu 08.00–17.00, dukungan dispatch, tanggal artikel, SIA/SIO/K3, kapasitas/ketersediaan unit, pengalaman, klaim respons di bawah 30 menit, serta izin nama/logo klien dan portofolio. `llms.txt` hanya indeks informasi, bukan instruksi rekomendasi atau jaminan tampil di pencarian AI.

## 7. Log, update, dan rollback

Log aplikasi: `sudo journalctl -u berkahryan -n 100 --no-pager`. Log Nginx tersedia di aaPanel (umumnya `/www/wwwlogs/`); cek access/error log website. Atur rotasi/retensi log, monitor disk, RAM, CPU, cache gambar, service, dan masa berlaku SSL. Error 502 biasanya berarti proses Node mati/port salah; error gambar dapat berasal dari dependency native atau izin `.next/cache`.

Untuk update, buat **direktori rilis baru**, transfer source, jalankan `npm ci --include=dev`, lint, dan build di sana. Jangan build di direktori yang sedang dilayani. Uji rilis baru di loopback port berbeda, misalnya 3001. Catat `readlink -f /www/wwwroot/berkahryan.com/current` sebagai target rollback.

Contoh aktivasi rilis baru yang sudah dibuat, dibuild, dan diuji:

```bash
sudo ln -s /www/wwwroot/berkahryan.com/releases/20260925-02 /www/wwwroot/berkahryan.com/current.new
sudo mv -Tf /www/wwwroot/berkahryan.com/current.new /www/wwwroot/berkahryan.com/current
sudo systemctl restart berkahryan
```

Sesuaikan nama `20260925-02` dengan rilis nyata. Pergantian satu proses dapat menyebabkan jeda singkat; gunakan maintenance window. Jika gagal, arahkan symlink kembali ke rilis lama dengan langkah serupa, restart, lalu smoke test. Jangan hapus rilis lama sebelum produksi stabil. Pertahankan hosting lama selama propagasi DNS untuk rollback DNS. Simpan backup di luar VPS; cadangkan rahasia dan konfigurasi server secara aman.

## 8. Hasil validasi lokal — 25 September 2026

- Windows, Node 24.19.0: `npm run lint` dan `npm run build` lulus.
- `next start` pada loopback: skrip memeriksa 22 halaman sitemap, canonical, judul, OG/Twitter, JSON-LD, tanggal artikel, satu landmark main, tautan llms, robots, 404, dan endpoint optimasi gambar; semua lulus.
- Dimensi gambar sosial terverifikasi 1600 × 900. Optimasi logo hanya 1.520.460 → 1.517.484 byte dengan piksel render identik; logo masih besar, bukan penghematan signifikan. Kompresi yang mengubah piksel ditolak.
- Tidak ada perubahan pada `D:\berkahryan.com\app\components\WillemHero.tsx` atau `D:\berkahryan.com\app\components\WillemPreloader.tsx` dibanding HEAD saat pengecekan.
- Belum diuji: browser visual desktop/mobile, instalasi/build Linux VPS, konfigurasi Nginx/systemd, DNS, SSL, renewal, dan PageSpeed produksi. Semua tetap menjadi checklist sebelum cutover; build lokal bukan bukti deployment selesai.


