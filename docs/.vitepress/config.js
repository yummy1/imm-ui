export default {
    themeConfig: {
      siteTitle: false,
      logo: "/logo.png",
      nav: [
        { text: "指南", link: "/guide/installation" },
        { text: "组件", link: "/examples/button/" },
      ],
      socialLinks: [{ icon: "github", link: "https://github.com/yummy1/imm-ui" }],
      sidebar: {
        "/guide/": [
          {
            text: "基础",
            items: [
              {
                text: "安装",
                link: "/guide/installation",
              },
              {
                text: "快速开始",
                link: "/guide/quickstart",
              },
            ],
          },
          {
            text: "进阶",
            items: [
              {
                text: "xx",
                link: "/xx",
              },
            ],
          },
        ],
        "/examples/": [
          {
            text: "基础组件",
            items: [
              {
                text: "Button按钮",
                link: "/examples/button/",
              },
              {
                text: "Icon图标",
                link: "/examples/icon/",
              },
              {
                text: "Link链接",
                link: "/examples/link/",
              },
            ],
          },
        ],
      },
    },
};
  