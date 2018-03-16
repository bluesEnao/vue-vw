<template>
  <div id="app">
    <div aspectratio w-188-246>  
      <div aspectratio-content>
        <img src="./assets/logo.png" width="100%" height="100%">      
      </div>  
    </div>
    <router-view/>
    <div class="cevw" style="">您好</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size:24px;
}
.cevw{font-size:80px;margin-top:20px;}/*写在标签上的样式无法解析vw*/
/*容器的宽度缩放比*/
[w-188-246] { width:200px;}
[w-188-246] {aspect-ratio: '200:200'; }/*分开写*/
[aspectratio] {
    position: relative;
}
[aspectratio]:before {
    content: "";
    display: block;
    width: 1px;
    margin-left: -1px;
    height: 0;
}
[aspectratio-content]{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
}
[aspectratio-content] img {
    width: 100%;
    height: 100%;
    vertical-align: top;
}
</style>
<!-- /*
  通过
*/ -->