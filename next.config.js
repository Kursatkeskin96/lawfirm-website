const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['picsum.photos', '127.0.0.1'],
    remotePatterns: [  {
      protocol: 'http',
      hostname: '127.0.0.1',
      port: '',
      pathname: '/uploads/**',
    },
  ],
  },
};

module.exports = nextConfig;
