<!--
 * @Date: 2020-06-29 11:39:50
 * @LastEditors: Lee
 * @LastEditTime: 2020-06-29 16:51:51
--> 
<template>
    <div class="wrapper" id="wrapper">
        <SketchRule
            :lang="lang"
            :thick="thick"
            :scale="scale"
            :width="width"
            :height="height"
            :startX="startX"
            :startY="startY"
            :shadow="shadow"
            :horLineArr="lines.h"
            :verLineArr="lines.v"
            :cornerActive="true"
          
            @onCornerClick="handleCornerClick"
        >
        </SketchRule>
    </div>
</template>
<script>
import Vue from 'vue';
import SketchRule from "vue-sketch-ruler";
export default Vue.extend({
    data() {
        return {
            scale: 1, //658813476562495, //1,
            startX: 0,
            startY: 0,
            lines: {
                h: [50],
                v: [100]
            },
            thick: 20,
            width: 100,
            height: 10,
            rectWidth:10,
            rectHeight:10,
            lang: "zh-CN", // 中英文
            isShowRuler: false, // 显示标尺
            isShowReferLine: false // 显示参考线
        }
    },
    components: {
        SketchRule
    },
    computed: {
        shadow() {
            return {
                x: 0,
                y: 0,
                width: this.rectWidth,
                height: this.rectHeight
            }
        },
        canvasStyle() {
            return {
                width: this.rectWidth + 'px',
                height: this.rectHeight + 'px',
                transform: `scale(${this.scale})`
            }
        }
    },
    methods: {
        handleLine(lines) {
            this.lines = lines;
        },
        handleCornerClick() {
            return;
        },
        initSize() {
            const wrapperRect = document
                .querySelector("#wrapper")
                .getBoundingClientRect();
            const borderWidth = 1;
            this.width = wrapperRect.width - this.thick - borderWidth;
            this.height = wrapperRect.height - this.thick - borderWidth;
        }
    },
    mounted() {
            this.initSize();
    }
});
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  overflow: hidden; }
body * {
  box-sizing: border-box;
  user-select: none; }
.wrapper {
  background-color: #f5f5f5;
  position: absolute;
  /* top: 100px;
  left: 100px; */
  width: 100%;
  height: 100%;
  border: 1px solid #DADADC; }
#screens {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto; }
.screen-container {
  position: absolute;
  width: 5000px;
  height: 3000px; }
.scale-value {
  position: absolute;
  left: 0;
  bottom: 100%; }
.button {
  position: absolute;
  left: 100px;
  bottom: 100%; }
.button-ch {
  position: absolute;
  left: 200px;
  bottom: 100%; }
.button-en {
  position: absolute;
  left: 230px;
  bottom: 100%; }
#canvas {
  position: absolute;
  top: 80px;
  left: 50%;
  margin-left: -80px;
  width: 160px;
  height: 200px;
  background: lightblue;
  transform-origin: 50% 0; }
</style>