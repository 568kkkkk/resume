# 个人简历 · 作品集网页

一个暗黑风格、手机/电脑自适应的个人简历与作品集网页。
**所有内容只需改一个文件 `assets/js/data.js`，无需懂代码。**

---

## 一、本地预览

直接双击 `index.html` 用浏览器打开即可看到效果。
（推荐用 Chrome / Edge / Safari 等现代浏览器）

---

## 二、如何替换成你自己的内容

打开 `assets/js/data.js`，按里面的中文注释修改：

### 1. 改文字（名字、职业、简介、联系方式）
修改 `site` 部分：
- `name` 你的名字
- `title` 职业 / 头衔
- `tagline` 首页副标题
- `bio` 详细介绍（可写多段，用数组）
- `contacts` 邮箱 / 电话 / 链接 / 微信等

### 2. 换首页横屏动态图
- **用视频**：把视频文件（如 `hero.mp4`）放到 `assets/` 目录，
  然后在 `data.js` 里设置 `heroMedia: "assets/hero.mp4"`。
- **用 GIF**：把 GIF 放到 `assets/`，并把 `index.html` 里
  `<video id="heroMedia">` 整行换成
  `<img class="hero__media" id="heroMedia" src="assets/hero.gif" style="display:block">`。
- **什么都不放**：首页会自动用内置的 CSS 动态渐变背景，也好看。

### 3. 加图片作品
把图片放进 `assets/img/`，在 `works.images` 里加一项：
```js
{ title: "作品标题", desc: "说明文字（可留空）", file: "assets/img/你的图.jpg" }
```
`file` 留空 `""` 会显示占位图。

### 4. 加视频作品
把视频放进 `assets/video/`，在 `works.video3d`（3D 渲染）或
`works.videoReal`（实拍）里加一项：
```js
{ title: "视频标题", desc: "说明", src: "assets/video/你的视频.mp4", poster: "", link: "" }
```
- `src`：本地视频路径，或 B站/YouTube 等外链嵌入地址
- `poster`：视频封面图（可选）
- `link`：点击「查看详情」跳转的链接（可选）

### 5. 换主题色
打开 `assets/css/style.css`，改最上方 `:root` 里的
`--accent`（主色）和 `--accent-2`（辅助色）即可。

---

## 三、上传到 GitHub 并生成可分享链接（GitHub Pages）

下面是从零开始的详细步骤：

### 步骤 1：注册 / 登录 GitHub
打开 https://github.com 注册并登录账号。

### 步骤 2：新建仓库
1. 右上角点 **+** → **New repository**。
2. Repository name 填：`resume`（或任意名字，建议全小写无空格）。
3. 选 **Public**（公开，Pages 免费需要公开仓库）。
4. 不要勾选 "Add a README file"（我们已经有了）。
5. 点 **Create repository**。

### 步骤 3：把本地网页推送到仓库
在你电脑上打开 **Git Bash**（或终端），进入网页目录：
```bash
cd "D:/Ko/网页"

git init
git add .
git commit -m "个人简历网页初版"

# 把下面 YOUR_USERNAME 换成你的 GitHub 用户名，resume 换成你的仓库名
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/resume.git
git push -u origin main
```
> 首次 push 会让你登录 GitHub，按提示授权即可。
> 如果用了双重验证，需要用 **Personal Access Token** 当密码：
> GitHub → Settings → Developer settings → Personal access tokens → 生成一个有 `repo` 权限的 token，push 时密码处粘贴它。

### 步骤 4：开启 GitHub Pages（生成网址）
1. 进入你的仓库页面。
2. 点上方 **Settings** → 左侧 **Pages**。
3. Source 选 **Deploy from a branch**。
4. Branch 选 **main**，目录选 **/ (root)**。
5. 点 **Save**。

### 步骤 5：拿到分享链接
等待约 1 分钟，页面会显示：
`Your site is published at https://YOUR_USERNAME.github.io/resume/`
把这个网址发给别人，就能在手机和电脑上查看你的简历了。

> 之后每次修改内容后，只需在目录里执行：
> `git add . && git commit -m "更新" && git push`
> 刷新网址即可看到新内容（GitHub Pages 更新通常有几十秒延迟）。

---

## 四、目录结构
```
网页/
├─ index.html            # 页面结构（一般不用改）
├─ assets/
│  ├─ css/style.css      # 样式（主题色在这里改）
│  ├─ js/data.js         # ★ 你主要改这个：所有内容
│  ├─ js/main.js         # 渲染逻辑（一般不用改）
│  ├─ img/               # 放图片作品
│  └─ video/             # 放视频作品
└─ README.md             # 本说明
```
