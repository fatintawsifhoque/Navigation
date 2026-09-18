import Home from './pages/Home.vue'
import Contact from './pages/Contact.vue'
import Project from './pages/Project.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/project', component: Project }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router