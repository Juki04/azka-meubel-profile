<template>
  <!-- Navbar Container -->
  <nav class="fixed top-0 z-50 w-full bg-white shadow-md">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center" @click="isOpen = false">
            <img 
              src="/images/logo.png" 
              alt="Azka Meubel Logo" 
              class="w-auto h-6 sm:h-8 md:h-10"
            />
            <span class="ml-2 text-base font-bold text-meubel-primary sm:text-lg md:text-xl">
              Azka Meubel
            </span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:space-x-8">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            class="px-3 py-2 text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:text-meubel-primary"
            :class="{ 'text-meubel-primary': isCurrentRoute(item.path) }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button
            type="button"
            class="inline-flex justify-center items-center p-2 text-gray-600 rounded-md hover:text-meubel-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-meubel-primary"
            :aria-expanded="isOpen"
            @click="isOpen = !isOpen"
          >
            <span class="sr-only">{{ isOpen ? 'Close main menu' : 'Open main menu' }}</span>
            <!-- Icon when menu is closed -->
            <svg 
              class="w-6 h-6 transition-transform duration-200 ease-in-out" 
              :class="{ 'hidden': isOpen, 'block': !isOpen }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open -->
            <svg 
              class="w-6 h-6 transition-transform duration-200 ease-in-out" 
              :class="{ 'block': isOpen, 'hidden': !isOpen }"
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
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <TransitionRoot :show="isOpen" as="template">
      <div class="md:hidden">
        <div 
          class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg sm:px-3"
        >
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="block px-3 py-2 text-base font-medium text-gray-600 rounded-md transition duration-150 ease-in-out hover:text-meubel-primary hover:bg-gray-50"
            :class="{ 'text-meubel-primary bg-gray-50': isCurrentRoute(item.path) }"
            @click="isOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </TransitionRoot>
  </nav>

  <!-- Spacer to prevent content from hiding under fixed navbar -->
  <div class="h-16" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { TransitionRoot } from '@headlessui/vue'

const route = useRoute()
const isOpen = ref(false)

const navigationItems = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang', path: '/tentang' },
  { name: 'Produk', path: '/produk' },
  { name: 'Galeri', path: '/galeri' },
  { name: 'Kontak', path: '/kontak' }
]

const isCurrentRoute = (path) => {
  return route.path === path
}

// Close mobile menu when window is resized to desktop view
const handleResize = () => {
  if (window.innerWidth >= 768 && isOpen.value) {
    isOpen.value = false
  }
}

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  const nav = document.querySelector('nav')
  if (isOpen.value && nav && !nav.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.router-link-active {
  @apply text-meubel-primary;
}

/* Smooth transition for mobile menu */
.v-enter-active,
.v-leave-active {
  transition-property: opacity, transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
