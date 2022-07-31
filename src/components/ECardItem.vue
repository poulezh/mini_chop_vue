<template>
  <div class="e-card-item">
        <img class="e-card-item__img" :src=" require('../assets/images/' + cart_item_data.image)" alt="img">
        <div class="e-card-item__info">
          <p>{{cart_item_data.name}}</p>
          <p>Price: {{cart_item_data.price}} p.</p>
          <p>Article: {{cart_item_data.article}}</p>
        </div>
        <div class="e-card-item__quality">
          <p>Qty</p>
          {{cart_item_data.quantity}}

        </div>
        
        <button @click="deleteFromCart">Delete</button>

  </div>
</template>

<script>
export default {
  name: "ECardItem",
  created() {},
  data() {
    return {};
  },
  props: {
    cart_item_data:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    deleteFromCart(){
      this.$emit('deleteFromCart', this.cart_item_data)

    },

  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.e-card-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  &__img{
    max-width: 50px;
  }
}

</style>