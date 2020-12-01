<template>
  <div>
    Filter Todos :
    <select @change="(val) => filterTodos(val)">
      <option
        v-for="filter in allFilters"
        :key="filter.id"
        :value="filter.value"
        >{{ filter.value }}</option
      >
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FilterTodos",
  methods: mapActions(["filterTodos"]),
  computed: mapGetters(["allFilters"]),
};
</script>

<style scoped></style>
