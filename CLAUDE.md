# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Hexo** static site generator blog project. Hexo is a fast, simple, and powerful Node.js-based blogging framework that generates static HTML files from Markdown content.

Documentation: https://hexo.io/docs/

## Essential Commands

### Development Server
```bash
npm run server
# or
hexo server
```
Starts a local development server (typically at http://localhost:4000) with live reloading.

### Build
```bash
npm run build
# or
hexo generate
```
Generates static files to the `public/` directory for deployment.

### Clean Build Artifacts
```bash
npm run clean
# or
hexo clean
```
Removes generated files and cache. Run this if you encounter rendering issues.

### Deploy
```bash
npm run deploy
# or
hexo deploy
```
Deploys the site (deployment target configured in `_config.yml`).

### Creating Content
```bash
hexo new "Post Title"
```
Creates a new post in `source/_posts/` using the post scaffold template.

```bash
hexo new page "Page Name"
```
Creates a new page in `source/Page-Name/`.

```bash
hexo new draft "Draft Title"
```
Creates a new draft post.

## Project Structure

```
blog-demo/
├── _config.yml           # Main site configuration
├── _config.landscape.yml # Theme-specific configuration
├── package.json          # Dependencies and npm scripts
├── scaffolds/            # Post/page/draft templates
│   ├── post.md
│   ├── page.md
│   └── draft.md
├── source/               # Source content (Markdown files)
│   └── _posts/           # Blog posts
├── themes/               # Hexo themes
│   └── landscape/        # Current theme (default)
└── public/               # Generated static files (git-ignored)
```

## 本地文件说明
```
node_modules：依赖包
scaffolds：生成文章的一些模板
source：用来存放你的文章
themes：主题
.npmignore：发布时忽略的文件（可忽略）
_config.landscape.yml：主题的配置文件
config.yml：博客的配置文件
package.json：项目名称、描述、版本、运行和开发等信

```


## Configuration Files

### _config.yml (Main Configuration)
- **Site metadata**: title, subtitle, description, author
- **URL structure**: permalink format
- **Directories**: source, public, tags, archives, categories
- **Writing settings**: post naming, syntax highlighting
- **Deployment**: deployment type and settings
- **Theme**: currently set to "landscape"

### Theme Configuration
Theme-specific settings are in `_config.landscape.yml` (or within `themes/landscape/_config.yml`).

## Content Management

### Front Matter
All posts/pages use YAML front matter at the top:

```yaml
---
title: Post Title
date: 2025-01-01 12:00:00
tags:
  - tag1
  - tag2
categories:
  - category
---
```

### Asset Organization
- Posts are stored in `source/_posts/` as Markdown files
- Static assets (images, files) can be placed in `source/` subdirectories
- The `post_asset_folder` setting in `_config.yml` controls per-post asset folders

## Key Hexo Concepts

### Generators
Hexo uses generator plugins to create pages:
- `hexo-generator-index`: Home page with post list
- `hexo-generator-archive`: Archive pages
- `hexo-generator-category`: Category pages
- `hexo-generator-tag`: Tag pages

### Renderers
- `hexo-renderer-marked`: Markdown to HTML
- `hexo-renderer-ejs`: EJS template rendering
- `hexo-renderer-stylus`: Stylus CSS preprocessing

### Workflow
1. Write content in Markdown in `source/_posts/`
2. Run `hexo server` to preview locally
3. Run `hexo generate` to build static files
4. Deploy static files from `public/` directory

## Notes

- The generated `public/` directory should not be committed to version control
- Hexo version: 8.1.1
- Default theme: landscape
- Syntax highlighter: highlight.js
- Pagination: 10 posts per page



# 美化主题部分
## 1.主题美化

- 在博客根目录里安装最新版主题：
- git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
- 第一次使用需要安装 pug 以及 stylus 的渲染器：
- npm install hexo-renderer-pug hexo-renderer-stylus --save

## 2.应用主题

- 修改 hexo 配置文件_config.yml，把主题改为anzhiyu：
- theme: anzhiyu

## 3.覆盖配置

- 覆盖配置可以使主题配置放置在 anzhiyu 目录之外，避免在更新主题时丢失自定义的配置。
- 复制anzhiyu主题配置文件：
- cp -rf ./themes/anzhiyu/_config.yml ./_config.anzhiyu.yml
- 说明：注意：
- 只要存在于 _config.anzhiyu.yml 的配置都是高优先级，修改原 _config.yml 是无效的。
- 每次更新主题可能存在配置变更，请注意更新说明，可能需要手动对 _config.anzhiyu.yml 同步修改。
- 想查看覆盖配置有没有生效，可以通过 hexo g --debug 查看命令行输出。
- 如果想将某些配置覆盖为空，注意不要把主键删掉，不然是无法覆盖的

## 4.配置主题与主站配置文件

- 本地预览：
- hexo cl; hexo s
- 推送更新上线：
- hexo cl; hexo g; hexo d

# 2.生成标签，配置页面和提交模板

## 1.执行以下命令生成标签页
- hexo new page tags

## 2.找到 source/tags/index.md 这个文件，修改添加 type: "tags"
- 内容可查看相关文件

## 3.执行以下命令生成分类页
- 内容可查看相关文件

## 4.配置文章模版
- /scaffolds目录下有几个模版文件，其中：
- post.md：新建博文模版，详情文件
- page.md：新建标签页模版，详见文件
