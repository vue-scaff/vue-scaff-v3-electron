export default () => {
  return {
    path: '/frame',
    name: 'frame',
    component: () => import('@/pages/frame/index.vue'),
  };
};
