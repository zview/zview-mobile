<template>
    <div class="container">
        <z-navbar v-nav="{title: '模态窗', showBackButton: true}"></z-navbar>

        <div class="page has-navbar">
            <div class="page-content padding padding-top">
                <button class="button button-assertive button-block" @click="showModal()">默认</button>
                <button class="button button-balanced button-block" @click="showMultiModal()">多个模态窗</button>
                <button class="button button-energized button-block" @click="showPopupModal()">模态窗内弹层</button>
            </div>
        </div>
    </div>
</template>
<script>
    import DefaultModal from './modals/DefaultModal.vue'
    import MultiModal from './modals/MultiModal.vue'
    import PopupModal from './modals/PopupModal.vue'

    export default {
        data() {
            return {
                modal: undefined,
                multiModal: undefined,
                popupModal: undefined
            }
        },

        created() {
            window.MultiModal = MultiModal
        },

        mounted() {
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

            vm.$z_modal.fromComponent(MultiModal, {
                title: '模态窗标题',
                theme: 'dark'
            }).then((modal) => {
                this.multiModal = modal
            })

            vm.$z_modal.fromComponent(PopupModal, {
                title: '模态窗内弹层',
                theme: 'energized'
            }).then((modal) => {
                this.popupModal = modal
            })
        },

        destroyed() {
            let vm = this;
            if (this.modal)
                vm.$z_modal.destroy(this.modal)

            if (this.multiModal)
                vm.$z_modal.destroy(this.multiModal)

            if (this.popupModal)
                vm.$z_modal.destroy(this.popupModal)

            window.MultiModal = undefined
        },

        methods: {
            showModal() {
                this.modal.show()
            },

            showMultiModal() {
                this.multiModal.show()
            },

            showPopupModal() {
                this.popupModal.show()
            }
        }
    }
</script>
