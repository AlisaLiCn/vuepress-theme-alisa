<template>
  <div id="vuepress-theme-blog__post-layout">
    <div class="vuepress-blog-theme-content">
      <div class="content-title">
        {{ $page.title }}
      </div>
      <Content/>
      <Newsletter v-if="$service.email.enabled"/>
      <hr/>
      <!--<Comment/>-->
    </div>
    <div class="vuepress-blog-theme-aside">
      <!--<tag-list></tag-list>-->
      <Toc/>
    </div>
  </div>
</template>

<script>
import Toc from '@theme/components/Toc.vue';
import TagList from '@theme/components/TagList.vue';
import { Comment } from '@vuepress/plugin-blog/lib/client/components';

export default {
  components: {
    Toc,
    TagList,
    Comment,
    Newsletter: () => import('@theme/components/Newsletter.vue'),
  },
  created() {
    console.log('list', this);
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

#vuepress-theme-blog__post-layout
  display flex
  justify-content flex-start

  .vuepress-blog-theme-content
    flex-shrink 0
    width 740px
    margin-right 20px
    background-color #fff
    font-size 15px
    letter-spacing 0
    color $textColor
    @media (min-width: $MQNarrow)
      padding 1.5rem
    @media (max-width: $MQMobileNarrow)
      padding 1rem
    .content__default:not(.custom) > *:first-child
      margin-top 2rem
    .content-title
      font-size 32px
      font-weight 600

  .vuepress-blog-theme-aside
    width 100%

</style>
