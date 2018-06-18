<template>
  <div class="title">
    <h2>H5人脸比对测试</h2>
    <div class="random">
      <span>{{randomNumber[0]}}</span>
      <span>{{randomNumber[1]}}</span>
      <span>{{randomNumber[2]}}</span>
      <span>{{randomNumber[3]}}</span>
    </div>
    <div class="video-btn">
      <label for="video" >
        开始上传
        <input type="file"
               id="video"
               accept="video/*"
               capture="camcorder"
               title="111"
               placeholder=""
               hidden
               @change="handleVideo"/>
      </label>
    </div>
    <div>{{!faceResult ? '暂未结果' : faceText}}</div>
  </div>
</template>

<script>
import * as ite from './iterator/iterator.js'
import jsonp from 'jsonp'
import 'jquery'
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '张锋',
      idCard: '622425199201013519',
      randomNumber: '1234',
      faceResult: false,
      faceText: ''
    }
  },
  created() {
    // juqery 测试
    // $.ajax({
    //   type: 'GET',
    //   url: 'https://api.douban.com/v2/book/1220562',
    //   dataType: "jsonp",
    //   data: {},
    //   success: function(data) {
    //     console.log(data)
    //   }
    // })
  },
  methods: {
    handleVideo: function(e) {
      let reader = new FileReader()
      console.log(e.srcElement.files[0])
      const videoFile = e.srcElement.files[0]
      if (videoFile.name) {
        let oldTime = 0
        let newTime = 0
        // 获取到本地video文件
        // 异步请求的时候 后面会报错
        reader.readAsBinaryString(videoFile)
        // reader.readAsDataURL(videoFile)
        // console.log(reader.readAsDataURL(e.srcElement.files[0]), 666)
        reader.onloadstart = function() {
          oldTime = new Date().getTime()
          console.log('开始加载', oldTime)
        }
        reader.onload = function() {
          // 加载成功
          console.log('加载成功')
          console.log(this.result)
        }
        reader.onloadend = function() {
          newTime = new Date().getTime()
          console.log('加载结束', newTime)
          console.log('耗时:', newTime - oldTime)
        }
        reader.onprogress = function() {
          // 基本上每过50ms左右会触发一次 所以如果文件太大的话 可以在这里设置进度君
          console.log('加载中')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.title {
  text-align: center;
  font-size: 14px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.random {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
span {
  width: 40px;
  height: 40px; 
  border: 1px solid rgba(56, 173, 255, 1);
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  display: inline-block;
}
.video-btn {
  width: 200px;
  height: 40px;
  /* display: inline-block; */
  box-shadow: 0 0 3px 3px rgba(56, 173, 255, 1);
  position: absolute;
  bottom: 10px;
  left: 23%;
}
label {
  width: 100%;
  height: 100%;
  display: inline-block;
}
input {
  line-height: 40px;
  font-size: 20px;
  border: none;
  text-align: center;
}
</style>
