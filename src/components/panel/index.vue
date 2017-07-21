<template>
    <div class="von-panel" :class="theme + ' ' + render">
        <div class="von-panel-header">
            <slot name="header"></slot>
        </div>
        <div class="von-panel-content">
            <slot name="content"></slot>
        </div>
        <div class="von-panel-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
    import Scalable from '../scalable'

    export default {
        components: {
            Scalable
        },
        props: {
            theme: {
                type : String,
                default : 'stable'
            },
            type: {
                type : String,
                default : 'normal'
            },
            render: [String],
        }
    }
</script>
