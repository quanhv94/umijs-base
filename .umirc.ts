import { defineConfig, dynamic } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  favicon: '/favicon.ico',
  title: false,
  dynamicImport: {}, // code splitting
  routes: [
    {
      path: '/',
      exact: false,
      component: '@/wrappers/AppWrapper',
      routes: [
        { path: '/login', exact: true, component: '@/pages/Login' },
        {
          path: '/',
          exact: false,
          component: '@/wrappers/PageWrapper',
          routes: [
            {
              path: '/index',
              exact: true,
              component: '@/pages/Index',
            },
            {
              path: '/projects',
              exact: true,
              component: '@/pages/Projects',
            },
          ],
        },
      ],
    },
  ],
  // theme: {
  //   '@primary-color': '#008a67',
  // },
});
