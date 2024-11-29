<template>
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <!-- Hero Section -->
    <div class="mb-12 text-center sm:mb-16">
      <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
        Tentang Azka Meubel
      </h1>
      <p class="mt-4 text-sm text-gray-600 sm:text-base lg:text-lg">
        Menghadirkan Furnitur Berkualitas Sejak 2004
      </p>
    </div>

    <!-- Company Story -->
    <div class="grid gap-8 items-center mb-16 md:grid-cols-2">
      <div class="space-y-4 sm:space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          Cerita Kami
        </h2>
        <p class="text-sm text-gray-600 sm:text-base">
          Azka Meubel didirikan pada tahun 2004 dengan visi untuk menghadirkan furnitur berkualitas tinggi yang 
          menggabungkan keindahan desain dengan kenyamanan. Berlokasi di Kedawung, Kediri, kami telah melayani 
          ribuan pelanggan dengan produk-produk furnitur terbaik.
        </p>
        <p class="text-sm text-gray-600 sm:text-base">
          Setiap produk kami dibuat dengan penuh ketelitian dan dedikasi oleh para pengrajin berpengalaman, 
          menggunakan bahan-bahan pilihan untuk memastikan kualitas dan daya tahan yang optimal.
        </p>
      </div>
      <div class="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
        <img
          src="/images/workshop.jpg"
          alt="Workshop Azka Meubel"
          class="object-cover w-full h-full"
        />
      </div>
    </div>

    <!-- Values Section -->
    <div class="mb-16">
      <h2 class="mb-8 text-2xl font-bold text-center sm:text-3xl">
        Nilai-Nilai Kami
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="p-6 bg-white rounded-lg shadow-md sm:p-8">
          <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-meubel-primary/10">
            <svg
              class="w-6 h-6 text-meubel-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-lg font-semibold sm:text-xl">
            Kualitas
          </h3>
          <p class="text-sm text-gray-600 sm:text-base">
            Kami berkomitmen untuk menghadirkan produk berkualitas tinggi dengan material terbaik dan pengerjaan yang teliti.
          </p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-md sm:p-8">
          <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-meubel-primary/10">
            <svg
              class="w-6 h-6 text-meubel-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-lg font-semibold sm:text-xl">
            Ketepatan Waktu
          </h3>
          <p class="text-sm text-gray-600 sm:text-base">
            Kami menghargai waktu Anda dengan memberikan layanan tepat waktu dan estimasi pengerjaan yang akurat.
          </p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-md sm:p-8">
          <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-meubel-primary/10">
            <svg
              class="w-6 h-6 text-meubel-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-lg font-semibold sm:text-xl">
            Inovasi
          </h3>
          <p class="text-sm text-gray-600 sm:text-base">
            Kami terus berinovasi dalam desain dan teknologi untuk menghadirkan furnitur yang modern dan fungsional.
          </p>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="mb-16">
      <h2 class="mb-8 text-2xl font-bold text-center sm:text-3xl">
        Tim Kami
      </h2>
      
      <!-- Founder & CEO -->
      <div class="mb-12">
        <div class="mx-auto max-w-sm text-center">
          <div class="overflow-hidden relative mx-auto mb-4 w-40 h-40 rounded-full ring-4 ring-meubel-primary/20">
            <img
              src="/images/team/owner.jpg"
              alt="Ahmad - Founder & CEO"
              class="object-cover w-full h-full"
            />
          </div>
          <h3 class="mb-1 text-xl font-semibold sm:text-2xl">
            M. Azka Wildan M. P
          </h3>
          <p class="text-sm text-gray-600 sm:text-base">
            Founder & CEO
          </p>
        </div>
      </div>

      <!-- Team Members Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Production Manager -->
        <div class="text-center">
          <div class="overflow-hidden relative mx-auto mb-4 w-32 h-32 rounded-full ring-2 ring-meubel-primary/20">
            <img
              src="/images/team/production.jpg"
              alt="Production Manager"
              class="object-cover w-full h-full"
            />
          </div>
          <h3 class="mb-1 text-lg font-semibold">
            Dimas Wahyudi P
          </h3>
          <p class="text-sm text-gray-600">
            Production Manager
          </p>
        </div>

        <!-- Design Lead -->
        <div class="text-center">
          <div class="overflow-hidden relative mx-auto mb-4 w-32 h-32 rounded-full ring-2 ring-meubel-primary/20">
            <img
              src="/images/team/design.jpg"
              alt="Design Lead"
              class="object-cover w-full h-full"
            />
          </div>
          <h3 class="mb-1 text-lg font-semibold">
            Achmad Nabila A
          </h3>
          <p class="text-sm text-gray-600">
            Design Lead
          </p>
        </div>

        <!-- Marketing Manager -->
        <div class="text-center">
          <div class="overflow-hidden relative mx-auto mb-4 w-32 h-32 rounded-full ring-2 ring-meubel-primary/20">
            <img
              src="/images/team/marketing.jpg"
              alt="Marketing Manager"
              class="object-cover w-full h-full"
            />
          </div>
          <h3 class="mb-1 text-lg font-semibold">
            Shanti Oktafia
          </h3>
          <p class="text-sm text-gray-600">
            Marketing Manager
          </p>
        </div>

        <!-- Quality Control -->
        <div class="text-center">
          <div class="overflow-hidden relative mx-auto mb-4 w-32 h-32 rounded-full ring-2 ring-meubel-primary/20">
            <img
              src="/images/team/qc.jpg"
              alt="Quality Control"
              class="object-cover w-full h-full"
            />
          </div>
          <h3 class="mb-1 text-lg font-semibold">
            Zacky Alifa W
          </h3>
          <p class="text-sm text-gray-600">
            Quality Control
          </p>
        </div>

        <!-- Customer Service -->
        <div class="text-center">
          <div class="overflow-hidden relative mx-auto mb-4 w-32 h-32 rounded-full ring-2 ring-meubel-primary/20">
            <img
              src="/images/team/cs.jpg"
              alt="Customer Service"
              class="object-cover w-full h-full"
            />
          </div>
          <h3 class="mb-1 text-lg font-semibold">
            Kevin Satrio C
          </h3>
          <p class="text-sm text-gray-600">
            Customer Service
          </p>
        </div>

        <!-- Finance -->
        <div class="text-center">
          <div class="overflow-hidden relative mx-auto mb-4 w-32 h-32 rounded-full ring-2 ring-meubel-primary/20">
            <img
              src="/images/team/finance.jpg"
              alt="Finance"
              class="object-cover w-full h-full"
            />
          </div>
          <h3 class="mb-1 text-lg font-semibold">
            Anindya P
          </h3>
          <p class="text-sm text-gray-600">
            Finance
          </p>
        </div>
      </div>
    </div>

    <!-- Achievements Section -->
    <div class="mb-16">
      <h2 class="mb-8 text-2xl font-bold text-center sm:text-3xl">
        Pencapaian Kami
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-6 text-center bg-white rounded-lg shadow-md sm:p-8">
          <div class="mb-2 text-3xl font-bold text-meubel-primary sm:text-4xl">
            500+
          </div>
          <p class="text-sm text-gray-600 sm:text-base">
            Proyek Selesai
          </p>
        </div>
        <div class="p-6 text-center bg-white rounded-lg shadow-md sm:p-8">
          <div class="mb-2 text-3xl font-bold text-meubel-primary sm:text-4xl">
            300+
          </div>
          <p class="text-sm text-gray-600 sm:text-base">
            Pelanggan Puas
          </p>
        </div>
        <div class="p-6 text-center bg-white rounded-lg shadow-md sm:p-8">
          <div class="mb-2 text-3xl font-bold text-meubel-primary sm:text-4xl">
            5
          </div>
          <p class="text-sm text-gray-600 sm:text-base">
            Tahun Pengalaman
          </p>
        </div>
        <div class="p-6 text-center bg-white rounded-lg shadow-md sm:p-8">
          <div class="mb-2 text-3xl font-bold text-meubel-primary sm:text-4xl">
            20+
          </div>
          <p class="text-sm text-gray-600 sm:text-base">
            Desain Furnitur
          </p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="p-8 text-center text-white rounded-lg bg-meubel-primary sm:p-12 mb-16">
      <h2 class="mb-4 text-2xl font-bold sm:text-3xl">
        Siap Mewujudkan Furnitur Impian Anda?
      </h2>
      <p class="mb-6 text-sm sm:text-base">
        Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik.
      </p>
      <a
        href="https://wa.me/6285857124558"
        target="_blank"
        class="inline-flex gap-2 justify-center items-center px-6 py-3 text-sm bg-white rounded-full transition text-meubel-primary hover:bg-gray-100 sm:text-base"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Hubungi via WhatsApp
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-hero {
  background: linear-gradient(135deg, #8B4513 80%, #5D4037 100%);
}
</style>
