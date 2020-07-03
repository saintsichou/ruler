<template>
  <div class="hello">
    <vue-ruler-tool
      :content-layout="{left:0,top:0}"
      :is-scale-revise="true"
      :preset-line="presetLine"
    >
      <div class="test">123</div>
    </vue-ruler-tool>
    <div class="box animated bounceInDown"></div>
  </div>
</template>

<script>
import animate from 'animate.css';
import VueRulerTool from 'vue-ruler-tool'
export default {
  name: 'HelloWorld',
  components:{
    VueRulerTool
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test:true,
      presetLine: [{ type: 'l', site: 10 }, { type: 'v', site: 10 }]
    }
  },
  mounted () {
    // this.fade();
        
  },
  methods: {
    fade() {
        // this.$('#f').addClass('animated bounceOutLeft')
        this.test = false
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width:50px;
  height:50px;
  background: #42b983;
}
.test{
  width:20vw;
  height:20vh;
  background: #42b983;
}
.center{
  /* width:50vw; */
  /* height: 60vh; */
    top:50%;
    left:50%;
    position:absolute;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    transform:translate(-50%,-50%);
    background: #42b983;
}
.mask{
  width: 100%;
  height: 100%;
  background: #42b983;
  position: absolute;
  z-index: 1;
  top:0
}
.mask:hover{
  /* top:-100%; */
  animation: go 7s forwards;
}
@keyframes go {
  10%{
    top:-10%
  }
  50%{
    top:-50%
  }
  100%{
    top:-100%
  }
}
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
