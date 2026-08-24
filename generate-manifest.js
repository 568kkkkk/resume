/* =====================================================================
 *  作品清单自动生成器
 *  用途：扫描各素材文件夹，生成 assets/manifest.js，
 *  网页（main.js）直接读它渲染，所以加作品 = 只把文件丢进对应文件夹，
 *  完全不用改 data.js / index.html 等其他文件。
 *
 *  文件夹约定（按类型分好类）：
 *    assets/img/         → 图片作品
 *    assets/video/3d/    → 3D 渲染视频
 *    assets/video/real/  → 实拍视频
 *
 *  用法（在网页根目录 D:\Ko\web 执行一次）：
 *    node generate-manifest.js
 *  之后每次新增/删除素材，重新跑一次即可（或配 git pre-push 钩子自动跑）。
 * ===================================================================== */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const IMG = path.join(ROOT, "assets", "img");
const V3D = path.join(ROOT, "assets", "video", "3d");
const VREAL = path.join(ROOT, "assets", "video", "real");

// 确保文件夹存在，不存在就建好，方便直接往里丢文件
[IMG, V3D, VREAL].forEach(function (d) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

function listDir(dir) {
  try {
    return fs
      .readdirSync(dir)
      .filter(function (f) {
        // 只取文件、跳过隐藏/清单/占位文件
        if (f.startsWith(".") || f === "manifest.js") return false;
        return fs.statSync(path.join(dir, f)).isFile();
      })
      .sort();
  } catch (e) {
    return [];
  }
}

function rel(dir, file) {
  return path.relative(ROOT, path.join(dir, file)).split(path.sep).join("/");
}

const manifest = {
  images: listDir(IMG).map(function (f) {
    return rel(IMG, f);
  }),
  video3d: listDir(V3D).map(function (f) {
    return rel(V3D, f);
  }),
  videoReal: listDir(VREAL).map(function (f) {
    return rel(VREAL, f);
  })
};

const out =
  "/* 本文件由 generate-manifest.js 自动生成，请勿手改。加作品只需往对应文件夹丢文件。 */\n" +
  "window.MEDIA_MANIFEST = " +
  JSON.stringify(manifest, null, 2) +
  ";\n";

fs.writeFileSync(path.join(ROOT, "assets", "manifest.js"), out);
console.log("[manifest] 已生成 assets/manifest.js");
console.log("  图片 :", manifest.images.length, "个");
console.log("  3D视频:", manifest.video3d.length, "个");
console.log("  实拍视频:", manifest.videoReal.length, "个");
