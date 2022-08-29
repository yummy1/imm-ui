import { reactive,effect } from '@vue/reactivity'
import axios from "axios";
axios.defaults.headers["Content-Type"] = "application/json";
const request = (baseUrl, params) => {
  axios({
    url: baseUrl,
    method: "post",
    data: params,
  });
};

//页面访问次数上报
//上报uv&pv&TP
const getVisitorAndTP = (app, prefix, baseParams, baseUrl) => {
    const globalProperties = reactive(app.config.globalProperties);
    let startTime = new Date().getTime();
    let path = "";
    let lastPath = "";
    effect(() => {
      const endTime = new Date().getTime();
      const TP = endTime - startTime;
      startTime = endTime;
      lastPath = path;
      path = globalProperties.$route.path;
      //间隔为0不上报
      if (!TP) return;
      request(baseUrl, {
        ...baseParams,
        UPVEventName: `${prefix}_${path}`,
      });
      //页面停留时长小于0.5s不上报
      if (TP < 500) return;
      request(baseUrl, {
        ...baseParams,
        TP: {
          path: lastPath,
          time: TP,
        },
      });
    });
  };
  
export default {
    install: (app, options) => {
        const { prefix, baseParams, baseUrl } = options;
        getVisitorAndTP(app, prefix || "track", baseParams || {}, baseUrl);
        // 指令上报
        app.directive("click", (el, bind) => {
            el.addEventListener("click", () => {
              request(baseUrl, { ...bind.value, ...(baseParams || {}) });
            });
          });      
        // 挂载全局用于手动上报
        app.config.globalProperties.$vtrack = (params) => {
            request(baseUrl, { ...params, ...(baseParams || {}) });
        };
    }
}