let siteMetadata = {
    title: `Antonio Foushee`,
    capitalizeTitleOnHome: true,
    logo: `https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/19623006_1893862597548072_6874709749888188416_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=100&_nc_ohc=joaaNdxAJyIAX9e7zYe&oh=cbe627c0a1a83a1de8823a559de2088d&oe=5E93B0FC`,
    icon: `/images/icon.png`,
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
        //     name: "PORTFOLIO",
        //     url: "/portfolio"
        // },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "GitHub",
            url: "https://github.com/ToniTepes"
        }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/facebook_icon-icons.com_59205.svg",
            url: "https://www.facebook.com/ASF.666.7734"
        },
        {
            name: "Twitter",
            icon: "/images/twitter_2_icon-icons.com_59206.svg",
            url: "https://twitter.com/toni_tepes"
        },
        {
            name: "Instagram",
            icon: "/images/1491580635-yumminkysocialmedia26_83102.png",
            url: "https://www.instagram.com/tonitepes/"
        },
        {
            name: "GitHub",
            icon: "/images/github_icon-icons.com_59223.svg",
            url: "https://github.com/ToniTepes"
        },
        {
            name: "LinkedIn",
            icon: "/images/linkedin_icon-icons.com_59208.svg",
            url: "https://www.linkedin.com/in/antonio-foushee-029b19131/"
        }

    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "hi@akzhy.com",
        phone: "000-000-0000",
        address: "1234 \nLocation \nLocation"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
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
        }
    ]
};
