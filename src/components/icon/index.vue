<template>
    <div class="von-icon" :class="theme" v-if="type == 'normal'">
        <i class="icon" :class="icon"></i>
        <span v-html="text" class="von-icon-text"></span>
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
                default : 'black'
            },
            type: {
                type : String,
                default : 'normal'
            },
            icon: [String, Number],
            text: [String, Number],
        }
    }
</script>
