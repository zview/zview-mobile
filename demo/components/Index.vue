<template>

    <div class="container">

        <div class="page">
            <div class="page-content">

                <div class="logo"></div>

                <div class="code-name">zview mobile</div>

                <div class="text-center code-desc">
                    Mobile UI Components<br>based on Vue.js and ionic CSS
                </div>

                <div class="list list-borderless">
                    <hl-item class="item-icon-left item-icon-right" @click.native="demo()">
                        <i class="icon ion-heart assertive"></i>
                        <span class="item-note">Demo</span>
                        <i class="icon ion-ios-arrow-right"></i>
                    </hl-item>

                    <hl-item class="item-icon-left item-icon-right" @click.native="github()">
                        <i class="icon ion-social-github"></i>
                        <span class="item-note">GitHub</span>
                        <i class="icon ion-ios-arrow-right"></i>
                    </hl-item>

                    <hl-item class="item-icon-left item-icon-right" @click.native="doc()">
                        <i class="icon ion-ios-book positive"></i>
                        <span class="item-note">Doc</span>
                        <i class="icon ion-ios-arrow-right"></i>
                    </hl-item>
                </div>

                <div class="vonic-stars">
                    <iframe src="//ghbtns.com/github-btn.html?user=zview&repo=zview-mobile&type=watch&count=true"
                            allowtransparency="true"
                            frameborder="0"
                            scrolling="0"
                            width="120"
                            height="20">
                    </iframe>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    .logo {
        width: 100%;
        height: 80px;
        background: url(../assets/vonic.svg) no-repeat center;
        background-size: 60px 60px;
    }

    .code-name {
        text-align: center;
        font-family: "Monoton", sans-serif;
        font-size: 24px;
        line-height: 24px;
        color: #47B584;
        margin-bottom: 10px;
    }

    .code-desc {
        color: #999;
        margin: 5px auto 15px auto;
        font-family: "Josefin Sans", sans-serif;
    }

    .vonic-stars {
        position: absolute;
        top: 10px;
        left: 10px;

        body {
            text-align: center;
        }

    }

    *::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
</style>

<script>
    export default {
        data() {
            return {}
        },

        methods: {
            demo() {
                let vm = this;
                vm.$router.push({path: '/home'})
            },

            github() {
                location.href = 'https://github.com/zview/zview-mobile'
            },

            doc() {
                location.href = 'https://wangdahoo.github.io/vonic-documents'
            }
        }
    }
</script>
