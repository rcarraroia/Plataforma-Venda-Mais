export default {
    head: {
        title: "Martfury Admin template with VueJS",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Martfury Admin template with VueJS"
            }
        ],
        link: [
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext"
            },
            {
                rel: "shortcut icon",
                href: "~/static/favicon.png"
            },
            {
                rel: "apple-touch-icon-precomposed",
                href: "~/static/favicon.png"
            }
        ]
    },

    css: [
        "~/static/fonts/Linearicons/Font/demo-files/demo.css",
        "~/static/fonts/font-awesome/css/font-awesome.min.css",
        "~/static/css/bootstrap.min.css",
        "~/assets/styles/env.scss",
        "~/assets/styles/style.scss"
    ],

    buildModules: ["@nuxtjs/vuetify", "@nuxtjs/style-resources"],
    plugins: [{ src: "~/plugins/apexcharts.js", ssr: false }],
    styleResources: {
        scss: "./assets/scss/env.scss"
    },
    router: {
        linkActiveClass: "",
        linkExactActiveClass: "active"
    },

    server: {
        port: 4003,
        host: "localhost"
    }
};
