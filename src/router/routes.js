import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Skills from '@/views/Skills.vue'
import Projects from '@/views/Projects.vue'
import Gallery from '@/views/Gallery.vue'
import Contact from '@/views/Contact.vue'

export default [
  { path: '/', name: 'Home', component: Home },
  { path: '/o-mnie', name: 'About', component: About },
  { path: '/umiejetnosci', name: 'Skills', component: Skills },
  { path: '/projekty', name: 'Projects', component: Projects },
  { path: '/galeria', name: 'Gallery', component: Gallery },
  { path: '/kontakt', name: 'Contact', component: Contact }
]
