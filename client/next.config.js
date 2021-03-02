module.exports = {
  async rewrites() {
    return [
      {
        source: '/app/:path*',
        destination: 'http://localhost:5000/:path*' // Proxy to Backend
      },
       {
        source: '/r/:path',
        destination: 'http://localhost:5000/r/:path*' // Proxy to Backend
      }
    ]
  }
}
