import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: proxy, // 引入反向代理
  request: {
    dataField: ""
  },
  routes: routes,
  fastRefresh: {},
});
