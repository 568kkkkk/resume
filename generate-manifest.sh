#!/usr/bin/env bash
# 作品清单自动生成器（纯 bash 版，无需 node）
# 扫描素材文件夹，生成 assets/manifest.js
# 网页 main.js 直接读它渲染，所以加作品 = 只把文件丢进对应文件夹，完全不用改其他文件。
#
# 用法（仓库根目录 D:\Ko\web，在 Git Bash 执行）：
#   bash generate-manifest.sh
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$SCRIPT_DIR"
cd "$ROOT"

IMG="assets/img"
V3="assets/video/3d"
VR="assets/video/real"

# 把指定目录下的普通文件列成 JS 字符串数组
emit_array() {
  local dir="$1"
  local label="$2"
  printf '  "%s": [\n' "$label"
  if [ -d "$dir" ]; then
    for f in "$dir"/*; do
      [ -f "$f" ] || continue
      b="$(basename "$f")"
      case "$b" in
        .gitkeep|.|..) continue ;;
      esac
      printf '    "%s",\n' "$f"
    done
  fi
  printf '  ],\n'
}

{
  printf '/* 本文件由 generate-manifest.sh 自动生成，请勿手改。加作品只需往对应文件夹丢文件。 */\n'
  printf 'window.MEDIA_MANIFEST = {\n'
  emit_array "$IMG" images
  emit_array "$V3" video3d
  emit_array "$VR" videoReal
  printf '};\n'
} > assets/manifest.js

echo "[generate-manifest] 已生成 assets/manifest.js"
