<template>
  <div class="tos">
    <h2>利用規約</h2>
    <md-field>
      <md-textarea v-model="textarea" md-counter="80"></md-textarea>
    </md-field>
    <md-button class="md-raised md-primary">同意する</md-button>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
