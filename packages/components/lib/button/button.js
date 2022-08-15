"use strict";
const button_vue_vue_type_script_lang = require("./button.vue_vue_type_script_lang.js");
const vue = require("vue");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = vue.resolveComponent("Icon");
  return vue.openBlock(), vue.createElementBlock("button", {
    class: vue.normalizeClass(["k-button", _ctx.styleClass])
  }, [
    _ctx.iconFont.iconName && _ctx.iconFont.position != "right" ? (vue.openBlock(), vue.createBlock(_component_Icon, {
      key: 0,
      class: "icon",
      name: _ctx.iconFont.iconName
    }, null, 8, ["name"])) : vue.createCommentVNode("", true),
    vue.renderSlot(_ctx.$slots, "default"),
    _ctx.iconFont.position == "right" && _ctx.iconFont.iconName ? (vue.openBlock(), vue.createBlock(_component_Icon, {
      key: 1,
      class: "icon",
      name: _ctx.iconFont.iconName
    }, null, 8, ["name"])) : vue.createCommentVNode("", true)
  ], 2);
}
const button = /* @__PURE__ */ _pluginVue_exportHelper(button_vue_vue_type_script_lang, [["render", _sfc_render]]);
module.exports = button;
