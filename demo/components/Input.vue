<template>
    <div class="container">

        <z-navbar v-nav="{title: '输入框', showBackButton: true}"></z-navbar>

        <div class="page has-navbar">
            <div class="page-content padding-top">
                <item class="item-icon-right" @click.native="$router.push('/basic/inputDefault')">
                    Default<span class="item-note">默认</span>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
                <item class="item-icon-right" @click.native="$router.push('/basic/inputFloatingLabel')">
                    Floating Label<span class="item-note">悬浮标签效果</span>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
            </div>
        </div>
    </div>
</template>
