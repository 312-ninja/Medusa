<template>
    <div v-if="!experimental || experimentalEnabled" id="config-template-content">
        <div class="form-group">
            <div class="row">
                <label :for="labelFor" class="col-sm-2 control-label">
                    <span>{{ label }}</span>
                </label>
                <div class="col-sm-10 content">
                    <slot />
                    <span style="color: red" v-if="experimental">This is an experimental feature</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'config-template',
    props: {
        label: {
            type: String,
            required: true
        },
        labelFor: {
            type: String,
            required: true
        },
        experimental: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        ...mapState({
            experimentalEnabled: state => state.config.general.experimental
        })
    }
};
</script>

<style>

</style>
