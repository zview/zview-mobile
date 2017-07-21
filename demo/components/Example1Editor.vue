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
                        <z-icon icon="ion-ios-musical-note" theme="whitesmoke-a" class="float-left" text="添加音乐" @click.native="_on_change_music"></z-icon>
                        <z-icon theme="whitesmoke-a" class="float-right" text="更改封面" @click.native="_on_change_preface"></z-icon>
                    </div>
                </z-panel>

                <div v-for="(item,key) in contents" :key="key">

                    <div class="editor-liner-insert text-center" v-if="key==0">
                        <z-icon icon="ion-ios-plus-empty" theme="silver"></z-icon>
                    </div>

                    <z-panel class="editor-content">
                        <div slot="header" class="content-top">
                            <z-icon icon="ion-ios-close-empty" theme="transparent" class="float-left" @click.native="_on_remove_section"></z-icon>
                            <z-icon icon="ion-ios-arrow-up" theme="transparent" class="float-right" v-if="key!=0"></z-icon>
                        </div>
                        <div slot="content" class="content-middle">
                            <div class="content-image float-left" @click="_on_change_image(item.type)"
                                 :class="{'istext': item.type==1, 'isvideo': item.type==3}">
                            </div>
                            <div class="content-text float-left">
                                content {{item.text}}
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

        <transition name="drawer">
            <div class="music-drawer" v-if="drawer_show">
                <div class="drawer-header">
                    <button class="button button-clear button-stable" @click="_on_music_cancel">
                        <slot name="cancel">
                            取消
                        </slot>
                    </button>

                    <button class="button button-clear button-balanced btn-confirm" @click="_on_music_submit">
                        <slot name="confirm">
                            确定
                        </slot>
                    </button>
                </div>

                <div class="drawer-body">
                    <scroller>
                        <von-radio :options="musicOptions" v-model="musicIndex"></von-radio>
                    </scroller>
                </div>
            </div>
        </transition>

    </div>
</template>
<script>

    import ImageViewer from './Example1Viewer.vue';

    const TYPE_TEXT     = 1; //纯文字
    const TYPE_IMAGE    = 2; //图文混合
    const TYPE_VIDEO    = 3; //视频

    export default {
        data() {
            return {
                style: 0,  //0 字上图下 1 字下图上
                drawer_show: false,
                tabs: [
                    '<div class="tabbar-item"><span>完成</span></div>',
                ],
                contents: [
                    {'type': TYPE_TEXT, 'text': 'one', 'imageurl': '', 'videourl': ''},
                    {'type': TYPE_IMAGE, 'text': 'two', 'imageurl': 'http://i.xbd.com/a', 'videourl': ''},
                    {'type': TYPE_IMAGE, 'text': 'three', 'imageurl': 'http://i.xbd.com/a', 'videourl': ''},
                    {'type': TYPE_VIDEO, 'text': '', 'imageurl': '', 'videourl': 'http://v.yukou.com/a'},
                    {'type': TYPE_IMAGE, 'text': 'four', 'imageurl': 'http://i.xbd.com/a', 'videourl': ''},
                ],
                musicIndex: 0,
                musicOptions: [
                    "无背景音乐", "音乐1", "音乐2", "音乐3", "音乐4", "音乐5", "音乐6",
                ],
                modal: undefined,
            }
        },
        computed: {
            style_text: function () {
                let vm = this;
                return (vm.style==0)?'字上图下':'字下图上';
            },
        },
        watch: {
            musicIndex: function (val) {
                var vm = this;

                console.log('musicIndex', val);
            },
        },
        mounted: function() {
            console.log('mounted');
            var vm = this;

            vm.$z_modal.fromComponent(ImageViewer, {
                title: '查看图片',
                theme: 'dark',
                onHide: () => {
                    console.log('modal hide')
                }
            }).then((modal) => {
                this.modal = modal;
            });
        },
        methods: {
            parse_section_image: function (type) {
                if(type==TYPE_IMAGE) {
                    return '../assert/images/nature-holder.jpg';
                }
                else {
                    return '../assert/images/banner-holder.jpg';
                }
            },
            _on_cell_click: function (index) {
                console.log('_on_cell_click', index);

                let vm = this;
            },
            _on_change_music: function () {
                console.log('_on_change_music');
                let vm = this;

                vm.drawer_show = true;
            },
            _on_change_preface: function () {
                console.log('_on_change_preface');
                let vm = this;

                vm.$z_actionSheet.show({
                    buttons: {
                        '拍照': () => {
                            console.log('action 1 called.')
                        },
                        '从手机相册选择': () => {
                            console.log('action 2 called.')
                        },
                    }
                });
            },
            _on_music_cancel: function () {
                console.log('_on_music_cancel');
                let vm = this;

                vm.drawer_show = false;
            },
            _on_music_submit: function () {
                console.log('_on_music_submit');
                let vm = this;

                vm.drawer_show = false;
                vm.$z_toast.show('选择了' + vm.musicOptions[vm.musicIndex]);
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
                    console.log('confirm result: ', res);
                })
            },
            _on_change_image: function (type) {
                console.log('_on_change_image', type);
                let vm = this;

                switch(type)
                {
                    case TYPE_TEXT:
                        vm.$z_actionSheet.show({
                            buttons: {
                                '拍照': () => {
                                    console.log('action 1 called.')
                                },
                                '从手机相册选择': () => {
                                    console.log('action 2 called.')
                                },
                            }
                        });
                        break;
                    case TYPE_IMAGE:
                        vm.modal.show();

                        break;
                    case TYPE_VIDEO:

                        break;
                }

            },

        },
        destroyed() {
            let vm = this;
            if (this.modal)
                vm.$z_modal.destroy(this.modal)
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
    .content-image.istext, .content-image.isvideo
    {
        background-image: url("../assets/images/banner-holder.png");
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

    .drawer-enter-active, .drawer-leave-active
    {
        transition: transform .3s ease-in-out;
        -webkit-transition: -webkit-transform .3s ease-in-out;

        transform: translate(0, 0);
        -webkit-transform: translate(0, 0);
    }
    .drawer-enter, .drawer-leave-active
    {
        transition: transform .3s ease-in-out;
        -webkit-transition: -webkit-transform .3s ease-in-out;

        transform: translate(0, 100%);
        -webkit-transform: translate(0, 100%);
    }

    .music-drawer
    {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        z-index: 20;
        padding: 0;
        margin: 0 0 44px;
    }

    .drawer-header
    {
        height: 45px;
        padding: 0;
        background: #fff;
        position: relative;
        z-index: 30;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.10);

        .btn-confirm
        {
            position: absolute;
            right: 0;
        }
    }

    .drawer-body
    {
        height: 200px;
        padding: 0;
        position: relative;
        background: #f5f5f5;
        z-index: 20;
    }

</style>
