<template>
    <div class="container">

        <z-navbar v-nav="{title: '弹层', showBackButton: true}"></z-navbar>

        <div class="page has-navbar">
            <div class="page-content padding-top">

                <item class="item item-icon-right" @click.native="showCustomPopup()">
                    Custom Popup
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
                <item class="item-icon-right" @click.native="showCustomPopup2()">
                    Custom Popup 2
                    <i class="icon ion-ios-arrow-right"></i>
                </item>

            </div>
        </div>
    </div>
</template>
<script>
    export default {

        methods: {
            showCustomPopup() {
                let vm = this;
                let options = {
                    effect: 'scale',
                    title: '',
                    buttons: [
                        {text: '确定'},
                        {text: '取消'},
                    ]
                };

                let popup = vm.$z_popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;">自定义内容</p>', options);

                popup.show().then((buttonIndex) => {
                    console.log(buttonIndex)
                });
            },

            showCustomPopup2() {
                let vm = this;
                let options = {
                    effect: 'scale',
                    title: '',
                    buttons: [
                        {text: '确定', theme: 'assertive'}
                    ],
                    showClose: true
                };

                let template = `
                  <p style="margin-bottom: 10px; text-align: center; font-size: 16px;">带有关闭按钮</p>
                  <p style="margin-bottom: 0; text-align: center;">自定义内容</p>
                `;

                let popup = vm.$z_popup.fromTemplate(template, options);

                popup.show().then((buttonIndex) => {
                    console.log(buttonIndex)
                });

                /* fromTemplateUrl sample */

                // let path_to_template = ''
                // $popup
                //   .fromTemplateUrl(path_to_template, options)
                //   .then((popup) => {
                //     popup.show()
                //   })

            }
        }
    }
</script>
