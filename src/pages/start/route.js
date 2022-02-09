export default () => {
  return {
    path: '/start',
    name: 'start',
    component: () => import('@/pages/start/index.vue'),
  };
};
