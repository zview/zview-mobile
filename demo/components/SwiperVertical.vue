<template>

    <div class="container">

        <z-navbar v-nav="{title: '垂直', showBackButton: true}"></z-navbar>

        <div class="page has-navbar">
            <div class="page-content">
                <swiper direction="vertical">
                    <swiper-item>
                        <h1>Item 1</h1>
                    </swiper-item>

                    <swiper-item>
                        <h1>Item 2</h1>
                    </swiper-item>

                    <swiper-item>
                        <h1>Item 3</h1>
                    </swiper-item>
                </swiper>
            </div>
        </div>

    </div>
</template>
<style lang='scss' scoped>

    .swiper-item {

        padding-top: 50px;

        h1 {
            color: #fff;
            font-size: 32px;
            line-height: 50px;
            text-align: center;
            font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
        }

        &:nth-of-type(1) {
            background-color: #0a9dc7;
        }

        &:nth-of-type(2) {
            background-color: #44cc00;
        }

        &:nth-of-type(3) {
            background-color: #ffc900;
        }

    }

</style>
