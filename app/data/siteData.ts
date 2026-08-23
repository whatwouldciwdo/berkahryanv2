export interface CraneItem {
  id: number;
  slug: string;
  category: string;
  name: string;
  shortDesc: string;
  description: string;
  capacityRange: string;
  applications: string[];
  k3Compliance: string;
  models: {
    brand: string;
    capacity: string;
    specsNote?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const craneFleetData: CraneItem[] = [
  {
    id: 1,
    slug: "telescopic-mobile-crane",
    category: "Mobile Crane",
    name: "Telescopic Mobile Crane",
    shortDesc: "Solusi pengangkatan presisi dengan mobilitas tinggi dan kemampuan boom hidrolik variabel 25 hingga 600 Ton.",
    description: "Telescopic Mobile Crane merupakan jenis derek hidrolik bertransmisi roda karet yang menawarkan kecepatan mobilisasi di jalan raya dan waktu setup outrigger yang sangat cepat. Sangat ideal untuk kebutuhan erection balok baja pabrik, pemasangan girder jembatan, penurunan mesin industri berat, dan instalasi mekanikal/elektrikal di kawasan industri Cilegon dan Banten.",
    capacityRange: "25 - 600 Ton",
    k3Compliance: "SIA Kemnaker RI Aktif + Operator SIO Kelas 1 & 2 + SLI (Safe Load Indicator) Terkalibrasi",
    applications: [
      "Erection konstruksi baja & precast pabrik",
      "Maintenance & turnaround kilang petrokimia",
      "Pemasangan boiler, pipa gas, dan tangki bertekanan",
      "Bongkar muat mesin industri kapasitas besar",
      "Konstruksi infrastruktur jembatan & jalan tol"
    ],
    models: [
      { brand: "Tadano", capacity: "25 Ton, 80 Ton", specsNote: "Outrigger multi-stage, boom 4-5 section presisi tinggi" },
      { brand: "Sany", capacity: "25 Ton, 55 Ton", specsNote: "Efisiensi hidrolik mutakhir, monitoring beban real-time" },
      { brand: "Kato", capacity: "50 Ton, 160 Ton", specsNote: "Radius putar fleksibel, jangkauan jib tambahan" },
      { brand: "Liebherr", capacity: "200 Ton, 360 Ton", specsNote: "Heavy-duty all-terrain chassis, computerized load chart" },
      { brand: "Demag", capacity: "600 Ton", specsNote: "Superlift counterweight system untuk super-heavy lifts" },
    ],
    faqs: [
      {
        question: "Berapa minimal durasi sewa Telescopic Mobile Crane di Berkah Ryan?",
        answer: "Kami melayani sewa harian (shift 8 jam), mingguan, bulanan, hingga kontrak project jangka panjang dengan atau tanpa operator (sesuai verifikasi)."
      },
      {
        question: "Apakah unit crane sudah dilengkapi sertifikat K3 dan Surat Izin Alat (SIA)?",
        answer: "Ya, seluruh armada crane kami memiliki sertifikasi Riksa Uji / SIA resmi dari Kemnaker RI yang masih berlaku, dan dioperasikan oleh operator dengan SIO resmi."
      },
      {
        question: "Apakah lokasi proyek disurvei terlebih dahulu sebelum mobilisasi crane?",
        answer: "Tim engineer kami siap melakukan site survey gratis untuk area Cilegon & Banten guna menghitung radius kerja, kapasitas optimum, dan daya dukung tanah."
      }
    ]
  },
  {
    id: 2,
    slug: "truck-mounted-crane",
    category: "Truck Crane",
    name: "Truck Mounted Crane",
    shortDesc: "Kombinasi fleksibilitas kargo truk dan crane teleskopik berkapasitas 3 hingga 16 Ton untuk area semi-offroad dan perkotaan.",
    description: "Truck Mounted Crane atau biasa dikenal sebagai derek Hiab merupakan armada derek yang terpasang langsung di atas bak truk angkut. Memberikan keunggulan unik: dapat mengangkut muatan material di atas bak sekaligus melakukan loading/unloading secara mandiri tanpa memerlukan alat bantu derek tambahan.",
    capacityRange: "3 - 16 Ton",
    k3Compliance: "SIA Kemnaker RI Aktif + Operator SIO Kelas 3 + Rigging Gear Bersertifikat",
    applications: [
      "Pengiriman & penurunan trafo / genset listrik",
      "Pemasangan tiang pancang mini & tiang PJU/listrik",
      "Mobilisasi pipa baja dan material konstruksi",
      "Penanganan logistik internal pabrik & gudang terbuka"
    ],
    models: [
      { brand: "Tadano", capacity: "3 Ton, 5 Ton, 8 Ton", specsNote: "Sasis truk Isuzu / Hino, jangkauan teleskopik 12 meter" },
      { brand: "Unic", capacity: "10 Ton, 16 Ton", specsNote: "Heavy duty knuckle & telescopic boom" }
    ],
    faqs: [
      {
        question: "Kapan sebaiknya menggunakan Truck Mounted Crane dibanding Mobile Crane besar?",
        answer: "Truck Mounted Crane sangat hemat biaya dan efisien jika Anda membutuhkan transportasi material dari satu tempat ke tempat lain sekaligus proses bongkar-muat di lokasi yang memiliki ruang terbatas."
      },
      {
        question: "Berapa kapasitas angkut bak truk selain daya angkat crane-nya?",
        answer: "Bak truk kami mampu mengangkut beban muatan hingga 8 - 15 ton tergantung tipe sasis armada yang dipilih."
      }
    ]
  },
  {
    id: 3,
    slug: "crawler-crane",
    category: "Heavy Crawler",
    name: "Crawler Crane ",
    shortDesc: "Derek roda rantai baja berdaya angkat masif 45 hingga 550 Ton untuk stabilitas maksimal di medan lunak dan proyek skala mega.",
    description: "Crawler Crane menggunakan roda rantai baja (tracks) yang mendistribusikan beban secara merata di atas tanah, menjadikannya pilihan utama untuk proyek pelabuhan, pembangunan dermaga, erection jembatan bentang panjang, dan pekerjaan pondasi berat di mana medan tanah belum dipadatkan.",
    capacityRange: "45 - 550 Ton",
    k3Compliance: "SIA Kemnaker RI Aktif + Operator SIO Kelas 1 + Heavy Lift Safety Plan",
    applications: [
      "Proyek pelabuhan, jetty, dan reklamasi pantai",
      "Pekerjaan pondasi bore pile & sheet pile",
      "Erection struktur baja bertonase tinggi",
      "Pembangunan power plant & kilang minyak"
    ],
    models: [
      { brand: "Link Belt", capacity: "45 Ton", specsNote: "Lattice boom serbaguna untuk pekerjaan pondasi" },
      { brand: "Sumitomo", capacity: "60 Ton", specsNote: "Efisiensi bahan bakar dan kestabilan swing optimal" },
      { brand: "P & H", capacity: "150 Ton", specsNote: "Lifting kapasitas menengah-berat yang tangguh" },
      { brand: "Manitowoc", capacity: "200 Ton", specsNote: "Variable position counterweight untuk jangkauan radius jauh" },
      { brand: "Demag", capacity: "400 Ton", specsNote: "Heavy crawler untuk erection struktur mega" },
      { brand: "Kobelco", capacity: "550 Ton", specsNote: "Flagship heavy lift crawler crane dengan load monitoring canggih" }
    ],
    faqs: [
      {
        question: "Bagaimana proses mobilisasi Crawler Crane ke lokasi proyek?",
        answer: "Crawler Crane dimobilisasi menggunakan armada trailer lowbed/flatbed kami dalam bentuk modul terurai, kemudian dirakit di lokasi proyek oleh tim teknisi bersertifikat kami."
      },
      {
        question: "Apakah Berkah Ryan menyediakan pelat baja untuk landasan crawler crane?",
        answer: "Ya, kami menyediakan paket sewa lengkap bersama Steel Road Plate ketebalan 25mm untuk memastikan stabilitas jalur gerak crawler di tanah berlumpur."
      }
    ]
  },
  {
    id: 4,
    slug: "roughter-crane",
    category: "Rough Terrain Crane",
    name: "Roughter Crane (Rough Terrain)",
    shortDesc: "Derek compact 4x4 berkapasitas 25 hingga 110 Ton dengan kemampuan manuver lincah di area sempit, becek, dan bergelombang.",
    description: "Rough Terrain Crane (Roughter) dirancang dengan ban karet berukuran besar dan sistem penggerak 4 roda (4WD / 4WS) yang mampu bermanuver di lahan proyek yang becek, berbatu, atau area kilang industri dengan akses jalan yang sempit.",
    capacityRange: "25 - 110 Ton",
    k3Compliance: "SIA Kemnaker RI Aktif + Operator SIO Kelas 2 + Crab Steering Certified",
    applications: [
      "Pembangunan fasilitas industri di area tanah mentah",
      "Pekerjaan utilitas dalam area kilang yang padat struktur",
      "Penanganan pipa dan struktur baja di medan berlumpur",
      "Rigging cepat di area pertambangan dan quarry"
    ],
    models: [
      { brand: "Tadano", capacity: "25 Ton, 50 Ton, 80 Ton", specsNote: "Kemudi 4 roda (crab mode), outrigger asimetris pintar" },
      { brand: "Kato", capacity: "70 Ton, 110 Ton", specsNote: "Boom kompak berkekuatan tinggi, performa offroad superior" }
    ],
    faqs: [
      {
        question: "Apa perbedaan utama Roughter Crane dan All-Terrain Mobile Crane?",
        answer: "Roughter Crane memiliki satu kabin untuk mengemudi dan mengangkat beban dengan sasis compact 2-axle 4x4, sangat unggul di jalanan tanah proyek yang tidak rata dibanding mobile crane biasa."
      },
      {
        question: "Apakah Roughter Crane bisa dikemudikan di jalan raya umum?",
        answer: "Untuk jarak dekat dapat melintas mandiri, sedangkan untuk jarak jauh kami sarankan mobilisasi dengan trailer lowbed untuk menjaga kondisi ban dan keawetan mesin."
      }
    ]
  },
  {
    id: 5,
    slug: "forklift-rental",
    category: "Material Handling",
    name: "Forklift Diesel & Heavy Duty",
    shortDesc: "Armada forklift terawat kapasitas 3 hingga 35 Ton untuk operasional pergudangan, loading dock pabrik, dan perpindahan mesin industri.",
    description: "CV. Berkah Ryan menyediakan rental forklift bertenaga diesel dan heavy-duty mast dengan kapasitas mulai 3 Ton hingga 35 Ton. Cocok untuk kebutuhan pergudangan logistik bahan baku, unloading kontainer, serta moving mesin produksi industri.",
    capacityRange: "3 - 35 Ton",
    k3Compliance: "SIA Kemnaker RI Aktif + Operator Forklift SIO K3 Kemnaker",
    applications: [
      "Unloading raw material kontainer pabrik petrokimia & tekstil",
      "Stacking pallet di gudang logistik high-bay",
      "Relokasi mesin press, genset, dan transformator berat",
      "Operasional harian dock pelabuhan & stuffer kontainer"
    ],
    models: [
      { brand: "TCM", capacity: "3 Ton, 5 Ton, 10 Ton", specsNote: "Mast 3-stage container spec, side shifter, garpu presisi" },
      { brand: "Daewoo / Mitsubishi", capacity: "15 Ton, 25 Ton, 35 Ton", specsNote: "Heavy duty counterbalance, hydraulic fork positioner" }
    ],
    faqs: [
      {
        question: "Apakah tersedia opsi sewa forklift bulanan tanpa operator (bare rental)?",
        answer: "Ya, kami menyediakan skema sewa bulanan dan tahunan include maintenance berkala, baik dengan operator berpengalaman ataupun bare rental untuk pabrik yang sudah memiliki operator bersertifikat."
      },
      {
        question: "Bagaimana jika terjadi kendala teknis pada unit forklift di lokasi?",
        answer: "Kami memberikan garansi service teknisi on-site dan penggantian unit cadangan dalam tempo singkat untuk memastikan lini produksi Anda tidak terganggu."
      }
    ]
  },
  {
    id: 6,
    slug: "trailer-logistics-road-plate",
    category: "Logistics & Ground Protection",
    name: "Trailer 40 Feet & Steel Road Plate",
    shortDesc: "Armada trailer flatbed/lowbed 40 ft dan pelat baja tebal 25mm untuk mobilisasi alat serta stabilisasi tanah lunak proyek.",
    description: "Layanan pendukung logistik terpadu untuk memastikan mobilisasi alat berat dan material konstruksi berjalan lancar. Menyediakan truk trailer flatbed & lowbed 40 feet serta penyewaan Steel Road Plate (Pelat Baja) 25mm sebagai alas lintasan crane di medan berlumpur.",
    capacityRange: "Flatbed / Lowbed 40 Ft & Plate 25mm (1.5m x 6m)",
    k3Compliance: "Uji Kir Aktif + Pengikat Rantai/Sling K3 Grade 80 + Rigging Safety Inspection",
    applications: [
      "Mobilisasi komponen crane, excavator, dan alat berat antar site",
      "Pengangkutan material konstruksi panjang (tiang pancang, besi beton, pipa)",
      "Pembuatan jalan kerja sementara crane di atas tanah rawa/becek",
      "Proteksi lantai beton pabrik dari tekanan beban roda alat berat"
    ],
    models: [
      { brand: "Trailer Cargo", capacity: "Flatbed & Lowbed 40 Feet", specsNote: "Multi-axle heavy transport, kapasitas muat hingga 50 Ton" },
      { brand: "Steel Road Plate", capacity: "Tebal 25 mm (1.5m x 6m)", specsNote: "Baja solid tahan beban titik tekan outrigger hingga ratusan ton" }
    ],
    faqs: [
      {
        question: "Apakah pelat baja bisa disewa bersamaan dengan paket crane?",
        answer: "Tentu, penyewaan paket crane bersama steel road plate sangat disarankan untuk area kerja tanah mentah demi keamanan operasional dan efisiensi biaya logistik."
      },
      {
        question: "Berapa banyak pelat baja yang dapat disewa?",
        answer: "Kami memiliki stok puluhan lembar steel plate siap kirim langsung ke site Anda di wilayah Banten dan sekitarnya."
      }
    ]
  }
];

export interface PortfolioItem {
  slug: string;
  client: string;
  title: string;
  location: string;
  year: string;
  category: string;
  highlight: string;
  scope: string[];
  equipmentUsed: string[];
  description: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    slug: "pertamina-banten",
    client: "PT Pertamina (Persero)",
    title: "Perawatan Fasilitas Fuel Storage & Depot BBM Pertamina Banten",
    location: "Cilegon & Serang, Banten",
    year: "2023 - 2026",
    category: "Oil & Gas Maintenance",
    highlight: "Zero Accident dalam perawatan berkala tangki penyimpanan BBM dan instalasi pipa suplai energi nasional.",
    scope: [
      "Pengangkatan dan reposisi tangki serta pipa bahan bakar",
      "Maintenance berkala katup dan sistem pompa tekanan tinggi",
      "Penyediaan forklift harian untuk logistik suku cadang kilang",
      "Penerapan prosedur K3 migas berstandar tinggi"
    ],
    equipmentUsed: [
      "Telescopic Mobile Crane Tadano 25T & 80T",
      "Mobile Crane Kato 160T",
      "Forklift TCM 5T & 10T",
      "Steel Road Plate 25mm"
    ],
    description: "CV. Berkah Ryan secara berkala dipercaya menyediakan armada Telescopic Crane dan Forklift untuk mendukung program preventive maintenance fasilitas penyimpanan dan distribusi BBM Pertamina di Banten, mengedepankan kepatuhan SOP K3 Migas tanpa insiden."
  },
  {
    slug: "chandra-asri-petrochemical",
    client: "PT Chandra Asri Petrochemical Tbk",
    title: "Ekspansi Pabrik Petrokimia Skala Mega Ciwandan Cilegon",
    location: "Ciwandan, Kota Cilegon, Banten",
    year: "2024",
    category: "Petrochemical Construction",
    highlight: "Erection struktur baja berat dan tangki reaktor dengan Crawler Crane kapasitas hingga 400 Ton.",
    scope: [
      "Erection kolom reaktor dan bejana tekan (pressure vessel)",
      "Pemasangan pipe rack bertingkat di area petrokimia aktif",
      "Mobilisasi material dengan trailer flatbed 40 ft",
      "Engineering lift plan terperinci dengan ground bearing calculation"
    ],
    equipmentUsed: [
      "Crawler Crane Demag 400T & Manitowoc 200T",
      "Telescopic Crane Liebherr 200T",
      "Trailer Lowbed 40 Feet",
      "Steel Road Plate 25mm"
    ],
    description: "Mendukung proyek perluasan kompleks industri petrokimia terintegrasi terbesar di Indonesia dengan menghadirkan crawler crane bertonase besar dan tim rigging bersertifikat tinggi."
  },
  {
    slug: "pln-indonesia-power",
    client: "PT PLN Indonesia Power (PLTU Suralaya)",
    title: "Maintenance & Overhaul Pembangkit Listrik PLTU Suralaya",
    location: "Suralaya, Cilegon, Banten",
    year: "2023 - 2025",
    category: "Power Plant Overhaul",
    highlight: "Penggantian komponen turbin dan boiler generator selama periode overhaul tahunan.",
    scope: [
      "Lifting komponen rotor dan casing turbin generator",
      "Overhaul unit boiler dan saluran pipa uap superheated",
      "Penyediaan Roughter Crane untuk akses sempit area pembangkit",
      "Standar keselamatan kelistrikan tegangan tinggi"
    ],
    equipmentUsed: [
      "Roughter Crane Tadano 50T & Kato 70T",
      "Telescopic Mobile Crane Sany 55T & Tadano 80T",
      "Heavy Forklift Daewoo 15T"
    ],
    description: "Mendukung keandalan pasokan listrik Jawa-Bali dengan menyediakan unit mobile crane dan roughter crane siap siaga 24 jam selama masa maintenance pembangkit PLTU Suralaya."
  },
  {
    slug: "lotte-chemical-cilegon",
    client: "PT Lotte Chemical Titan Nusantara",
    title: "Konstruksi Kompleks Pabrik Kimia Baru Merak Cilegon",
    location: "Merak, Cilegon, Banten",
    year: "2024",
    category: "Plant Construction & Erection",
    highlight: "Dukungan armada derek crawler dan mobile crane sepanjang fase konstruksi struktur utama.",
    scope: [
      "Pemasangan struktur baja modular dan instalasi crane girder",
      "Lifting peralatan mekanikal pabrik polimer",
      "Logistik pengangkutan material berat dari dermaga ke lokasi site",
      "Manajemen keselamatan kerja terpadu standar internasional"
    ],
    equipmentUsed: [
      "Crawler Crane Kobelco 550T & Link Belt 45T",
      "Telescopic Crane Kato 50T",
      "Trailer 40 Feet Multi-Axle",
      "Forklift Mitsubishi 25T"
    ],
    description: "Menjadi mitra lifting terpercaya dalam fase pembangunan fasilitas kimia baru Lotte Chemical di Merak, menjamin ketepatan jadwal instalasi komponen mekanikal utama."
  },
  {
    slug: "indorama-cilegon",
    client: "PT Indorama Ventures Indonesia",
    title: "Operasional Harian Warehouse & Handling Serat Sintetis",
    location: "Cilegon, Banten",
    year: "2023 - Sekarang",
    category: "Industrial Logistics & Forklift Rental",
    highlight: "Tingkat uptime operasional armada forklift di atas 97% dengan sistem maintenance preventif rutin.",
    scope: [
      "Bongkar muat bahan baku PTA dari armada kontainer",
      "Penataan fiber bales di gudang racking bertingkat",
      "Proteksi lantai kerja gudang dengan steel road plate",
      "Layanan servis berkala dan unit standby pengganti"
    ],
    equipmentUsed: [
      "Forklift TCM 3T, 5T, 10T",
      "Forklift Mitsubishi 25T",
      "Steel Road Plate 25mm"
    ],
    description: "Penyediaan armada forklift diesel jangka panjang beserta proteksi pelat baja untuk mendukung kelancaran rantai pasok pabrik serat sintetis Indorama di Cilegon."
  }
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  contentHtml: string;
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "panduan-memilih-kapasitas-crane-proyek-konstruksi",
    title: "Panduan Lengkap Memilih Kapasitas Crane yang Tepat untuk Proyek Konstruksi",
    excerpt: "Hindari risiko over-capacity atau bahaya tipping. Pelajari cara membaca load chart, radius kerja boom, dan perhitungan daya dukung tanah sebelum menyewa crane.",
    category: "Panduan Teknis",
    readTime: "6 min baca",
    date: "12 Agustus 2026",
    contentHtml: `
      <p>Memilih kapasitas derek (crane) yang tepat bukan sekadar mencocokkan berat beban dengan kapasitas nominal crane di brosur. Kesalahan perhitungan dalam lift engineering dapat berakibat fatal pada keselamatan kerja dan pembengkakan anggaran proyek.</p>
      <h3>1. Memahami Load Chart (Tabel Beban)</h3>
      <p>Kapasitas nominal crane (misal 50 Ton) umumnya hanya berlaku pada radius kerja minimum (sekitar 3 meter dari titik pusat crane) dengan sudut boom paling tegak. Semakin panjang boom diulur dan semakin jauh radius kerja (working radius), kapasitas angkat crane akan menurun drastis.</p>
      <h3>2. Faktor Penambah Berat (Rigging Deductions)</h3>
      <p>Saat menghitung total kapasitas angkat, jangan lupa menambahkan berat hook block, spreader bar, wire rope sling, shackle, dan berat boom tip extension ke dalam total beban bruto.</p>
      <h3>3. Daya Dukung Tanah & Outrigger Pad</h3>
      <p>Setiap crane menyalurkan gaya tekan ribuan kilogram per sentimeter persegi melalui outrigger-nya ke tanah. Pastikan selalu menggunakan landasan pelat baja (steel road plate) tebal 25mm jika bekerja di area tanah lunak atau berpasir.</p>
    `
  },
  {
    slug: "standar-keselamatan-k3-crane-sia-sio-kemnaker",
    title: "Pentingnya Sertifikasi K3, SIA, dan SIO dalam Rental Alat Berat di Indonesia",
    excerpt: "Kenali regulasi resmi Kemnaker RI mengenai Surat Izin Alat (SIA / Riksa Uji) dan Surat Izin Operasi (SIO) operator derek demi menjamin zero accident di site proyek Anda.",
    category: "K3 & Regulasi",
    readTime: "5 min baca",
    date: "28 Juli 2026",
    contentHtml: `
      <p>Di sektor industri dan konstruksi berat di Indonesia, kepatuhan K3 (Keselamatan dan Kesehatan Kerja) adalah harga mati. Setiap alat angkat dan angkut yang beroperasi wajib memenuhi kualifikasi legalitas yang ketat.</p>
      <h3>Apa itu Surat Izin Alat (SIA / Riksa Uji)?</h3>
      <p>SIA diterbitkan oleh Dinas Tenaga Kerja / Kemnaker RI melalui pemeriksaan berkala oleh Perusahaan Jasa K3 (PJK3) terakreditasi. Pemeriksaan ini menguji kekuatan struktur baja, sistem hidrolik, rem mekanis, dan Safe Load Indicator (SLI).</p>
      <h3>Klasifikasi Surat Izin Operasi (SIO) Operator Crane</h3>
      <ul>
        <li><strong>Kelas I:</strong> Memiliki wewenang mengoperasikan crane dengan kapasitas angkat di atas 100 Ton.</li>
        <li><strong>Kelas II:</strong> Mengoperasikan crane berkapasitas 25 Ton sampai dengan 100 Ton.</li>
        <li><strong>Kelas III:</strong> Mengoperasikan crane berkapasitas sampai dengan 25 Ton.</li>
      </ul>
      <p>Di CV. Berkah Ryan, seluruh armada dan operator kami 100% tersertifikasi aktif demi menjaga kelancaran audit HSE di site klien.</p>
    `
  },
  {
    slug: "perbedaan-telescopic-crane-vs-crawler-crane",
    title: "Telescopic Mobile Crane vs Crawler Crane: Mana yang Tepat untuk Proyek Anda?",
    excerpt: "Perbandingan mendalam antara derek roda ban hidrolik dan derek roda rantai baja dari aspek mobilitas, stabilitas, biaya mobilisasi, dan kondisi medan proyek.",
    category: "Komparasi Alat",
    readTime: "7 min baca",
    date: "15 Juni 2026",
    contentHtml: `
      <p>Dua jenis crane yang paling sering digunakan dalam proyek konstruksi besar adalah Telescopic Mobile Crane dan Crawler Crane. Masing-masing memiliki keunggulan karakteristik yang dirancang untuk medan dan beban kerja tertentu.</p>
      <h3>Kelebihan Telescopic Mobile Crane</h3>
      <p>Derek teleskopik bertransmisi roda karet sangat unggul dalam kecepatan mobilisasi. Crane ini dapat melintas di jalan raya umum secara legal dan dapat langsung disiapkan (setup outrigger) dalam waktu hitungan jam setelah tiba di lokasi kerja.</p>
      <h3>Kelebihan Crawler Crane</h3>
      <p>Crawler Crane memiliki roda rantai baja yang mampu membagi tekanan beban ke area tanah yang jauh lebih luas. Derek ini tidak memerlukan outrigger saat bekerja dan mampu berjalan perlahan membawa beban (pick-and-carry) di lokasi kerja yang luas seperti dermaga pelabuhan atau pondasi jembatan.</p>
    `
  },
  {
    slug: "fungsi-steel-road-plate-stabilisasi-lahan-crane",
    title: "Mengapa Proyek Perlu Sewa Steel Road Plate (Pelat Baja Jalan) 25mm?",
    excerpt: "Pelajari bagaimana pelat baja tebal 25mm mampu mencegah amblasnya crane, melindungi lantai beton pabrik, dan menjaga kontinuitas logistik di musim hujan.",
    category: "Logistik & Lahan",
    readTime: "4 min baca",
    date: "2 Mei 2026",
    contentHtml: `
      <p>Salah satu penyebab utama kecelakaan kerja pada pengoperasian crane adalah amblasnya salah satu titik tumpu outrigger akibat daya dukung tanah yang tidak memadai. Di sinilah peran krusial Steel Road Plate berketebalan 25mm.</p>
      <h3>1. Menghilangkan Risiko Amblas pada Tanah Lunak</h3>
      <p>Steel plate ukuran 1.5m x 6m mendistribusikan tekanan titik outrigger ke area permukaan yang lebih luas, sehingga tanah berlumpur tetap stabil dan aman saat crane mengangkat beban maksimal.</p>
      <h3>2. Perlindungan Lantai Pabrik & Jalan Akses</h3>
      <p>Saat mobilisasi mesin industri berbobot puluhan ton di dalam pabrik, steel plate dipasang untuk mencegah retak atau hancurnya struktur lantai beton dan lantai epoxy pabrik.</p>
    `
  }
];
