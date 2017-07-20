<template>
    <div class="von-icon" :class="theme">
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
            icon: [String, Number],
            text: [String, Number],
            theme: [String],
        }
    }
</script>
