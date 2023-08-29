<template>
  <div class="container border shadow p-3">
    <ValidationProvider rules="required|alpha" v-slot="{ errors }">
      <label class="mx-2" for="name">Name : </label>
      <input v-model="name" id="name" rules="required|alpha" type="text" />
      <span class="m-2">{{ name }}</span> <br />
      <span class="text-danger">{{ errors[0] }}</span> <br />
    </ValidationProvider>

    <ValidationProvider rules="minmax:1,2" v-slot="{ errors }">
      <label class="mx-2" for="Age">Age : </label>
      <input type="text" id="Age" v-model="age" />
      <span class="m-2">{{ age }}</span> <br />
      <span class="text-danger">{{ errors[0] }}</span> <br />
    </ValidationProvider>

    <ValidationProvider rules="email" v-slot="{ errors }">
      <label class="mx-2" for="email">Email : </label>
      <input v-model="email" id="email" type="text" rules="email" />
      <span class="m-2">{{ email }}</span> <br />
      <span class="text-danger">{{ errors[0] }}</span> <br />
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate"
export default {
  name: "InputOne",
  components: {
    ValidationProvider,
  },

  data() {
    return {
      name: "AmirHosein",
      lastname: "Mohammadi",

      age: 30,
      email: "amirmi951@gmail.com",
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
