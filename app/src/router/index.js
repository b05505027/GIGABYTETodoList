import { createRouter, createWebHistory } from 'vue-router';
import ItemDetail from '../components/ItemDetail.vue';
import EmptyState from '../components/EmptyState.vue';

const routes = [
  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/content', // Redirect root to a default view
  },
  {
    path: '/content',
    component: EmptyState, // Component for when no item is selected
  },
  {
    path: '/content/:id',
    component: ItemDetail,
    props: true, // Automatically pass route params as props
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;