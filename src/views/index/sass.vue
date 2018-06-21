<template>
  <div>
    <h2 class="h1">sass练习路由页面1</h2>
    <h2 class="h2">sass练习路由页面2</h2>
    <h2 class="h3">sass练习路由页面3</h2>
    <h2 class="h4">sass练习路由页面4</h2>
    <h2 class="h5">sass练习路由页面5</h2>
    <h4 class="test-extend">extend</h4>
  </div>
</template>
<style lang="scss" scoped>
  $h-color: #f0f;
  @mixin rounde-radius($width, $height, $h-color, $border-color, $radius) {
    width: $width;
    height: $height;
    color: $h-color;
    border: 1px solid $border-color;
    border-radius: $radius;
    margin: 20px;
  }
  .h1 {
    @include rounde-radius(200px, 30px, green, red, 5px)
  }
  .h2 {
    @include rounde-radius(300px, 40px, gray, green, 0px)
  }
  .h3 {
    @include rounde-radius(400px, 50px, black, green, 0px)
  }
  .h4 {
    @include rounde-radius(500px, 40px, #ff0, #f67, 6px)
  }
  .h5 {
    @include rounde-radius(600px, 30px, #0ff, #78f, 8px)
  }
  .test-extend {
    @extend .h5
  }
</style>
