<template>
    <div class="container">
        <div class="page"
             v-tabbar="{'menus': menus, menuColor: '#B5B5B5', activeMenuColor: '#44CC00', onMenuClick: menuClicked}">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                menus: [
                    {
                        iconOn: 'ion-ios-home',
                        iconOff: 'ion-ios-home-outline',
                        text: '首页',
                        path: '/advanced/tabbar/home'
                    },
                    {
                        iconOn: 'ion-ios-pricetags',
                        iconOff: 'ion-ios-pricetags-outline',
                        text: '折扣',
                        path: '/advanced/tabbar/discount'
                    },
                    {
                        iconOn: 'ion-ios-cart',
                        iconOff: 'ion-ios-cart-outline',
                        text: '购物车',
                        path: '/advanced/tabbar/cart',
                        badge: '5'
                    },
                    {
                        iconOn: 'ion-ios-person',
                        iconOff: 'ion-ios-person-outline',
                        text: '我的',
                        path: '/advanced/tabbar/user'
                    }
                ]
            }
        },

        methods: {
            menuClicked(menuIndex, menuPath) {
                console.log(menuIndex, menuPath)
                let vm = this;
                vm.$router.push(menuPath);
            }
        },

        beforeDestroy() {
            let vm = this;
            vm.$z_tabbar.$emit('hideTabbar')
        }
    }
</script>
