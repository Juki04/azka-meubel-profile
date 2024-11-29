<template>
  <ErrorBoundary v-slot="{ error }">
    <div v-if="error">
      <div class="flex justify-center items-center px-4 py-12 min-h-screen bg-gray-50 sm:px-6 lg:px-8">
        <div class="space-y-8 w-full max-w-md text-center">
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Mohon maaf, terjadi kesalahan
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Silakan refresh halaman atau hubungi kami jika masalah berlanjut
          </p>
          <div class="mt-5">
            <button
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md border border-transparent shadow-sm bg-meubel-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-meubel-primary"
              @click="window.location.reload()"
            >
              Refresh Halaman
            </button>
          </div>
        </div>
      </div>
    </div>
    <template v-else>
      <Navbar />
      <main class="pt-16 min-h-screen">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </template>
  </ErrorBoundary>
</template>

<script>
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import SiteFooter from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    SiteFooter,
    WhatsAppButton,
    ErrorBoundary
  }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
