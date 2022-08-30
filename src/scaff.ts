// Use Antv
import * as Antv from 'ant-design-vue';

// Use Antv Icons
import * as Icons from '@ant-design/icons-vue';

/**
 * Scaffold by Joenix
 * ========== ========== ==========
 */
export default ({ app, util, route, store, style, i18n, $http, md, custom }, next) => {
  // Electron only support `hash` mode
  route.proxy.config = () => ({ mode: `hash` });

  // Extension Antv
  app.use(Antv);

  // Register Icons
  util.get().foreach(Icons, (icon, key) => app.component(key, icon));

  // Extension Icons
  app.config.globalProperties.$icons = Icons;

  // Http Interceptor
  $http.interceptor.resultParse = async result => {
    // Success if Status is 200
    if (result.status === 200) {
      return result.data;
    }

    // Errors
    Antv.message(result.message);

    // Any
    return result;
  };

  // Running
  next();

  // Special Console
  console.log(`🅅🅄🄴 ­­🅂🄲🄰🄵🄵`);
};
