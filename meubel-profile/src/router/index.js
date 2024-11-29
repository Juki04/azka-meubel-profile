import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tentang',
    name: 'About',
    component: About
  },
  {
    path: '/produk',
    name: 'Products',
    component: Products
  },
  {
    path: '/produk/:id',
    name: 'ProductDetail',
    component: Products,
    props: true
  },
  {
    path: '/galeri',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/kontak',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
