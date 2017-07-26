<template>

    <div class="container">

        <z-navbar v-nav="{title: '折叠单选', showBackButton: true}"></z-navbar>

        <div class="page has-navbar">
            <div class="page-content padding-top">
                <accordion-radio :parents="parents"
                                 :initval="initval"
                                 icon-align="left"
                                 default-text="未选择"
                                 v-model="selected">
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
                initval: [5,20],
                selected: 20,
                parents: [
                    {'name': '分类一', 'value': 3,'height': 100,
                        'options': [{'name':'零','value':0},{'name':'一','value':1}]},
                    {'name': '分类二', 'value': 5, 'height': 50,
                        'options': [{'name':'二','value':20}]}
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
