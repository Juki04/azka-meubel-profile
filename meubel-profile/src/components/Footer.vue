<template>
  <footer class="text-white bg-meubel-primary">
    <!-- Main Footer Content -->
    <div class="container px-4 py-8 mx-auto lg:py-12">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <!-- Company Info -->
        <div class="sm:col-span-2 lg:col-span-1">
          <div class="flex items-center mb-6">
            <img 
              src="/images/logo.png" 
              alt="Azka Meubel Logo" 
              class="mr-3 w-auto h-10"
            />
            <h3 class="text-2xl font-bold">
              Azka Meubel
            </h3>
          </div>
          <div class="space-y-4">
            <div>
              <p class="mb-2 font-medium">
                Workshop & Showroom:
              </p>
              <p class="text-gray-300">
                Jl. Kedawung, Kediri<br />
                Jawa Timur, Indonesia
              </p>
            </div>
            <div>
              <p class="mb-2 font-medium">
                Jam Operasional:
              </p>
              <p class="text-gray-300">
                Senin - Minggu: 08.00 - 17.00<br />
                Buka Setiap Hari
              </p>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold">
            Menu
          </h3>
          <ul class="space-y-3">
            <li>
              <router-link 
                to="/" 
                class="flex items-center transition-colors duration-200 hover:text-gray-300"
              >
                <svg
                  class="mr-2 w-4 h-4"
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
                Beranda
              </router-link>
            </li>
            <li>
              <router-link 
                to="/tentang" 
                class="flex items-center transition-colors duration-200 hover:text-gray-300"
              >
                <svg
                  class="mr-2 w-4 h-4"
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
                Tentang Kami
              </router-link>
            </li>
            <li>
              <router-link 
                to="/produk" 
                class="flex items-center transition-colors duration-200 hover:text-gray-300"
              >
                <svg
                  class="mr-2 w-4 h-4"
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
                Produk
              </router-link>
            </li>
            <li>
              <router-link 
                to="/galeri" 
                class="flex items-center transition-colors duration-200 hover:text-gray-300"
              >
                <svg
                  class="mr-2 w-4 h-4"
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
                Galeri
              </router-link>
            </li>
            <li>
              <router-link 
                to="/kontak" 
                class="flex items-center transition-colors duration-200 hover:text-gray-300"
              >
                <svg
                  class="mr-2 w-4 h-4"
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
                Kontak
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4 sm:col-span-2 lg:col-span-2">
          <h3 class="text-xl font-bold">
            Hubungi Kami
          </h3>
          <div class="space-y-4">
            <a 
              href="https://wa.me/6285857124558" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center transition-colors duration-200 hover:text-gray-300 group"
            >
              <div class="p-2 mr-3 bg-white bg-opacity-10 rounded-full transition-all duration-200 group-hover:bg-opacity-20">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p class="font-medium">WhatsApp</p>
                <p class="text-sm text-gray-300">+62 858-5712-4558</p>
              </div>
            </a>
            <a 
              href="mailto:azkawildan2004@gmail.com?subject=Pertanyaan%20tentang%20Azka%20Meubel&body=Halo%20Azka%20Meubel%2C%0A%0ASaya%20tertarik%20dengan%20produk%20Anda%20dan%20ingin%20bertanya%20lebih%20lanjut.%0A%0ATerima%20kasih." 
              class="flex items-center transition-colors duration-200 hover:text-gray-300 group"
            >
              <div class="p-2 mr-3 bg-white bg-opacity-10 rounded-full transition-all duration-200 group-hover:bg-opacity-20">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium">Email</p>
                <p class="text-xs text-gray-300">azkawildan2004@gmail.com</p>
              </div>
            </a>
            
            <!-- Social Media -->
            <div class="pt-4">
              <p class="mb-4 font-medium">
                Ikuti Kami
              </p>
              <div class="flex space-x-4">
                <a 
                  href="https://instagram.com/azkameubel.kdr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="p-2 bg-white bg-opacity-10 rounded-full transition-all duration-200 hover:bg-opacity-20"
                  title="Instagram"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/azkameubel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="p-2 bg-white bg-opacity-10 rounded-full transition-all duration-200 hover:bg-opacity-20"
                  title="Facebook"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-white border-opacity-10">
      <div class="container px-4 py-6 mx-auto">
        <p class="text-sm text-center text-gray-300">
          &copy; {{ currentYear }} Azka Meubel. Hak Cipta Dilindungi.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>

<script>
export default {
  name: 'SiteFooter',
}
</script>

<style scoped>
.router-link-active {
  @apply text-gray-300;
}
</style>
