<template>
  <div class="e-main-wrapper" >{{title}}</div>
  <ECatalog />
  <ECard />
</template>

<script>
import ECatalog from './ECatalog.vue';
import ECard from './ECard.vue';
export default {
    name: "EMainWrapper",
    created() { },
    data() {
        return {
            title: "hhhhh",
        };
    },
    props: {},
    methods: {},
    components: { ECatalog, ECard,  }
};
</script>


<style lang="scss" scoped>

</style>