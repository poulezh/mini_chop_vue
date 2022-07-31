<template>
  <div class="e-catalog">
    <h1>Catalog</h1>
    <div class="e-catalog__list" >
      <ECatalogItem v-for="product in PRODUCTS" 
        :key="product.key" 
        :product="product"
        @addToCart="addToCart" />
    </div>
  </div>
</template>

<script>
import ECatalogItem from "./ECatalogItem.vue";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "ECatalog",
  created() {},
  data() {
    return {
      products: [],

    };
  },
  props: {},
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data){
      data.id = Math.random()
      this.ADD_TO_CART(data)
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  components: { ECatalogItem },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if (response.data){
        console.log(response.data, 'data')
      }
    })
  }
};
</script>

<style lang="scss" scoped></style>
