<template>
    <div class="container">

        <z-navbar v-nav="{title: '日期选择器', showBackButton: true}"></z-navbar>

        <div class="page has-navbar">
            <div class="page-content padding-top">
                <datepicker v-model="birthday" label="生日" date-format="yyyy-mm-dd"></datepicker>

                <div class="padding">
                    value: {{ birthday }}
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                birthday: '2016-12-01'
            }
        }
    }
</script>
