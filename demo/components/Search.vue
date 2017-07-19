<template>
    <div class="container">

        <z-navbar v-nav="{title: '搜索框', showBackButton: true}"></z-navbar>

        <div class="page has-navbar">
            <div class="page-content">

                <search v-model="keywords" placeholder="输入关键字" :on-search="onSearch" :on-cancel="onCancel"></search>

                <div class="item" v-show="searching">
                    searching for '{{keywords}}'.
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                keywords: '',
                searching: false
            }
        },

        methods: {
            onSearch(keywords) {
                this.searching = true;
                console.log(keywords);
            },

            onCancel() {
                this.searching = false;
                this.keywords = ''
            }
        }
    }
</script>
