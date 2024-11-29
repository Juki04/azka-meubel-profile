<template>
  <div class="container px-4 py-8 mx-auto">
    <!-- Hero Section -->
    <section class="p-4 mb-8 text-white rounded-lg shadow-md md:p-8 md:mb-12 bg-meubel-primary">
      <h1 class="mb-2 text-3xl font-bold md:mb-4 md:text-4xl">
        Galeri Karya
      </h1>
      <p class="text-sm md:text-base">
        Koleksi hasil karya terbaik dari tim kami
      </p>
    </section>

    <!-- Filter Buttons -->
    <div class="flex flex-wrap gap-2 mb-8">
      <button
        v-for="filter in filters"
        :key="filter"
        :class="[
          'px-3 py-1.5 text-sm md:text-base rounded-full transition-colors',
          activeFilter === filter
            ? 'bg-meubel-primary text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        ]"
        @click="activeFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
      <div 
        v-for="(image, index) in filteredGallery" 
        :key="index"
        class="overflow-hidden relative bg-white rounded-lg shadow-md transition duration-300 transform cursor-pointer group hover:-translate-y-1 hover:shadow-xl"
        @click="openLightbox(index)"
      >
        <div class="overflow-hidden aspect-square">
          <img 
            :src="image.image" 
            :alt="image.title"
            class="object-cover w-full h-full transition duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/80 group-hover:opacity-100">
            <div class="absolute right-0 bottom-0 left-0 p-4 transition-transform duration-300 transform translate-y-4 md:p-6 group-hover:translate-y-0">
              <h3 class="mb-1 text-base font-semibold text-white md:mb-2 md:text-lg line-clamp-2">
                {{ image.title }}
              </h3>
              <p class="mb-2 text-sm text-gray-200 line-clamp-2">
                {{ image.description }}
              </p>
              <div class="flex justify-between items-center">
                <span class="text-xs text-gray-300 md:text-sm">
                  {{ image.date }}
                </span>
                <span class="px-2 py-1 text-xs text-white rounded-full md:px-3 bg-meubel-primary">
                  {{ image.category }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <TransitionRoot appear :show="isLightboxOpen" as="template">
      <HeadlessDialog as="div" class="relative z-50" @close="closeLightbox">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 backdrop-blur-sm bg-black/75" />
        </TransitionChild>

        <div class="overflow-y-auto fixed inset-0">
          <div class="flex justify-center items-center p-2 min-h-full md:p-4">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-4xl">
                <div class="relative bg-black rounded-lg overflow-hidden">
                  <!-- Close Button -->
                  <button
                    class="absolute -top-2 -right-2 z-10 p-2 text-white rounded-full transition bg-black/50 hover:bg-black/70"
                    @click="closeLightbox"
                  >
                    <svg
                      class="w-5 h-5"
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

                  <!-- Navigation Buttons -->
                  <button
                    class="absolute left-2 top-1/2 z-10 p-1.5 text-white rounded-full transition -translate-y-1/2 md:p-2 bg-black/50 hover:bg-black/70"
                    @click="previousImage"
                  >
                    <svg
                      class="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    class="absolute right-2 top-1/2 z-10 p-1.5 text-white rounded-full transition -translate-y-1/2 md:p-2 bg-black/50 hover:bg-black/70"
                    @click="nextImage"
                  >
                    <svg
                      class="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <!-- Image Container -->
                  <div class="relative aspect-[4/3] md:aspect-[16/9]">
                    <img
                      :src="filteredGallery[currentImageIndex].image"
                      :alt="filteredGallery[currentImageIndex].title"
                      class="object-contain w-full h-full"
                    />
                  </div>

                  <!-- Image Info -->
                  <div class="p-4 text-white bg-black/80">
                    <h3 class="mb-1 text-lg font-semibold md:text-xl">
                      {{ filteredGallery[currentImageIndex].title }}
                    </h3>
                    <p class="mb-2 text-sm text-gray-300 md:text-base">
                      {{ filteredGallery[currentImageIndex].description }}
                    </p>
                    <div class="flex justify-between items-center">
                      <span class="text-xs text-gray-400 md:text-sm">
                        {{ filteredGallery[currentImageIndex].date }}
                      </span>
                      <span class="px-2 py-1 text-xs text-white rounded-full md:px-3 bg-meubel-primary">
                        {{ filteredGallery[currentImageIndex].category }}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </TransitionRoot>
  </div>
</template>

<script>
import { Dialog as HeadlessDialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
  name: 'Gallery',
  components: {
    HeadlessDialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
  },
  data() {
    return {
      activeFilter: 'Semua',
      isLightboxOpen: false,
      currentImageIndex: 0,
      filters: ['Semua', 'Proyek Terbaru', 'Ruang Tamu', 'Kamar Tidur', 'Ruang Makan', 'Workshop'],
      gallery: [
        {
          id: 1,
          title: 'Set Ruang Tamu Modern',
          description: 'Kombinasi kursi sofa dan meja tamu dengan desain modern yang menghadirkan kenyamanan dan keindahan.',
          category: 'Ruang Tamu',
          date: 'Oktober 2023',
          image: '/images/gallery/living-room-1.jpg'
        },
        {
          id: 2,
          title: 'Proses Pembuatan Lemari',
          description: 'Melihat detail proses pengerjaan lemari oleh tim ahli kami di workshop.',
          category: 'Workshop',
          date: 'September 2023',
          image: '/images/gallery/workshop-1.jpg'
        },
        {
          id: 3,
          title: 'Set Kamar Tidur Klasik',
          description: 'Set kamar tidur bergaya klasik dengan detail ukiran yang mewah.',
          category: 'Kamar Tidur',
          date: 'Agustus 2023',
          image: '/images/gallery/bedroom-1.jpg'
        },
        {
          id: 4,
          title: 'Meja Makan Keluarga',
          description: 'Meja makan besar dengan 8 kursi, cocok untuk momen kebersamaan keluarga.',
          category: 'Ruang Makan',
          date: 'Juli 2023',
          image: '/images/gallery/dining-1.jpg'
        },
        {
          id: 5,
          title: 'Proyek Interior Rumah Modern',
          description: 'Proyek penataan interior rumah modern dengan furniture custom.',
          category: 'Proyek Terbaru',
          date: 'November 2023',
          image: '/images/gallery/project-1.jpg'
        },
        {
          id: 6,
          title: 'Detail Pengerjaan Ukiran',
          description: 'Proses pembuatan detail ukiran pada furniture klasik.',
          category: 'Workshop',
          date: 'Oktober 2023',
          image: '/images/gallery/workshop-2.jpg'
        }
      ]
    }
  },
  computed: {
    filteredGallery() {
      if (this.activeFilter === 'Semua') return this.gallery
      return this.gallery.filter(item => item.category === this.activeFilter)
    }
  },
  methods: {
    openLightbox(index) {
      this.currentImageIndex = index
      this.isLightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.isLightboxOpen = false
      this.currentImageIndex = 0
      document.body.style.overflow = 'auto'
    },
    previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.filteredGallery.length - 1) {
        this.currentImageIndex++
      }
    },
    shareOnWhatsApp() {
      if (!this.filteredGallery[this.currentImageIndex]) return
      const text = `Lihat karya furniture kami: ${this.filteredGallery[this.currentImageIndex].title} - Azka Meubel`
      const url = `https://wa.me/?text=${encodeURIComponent(text)}`
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>
