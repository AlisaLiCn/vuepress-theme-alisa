<template>
  <div id="vuepress-theme-blog__global-layout">
    <Header/>
    <MobileHeader
            :is-open="isMobileHeaderOpen"
            @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
    />
    <div class="content-wrapper" @click="isMobileHeaderOpen = false">
      <div class="content-inner">
        <DefaultGlobalLayout/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue';
import Header from '@theme/components/Header.vue';
import MobileHeader from '@theme/components/MobileHeader.vue';
import Footer from '@theme/components/Footer.vue';

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    MobileHeader,
    Footer,
  },

  data() {
    return {
      isMobileHeaderOpen: false,
    };
  },

  mounted() {
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('data-ad-client', 'ca-pub-8344933861651902');
    scriptElement.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
    scriptElement.setAttribute('async','');
    document.body.appendChild(scriptElement);

    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false;
    });
  },
};
</script>

<style lang="stylus">
.content-wrapper
  min-height calc(100vh - 100px)
  .content-inner
    margin 20px auto
    width 1140px
    min-height 600px

@media (max-width: $MQMobile)
  .content-wrapper
    padding 60px 0 20px
    min-height calc(100vh - 20px - 60px - 100px)
    .content-inner
      width 100%
</style>
