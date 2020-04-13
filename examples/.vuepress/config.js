module.exports = {
  // title: 'Alisa\'s blog',
  title: '测试测试啊',
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
    },

    modifyBlogPluginOptions(blogPluginOptions) {
      const sitemap = {
        hostname: 'https://yourdomain',
      }

      const comment = {
        service: 'disqus',
        shortname: 'vuepress-plugin-blog',
        // service: 'vssue',
        // owner: 'You',
        // repo: 'Your repo',
        // clientId: 'Your clientId',
        // clientSecret: 'Your clientSecret',
      }

      const newsletter = {
        endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138',
      }

      return { ...blogPluginOptions, sitemap, comment }
    },

    // paginationComponent: 'SimplePagination'
  },
}
