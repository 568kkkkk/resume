/* =====================================================================
 *  个人简历网页 · 渲染与交互
 *  一般不需要改这里。所有内容都在 data.js 里维护。
 * ===================================================================== */
(function () {
  "use strict";
  const C = SITE_CONFIG;

  // 生成占位图（无素材时显示，带标题文字）
  function placeholder(text) {
    const safe = String(text || "占位图").replace(/[<>&]/g, "");
    return (
      '<div class="placeholder">' + safe + "<br>（替换为你的素材）</div>"
    );
  }

  // 把「路径字符串」或「对象」统一成对象，并自动用文件名当标题
  function normalizeItem(item, key) {
    if (typeof item === "string") {
      const name = item.split("/").pop().replace(/\.[^.]+$/, "");
      const obj = { title: name };
      obj[key] = item;
      return obj;
    }
    return item || {};
  }

  // 生成媒体卡片
  function mediaCard(item, kind) {
    const card = document.createElement("div");
    card.className = "card";

    const media = document.createElement("div");
    media.className = "card__media";

    if (kind === "image") {
      if (item.file) {
        const img = document.createElement("img");
        img.src = item.file;
        img.alt = item.title || "";
        img.loading = "lazy";
        media.appendChild(img);
      } else {
        media.innerHTML = placeholder(item.title);
      }
    } else {
      // 视频
      if (item.src) {
        const vid = document.createElement("video");
        vid.src = item.src;
        vid.controls = true;
        vid.preload = "metadata";
        vid.style.width = "100%";
        vid.style.height = "100%";
        if (item.poster) vid.poster = item.poster;
        media.appendChild(vid);
      } else {
        media.innerHTML =
          placeholder(item.title) +
          '<div class="card__play">▶</div>';
      }
    }
    card.appendChild(media);

    const body = document.createElement("div");
    body.className = "card__body";
    const title = document.createElement("div");
    title.className = "card__title";
    title.textContent = item.title || "";
    body.appendChild(title);
    if (item.desc) {
      const desc = document.createElement("div");
      desc.className = "card__desc";
      desc.textContent = item.desc;
      body.appendChild(desc);
    }
    if (item.link) {
      const a = document.createElement("a");
      a.className = "card__desc";
      a.href = item.link;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = "查看详情 →";
      a.style.color = "var(--accent-2)";
      a.style.display = "inline-block";
      a.style.marginTop = "8px";
      body.appendChild(a);
    }
    card.appendChild(body);
    return card;
  }

  // 填充文字内容
  function fillText() {
    const s = C.site;
    document.getElementById("navBrand").textContent = s.name;
    document.getElementById("heroTitle").textContent = s.name;
    document.getElementById("heroTagline").textContent = s.tagline || s.title || "";
    document.getElementById("aboutName").textContent = s.name;
    document.getElementById("aboutRole").textContent = s.title || "";
    document.getElementById("footerName").textContent = s.name;
    document.title = s.name + " · 作品集";

    // 简介（支持字符串或数组）
    const bioEl = document.getElementById("aboutBio");
    const bios = Array.isArray(s.bio) ? s.bio : [s.bio];
    bios.forEach(function (p) {
      if (!p) return;
      const el = document.createElement("p");
      el.textContent = p;
      bioEl.appendChild(el);
    });

    // 头像
    if (s.avatar) {
      const av = document.getElementById("aboutAvatar");
      av.src = s.avatar;
      av.hidden = false;
    }

    // 首页动态图：按扩展名自动判断用 <video> 还是 <img>（gif/jpg/png/webp 走图片）
    if (C.heroMedia) {
      const ext = C.heroMedia.split(".").pop().toLowerCase();
      const isImage = ["gif", "jpg", "jpeg", "png", "webp"].indexOf(ext) > -1;
      const el = document.getElementById("heroMedia");
      if (isImage) {
        const img = document.createElement("img");
        img.className = "hero__media";
        img.id = "heroMedia";
        img.src = C.heroMedia;
        img.alt = "";
        img.style.display = "block";
        el.replaceWith(img);
      } else {
        el.src = C.heroMedia;
        el.style.display = "block";
      }
    }
  }

  // 填充作品
  function fillWorks() {
    const imgGrid = document.getElementById("imageGrid");
    (C.works.images || []).forEach(function (it) {
      imgGrid.appendChild(mediaCard(normalizeItem(it, "file"), "image"));
    });

    const v3 = document.getElementById("video3dGrid");
    (C.works.video3d || []).forEach(function (it) {
      v3.appendChild(mediaCard(normalizeItem(it, "src"), "video"));
    });

    const vr = document.getElementById("videoRealGrid");
    (C.works.videoReal || []).forEach(function (it) {
      vr.appendChild(mediaCard(normalizeItem(it, "src"), "video"));
    });
  }

  // 填充联系方式
  function fillContacts() {
    const list = document.getElementById("contactList");
    (C.site.contacts || []).forEach(function (c) {
      const li = document.createElement("li");
      const label = document.createElement("span");
      label.className = "label";
      label.textContent = c.label || c.type;
      const val = document.createElement(c.href ? "a" : "span");
      val.className = "value" + (c.href ? "" : "");
      val.textContent = c.value;
      if (c.href) {
        val.href = c.href;
        val.target = "_blank";
        val.rel = "noopener";
      }
      li.appendChild(label);
      li.appendChild(val);
      list.appendChild(li);
    });
  }

  // Tab 切换（支持嵌套：外层 图片/视频，内层 3D/实拍）
  function initTabs() {
    document.querySelectorAll(".tabs").forEach(function (tabs) {
      tabs.addEventListener("click", function (e) {
        const btn = e.target.closest(".tab");
        if (!btn) return;
        const targetId = btn.dataset.target;
        // 高亮当前 tabs 容器内的按钮
        tabs.querySelectorAll(".tab").forEach(function (t) {
          t.classList.toggle("is-active", t === btn);
        });
        // 切换同级的 panel（父容器内直接子 panel）
        const scope = tabs.parentElement;
        scope.querySelectorAll(":scope > .panel").forEach(function (p) {
          p.classList.toggle("is-active", p.id === targetId);
        });
      });
    });
  }

  // 移动端菜单
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    toggle.addEventListener("click", function () {
      links.classList.toggle("is-open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("is-open");
    });
  }

  // 启动
  function init() {
    fillText();
    fillWorks();
    fillContacts();
    initTabs();
    initNav();
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
