<template>
    <div class="container">

        <div class="page has-tabbar">
            <div class="page-content padding-bottom">
                示例1
                <div  style="height: 1000px; background-color: #0a9dc7;"></div>
                示例1
            </div>
        </div>

        <div class="tabbar-fixer">
            <cells class="tabbar-cells" outer-border="false" inner-border="false"
                   :items="tabs" :on-cell-click="_on_cell_click" row="1" col="3"></cells>
        </div>

        <div class="floater">
            <md-button class="button button-assertive button-fab editor-floater" @click.native="_on_goto_page_edit">
                编辑
            </md-button>

            <md-button class="button button-positive button-fab template-floater" @click.native="_on_popup_template_selector">
                模板
            </md-button>
        </div>

        <div class="template-drawer" v-if="drawer_show">
            <div class="template-drawer-operator">
                <z-icon icon="ion-android-sync" :text="style_text" @click.native="_switch_style"></z-icon>
                <z-icon icon="ion-android-done" text="完成" theme="energized" @click.native="_on_hide_template_selector" style="float: right;"></z-icon>
            </div>

            <div class="template-drawer-selector">

                <div class="theme-gallery">
                    <z-gallery direction="horizontal" spacewidth="5">
                        <z-gallery-item :style="'background-color:'+theme.color+';' " v-for="(theme, index) in theme_defines" :key="index">
                            <div class="theme-gallery-item" @click="_on_theme_click(index)" :class="{'active': index == theme_selected}">{{theme.name}}</div>
                        </z-gallery-item>
                    </z-gallery>
                </div>

                <div class="theme-serial">
                    <cells class="theme-serial-item" outer-border="false" inner-border="false" theme="transparent"
                           :items="theme_serials" :on-cell-click="_on_serial_click" row="1" :col="theme_serials.length"></cells>
                </div>

            </div>
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
                    '<div class="tabbar-item"><i class="icon ion-ios-home"></i><span>主页</span></div>',
                    '<div class="tabbar-item"><i class="icon ion-plus-circled"></i></div>',
                    '<div class="tabbar-item"><i class="icon ion-ios-more"></i><span>更多</span></div>',
                ],
                theme_serials: ['假期','可爱','经典','朦胧','节日','活动'],
                theme_index: 0,
                theme_defines: [],
                theme_selected: 0,
                theme_colors : ['#0a9dc7', '#e3a200', '#bf616a', '#339900',
                    '#0a9dc7', '#e3a200', '#bf616a', '#339900'],
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

            vm._render_theme_define(0);
        },
        methods: {
            _render_theme_define: function (serial) {
                console.log('_render_theme_define', serial)
                let vm = this;

                vm.theme_defines.length = 0;
                for(let i=0;i<8;i++) {
                    console.log(i);

                    vm.theme_defines.push({'name' : 'Item-'+serial+'-'+(i+1), 'color' : vm.theme_colors[i]});
                }
            },
            _on_cell_click: function (index) {
                console.log('_on_cell_click', index);

                let vm = this;

                switch(index)
                {
                    case 0:
                        console.log('home');
                        break;
                    case 1:
                        console.log('insert');
                        vm.$router.push('/example1/editor');
                        break;
                    case 2:
                        console.log('more');

                        vm.$z_actionSheet.show({
                            title: '更多',
                            buttons: {
                                '设置为私密': () => {
                                    console.log('action 1 called.')
                                },
                                '关闭打赏': () => {
                                    console.log('action 2 called.')
                                },
                                '关闭评论': () => {
                                    console.log('action 3 called.')
                                },
                                '查看评论': () => {
                                    console.log('action 4 called.')
                                },
                                '分享': () => {
                                    console.log('action 5 called.')
                                },
                                '删除': () => {
                                    console.log('action 6 called.')
                                },
                            }
                        });
                        break;
                }
            },
            _on_serial_click: function (index) {
                console.log('_on_serial_click', index);

                let vm = this;
                vm._render_theme_define(index);
            },
            _on_theme_click: function (index) {
                console.log('_on_theme_click', index);

                let vm = this;
                vm.theme_selected = index;

                let themename = vm.theme_defines[index].name;
                vm.$z_toast.show(themename, 1500);
            },
            _on_goto_page_edit: function () {
                console.log('_on_goto_page_edit');
                let vm = this;

                vm.$router.push('/example1/editor');
            },
            _switch_style: function () {
                console.log('_switch_style');
                let vm = this;

                if(vm.style==0)
                    vm.style = 1;
                else
                    vm.style = 0;
            },
            _on_popup_template_selector: function () {
                console.log('_on_popup_template_selector');
                let vm = this;

                vm.drawer_show = true;
            },
            _on_hide_template_selector: function () {
                console.log('_on_hide_template_selector');
                let vm = this;

                vm.drawer_show = false;
            },
        },

        beforeDestroy() {
            let vm = this;
            vm.$z_tabbar.$emit('hideTabbar')
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

    .editor-floater
    {
        position: fixed;
        bottom: 60px;
        left: 15px;
    }

    .template-floater
    {
        position: fixed;
        bottom: 60px;
        right: 15px;
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

    .template-drawer
    {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        z-index: 20;
        background-color: transparent;
        margin: 0;
        padding: 0;
        opacity: 1;
        transition: opacity .3s;
        -webkit-transition: opacity .3s;
    }
    .template-drawer-operator
    {
        padding: 5px;
        height: 30px;
    }
    .template-drawer-selector
    {
        background-color: black;
        height: 165px;
        margin-top: 5px;
        padding: 5px;
    }
    .theme-gallery
    {
        height: 130px;
        overflow: hidden;
    }
    .theme-serial
    {
        height: 25px;
    }


    .tabbar-cells
    {
        margin: 0;
    }
    .tabbar-cells .row
    {
        height: 44px;
    }
    .tabbar-item
    {
        font-size: 18px;
        height: 44px;
        line-height: 40px;
    }
    .tabbar-item span
    {
        padding-left: 5px;
    }

    .theme-serial
    {
        margin: 0;
        padding: 0 15px;
    }
    .theme-serial-item
    {
        margin: 0;
        color: gray;
    }
    .theme-serial-item .row
    {
        height: 25px;
    }

    div.theme-gallery-item
    {
        text-align: center;
        height: 120px;
        line-height: 120px;
    }
    div.theme-gallery-item.active
    {
        border: solid 1px #f3f3f3;
    }

    div.theme-serial .row .col.active
    {
        border-radius: 10px;
        background-color: rgba(99, 99, 99, 0.6);
    }

    .gallery
    {
        height: 130px;

        .gallery-item {
            width: 80px;
            height: 120px;
        }
    }

</style>
