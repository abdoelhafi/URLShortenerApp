module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/:path*' // Proxy to Backend
      },
       {
        source: '/r/:path',
        destination: 'http://localhost:5000/r/:path*' // Proxy to Backend
      },
       {
        source: '/auth/:path*',
        destination: 'http://localhost:5000/auth/:path*' // Proxy to Backend
      }
    ]
  }
}
