<template>
    <div class="container">

        <div class="page has-tabbar">
            <div class="page-content padding-top">
                示例1
                <div  style="height: 1000px; background-color: #0a9dc7;"></div>
                示例1
            </div>
        </div>

        <div class="tabbar-fixer">
            <cells class="tabbar-cells" outer-border="false" inner-border="false"
                   :items="tabs" :on-cell-click="_on_cell_click" row="1" col="1"></cells>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                style: 0,  //0 字上图下 1 字下图上
                drawer_show: false,
                tabs: [
                    '<div class="tabbar-item"><span>确定</span></div>',
                ],
            }
        },
        computed: {
            style_text: function () {
                let vm = this;
                return (vm.style==0)?'字上图下':'字下图上';
            },
        },
        mounted: function() {
            console.log('mounted');
            var vm = this;

        },
        methods: {
            _on_cell_click: function (index) {
                console.log('_on_cell_click', index);

                let vm = this;
            }
        },

        beforeDestroy() {
            let vm = this;

        }
    }
</script>

<style lang="scss">

    .tabbar-fixer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 44px;
        z-index: 10;
        background-color: #ffffff;
        margin: 0;
        padding: 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        opacity: 1;
        transition: opacity .2s;
        -webkit-transition: opacity .2s;
    }

</style>
