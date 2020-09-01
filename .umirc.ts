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
        { path: '/sign-up', exact: true, component: '@/pages/SignUp' },
        {
          path: '/',
          exact: false,
          component: '@/wrappers/PageWrapper',
          routes: [
            {
              path: '/',
              exact: true,
              component: '@/pages/Index',
            },
            {
              path: '/tasks',
              exact: true,
              component: '@/pages/Tasks',
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
