import _sfc_main from "./button.vue_vue_type_script_lang.js";
import { resolveComponent, openBlock, createElementBlock, normalizeClass, createBlock, createCommentVNode, renderSlot } from "vue";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["k-button", _ctx.styleClass])
  }, [
    _ctx.iconFont.iconName && _ctx.iconFont.position != "right" ? (openBlock(), createBlock(_component_Icon, {
      key: 0,
      class: "icon",
      name: _ctx.iconFont.iconName
    }, null, 8, ["name"])) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "default"),
    _ctx.iconFont.position == "right" && _ctx.iconFont.iconName ? (openBlock(), createBlock(_component_Icon, {
      key: 1,
      class: "icon",
      name: _ctx.iconFont.iconName
    }, null, 8, ["name"])) : createCommentVNode("", true)
  ], 2);
}
const button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  button as default
};
