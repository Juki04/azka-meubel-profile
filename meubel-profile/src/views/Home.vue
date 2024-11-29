<template>
  <div class="container px-4 py-8 mx-auto">
    <section class="flex flex-col items-center p-4 mb-8 text-white rounded-lg shadow-md hero bg-meubel-primary sm:p-6 md:p-8 md:flex-row">
      <div class="mb-6 md:w-2/3 md:mb-0 md:mr-8">
        <h1 class="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
          Meubel Berkualitas, Desain Tak Terlupakan
        </h1>
        <p class="mb-6 text-base sm:text-lg md:text-xl">
          Setiap potongan kayu kami ubah menjadi karya seni fungsional. Kualitas terbaik, harga terjangkau.
        </p>
        <div class="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
          <router-link 
            to="/produk" 
            class="px-4 py-2 text-sm bg-white rounded-full transition text-meubel-primary hover:bg-gray-100 sm:px-6 sm:py-3 sm:text-base"
          >
            Lihat Produk
          </router-link>
          <router-link 
            to="/kontak" 
            class="px-4 py-2 text-sm text-white rounded-full border-2 border-white transition hover:bg-white hover:text-meubel-primary sm:px-6 sm:py-3 sm:text-base"
          >
            Hubungi Kami
          </router-link>
        </div>
      </div>
      <div class="md:w-1/3">
        <img 
          src="/images/hero-furniture.jpg" 
          alt="Meubel Berkualitas" 
          class="object-cover w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>

    <section class="mb-8 featured-products sm:mb-12">
      <h2 class="mb-6 text-2xl font-bold text-center sm:text-3xl sm:mb-8">
        Produk Unggulan
      </h2>
      <div class="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="product in featuredProducts" 
          :key="product.id" 
          class="overflow-hidden bg-white rounded-lg shadow-md transition group hover:shadow-xl"
        >
          <div class="overflow-hidden relative aspect-square">
            <img 
              :src="product.image" 
              :alt="product.name" 
              class="object-cover w-full h-full transition duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity from-black/80 group-hover:opacity-100">
              <div class="absolute right-0 bottom-0 left-0 p-4 text-white sm:p-6">
                <p class="text-sm">
                  {{ product.category }}
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 sm:p-6">
            <h3 class="mb-2 text-lg font-semibold sm:text-xl">
              {{ product.name }}
            </h3>
            <p class="mb-4 text-sm text-gray-600 line-clamp-2 sm:text-base">
              {{ product.description }}
            </p>
            <div class="flex justify-between items-center">
              <button 
                class="px-4 py-2 w-full text-sm text-center text-white rounded-full transition bg-meubel-primary sm:px-6 sm:py-3 sm:text-base hover:bg-opacity-90"
                @click="openProductModal(product)"
              >
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 text-center sm:mt-8">
        <router-link 
          to="/produk" 
          class="inline-block px-6 py-2 text-sm text-white rounded-full transition bg-meubel-primary sm:px-8 sm:py-3 sm:text-base hover:bg-opacity-90"
        >
          Lihat Semua Produk
        </router-link>
      </div>
    </section>

    <section class="p-6 bg-gray-100 rounded-lg why-choose-us sm:p-12">
      <h2 class="mb-6 text-2xl font-bold text-center sm:text-3xl sm:mb-8">
        Mengapa Memilih Kami?
      </h2>
      <div class="grid gap-6 sm:gap-8 md:grid-cols-3">
        <div class="text-center">
          <div class="flex justify-center mb-4">
            <svg
              class="w-12 h-12 sm:w-16 sm:h-16 text-meubel-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-lg font-semibold sm:text-xl">
            Kualitas Terjamin
          </h3>
          <p class="text-sm text-gray-600 sm:text-base">
            Setiap produk dibuat dengan keahlian dan bahan berkualitas tinggi.
          </p>
        </div>
        <div class="text-center">
          <div class="flex justify-center mb-4">
            <svg
              class="w-12 h-12 sm:w-16 sm:h-16 text-meubel-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-lg font-semibold sm:text-xl">
            Harga Kompetitif
          </h3>
          <p class="text-sm text-gray-600 sm:text-base">
            Dapatkan produk berkualitas dengan harga yang terjangkau.
          </p>
        </div>
        <div class="text-center">
          <div class="flex justify-center mb-4">
            <svg
              class="w-12 h-12 sm:w-16 sm:h-16 text-meubel-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.768-.231-1.48-.634-2.026M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.768.231-1.48.634-2.026m0 0a5.002 5.002 0 019.536 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-lg font-semibold sm:text-xl">
            Pelayanan Ramah
          </h3>
          <p class="text-sm text-gray-600 sm:text-base">
            Tim kami siap membantu Anda menemukan solusi furnitur terbaik.
          </p>
        </div>
      </div>
    </section>
    <!-- Product Modal -->
    <div 
      v-if="selectedProduct" 
      class="flex fixed inset-0 z-50 justify-center items-end p-0 bg-black bg-opacity-50 sm:items-center sm:p-4"
      @click.self="closeModal"
    >
      <div class="relative w-full bg-white rounded-t-2xl shadow-xl sm:max-w-lg sm:rounded-lg">
        <div class="flex sticky top-0 justify-end p-4 bg-white rounded-t-2xl border-b">
          <button 
            class="p-2 text-gray-500 rounded-lg hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-meubel-primary" 
            aria-label="Tutup"
            @click="closeModal"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="p-4 sm:p-6 overflow-y-auto max-h-[80vh] sm:max-h-[70vh]">
          <div class="aspect-[4/3] sm:aspect-[16/9] mb-4 overflow-hidden rounded-lg">
            <img 
              :src="selectedProduct.image" 
              :alt="selectedProduct.name"
              class="object-cover w-full h-full"
            />
          </div>
          <h3 class="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">
            {{ selectedProduct.name }}
          </h3>
          <p class="mb-2 text-sm text-gray-600">
            Kategori: {{ selectedProduct.category }}
          </p>
          <p class="mb-6 text-sm text-gray-700 sm:text-base">
            {{ selectedProduct.description }}
          </p>
        </div>
        <div class="sticky bottom-0 p-4 bg-white border-t">
          <a 
            :href="getWhatsAppLink(selectedProduct)"
            target="_blank"
            class="flex gap-2 justify-center items-center px-4 py-3 w-full text-base text-white bg-green-600 rounded-full sm:px-6 hover:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      selectedProduct: null,
      featuredProducts: [
        {
          id: '1',
          name: 'Set Sofa Modern',
          description: 'Set sofa modern dengan bahan berkualitas tinggi, nyaman, dan tahan lama. Cocok untuk ruang tamu modern. Dilengkapi dengan busa premium dan rangka kayu jati yang kokoh. Tersedia dalam berbagai pilihan warna dan bahan pelapis.',
          image: '/images/products/sofa-1.jpg',
          category: 'Ruang Tamu'
        },
        {
          id: '2',
          name: 'Tempat Tidur Klasik',
          description: 'Tempat tidur klasik dengan ukiran tradisional yang mewah. Memberikan nuansa elegan pada kamar tidur Anda. Terbuat dari kayu jati pilihan dengan finishing premium. Tersedia dalam berbagai ukuran dan desain ukiran.',
          image: '/images/products/bed-1.jpg',
          category: 'Kamar Tidur'
        },
        {
          id: '3',
          name: 'Set Meja Makan',
          description: 'Set meja makan modern dengan 6 kursi. Sempurna untuk momen bersantap bersama keluarga. Menggunakan kayu solid dengan finishing tahan lama. Kursi didesain ergonomis dengan bantalan yang nyaman.',
          image: '/images/products/dining-1.jpg',
          category: 'Ruang Makan'
        }
      ]
    }
  },
  // Membersihkan efek ketika komponen dihancurkan
  beforeUnmount() {
    document.body.style.overflow = 'auto'
  },
  methods: {
    openProductModal(product) {
      this.selectedProduct = product
      // Mencegah scroll pada body ketika modal terbuka
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.selectedProduct = null
      // Mengembalikan scroll pada body ketika modal tertutup
      document.body.style.overflow = 'auto'
    },
    getWhatsAppLink(product) {
      const message = encodeURIComponent(`Halo, saya tertarik dengan produk ${product.name}. Mohon informasi lebih lanjut.`)
      return `https://wa.me/6285857124558?text=${message}`
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #8B4513 0%, #5D4037 100%);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animasi modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Mencegah scroll pada iOS saat modal terbuka */
.modal-open {
  position: fixed;
  width: 100%;
}
</style>
