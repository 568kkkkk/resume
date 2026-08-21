/* =====================================================================
 *  个人简历网页 · 配置中心
 *  ---------------------------------------------------------------------
 *  你平时只需要改这一个文件，不用动 HTML / CSS / JS。
 *  改完保存，刷新浏览器即可看到效果。
 *
 *  字段说明：
 *    site.name      你的名字（显示在导航和首页大标题）
 *    site.title     你的职业 / 一句话头衔
 *    site.tagline   首页副标题（一句话介绍）
 *    site.avatar    头像图片路径，例如 "assets/img/avatar.jpg"（留空则不显示）
 *    site.bio       详细介绍（支持用 \n 换行，或用数组分多段）
 *    site.contacts  联系方式，按需增删（type 支持 email / tel / link / wechat）
 *
 *    works.images    图片作品列表
 *    works.video3d   3D 渲染视频列表
 *    works.videoReal 实拍视频列表
 *
 *  每条作品里：
 *    title   作品标题
 *    desc    作品描述（可留空 ""）
 *    file    图片路径，例如 "assets/img/work-1.jpg"（留空则显示占位图）
 *    src     视频地址（本地文件如 "assets/video/a.mp4" 或外链如 B站/YouTube 嵌入地址）
 *    poster  视频封面图路径（留空则用占位封面）
 *    link    点击后跳转的外部链接（可留空）
 * ===================================================================== */

const SITE_CONFIG = {
  site: {
    name: "你的名字",
    title: "视觉设计师 / 3D 艺术家",
    tagline: "用光影与画面，讲述值得停留的故事。",
    avatar: "",                       // 例："assets/img/avatar.jpg"
    bio: [
      "这里写一段关于你的介绍，例如：我是一名专注于视觉表达与动态影像的创作者，擅长 3D 渲染与实拍结合。",
      "第二段可以写你的经历、擅长的工具（Blender / C4D / AE / 实拍器材等）、以及你追求的风格。",
      "第三段可以写合作过的内容、获得的成绩，或者你正在寻找的机会。"
    ],
    contacts: [
      { type: "email", label: "邮箱", value: "you@example.com", href: "mailto:you@example.com" },
      { type: "tel",   label: "电话", value: "138-0000-0000", href: "tel:13800000000" },
      { type: "link",  label: "作品集", value: "behance.net/you", href: "https://www.behance.net/" },
      { type: "wechat",label: "微信", value: "your_wechat_id", href: "" }
    ]
  },

  // 首页横屏动态图：把视频文件放到 assets/ 下，填这里即可（如 "assets/hero.mp4"）。
  // 支持 mp4 / webm，也可放一张 GIF 并改用 <img>（见 README）。
  // 留空 "" 时，首页会用内置的 CSS 动态渐变背景兜底。
  heroMedia: "",

  works: {
    images: [
      { title: "作品图 01", desc: "在这里写这张图的说明。", file: "" },
      { title: "作品图 02", desc: "替换 file 为你的图片路径，例如 assets/img/work-2.jpg", file: "" },
      { title: "作品图 03", desc: "", file: "" },
      { title: "作品图 04", desc: "", file: "" },
      { title: "作品图 05", desc: "", file: "" },
      { title: "作品图 06", desc: "", file: "" }
    ],

    video3d: [
      { title: "3D 渲染视频 01", desc: "Blender / C4D 渲染动画示例。", src: "", poster: "", link: "" },
      { title: "3D 渲染视频 02", desc: "", src: "", poster: "", link: "" }
    ],

    videoReal: [
      { title: "实拍视频 01", desc: "实拍短片 / 纪录片段示例。", src: "", poster: "", link: "" },
      { title: "实拍视频 02", desc: "", src: "", poster: "", link: "" }
    ]
  }
};
