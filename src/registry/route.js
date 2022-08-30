export default [
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: '404',
    },
  },
];
