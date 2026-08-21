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
 *    site.contacts  联系方式，按需增删（type 支持 email / tel / wechat）
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
    name: "LOGON KO",
    title: "摄影师 / 3D动态渲染师 / 设计师",
    tagline: "沉浸在KO的视觉世界",
    avatar: "",                       // 例："assets/img/avatar.jpg"
    bio: [
      "我是一名专注于视觉表达与动态影像的创作者，五年从业经验，擅长 3D 渲染与实拍和AIGC结合。",
      "目前担任公司动态视觉的摄影师，擅长摄影、摄像、布光...从前期到后期输出。",
      "擅长设备：索尼、佳能等主流设备。软件：剪映、PR、AE、达芬奇、Blender、GPT、CODEX等"
    ],
    contacts: [
      { type: "email", label: "邮箱", value: "2073325568@qq.com", href: "mailto:2073325568@qq.com" },
      { type: "tel",   label: "电话", value: "19977880094", href: "tel:19977880094" },
      { type: "wechat",label: "微信", value: "Chanyiko6", href: "" }
    ]
  },

  // 首页横屏动态图：把文件放到 assets/ 下，在这里填路径即可（无需改 HTML）。
  // 支持 mp4 / webm（自动当视频播放），以及 gif / jpg / png / webp（自动当图片铺满）。
  // 例如用 GIF：heroMedia: "assets/hero.gif"
  // 留空 "" 时，首页会用内置的 CSS 动态渐变背景兜底。
  heroMedia: "assets/hero.gif",

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
