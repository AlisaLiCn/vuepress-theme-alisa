<template>
  <div id="base-list-layout">
    <div class="base-list-left">
      <div class="ui-posts">
        <div v-for="page in pages" :key="page.key" class="ui-post">
          <div class="ui-post-title">
            <NavLink :link="page.path">
              <span class="ui-post-title-text">{{ page.title }}</span>
            </NavLink>
          </div>

          <p class="ui-post-summary">
            {{ page.frontmatter.summary || page.summary }}
            <!--<Content :page-key="page.key" slot-key="intro"/>-->
          </p>

          <div v-if="page.frontmatter.date" class="ui-post-date">
            <!--<ClockIcon/>-->
            <span>{{ formatPostDate(page.frontmatter.date) }}</span>
            <span class="ui-post-category">{{ page.frontmatter.category }}</span>
          </div>
        </div>
      </div>
      <Pagination></Pagination>
    </div>
    <div class="base-list-right">
      <div class="user-avatar">
        <img src="https://tvax3.sinaimg.cn/crop.0.0.996.996.180/6dc8b1b5ly8g70imyjw4fj20ro0ro0uc.jpg?KID=imgbed,tva&Expires=1585805143&ssig=Z%2FfWbrGbok">
      </div>
      <div class="user-info">
        <div class="user-name">Alisa Li</div>
        <div class="website-list">
          <span v-for="(item, index) in websiteList"
                @click="openWindow(item)"
          >
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import dayjs from 'dayjs';
import Pagination from '@theme/components/Pagination.vue';

export default {
  components: { Pagination },

  data() {
    return {
      websiteList: [
        { name: 'Github', url: 'https://github.com/alisalicn' },
        { name: 'Weibo', url: 'https://github.com/alisalicn' },
        { name: 'Wechat', url: 'https://github.com/alisalicn' },
      ],
    };
  },

  computed: {
    pages() {
      console.log('this', this);
      return this.$pagination.pages;
    },
  },

  created() {},

  methods: {
    formatPostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || 'YYYY-MM-DD',
      );
    },
    openWindow(website) {
      window.open(website.url, '_blank');
    },
  },
};
</script>

<style lang="stylus">
#base-list-layout
  display flex
  .base-list-left
    width 740px
    flex-shrink 0
    padding 20px
    margin-right 20px
    background-color #fff
  .base-list-right
    width 100%
    padding 50px 20px
    height 200px
    background-color #fff
    text-align center
    .user-avatar
      margin-bottom 30px
      img
        width 80px
        height 80px
        border-radius 50%
    .user-name
      margin 10px 0
      color #555
      font-size 16px
      font-weight 600
    .website-list
      color #666
      span + span
        margin-left 20px
        font-size 14px
      span
        cursor pointer
        transition all .2s
        &:hover
          color $accentColor

.common-layout
  .content-wrapper
    padding-bottom 80px

.ui-post
  padding-bottom 25px
  margin-bottom 25px
  border-bottom 1px solid #f1f1f1

  &:last-child
    border-bottom 0px
    margin-bottom 0px

.ui-post-title
  font-size 18px
  border-bottom 0
  .ui-post-title-text
    color $textColor
    animation all .2
    &:hover
      color darken($textColor, 20%)

.ui-post-summary
  font-size 14px
  color rgba(0, 0, 0, 0.54)
  font-weight 200

.ui-post-author
  display flex
  align-items center
  font-size 12px
  line-height 12px
  color rgba(0, 0, 0, 0.84)
  margin-bottom 3px
  font-weight 400

  svg
    margin-right 5px
    width 14px
    height 14px

.ui-post-date
  display flex
  align-items center
  font-size 12px
  color rgba(0, 0, 0, 0.54)
  font-weight 200

  svg
    margin-right 5px
    width 14px
    height 14px
  span + span
    margin-left 20px

.ui-post-category
  color $accentColor
  font-size 14px
</style>
