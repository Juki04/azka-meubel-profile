# Roadmap Profil Web Meubel

## 📌 Konsep Dasar
- **Tujuan**: Membuat profile web profesional untuk bisnis meubel
- **Target Utama**: Presentasi produk & memudahkan komunikasi dengan customer

## 🌐 Teknologi Stack
- **Frontend**: Vue.js
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Domain**: Custom Domain

## 📄 Struktur Halaman

### 1. Beranda (Landing Page)
- **Headline**: "Kerajinan Meubel Berkualitas, Desain Tak Terlupakan"
- **Konten**:
  * Sambutan singkat
  * 3 Produk Unggulan
  * Call to Action (CTA)
- **Filosofi**: Setiap potongan kayu diubah menjadi karya seni fungsional

### 2. Tentang Kami
- **Headline**: "Craft Passion, Warisan Keahlian"
- **Konten**:
  * Sejarah perusahaan
  * Proses produksi
  * Media sosial integration
- **Misi**: Menghadirkan kenyamanan melalui desain yang menceritakan kisah

### 3. Katalog Produk
- **Headline**: "Koleksi Eksklusif, Desain Tak Terbatas"
- **Fokus**:
  * Keunikan bahan
  * Proses pembuatan
  * Deskripsi produk bercerita

### 4. Galeri Proyek
- **Headline**: "Kepuasan Pelanggan, Bukti Nyata Kualitas Kami"
- **Fitur**:
  * Dynamic Counter Pelanggan (2000+)
  * Testimoni dengan:
    - Nama pelanggan
    - Foto profil
    - Pekerjaan
    - Rating bintang
    - Komentar detail
    - Produk yang dibeli

### 5. Kontak & Lokasi
- **Headline**: "Hubungi Kami, Wujudkan Impian Anda"
- **Konten**:
  * Formulir kontak
  * Embedded Google Maps
  * Jam operasional
  * Link Shopee
  * Pesan custom produk

## 🎨 Design Konsep

### 1. Wireframing
- **Pendekatan**: Mobile-first design
- **Layout Umum**:
  * Navbar minimalis, sticky
  * Hero section dengan full-width image
  * Grid 2-3 kolom untuk katalog
  * Scroll-based reveal content
- **Struktur Grid**:
  * Menggunakan flexbox/CSS grid
  * Responsive breakpoints
  * Konsisten antar halaman

### 2. Mood Board
- **Warna Palette**:
  * Primary: Cokelat kayu (#8B4513)
  * Secondary: Abu-abu modern (#5F6368)
  * Accent: Putih natural (#F5F5F5)
  * Text: Hitam soft (#333333)
- **Tipografi**:
  * Headling: Montserrat/Roboto
  * Body: Open Sans/Lato
  * Ukuran: 
    - Mobile: 16px body, 24-32px heading
    - Desktop: 18px body, 32-48px heading
- **Konsistensi**:
  * Jarak antar elemen
  * Ketebalan font
  * Warna teks

### 3. Design Principles
- **Filosofi Desain**:
  * "Kesederhanaan adalah kemewahan tertinggi"
  * Fokus pada kualitas visual produk
- **Elemen Desain**:
  * Bayangan lembut pada card
  * Transisi halus
  * Hover effect minimalis
  * Animasi subtle
- **Navigasi**:
  * Menu hamburger di mobile
  * Clear call-to-action
  * Breadcrumb untuk orientasi

### 4. Referensi Visual
- **Inspirasi Website**:
  * Hay Design
  * Ferm Living
  * Restoration Hardware
- **Fokus Visual**:
  * Foto produk full-width
  * Close-up detail furniture
  * Suasana ruangan dengan produk
  * Proses crafting
- **Teknik Visual**:
  * Foto high-resolution
  * Lighting natural
  * Komposisi simetris
  * Kontras warna lembut

## 🔧 Fitur Tambahan
- WhatsApp floating button
- Mobile friendly design
- Responsive layout

## 📊 Testimoni Dummy (Struktur Data)
```javascript
const testimoniData = [
  {
    id: 1,
    nama: "Budi Setiawan",
    pekerjaan: "Pengusaha Properti",
    foto: "budi.jpg",
    rating: 5,
    komentar: "Desain elegant, kualitas premium.",
    produk: "Meja Direktur Klasik"
  }
  // ... data lainnya
]
```

## 🚀 Development Notes
- Prioritaskan mobile-first design
- Fokus pada user experience
- Implementasi SEO sederhana
- Pastikan loading cepat

## 📋 Todo List
- [ ] Desain wireframe
- [ ] Implementasi Vue.js
- [ ] Styling dengan Tailwind
- [ ] Integrasi Google Maps
- [ ] Uji responsivitas
- [ ] Deploy ke Vercel

## 💡 Design Philosophy
"Lebih dari sekadar furniture, kami adalah penjaga tradisi kerajinan"

## 📞 Kontak Pengembang
- Email: [your_email]
- WhatsApp Business: [your_number]

## 📈 Prototype Development
### 1. Metode dan Tools
- **Metode**: Low-Code Prototype
- **Tools**: 
  * Vue.js + Tailwind CSS
  * Storybook untuk komponen

### 2. Tahapan Prototype
  1. Struktur Komponen Dasar
     - Navbar
     - Hero Section
     - Card Produk
     - Footer
  2. Responsive Layout
     - Mobile breakpoint
     - Flexbox/Grid
  3. Interaksi Sederhana
     - Hover effects
     - Modal sederhana
     - Scroll animations

### 3. Contoh Struktur Komponen Vue
```vue
<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name">
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <button @click="showDetails">Detail Produk</button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    showDetails() {
      // Logic untuk menampilkan modal
    }
  }
}
</script>

<style scoped>
.product-card {
  @apply shadow-md rounded-lg p-4 
         transition-all hover:shadow-xl
}
</style>
```

### 4. Prototype Workflow
- Mulai dari komponen terkecil
- Gabungkan menjadi halaman utuh
- Uji responsivitas
- Iterasi desain

## 🎓 Persyaratan Akademis
- **Tujuan Tugas**: Membuat profile web profesional untuk bisnis meubel
- **Kriteria Penilaian**:
  * Desain responsif
  * Integrasi Google My Business
  * Fungsionalitas website
  * Kualitas kode
  * Dokumentasi

### Dokumen Pendukung
- [ ] Laporan Teknis
- [ ] Dokumentasi Kode
- [ ] Presentasi Singkat

### Batasan Teknis
- Waktu pengerjaan
- Kompleksitas fitur
- Ketersediaan sumber daya

### Potensi Pengembangan Lanjutan
- Sistem manajemen konten
- Fitur interaksi lanjutan
- Optimasi SEO

### Catatan Penting
- Fokus pada kualitas, bukan kuantitas
- Demonstrasikan pemahaman konsep web modern
- Tunjukkan kreativitas dalam desain
