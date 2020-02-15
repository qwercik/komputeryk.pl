import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Skills from '@/views/Skills.vue'
import Projects from '@/views/Projects.vue'
import Gallery from '@/views/Gallery.vue'
import Contact from '@/views/Contact.vue'
import NotFound from '@/views/NotFound.vue'

export default [
  { path: '/', name: 'Home', title: 'Strona główna', component: Home, notRenderInNavbar: true },
  { path: '/o-mnie', name: 'About', title: 'O mnie', component: About },
  { path: '/umiejetnosci', name: 'Skills', title: 'Umiejętności', component: Skills },
  { path: '/projekty', name: 'Projects', title: 'Projekty', component: Projects },
  { path: '/galeria', name: 'Gallery', title: 'Galeria', component: Gallery },
  { path: '/kontakt', name: 'Contact', title: 'Kontakt', component: Contact },
  { path: '/nie-znaleziono', name: 'NotFound', title: 'Nie znaleziono', component: NotFound, notRenderInNavbar: true },
  { path: '*', redirect: '/nie-znaleziono', notRenderInNavbar: true }
]
