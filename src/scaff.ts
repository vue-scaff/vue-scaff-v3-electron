// Use Antv
import * as Antv from 'ant-design-vue';

// Use Antv Icons
import * as Icons from '@ant-design/icons-vue';

/**
 * Scaffold by Joenix
 * ========== ========== ==========
 */
export default ({ app, util, route, store, style, i18n, $http, md, custom }: object, next: void) => {
  // Extension Antv
  app.use(Antv);

  // Register Icons
  util.get().foreach(Icons, (icon: any, key: any) => app.component(key, icon));

  // Change Route Mode to Hash
  route.proxy.config = settings => {
    return {
      mode: 'hash',
    };
  };

  // Extension Icons
  app.config.globalProperties.$icons = Icons;

  // Running
  next();

  // Special Console
  console.log(`🅅🅄🄴 ­­🅂🄲🄰🄵🄵`);
};
