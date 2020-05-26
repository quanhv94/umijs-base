import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  routes: [
    { path: '/login', exact: true, component: '@/pages/Login' },
    { path: '/', exact: true, redirect: '/index' },
    {
      path: '/',
      exact: false,
      component: '@/wrappers/PageWrapper/PageWrapper',
      routes: [
        { path: '/index', exact: true, component: '@/pages/Index' },
        {
          path: '/projects',
          exact: true,
          component: '@/pages/Projects',
        },
      ],
    },
  ],
  // theme: {
  //   '@primary-color': '#008a67',
  // },
});
