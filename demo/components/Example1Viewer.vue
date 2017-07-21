<template>
    <div class="page-content padding padding-top" style="background-color: black;">
        <div class="image-container">
        </div>
        <div class="image-operater">
            <md-button class="button button-positive button-block" @click.native="_on_change_image">
                更换
            </md-button>

            <md-button class="button button-assertive button-block" @click.native="_on_delete_image">
                删除
            </md-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showMore: false
            }
        },
        methods: {
            _on_change_image: function () {
                console.log('_on_change_image');
                let vm = this;

                vm.$z_actionSheet.show({
                    buttons: {
                        '拍照': () => {
                            console.log('action 1 called.')
                        },
                        '从手机相册选择': () => {
                            console.log('action 2 called.')
                        },
                    }
                });
            },
            _on_delete_image: function () {
                console.log('_on_delete_image');
                let vm = this;

                vm.$z_dialog.confirm({
                    theme: 'ios',
                    title: '确定删除图片?',
                    cancelText: '取消',
                    okText: '确定'
                }).then((res) => {
                    console.log('confirm result: ', res);
                })
            },
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss">

    .image-container
    {
        width: 100%;
        height: calc(100% - 140px);
        border-radius: 5px;
        background: #dcdcdc url("../assets/images/nature-holder.jpg") no-repeat center;
        background-size: contain;
    }

</style>
