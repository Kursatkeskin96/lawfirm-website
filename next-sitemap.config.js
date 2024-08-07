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

  // Generate paths for each page in Turkish (default language)
  const defaultLanguagePaths = pages.map((page) => ({
    loc: `/${page}`,
    lastmod: new Date().toISOString(),
  }));

  // Generate paths for each page in English
  const englishPaths = pages.map((page) => ({
    loc: `/en/${page}`,
    lastmod: new Date().toISOString(),
  }));

  // Combine both language paths
  const paths = [...defaultLanguagePaths, ...englishPaths];

  return paths;
};

module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.hukukozdemir.com/",
  generateRobotsTxt: true,
  additionalPaths: getAllPagesForSitemap,
  // ...other options
};
