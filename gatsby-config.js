let siteMetadata = {
    title: `Antonio Foushee`,
    capitalizeTitleOnHome: true,
    logo: `/images/me1.png`,
    icon: `/images/me1.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `WEB DEVELOPER | PHOTOGRAPHER | MUSICIAN | MECHANIC`,
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
            name: "BLOG",
            url: "/blog"
        },
        // {
        //     name: "CONTACT",
        //     url: "/contact"
        // }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "GitHub",
            url: "https://www.clipartmax.com/png/small/165-1654354_character-correlation-in-phylogenetics-github-logo.png"
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
            url: "https://www.instagram.com/tonitepes/"
        },
        {
            name: "GitHub",
            icon: "/images/github1.png",
            url: "https://github.com/ToniTepes"
        },
        {
            name: "LinkedIn",
            icon: "/images/linkedin.png",
            url: "https://www.linkedin.com/in/antonio-foushee-029b19131/"
        }

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
