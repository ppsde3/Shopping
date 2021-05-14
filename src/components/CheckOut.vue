<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <ul>
      <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
          <CartListItem :cartItem="cartItem"/>
      </li>
      <div class="notification is-success">
        <p>
          Total Quantity:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>
      </div>
      <br>
      <div class="notification is-success">
        <p>
          <span class="has-text-weight-bold">Your order has been placed Succesfully !</span>
        </p>
      </div>
    </ul>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CartListItem from "./cart/Cart_List_Item";
export default {
  name: "CheckOut",
  components: {
    CheckOut
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"]),
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    ...mapActions(["removeAllCartItems"]),
  }
};
</script>