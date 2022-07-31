<template>
  <div class="e-main-wrapper" ></div>
  <ECatalog />
  <ECard 
    v-if="CART.length"
    :cart_data="CART"
    />
</template>

<script>
import ECatalog from './ECatalog.vue';
import ECard from './ECard.vue';
import {mapGetters} from "vuex";

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
    components: { ECatalog, ECard,  },
    computed: {
        ...mapGetters([
            'CART'
        ])
    }
};
</script>


<style lang="scss" scoped>

</style>