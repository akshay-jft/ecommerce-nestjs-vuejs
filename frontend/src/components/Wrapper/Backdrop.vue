<template>
  <div class="backdrop">
    <div class="modal-content">
      <slot></slot>
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .backdrop{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(0,0,0,0.8);
  }
  .modal-content{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: white; 
  }
</style>