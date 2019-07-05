<!-- -->
<template>
  <div id="app">
    <router-view />
    <FooterGuide v-if="$route.meta.isShowFooter" />
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  name: "App",
  components: {
    FooterGuide
  },
  props: {},
  data() {
    return {
      msg: "App Component"
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped></style>
