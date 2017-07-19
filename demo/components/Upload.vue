<template>
    <div class="container">

        <z-navbar v-nav="{title: '文件上传', showBackButton: true}"></z-navbar>

        <div class="page has-navbar">
            <div class="page-content padding-top">
                <item class="item-icon-right" @click.native="_goto_upload">
                    简单上传<span class="item-note">默认</span>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>

                <item class="item-icon-right" @click.native="_goto_upload_preview">
                    带预览编辑上传<span class="item-note"></span>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        methods: {
            _goto_upload: function () {
                console.log('_goto_upload');
            },
            _goto_upload_preview: function () {
                console.log('_goto_upload_preview');
            },
        }
    }
</script>
