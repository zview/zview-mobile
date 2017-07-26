<template>

    <div class="von-accordion">

        <div class="list von-radio" style="margin-bottom: 0;" v-if="defaultText && defaultText!=''">
            <div class="item item-borderless"
                 :class="{'item-icon-left': iconAlign=='left', 'item-icon-right': iconAlign=='right'}"
                 @click="_on_default_click(default_parent_value, default_child_value)"
            >
                <hairline-top></hairline-top>
                <input type="radio" :name="radioId" v-model="selected" :value="default_child_value">
                <i class="icon ion-ios-checkmark"
                   :class="{
                          'grey': child_selected != -1,
                          'assertive': child_selected == -1 && theme == 'assertive',
                          'positive': child_selected == -1 && theme == 'positive',
                          'balanced': child_selected == -1 && theme == 'balanced',
                          'energized': child_selected == -1 && theme == 'energized',
                          'calm': child_selected == -1 && theme == 'calm',
                          'royal': child_selected == -1 && theme == 'royal',
                          'dark': child_selected == -1 && theme == 'dark'
                        }"
                ></i>
                <span>{{defaultText}}</span>
            </div>
        </div>

        <div class="list list-borderless list-accordion" :style="{height: calc_height(parent.value, parent.height)}"
             v-for="(parent, pindex) in parents" :key="pindex">

            <item class="item-icon-right" @click.native="_on_parent_click(parent.value, pindex)">
                <span v-text="parent.name"></span>
                <i class="icon ion-arrow-down-b"
                   :class="{'rotated': parent_selected == parent.value}"></i>
            </item>
            <transition name="von-accordion">
                <div v-show="parent_selected == parent.value" class="accordion-content">

                    <div class="list von-radio">
                        <div class="item item-borderless"
                             :class="{'item-icon-left': iconAlign=='left', 'item-icon-right': iconAlign=='right'}"
                             v-for="(option, cindex) in parent.options"
                             @click="_on_child_click(option.value, pindex, cindex)"
                        >
                            <hairline-top v-if="cindex > 0"></hairline-top>
                            <input type="radio" :name="radioId" v-model="selected" :value="option.value">
                            <i class="icon ion-ios-checkmark"
                               :class="{
                                  'grey': child_selected != option.value,
                                  'assertive': child_selected == option.value && theme == 'assertive',
                                  'positive': child_selected == option.value && theme == 'positive',
                                  'balanced': child_selected == option.value && theme == 'balanced',
                                  'energized': child_selected == option.value && theme == 'energized',
                                  'calm': child_selected == option.value && theme == 'calm',
                                  'royal': child_selected == option.value && theme == 'royal',
                                  'dark': child_selected == option.value && theme == 'dark'
                                }"
                            ></i>
                            <span v-text="option.name"></span>

                            <hairline-bottom v-if="cindex < parent.options.length - 1"></hairline-bottom>
                        </div>
                    </div>


                    <HairlineBottom></HairlineBottom>
                </div>
            </transition>

        </div>

    </div>
</template>
<script>
    import channel from './channel'
    import HairlineItem from '../list/HairlineItem'
    import HairlineTop from '../list/HairlineTop'
    import HairlineBottom from '../list/HairlineBottom'

    export default {
        components: {
            Item: HairlineItem,
            HairlineTop,
            HairlineBottom
        },

        props: {
            parents: {
                type: Array,
                required: true
            },

            initval: {
                type: Array,
                default: [0, 0]
            },

            theme: {
                type: String,
                default: 'assertive'
            },

            defaultText: {
                type: String,
                default: ''
            },

            iconAlign: {
                type: String,
                default: 'left'
            }
        },

        data() {
            return {
                radioId: 'von-radio-' + Math.random().toString(36).substring(3, 6),
                parent_selected: -1,
                child_selected: -1,
                selected: this.value,
                default_parent_value: -1,
                default_child_value: -1,
            }
        },

        mounted() {
            this.parent_selected = this.initval[0];
            this.child_selected = this.initval[1];
            console.log('mounted', this.parent_selected, this.child_selected);
        },

        methods: {
            calc_height(value, height) {
                return (this.parent_selected == value) ? parseInt(height) + 50 + 'px' : '50px'
            },
            _on_default_click(pvalue, cvalue) {
                console.log('_on_default_click', pvalue, cvalue);

                this.parent_selected = pvalue;
                this.child_selected = cvalue;
                this.selected = cvalue;
                this.$emit('input', this.selected);
            },
            _on_child_click(value, pindex, cindex) {
                console.log('_on_child_click', value, pindex, cindex);
                this.child_selected = value;
                this.selected = value;
                this.$emit('input', this.selected);
            },
            _on_parent_click(value, pindex) {
                console.log('_on_parent_click', value, pindex);

                if (this.parent_selected == value) {
                    this.parent_selected = this.default_parent_value;
                }
                else {
                    this.parent_selected = value;
                }
            },
        }
    }
</script>
