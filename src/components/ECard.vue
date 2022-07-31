<template>
  <div class="e-card">
    <h1>Cart</h1>

    <ECardItem
      v-for="item in cart_data"
      :key="item.key"
      :cart_item_data="item"
      @deleteFromCart="DELETE_CART_ITEM"
    />
  </div>
</template>

<script>
import ECardItem from "./ECardItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ECard",
  created() {},
  data() {
    return {};
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(["DELETE_CART_ITEM"]),

  },
  components: { ECardItem },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss" scoped></style>
