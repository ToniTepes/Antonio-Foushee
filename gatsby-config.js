let siteMetadata = {
    title: `Antonio Foushee`,
    capitalizeTitleOnHome: true,
    logo: `/images/ME.png`,
    icon: `/images/ME.png`,
    titleImage: `/images/fallfo.jpg`,
    introTag: `WRITER | PHOTOGRAPHER | MUSICIAN | MECHANIC | DEVELOPER`,
    description: `"Innovation happens in the spaces between formal disciplines"`,
    author: `@_ToniTepes`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "RESUME",
            url: "https://drive.google.com/file/d/1XRMBJw3MaaYvKZ8NmfnIp1N2G6ijzh4g/view?usp=sharing"

        },
        // {
        //     name: "BLOG",
        //     url: "/blog"
        // },
        // {
        //     name: "CONTACT",
        //     url: "/contact"
        // }
    ],
    footerLinks: [
        {
            name: "",
            url: ""
        },
        {
            name: "",
            url: ""
        }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook2.png",
            url: "https://www.facebook.com/ASF.666.7734"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter4.png",
            url: "https://twitter.com/toni_tepes"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram2.png",
            url: "https://www.instagram.com/toni.tepes/"
        },
        {
            name: "GitHub",
            icon: "/images/github1.png",
            url: "https://github.com/ToniTepes"
        },
        {
            name: "LinkedIn",
            icon: "/images/linkedin.png",
            url: "https://www.linkedin.com/in/antonio-stacy-foushee-029b19131/"
        },
        {
            name: "Patreon",
            icon: "/images/pngaaa.com-1658499.png",
            url: "https://www.patreon.com/antoniofoushee"
        },
        {
            name: "BandCamp",
            icon: "/images/9o1oo8n6f5lto8vnd6gv9n9h48.png",
            url: "https://minoritythreat.bandcamp.com/"
        },
        {
            name: "CashApp",
            icon: "/images/pngfind.com-venmo-png-6407096.png",
            url: "http://cash.app/AntonioFoushee"
        },
        {
            name: "Venmo",
            icon: "/images/pngjoy.com_venmo-venmo-logo-png-transparent-png_20523003.png",
            url: "https://venmo.com/code?user_id=2719395168124928589&created=1624044806"
        },



    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Thank you for viewing. Please send me questions you may have!`,
        mail: "AntonioStacy@gmail.com",
        phone: "216.505.0703",
        address: "Cleveland, OH"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    pathPrefix: "/Toni-Gatsby-Portfolio",
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "nofollow"
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        },
    ]
};
