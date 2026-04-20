/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://elevate-mena.com',
    generateRobotsTxt: true,
    outDir: 'public',
    sitemapSize: 7000,
    additionalSitemaps: [
        'https://www.elevate-mena.com/image-sitemap.xml',
    ],
};
