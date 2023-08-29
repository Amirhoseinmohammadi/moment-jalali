<template>
  <div id="app">
    <div class="container p-3">
      <InputOne class="my-2" />
      <FormValidate />
      <DateComponent class="my-2" />
    </div>
  </div>
</template>

<script>
import InputOne from "./components/InputOne.vue"
import FormValidate from "./components/FormValidate.vue"
import DateComponent from "./components/DateComponent.vue"

export default {
  name: "App",
  components: {
    InputOne,
    FormValidate,
    DateComponent,
  },
}
</script>

<style></style>
