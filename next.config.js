const withPWA = require('next-pwa')

module.exports = withPWA({
  future: {webpack5: true},
  pwa: {
    dest: 'public',
    fallbacks: {
      image: '/static/images/fallback.png',
    }
  }
})
