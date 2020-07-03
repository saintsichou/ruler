<!--
 * @Date: 2020-06-29 11:39:50
 * @LastEditors: Lee
 * @LastEditTime: 2020-06-30 17:53:41
--> 
<template>
    <div class="wrapper" id="wrapper">
            <div id="updateSize" @click="clickme">点我</div>
        <div class="ruler-horizontal">
            <svg id="svgH" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
        <div class="ruler-vertical">
            <svg id="svgV" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
    </div>
</template>
<script>
import '../../static/rulez.js'
export default{
    data() {
        return {
           rulez:null,
           rulezV:null
        }
    },
    components: {

    },
    methods: {
        clickme(){
            console.log(this.rulezV)
            console.log(this.rulezV.getGuideConfigs())
            let params = {position: Math.floor(Math.random()*200+100), strokeWidth: 1, className: "rulez-guide-vert"}
                console.log(params)
                this.rulezV.setGuideConfig([params])
                this.rulez.setGuideConfig([params])
        }
    },
    mounted() {   
        console.log(new Rulez())
        var someSvgElement = document.getElementById('svgH');
        this.rulez = new Rulez({
            element: someSvgElement,
            layout: 'horizontal',
            alignment: 'top',
            textDefaults: {
                rotation: -90,
                centerText: true
            },
            divisionDefaults: {
                        strokeWidth: 1,
                        type: 'rect',
                        className: 'rulez-rect',
                        renderer: null
                    },
            guides: [
                {
                    position: 200                
                },
            ]
        });
        this.rulez.render();
        this.rulezV = new Rulez({
            element: document.getElementById('svgV'),
            layout: 'vertical',
            alignment: 'right',
            units:'px',
            textDefaults: {
                rotation: 0,
                centerText: true,
                offset:30
            },
            divisionDefaults: {
                strokeWidth: 1,
                type: 'rect',
                className: 'rulez-rect',
                renderer: null
            },
            guides: [
                {
                    position: 200                
                },
            ]
            // texts: [
            //     {
            //         pixelGap: 100,
            //         offset: 20
            //     }
            // ]
        });
        this.rulezV.render();
    }
};
</script>
<style>
.ruler-vertical {
    position: fixed;
    top: 0;
    z-index: 0;
    right:30px;
    height:80%;
    /* background-color: black; */
    padding-top: 60px;
}

.ruler-horizontal {
    position: fixed;
    top: 60px;
    right: 60px;
    width:50%;
    z-index: 1;
    /* padding-left: 60px; */
    /* background-color: black; */
}
.ruler-horizontal svg, .ruler-vertical svg {
    width: 100%;
    height: 100%;
}
#updateSize{
    border:1px solid #000;
}
</style>
