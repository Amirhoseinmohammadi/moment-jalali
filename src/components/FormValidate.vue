<template>
  <div class="p-5 border shadow">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(submited)">
        <ValidationProvider
          class="d-flex flex-column"
          rules="required|alpha"
          v-slot="{ errors }"
        >
          <label class=" " for="name">userName : </label>
          <input v-model="username" type="text" id="name" />

          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          class="d-flex flex-column"
          rules="required|minmax:1,2"
          v-slot="{ errors }"
        >
          <label class="mx-3" for="name">userAge : </label>
          <input v-model="userage" type="text" id="name" />

          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          class="d-flex flex-column"
          rules="required|email"
          v-slot="{ errors }"
        >
          <label class="mx-3" for="name">useremail : </label>
          <input v-model="useremail" type="text" id="name" />

          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
        <button class="btn btn-danger m-3" type="submit">Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate"
export default {
  name: "FormValidate",
  data() {
    return {
      username: "",
      userage: "",
      useremail: "",
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    submited() {
      alert(" submited ")
    },
  },
}
</script>

<style lang="scss" scoped></style>
