const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'https://github.com/ToniTepes/Antonio-Foushee-Gatsby',
    },
    () => {
        console.log('Deploy Complete!')
    }
)
