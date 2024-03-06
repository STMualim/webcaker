const jobs = [
  {
    id: 1,
    name: "Frontend Developer",
    location: "Jakarta",
    company: "PT. Indah Banget",
    posted: "2 jam lalu",
    tags: ["Fulltime", "Remote"],
    deskripsi: "Bertanggung jawab untuk mengembangkan antarmuka pengguna (UI/UX) menggunakan HTML, CSS, dan JavaScript. Berkolaborasi dengan tim pengembangan untuk menciptakan pengalaman pengguna yang responsif dan menarik."
  },
  {
    id: 2,
    name: "UX/UI Designer",
    location: "Bandung",
    company: "Design Studio X",
    posted: "4 jam lalu",
    tags: ["Fulltime"],
    deskripsi: "Merancang antarmuka pengguna yang intuitif dan menarik serta pengalaman pengguna yang menyenangkan. Mengembangkan prototipe, wireframe, dan desain visual untuk aplikasi dan situs web."
  },
  {
    id: 3,
    name: "Software Engineer",
    location: "Surabaya",
    company: "Tech Innovations Inc.",
    posted: "1 hari lalu",
    tags: ["Fulltime", "Onsite"],
    deskripsi: "Mengembangkan perangkat lunak dan sistem menggunakan berbagai bahasa pemrograman dan teknologi. Menganalisis kebutuhan pengguna, merancang solusi, dan mengimplementasikan kode dengan standar pengembangan yang baik."
  },
  {
    id: 4,
    name: "Product Manager",
    location: "Semarang",
    company: "Strategic Solutions Ltd.",
    posted: "2 hari lalu",
    tags: ["Fulltime", "Onsite"],
    deskripsi: "Bertanggung jawab atas pengelolaan siklus hidup produk, dari konseptualisasi hingga peluncuran. Mengidentifikasi kebutuhan pasar, menganalisis persaingan, dan memastikan produk memenuhi harapan pengguna."
  },
  {
    id: 5,
    name: "Data Analyst",
    location: "Medan",
    company: "Insights Analytics Co.",
    posted: "3 hari lalu",
    tags: ["Part-time", "Remote"],
    deskripsi: "Menganalisis data untuk mendapatkan wawasan bisnis yang berharga. Membersihkan, mengolah, dan memvisualisasikan data untuk mendukung pengambilan keputusan. Memahami tren pasar dan perilaku pengguna."
  },
  {
    id: 6,
    name: "Backend Developer",
    location: "Makassar",
    company: "CodeCrafters",
    posted: "1 minggu lalu",
    tags: ["Fulltime", "Onsite"],
    deskripsi: "Mengembangkan logika bisnis, pemrosesan data, dan API server menggunakan bahasa pemrograman dan teknologi backend yang relevan. Membangun dan memelihara infrastruktur backend untuk aplikasi dan layanan."
  },
  {
    id: 7,
    name: "Network Administrator",
    location: "Denpasar",
    company: "Connectivity Solutions Inc.",
    posted: "2 minggu lalu",
    tags: ["Fulltime", "Onsite"],
    deskripsi: "Mengelola dan memelihara jaringan komputer serta sistem koneksi internet. Menangani konfigurasi, pemantauan, dan pemecahan masalah jaringan untuk memastikan kinerja yang optimal."
  },
  {
    id: 8,
    name: "Graphic Designer",
    location: "Palembang",
    company: "Creative Minds Agency",
    posted: "3 minggu lalu",
    tags: ["Part-time", "Remote"],
    deskripsi: "Menciptakan desain visual yang menarik dan efektif untuk berbagai proyek klien, termasuk branding, promosi, dan materi pemasaran lainnya. Mengembangkan konsep desain dan menghasilkan karya yang berkualitas tinggi."
  },
  {
    id: 9,
    name: "Mobile App Developer",
    location: "Balikpapan",
    company: "App Innovations Co.",
    posted: "1 bulan lalu",
    tags: ["Fulltime", "Onsite"],
    deskripsi: "Mengembangkan aplikasi mobile untuk platform Android dan iOS menggunakan berbagai bahasa pemrograman dan kerangka kerja. Memastikan aplikasi memiliki performa dan pengalaman pengguna yang optimal."
  },
  {
    id: 10,
    name: "Quality Assurance Analyst",
    location: "Pekanbaru",
    company: "Testing Solutions Ltd.",
    posted: "1 bulan lalu",
    tags: ["Fulltime", "Remote"],
    deskripsi: "Melakukan pengujian perangkat lunak untuk mengidentifikasi bug, kesalahan, dan kelemahan. Menguji fungsionalitas, keandalan, kinerja, dan keamanan aplikasi untuk memastikan kualitas produk yang tinggi."
  },
  {
    id: 11,
    name: "System Administrator",
    location: "Yogyakarta",
    company: "IT Systems Management",
    posted: "2 bulan lalu",
    tags: ["Fulltime", "Onsite"],
    deskripsi: "Mengelola dan memelihara infrastruktur IT perusahaan, termasuk server, jaringan, dan sistem operasi. Menangani instalasi, konfigurasi, pemeliharaan, dan pemecahan masalah sistem secara efisien."
  },
  {
    id: 12,
    name: "DevOps Engineer",
    location: "Banjarmasin",
    company: "Cloud Solutions Ltd.",
    posted: "2 bulan lalu",
    tags: ["Fulltime", "Remote"],
    deskripsi: "Bertanggung jawab atas pengembangan, pengelolaan, dan otomatisasi infrastruktur IT menggunakan praktik DevOps. Mengintegrasikan pengembangan perangkat lunak dengan operasi sistem untuk meningkatkan efisiensi dan kinerja."
  },
  {
    id: 13,
    name: "Content Writer",
    location: "Padang",
    company: "Digital Media Agency",
    posted: "3 bulan lalu",
    tags: ["Part-time", "Remote"],
    deskripsi: "Menghasilkan konten yang berkualitas tinggi untuk berbagai platform digital, termasuk situs web, blog, media sosial, dan kampanye pemasaran. Meneliti topik, membuat outline, dan menulis artikel yang informatif dan menarik."
  },
  {
    id: 14,
    name: "IT Project Manager",
    location: "Manado",
    company: "Project Management Inc.",
    posted: "3 bulan lalu",
    tags: ["Fulltime", "Onsite"],
    deskripsi: "Memimpin dan mengelola proyek TI dari awal hingga akhir, termasuk perencanaan, pengembangan, pelaksanaan, dan pengelolaan risiko. Berkomunikasi dengan stakeholder dan tim untuk memastikan proyek berhasil diluncurkan."
  },
  {
    id: 15,
    name: "Sales Representative",
    location: "Makassar",
    company: "Sales Solutions Ltd.",
    posted: "4 bulan lalu",
    tags: ["Fulltime", "Remote"],
    deskripsi: "Bertanggung jawab untuk menjual produk atau layanan perusahaan kepada pelanggan potensial. Mengidentifikasi peluang penjualan, mengembangkan hubungan pelanggan, dan mencapai target penjualan yang ditetapkan."
  },
  {
    id: 16,
    name: "Customer Support Specialist",
    location: "Pontianak",
    company: "Customer Care Co.",
    posted: "4 bulan lalu",
    tags: ["Fulltime", "Onsite"],
    deskripsi: "Menanggapi pertanyaan, masalah, dan permintaan dukungan dari pelanggan melalui berbagai saluran komunikasi. Menyediakan solusi dan bantuan yang tepat untuk memastikan kepuasan pelanggan yang tinggi."
  },
  {
    id: 17,
    name: "Marketing Coordinator",
    location: "Ambon",
    company: "Marketing Solutions Inc.",
    posted: "5 bulan lalu",
    tags: ["Part-time", "Remote"],
    deskripsi: "Membantu dalam perencanaan dan pelaksanaan strategi pemasaran untuk meningkatkan visibilitas merek dan memperoleh pelanggan baru. Mengelola kampanye iklan, acara promosi, dan konten pemasaran."
  },
  {
    id: 18,
    name: "HR Manager",
    location: "Balikpapan",
    company: "Human Resources Ltd.",
    posted: "5 bulan lalu",
    tags: ["Fulltime", "Onsite"],
    deskripsi: "Mengelola fungsi sumber daya manusia perusahaan, termasuk rekrutmen, pelatihan, kompensasi, dan kebijakan karyawan. Memastikan kepatuhan hukum dan kesejahteraan karyawan secara keseluruhan."
  },
  {
    id: 19,
    name: "Financial Analyst",
    location: "Palu",
    company: "Finance Experts Co.",
    posted: "6 bulan lalu",
    tags: ["Fulltime", "Remote"],
    deskripsi: "Menganalisis data keuangan, menyusun laporan keuangan, dan memberikan rekomendasi strategis untuk memperbaiki kinerja keuangan perusahaan. Mengidentifikasi tren pasar, risiko, dan peluang investasi."
  },
  {
    id: 20,
    name: "Event Coordinator",
    location: "Samarinda",
    company: "Event Management Ltd.",
    posted: "6 bulan lalu",
    tags: ["Fulltime", "Onsite"],
    deskripsi: "Merencanakan, mengatur, dan mengelola berbagai acara perusahaan dan kegiatan promosi. Berkoordinasi dengan vendor, lokasi, dan peserta untuk memastikan acara berjalan lancar dan berhasil."
  },
];

export default jobs;
