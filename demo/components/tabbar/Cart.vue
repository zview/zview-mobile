<template>
    <div class="page has-navbar has-tabbar" v-tabbar-menu-index="2">
        <von-header theme="light">
            <span slot="title">购物车</span>
        </von-header>

        <div class="page-content padding-top">
            <p class="text-center">Cart</p>

            <button class="button button-assertive button-full" @click="showModal()">
                show a modal
            </button>
        </div>
    </div>
</template>
<script>
    import DefaultModal from '../modals/DefaultModal'
    export default {
        data() {
            return {
                modal: undefined
            }
        },

        mounted () {
            let vm = this;
            vm.$z_modal.fromComponent(DefaultModal, {
                title: '模态窗标题',
                theme: 'default',
                onHide: () => {
                    console.log('modal hide')
                }
            }).then((modal) => {
                this.modal = modal
            })
        },

        destroyed() {
            let vm = this;
            if (this.modal)
                vm.$z_modal.destroy(this.modal)
        },

        methods: {
            showModal () {
                this.modal && this.modal.show()
            }
        }
    }
</script>
