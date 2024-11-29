<!-- eslint-disable vue/require-default-prop -->
<!-- eslint-disable vue/require-default-prop -->
<template>
  <div class="container px-4 py-8 mx-auto">
    <!-- Hero Section -->
    <section class="p-6 mb-8 text-white rounded-lg shadow-md bg-meubel-primary sm:p-8">
      <h1 class="mb-4 text-3xl font-bold sm:text-4xl">
        Koleksi Produk Kami
      </h1>
      <p class="text-lg sm:text-xl">
        Menghadirkan furnitur berkualitas dengan desain elegan dan material terbaik
      </p>
    </section>

    <!-- Category Navigation -->
    <section class="mb-8">
      <div class="flex flex-wrap gap-2 justify-center items-center">
        <button 
          v-for="category in categories" 
          :key="category"
          :class="[
            'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
            selectedCategory === category 
              ? 'bg-meubel-primary text-white shadow-md transform scale-105' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
          ]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
        <button 
          :class="[
            'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
            !selectedCategory 
              ? 'bg-meubel-primary text-white shadow-md transform scale-105' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
          ]"
          @click="selectedCategory = ''"
        >
          Semua Koleksi
        </button>
      </div>
    </section>

    <!-- Products Grid -->
    <div class="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id" 
        class="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
      >
        <div class="relative aspect-[4/3] overflow-hidden">
          <img 
            :src="product.image" 
            :alt="product.name"
            class="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p class="text-sm font-medium">
                {{ product.category }}
              </p>
            </div>
          </div>
        </div>
        
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2 text-gray-900 group-hover:text-meubel-primary transition-colors">
            {{ product.name }}
          </h3>
          <p class="text-sm text-gray-600 mb-4 line-clamp-2">
            {{ product.description }}
          </p>
          <button 
            class="w-full px-4 py-2.5 text-sm font-medium text-white bg-meubel-primary rounded-full hover:bg-opacity-90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-meubel-primary focus:ring-offset-2"
            @click="openProductModal(product)"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>

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
        <div class="p-4 overflow-y-auto max-h-[80vh] sm:max-h-[70vh] sm:p-6">
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
          
          <!-- Features List -->
          <div class="mb-6 space-y-4">
            <h4 class="text-base font-semibold sm:text-lg">
              Spesifikasi Produk:
            </h4>
            <ul class="space-y-2 text-sm text-gray-600 sm:text-base">
              <li class="flex items-center">
                <span class="mr-2">•</span>
                <span>Material: {{ selectedProduct.material }}</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">•</span>
                <span>Dimensi: {{ selectedProduct.dimensions }}</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">•</span>
                <span>Finishing: {{ selectedProduct.finishing }}</span>
              </li>
            </ul>
          </div>
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
  name: 'Products',
  props: {
    id: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {
      selectedCategory: '',
      selectedProduct: null,
      categories: ['Ruang Tamu', 'Kamar Tidur', 'Ruang Makan', 'Kantor', 'Custom'],
      products: [
        {
          id: '1',
          name: 'Set Sofa Modern',
          category: 'Ruang Tamu',
          description: 'Set sofa modern dengan bahan berkualitas tinggi, nyaman, dan tahan lama. Cocok untuk ruang tamu modern. Dilengkapi dengan busa premium dan rangka kayu jati yang kokoh.',
          material: 'Kayu Jati, Fabric Premium',
          dimensions: 'P: 200cm x L: 85cm x T: 90cm',
          finishing: 'Natural Coating',
          image: '/images/products/sofa-1.jpg'
        },
        {
          id: '2',
          name: 'Tempat Tidur Klasik',
          category: 'Kamar Tidur',
          description: 'Tempat tidur klasik dengan ukiran tradisional yang mewah. Memberikan nuansa elegan pada kamar tidur Anda. Dibuat dengan kayu jati pilihan dan finishing premium.',
          material: 'Kayu Jati Solid',
          dimensions: 'P: 200cm x L: 180cm x T: 120cm',
          finishing: 'Natural Brown',
          image: '/images/products/bed-1.jpg'
        },
        {
          id: '3',
          name: 'Meja Makan Minimalis',
          category: 'Ruang Makan',
          description: 'Meja makan dengan desain minimalis modern. Sempurna untuk ruang makan kontemporer. Dilengkapi dengan 6 kursi yang nyaman.',
          material: 'Kayu Mahoni, Kaca Tempered',
          dimensions: 'P: 180cm x L: 90cm x T: 75cm',
          finishing: 'Dark Walnut',
          image: '/images/products/dining-1.jpg'
        },
        {
          id: '4',
          name: 'Meja Kerja Executive',
          category: 'Kantor',
          description: 'Meja kerja executive dengan desain profesional. Dilengkapi dengan laci penyimpanan dan cable management system.',
          material: 'Kayu Jati, Metal',
          dimensions: 'P: 160cm x L: 80cm x T: 75cm',
          finishing: 'Black Oak',
          image: '/images/products/office-1.jpg'
        },
        {
          id: '5',
          name: 'Lemari Pakaian Custom',
          category: 'Custom',
          description: 'Lemari pakaian yang dapat disesuaikan dengan kebutuhan Anda. Tersedia berbagai pilihan ukuran, material, dan finishing.',
          material: 'Custom (Kayu Jati/Mahoni)',
          dimensions: 'Sesuai Pesanan',
          finishing: 'Custom',
          image: '/images/products/wardrobe-1.jpg'
        },
        {
          id: '6',
          name: 'Sofa Single Premium',
          category: 'Ruang Tamu',
          description: 'Sofa single dengan desain ergonomis dan bahan premium. Cocok untuk ruang tamu atau ruang baca.',
          material: 'Kayu Jati, Leather Premium',
          dimensions: 'P: 90cm x L: 85cm x T: 90cm',
          finishing: 'Teak Oil',
          image: '/images/products/sofa-2.jpg'
        },
        {
          id: '7',
          name: 'Set Meja Konsol',
          category: 'Ruang Tamu',
          description: 'Set meja konsol dengan cermin. Sempurna untuk area foyer atau ruang tamu. Desain klasik dengan sentuhan modern.',
          material: 'Kayu Mahoni',
          dimensions: 'P: 120cm x L: 40cm x T: 80cm',
          finishing: 'Antique White',
          image: '/images/products/console-1.jpg'
        },
        {
          id: '8',
          name: 'Kitchen Set Modern',
          category: 'Custom',
          description: 'Kitchen set modern dengan material berkualitas tinggi. Dapat disesuaikan dengan ukuran dapur Anda.',
          material: 'HPL, Multiplex',
          dimensions: 'Sesuai Pesanan',
          finishing: 'Custom',
          image: '/images/products/kitchen-1.jpg'
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      if (!this.selectedCategory) return this.products
      return this.products.filter(product => product.category === this.selectedCategory)
    }
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto'
  },
  methods: {
    openProductModal(product) {
      this.selectedProduct = product
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.selectedProduct = null
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