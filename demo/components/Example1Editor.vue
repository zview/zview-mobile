<template>
    <div class="container">

        <div class="page has-tabbar">
            <div class="page-content">
                <z-panel render="render-5-2" class="editor-header">
                    <div slot="header" class="header-title text-left">
                        点击修改标题
                    </div>
                    <div slot="content">
                    </div>
                    <div slot="footer" class="header-action">
                        <z-icon icon="ion-ios-musical-note" theme="whitesmoke-a" class="float-left" text="添加音乐"></z-icon>
                        <z-icon theme="whitesmoke-a" class="float-right" text="更改封面" @click.native="_on_change_preface"></z-icon>
                    </div>
                </z-panel>

                <div v-for="(i,key) in contents" :key="key">

                    <div class="editor-liner-insert text-center" v-if="key==0">
                        <z-icon icon="ion-ios-plus-empty" theme="silver"></z-icon>
                    </div>

                    <z-panel class="editor-content">
                        <div slot="header" class="content-top">
                            <z-icon icon="ion-ios-close-empty" theme="transparent" class="float-left" @click.native="_on_remove_section"></z-icon>
                            <z-icon icon="ion-ios-arrow-up" theme="transparent" class="float-right" v-if="key!=0"></z-icon>
                        </div>
                        <div slot="content" class="content-middle">
                            <div class="content-image float-left">
                            </div>
                            <div class="content-text float-left">
                                content {{i}}
                            </div>
                        </div>
                        <div slot="footer" class="content-bottom">
                            <z-icon icon="ion-ios-arrow-down" theme="transparent" class="content-icon-down" v-if="contents && key!=contents.length-1"></z-icon>
                        </div>
                    </z-panel>

                    <div class="editor-liner-insert text-center">
                        <z-icon icon="ion-ios-plus-empty" theme="silver"></z-icon>
                    </div>
                </div>


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
                contents: [
                    'one', 'two', 'three', 'four'
                ]
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
            },
            _on_change_preface: function () {
                console.log('_on_change_preface');
                let vm = this;

                vm.$z_actionSheet.show({
                    buttons: {
                        '从手机相册选择': () => {
                            console.log('action 1 called.')
                        },
                        '拍照': () => {
                            console.log('action 2 called.')
                        },
                    }
                });
            },
            _on_remove_section: function () {
                console.log('_on_remove_section');
                let vm = this;

                vm.$z_dialog.confirm({
                    theme: 'ios',
                    title: '确定删除此段?',
                    cancelText: '取消',
                    okText: '确定'
                }).then((res) => {
                    console.log('confirm result: ', res)
                })
            }

        },

        beforeDestroy() {
            let vm = this;

        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

    $content-height: 140px;

    .editor-header
    {
        background-image: url("../assets/images/nature-holder.jpg");
    }

    .editor-content
    {
        height: $content-height;
        margin: 0 10px;
        border-radius: 10px;
    }

    .editor-liner-insert
    {
        padding: 10px;
    }

    .tabbar-fixer
    {
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

    .header-title
    {
        font-size: 24px;
        color: #ffffff;
        text-shadow: 1px 1px 1px #000000;
        position: relative;
        top: 15px;
        padding: 0 10px;
    }

    .header-action
    {
        position: relative;
        top: 100px;
        padding: 0 10px;
    }

    .content-image
    {
        height: $content-height - 40;
        width: $content-height - 40;
        margin: 0 10px;
        border-radius: 5px;
        background: #ffffff url("../assets/images/nature-holder.jpg") no-repeat center;
        background-size: cover;
    }

    .content-middle
    {
        color: #0a9dc7;
        clear: both;
        float: none;
    }

    .content-icon-down
    {
        width: 100%;
        text-align: right;
    }

</style>
