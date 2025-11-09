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
