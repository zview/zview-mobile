<template>
    <div class="page-content padding padding-top">
        <button class="button button-balanced button-block" @click="show()">Create</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                modal: undefined
            }
        },

        destroyed() {
            let vm = this;
            if (this.modal)
                vm.$z_modal.destroy(this.modal);
        },

        methods: {
            show() {
                let vm = this;
                vm.$z_modal.fromComponent(MultiModal, {
                    title: '模态窗标题',
                    theme: 'dark',
                    destroyOnHide: true
                }).then((modal) => {
                    this.modal = modal
                    this.modal.show()
                });
            }
        }
    }
</script>
