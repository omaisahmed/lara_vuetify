<!-- <template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> -->

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-checkbox label="Checkbox"></v-checkbox>
        <v-combobox
  clearable
  chips
  label="Combobox"
  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
></v-combobox>

<v-autocomplete
  clearable
  chips
  label="Autocomplete"
  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  multiple
></v-autocomplete>
<v-file-input label="File input"></v-file-input>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
