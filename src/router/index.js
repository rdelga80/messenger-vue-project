import { createWebHistory, createRouter } from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Contacts = () => import('@/views/contacts/ContactsIndex.vue')
const ContactsAddNew = () => import('@/views/contacts/ContactsAddNew.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    children: [
      {
        path: 'add-contact',
        name: 'AddNew',
        component: ContactsAddNew
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
