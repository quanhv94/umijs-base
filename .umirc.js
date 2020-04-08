import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  routes: [
    { path: '/login', exact: true, component: '@/pages/Login/Login' },
    { path: '/', exact: true, redirect: '/index' },
    {
      path: '/',
      exact: false,
      component: '@/wrappers/PageWrapper/PageWrapper',
      routes: [
        { path: '/index', exact: true, component: '@/pages/Index/Index' },
        { path: '/projects', exact: true, component: '@/pages/Projects/Projects' },
      ],
    },
  ],
  // theme: {
  //   '@primary-color': '#008a67',
  // },
});
