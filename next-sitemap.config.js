const getAllPagesForSitemap = async () => {
  // Static list of your pages
  const pages = [
    "calisma-alanlarimiz",
    "calisma-alanlarimiz/arabuluculuk",
    "calisma-alanlarimiz/dava-takibi-ve-uyusmazlik-cozumu",
    "calisma-alanlarimiz/icra-ve-iflas-hukuku",
    "calisma-alanlarimiz/is-hukuku",
    "calisma-alanlarimiz/saglik-hukuku",
    "calisma-alanlarimiz/sigorta-ve-reasurans-hukuku",
    "calisma-alanlarimiz/sozlesmeler-hukuku",
    "calisma-alanlarimiz/tuketici-hukuku",
    "hakkimizda",
    "iletisim",
    "kisisel-veriler",
    "sigorta-ve-reasurans-hukuku",
    "yasal-uyari",
  ];

  // Languages your site supports
  const languages = ["en", "tr"];

  // Generate paths for each language
  const paths = languages.flatMap((lang) =>
    pages.map((page) => ({
      loc: `/${lang}/${page}`,
      lastmod: new Date().toISOString(),
    }))
  );

  return paths;
};

module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.hukukozdemir.com/",
  generateRobotsTxt: true,
  additionalPaths: getAllPagesForSitemap,
  // ...other options
};
