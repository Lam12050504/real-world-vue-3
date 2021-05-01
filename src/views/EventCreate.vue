<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>This event was created by {{ user.name }}</p>
    <p>This user id: {{ user.id }}</p>
    <p>Categories: {{ catLength }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  //CACH 3
  computed: {
    ...mapState(["user", "categories"]),
    // computed: mapState({
    //   // userName: (state) => state.user.name,  CACH 1

    //   // user: "user", CACH 2
    //   // categories: "categories",

    // }),
    ...mapGetters(["getEventID", "catLength", "doneTodos"]),
  },
};
</script>

<style>
</style>
  