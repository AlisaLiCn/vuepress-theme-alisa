module.exports = {
  title: 'Alisa\'s Blog',
  theme: require.resolve('../../'),
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#dateFormat
     */
    dateFormat: 'YYYY-MM-DD',
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Home',
        link: '/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      since: '2018',
      author: 'Alisa',
      icp: '京ICP备18061403号-1'
    },

    modifyBlogPluginOptions(blogPluginOptions) {
      const sitemap = {
        hostname: 'https://yourdomain',
      };

      const comment = {
        // service: 'disqus',
        // shortname: 'vuepress-plugin-blog',
        service: 'vssue',
        clientId: 'db3ea8997caf13507157',
        clientSecret: 'e116b947c38704ebe1ba91a893151a2d9eabd312',
        repo: 'blog',
        owner: 'alisalicn',
        admin: ['alisalicn'],
      };

      const newsletter = {
        endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138',
      };

      return { ...blogPluginOptions, sitemap, comment };
    },

    // paginationComponent: 'SimplePagination'
  },
};
