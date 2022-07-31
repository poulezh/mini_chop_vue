<template>
  <div class="e-catalog">
    <h1>Catalog</h1>
    <div class="e-catalog__list" >
      <ECatalogItem v-for="product in products" 
        :key="product.id" 
        :product="product"
        @sendDataToParent="showChildArticle" />
    </div>
  </div>
</template>

<script>
import ECatalogItem from "./ECatalogItem.vue";
export default {
  name: "ECatalog",
  created() {},
  data() {
    return {
      products: [
        {
          id: 1,
          image: "1.jpg",
          name: "T-shirt 1",
          price: 210,
          article: "T1",
          available: true,
          category: "Мужские",
        },
        {
          id: 2,
          image: "2.jpg",
          name: "T-shirt 2",
          price: 350,
          article: "T2",
          available: true,
          category: "Женские",
        },
        {
          id: 3,
          image: "3.jpg",
          name: "T-shirt 3",
          price: 400,
          article: "T3",
          available: false,
          category: "Женские",
        },
        {
          id: 4,
          image: "4.jpg",
          name: "T-shirt 4",
          price: 500,
          article: "T4",
          available: true,
          category: "Мужские",
        },
        {
          id: 5,
          image: "5.jpg",
          name: "T-shirt 5",
          price: 500,
          article: "T5",
          available: false,
          category: "Женские",
        },
        {
          id: 6,
          image: "6.jpeg",
          name: "T-shirt 6",
          price: 870,
          article: "T6",
          available: true,
          category: "Женские",
        },
      ],
    };
  },
  props: {},
  methods: {
    showChildArticle(data){
      console.log(data);

    }
  },
  components: { ECatalogItem },
};
</script>

<style lang="scss" scoped></style>
