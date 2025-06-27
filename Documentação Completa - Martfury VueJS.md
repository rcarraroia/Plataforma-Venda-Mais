# Documentação Completa - Martfury VueJS

## Índice

1. [Getting Started](#getting-started)
2. [Feature](#feature)
3. [Folder Structure](#folder-structure)
4. [Environment and Requirements](#environment-and-requirements)
5. [Build](#build)
6. [Sass](#sass)
7. [Header](#header)
8. [Menu](#menu)
9. [Customizer Style](#customizer-style)
10. [API Setup](#api-setup)
11. [Strapi](#strapi)
12. [Deploy](#deploy)

---

## Getting Started

Use this documentation to see what sections and settings are included in Martfury VueJS and for guidance on how to use the template.

Martfury Vue template is built with VueJS, VueJS, NuxtJS, VuetifyJS, Sass, and Bootstrap 4. This template is suited for multi-vendor marketplaces, electronics stores, furniture stores, clothing stores, hitech stores, accessories stores, etc. With the Martfury VueJS template, you can create your own marketplace and allow vendors to sell just like Amazon, Envato, and eBay. Included are the powerful features listed below.

---

## Feature

### Feature Pages

* vuejs, nuxtjs, and vuetifyjs
* Vuejs without jQuery
* 4+ Demo Home pages
* Multiple headers and footers
* Use Linearicons Premium Version $59
* Martfury Mobile Version
* Sticky Header Support
* Different Blog layouts
* Amazing Megamenu
* Full-With layout support
* Newsletter popup
* My account,invoices, notifications, profile... etc.
* Multi-Browser Support
* Using Google Fonts
* Reliable Support

### Powerful eCommerce Functionality

* Sell Simple or Variable Products
* Sell External or Affiliate Products
* Built-in Order Tracking page
* Unlimted Categories and Sub-Categories
* Filter Products (eg by size, color, brands, categories, etc.)
* Optional Wishlist and Compare
* multi-vendor marketplace
* product Deals countdown
* Advanced Live Search
* Color, Label and Image swatches
* Product Quick View
* Recently Viewed Products
* Frequently Bought Together

---

## Folder Structure

* **node_modules**: It contains all the npm packages that is used on this projects.

* **components**: Here are the React component which could be reused in multiple pages or are complex enough to move them to another file and test them individually. Each file should have a default export with a single component, inside the file there could be multiple components though.

* **pages**: Here are the pages (also known as views) of the application, each file will automatically match a route as described in Nuxt.

* **static**: Any static file required by the application (images, audios, etc.) could be placed here.

* **scss**: The stylesheet is compiled to css. nuxt.js will automatically add the css file to the HTML.

* **store**:

* **package.json**: This file contains dependencies and scripts required for the project.

* **nuxt.config.js**: contain extended nuxt configurations like css module support, font import, image import and optimization and env variables.

* **package-lock.json** contain exact dependency tree to be installed in /node_modules. It helps while a team is working on private apps to ensure that they are working on the same version of dependencies and sub-dependencies. It also maintains a history of changes done in package.json so, that at any point of time, when required previous changes can be looked back in the package-lock.json file.

---

## Environment and Requirements

### Required environment

Recommend nodejs version lts (long-term support)

NodeJS v12 LTS Link: https://nodejs.org/en/blog/release/v12.22.12
NodeJS v14 LTS Link: https://nodejs.org/en/blog/release/v14.17.3

### Required knowledge

* Basic understanding of Vuejs and javascript
* Nuxtjs
* NPM
* Yarn

Nuxtjs starts it's server on port 4002 by default, so after running, open your browser at http://localhost:4002.

---

## Build

### Yarn build

**Step 1:**
```
yarn install
```

**Step 2:**
```
yarn build
```

**Step 3:**
```
yarn start
```

### Yarn Development mode

**Step 1:**
```
yarn install
```

**Step 2:**
```
yarn dev
```

### NPM build

**Step 1:**
```
npm install
```

**Step 2:**
```
npm run build
```

**Step 3:**
```
npm run start
```

### NPM Development mode

**Step 1:**
```
npm install
```

**Step 2:**
```
npm run dev
```

**Refer:** https://nuxtjs.org/guide/

* **Build**: Builds the app for production to the `.nuxt` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

* **Start**: Starts the application in production mode. The application should be compiled with `nuxt build` first.

* **Dev**: Runs the app in the development mode.
Open http://localhost:4002 to view it in the browser.

---

## Sass

nuxtjs will automatically add the css file to the HTML. In production a chunk hash is added so that styles are updated when a new version of the stylesheet is deployed.

**Refer:** https://nuxtjs.org/guide/assets

---

## Header

We can easily change the logo for the headers ( market-place, market-place-2, market-place-3, market-place-4, auto-part, electronic, furniture, organic, technology)

Change header and footer, Refer: https://www.youtube.com/watch?v=1QRGh3GKCf

Change logo martfury ReactJS, Refer: https://www.youtube.com/watch?v=DmXfxFXjGo

---

## Menu

**Menu.js:** `components/elements/menu/Menu.js`. Render menu, you don't need to edit this file.

**Open menu.json** `public/static/data/menu.json`

### Basic Menu Structure

```json
{
    "text": "name menu",
    "url": "#"
}
```

### Drop down menu

```json
{
    "text": "Name drop menu",
    "url": "/",
    "extraClass": "menu-item-has-children",
    "subClass": "sub-menu",
    "subMenu": [
        {
            "text": "sub menu 1",
            "url": "#"
        },
        {
            "text": "sub menu 2",
            "url": "#"
        },
        {
            "text": "sub menu n+1",
            "url": "/#"
        }
    ]
}
```

### Mega menu

Each block is 1 column, for example: 4 blocks are 4 columns.

* megaContent:
* megaItems:
* "heading":
* column mega menu:

```json
{
    "text": "Name menu",
    "url": "",
    "extraClass": "menu-item-has-children has-mega-menu",
    "subClass": "sub-menu",
    "mega": "true",
    "megaContent": [
        {
            "heading": "name block menu 1",
            "megaItems": [
                {
                    "text": "sub menu 1",
                    "url": "#"
                },
                {
                    "text": "sub menu 2",
                    "url": "#"
                }
            ]
        },
        {
            "heading": "name block menu 2",
            "megaItems": [
                {
                    "text": "sub menu 1",
                    "url": "#"
                },
                {
                    "text": "submenu 2",
                    "url": "#"
                }
            ]
        }
    ]
}
```

---

## Customizer Style

**Change color martfury:** https://www.youtube.com/watch?v=sKGUGCYC0W

**Open _variable.scss** `scss/utils/_variable.scss`. This place manages all colors:

* **$color-1st**: Main color.
* **$color-autopart**: Main color autopart.
* **$color-technology**: Main color technology.
* **$color-electronic**: Main color electronic.
* **$color-furniture**: Main color furniture.
* **$color-organic**: Main color organic.
* **$color-kids**: Main color kids.
* **$color-photo**: Main color photo.
* **$color-heading**: The colors of the heading.
* **$color-text**: the normal color of the text.
* **$color-link**: The colors of the link.

**Google fonts:** Customizer google fonts for template martfury, Refer: https://www.youtube.com/watch?v=K1qDUljZcpU

---

## API Setup

You can connect to any website system that provides API at `/repositories/Repository.js` with `const baseDomain = 'http://domain_API';`

---

## Strapi

### Tutorial: Strapi Install

**Note:** Password login back-end demo.

admin@demo.com/Admin@2020

### Yarn build

**Step 1:**
```
yarn install
```

**Step 2:**
```
yarn build
```

**Step 3:**
```
yarn start
```

### NPM build

**Step 1:**
```
npm install
```

**Step 2:**
```
npm run build
```

**Step 3:**
```
npm run start
```

---

## Deploy

### Node.js Server

Next.js can be deployed to any hosting provider that supports Node.js. This is the approach you should take if you're using.

Make sure your `package.json` has the `build` and `start` scripts:

`nuxt build` builds the production application in the `.nuxt` folder. After building, `nuxt start` starts a Node.js server that supports, serving both statically generated and server-side rendered pages.

---

**Documentação extraída de:** https://nouthemes-1.gitbook.io/martfury-vuejs

**Data da extração:** 18 de junho de 2025

**Última atualização da documentação original:** 1 ano atrás

