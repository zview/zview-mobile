<template>
    <div class="container">

        <z-navbar v-nav="{title: '相册', showBackButton: true}"></z-navbar>

        <div class="page has-navbar">
            <div class="page-content padding-top">
                <item class="item-icon-right" @click.native="_goto_gallery">
                    完整相册<span class="item-note">默认</span>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>

                <item class="item-icon-right" @click.native="_goto_gallery_selector">
                    简单相册<span class="item-note"></span>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        methods: {
            _goto_gallery: function () {
                console.log('_goto_gallery');
            },
            _goto_gallery_selector: function () {
                console.log('_goto_gallery_selector');
            },
        }
    }
</script>
