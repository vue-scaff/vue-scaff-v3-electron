export default () => {
  return {
    path: '/',
    name: 'start',
    component: () => import('@/pages/start/index.vue'),
  };
};
