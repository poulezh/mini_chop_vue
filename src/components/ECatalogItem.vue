<template>
  <div class="e-catalog-item">
    <img class="e-catalog-item__img" :src=" require('../assets/images/' + product.image)" alt="img">
    <p class="e-catalog-item__name">{{product.name}}</p>
    <p class="e-catalog-item__price">Price: {{product.price}} p.</p>
    <p class="e-catalog-item__category">{{product.category}}</p>
    <button class="e-catalog-item__btn btn" @click="addToCart">Add Cart</button>

  </div>
</template>

<script>
export default {
  name: "ECatalogItem",
  created() {},
  data() {
    return {};
  },
  props: {
    product:{
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  },
  methods: {
    addToCart(){
      this.$emit('addToCart', this.product)

    }

  },
};
</script>

<style lang="scss" scoped>

</style>