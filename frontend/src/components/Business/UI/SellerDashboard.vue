<template>
  <div class="seller-dashboard">
    <h1 class="display-1">Dashboard</h1>
    <div class="insights mt-5">
      <div class="insight">
        <h1 class="display-1">$ 15921.56</h1>
        <h1 class="title">Sales</h1> 
      </div>
      <div class="insight">
        <h1 class="display-1">$ 15921.56</h1>
        <h1 class="title">Sales</h1> 
      </div>
      <div class="insight">
        <h1 class="display-1">$ 15921.56</h1>
        <h1 class="title">Sales</h1> 
      </div>
    </div>
  </div>
</template>

<script>
export default { 
}
</script>

<style scoped>
.insights{
  width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.insight{
  padding: 10px;
  padding-top: 15px; 
  height: 100px;
  text-align: center;
}
.insight:nth-child(1){
  background-color: #448AFF;
}
.insight:nth-child(2){
  background-color: #80CBC4;
}
.insight:nth-child(3){
  background-color: #FF5252;
}
</style>