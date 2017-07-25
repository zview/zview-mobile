<template>

    <div class="container">

        <z-navbar v-nav="{title: '折叠单选', showBackButton: true}"></z-navbar>

        <div class="page has-navbar">
            <div class="page-content padding-top">
                <accordion-radio :parents="parents" :initval="initval" icon-align="right" v-model="selected">

                </accordion-radio>

                <div style="margin-top: 100px; color: red;">
                    option index: {{ selected }}<br>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                selected: [0, 1],
                initval: [0, 1],
                parents: [
                    {'title': '分类一', 'height': 100, 'options': ['男','女']},
                    {'title': '分类二', 'height': 50, 'options': ['红']}
                    ]
            }
        }
    }
</script>
<style scoped>
    p {
        padding: 10px 15px 10px 0;
        font-size: 12px;
        line-height: 22px;
        text-align: justify;
    }
</style>
