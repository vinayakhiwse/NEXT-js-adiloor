/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/:path",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
