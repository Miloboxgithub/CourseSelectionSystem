if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _imports_0 = "/static/bg@1x.png";
  const _imports_1 = "/static/中德 学院@1x.png";
  const _imports_2 = "/static/组 5737.svg";
  const _imports_3 = "/static/组 5738.svg";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$2 = {
    __name: "logs",
    setup(__props, { expose: __expose }) {
      __expose();
      let rem = vue.ref(true);
      let name = vue.ref("");
      let number = vue.ref("");
      function rems() {
        rem.value = !rem.value;
      }
      function inputname(e) {
        name.value = e.detail.value;
      }
      function inputnum(e) {
        number.value = e.detail.value;
      }
      function logins(e) {
        formatAppLog("log", "at pages/logs/logs.vue:58", name.value, number.value, e.currentTarget.dataset.url);
        let url = e.currentTarget.dataset.url;
        uni.showToast({
          title: "登录成功!",
          icon: "none",
          // 使用 'none' 表示纯文本弹窗
          duration: 1e3
          // 显示时长为 2000 毫秒
        });
        setTimeout(() => {
          uni.navigateTo({
            url
          });
        }, 1e3);
      }
      const __returned__ = { get rem() {
        return rem;
      }, set rem(v) {
        rem = v;
      }, get name() {
        return name;
      }, set name(v) {
        name = v;
      }, get number() {
        return number;
      }, set number(v) {
        number = v;
      }, rems, inputname, inputnum, logins, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "containers" }, [
      vue.createElementVNode("image", {
        src: _imports_0,
        mode: "scaleToFill",
        class: "bg"
      }),
      vue.createElementVNode("view", { class: "headtext" }, "登录"),
      vue.createElementVNode("view", { class: "pic" }, [
        vue.createCommentVNode(' <image src="/static/矩形 4646@1x.png" class="picimg" mode="aspectFill" /> '),
        vue.createElementVNode("image", {
          src: _imports_1,
          class: "zzz",
          mode: ""
        })
      ]),
      vue.createElementVNode("view", { class: "xiao" }, "工程项目选课系统"),
      vue.createElementVNode("view", { class: "hao" }, [
        vue.createElementVNode("view", { class: "input" }, [
          vue.createElementVNode("image", {
            src: _imports_2,
            mode: ""
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              onInput: $setup.inputname,
              type: "text",
              placeholder: "请输入姓名",
              "placeholder-class": "placeholderStyle",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.name = $event)
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $setup.name]
          ])
        ])
      ]),
      vue.createElementVNode("view", {
        class: "hao",
        style: { "margin-top": "20px" }
      }, [
        vue.createElementVNode("view", { class: "input" }, [
          vue.createElementVNode("image", {
            src: _imports_3,
            mode: ""
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              onInput: $setup.inputnum,
              placeholder: "请输入工号/学号",
              "placeholder-class": "placeholderStyle",
              type: "text",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.number = $event)
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $setup.number]
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "confirm" }, [
        vue.createElementVNode("view", {
          style: { "display": "flex" },
          onClick: $setup.rems
        }, [
          vue.createElementVNode("image", {
            src: $setup.rem ? "../../static/dui.svg" : "../../static/属性 1=协议未勾选.svg",
            mode: ""
          }, null, 8, ["src"]),
          vue.createElementVNode("text", { style: { "margin-left": "5px" } }, "记住我")
        ])
      ]),
      vue.createElementVNode("view", {
        class: "btn",
        onClick: $setup.logins,
        "data-url": "/pages/t-index/t-index"
      }, " 登录 ")
    ]);
  }
  const PagesLogsLogs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-85735d8e"], ["__file", "C:/Users/86158/Documents/HBuilderProjects/CourseSelectionSystem/pages/logs/logs.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return null;
  }
  const PagesTIndexTIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/86158/Documents/HBuilderProjects/CourseSelectionSystem/pages/t-index/t-index.vue"]]);
  __definePage("pages/logs/logs", PagesLogsLogs);
  __definePage("pages/t-index/t-index", PagesTIndexTIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/86158/Documents/HBuilderProjects/CourseSelectionSystem/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
