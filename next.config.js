const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/timegrid',
  '@fullcalendar/interaction',
  '@fullcalendar/react',
]);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.shields.io'],
  },
};

module.exports = withTM({ nextConfig });
