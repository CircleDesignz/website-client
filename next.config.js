module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://0.0.0.0:3000/:path*'
      }
    ]
  },
};
