<template>
  <div class="showcase-list pt-3">
    <div 
      class="showcase"
      v-for="item in showcaseList" :key="item.title"
    >
      <img :src="item.image" alt="" class="showcase-title">
      <small class="showcase-title">{{ item.title }}</small>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showcaseList: [
        {
          title: 'Top Offers',
          url: '',
          image: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'
        },
        {
          title: 'Best Sellers',
          url: '',
          image: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100'
        },
        {
          title: 'Fashion',
          url: '',
          image: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100'
        },
        {
          title: 'Electronics',
          url: '',
          image: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100'
        },
        {
          title: 'New Releases',
          url: '',
          image: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100'
        },
        {
          title: 'Travel',
          url: '',
          image: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100'
        },
        {
          title: 'Toys and More',
          url: '',
          image: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100'
        },
        {
          title: 'New Release',
          url: '',
          image: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100'
        },
      ]
    }
  }
}
</script>

<style scoped>
.showcase-list{
  max-width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(8, auto);
  justify-content: space-between;
  align-items: baseline;
}
.showcase{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer; 
} 
.showcase-title{
  max-width: 80px;
  max-height: 80px;
} 
@media(max-width: 768px){
  .showcase-list{
    max-width: 90%;
    grid-template-columns: repeat(4, auto);
  }
}
</style>