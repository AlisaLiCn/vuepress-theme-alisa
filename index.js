module.exports = (themeConfig, ctx) => {
  themeConfig = Object.assign(themeConfig, {
    summary: themeConfig.summary === undefined ? true : themeConfig.summary,
    summaryLength:
      typeof themeConfig.summaryLength === 'number'
        ? themeConfig.summaryLength
        : 200,
  });

  const { modifyBlogPluginOptions } = themeConfig;

  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        pagination: {
          lengthPerPage: 10,
        },
      },
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/tag/',
        layout: 'Tag',
        frontmatter: { title: 'Tag' },
        itemlayout: 'Tag',
        pagination: {
          lengthPerPage: 3,
        },
      },
    ],
  };

  const blogPluginOptions =
    typeof modifyBlogPluginOptions === 'function'
      ? modifyBlogPluginOptions(defaultBlogPluginOptions)
      : defaultBlogPluginOptions;


  return {
    plugins: [
      ['@vuepress/medium-zoom', true],
      [
        '@vuepress/search',
        {
          searchMaxSuggestions: 10,
        },
      ],
      ['@vuepress/blog', blogPluginOptions],
    ],
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination',
    },
  };
};
