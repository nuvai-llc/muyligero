<style lang="scss">

</style>

<template>
    <ul v-if="sanitizedErrors && sanitizedErrors.length" class="lpError">
        <li v-for="error in sanitizedErrors">
            {{ error.message }}
        </li>
    </ul>
</template>

<script>
import i18n from '../i18n';

export default {
    name: 'RegisterForm',
    props: ['errors'],
    computed: {
        sanitizedErrors() {
            let errors = this.errors;
            if (!errors) {
                return [];
            }

            if (typeof errors === 'string') {
                return [{ message: errors }];
            }

            if (typeof errors === 'object' && !(errors instanceof Array) && errors.message) {
                return [errors];
            }

            if (typeof errors === 'object' && errors.errors && errors.errors instanceof Array) {
                errors = errors.errors;
            }

            if (typeof errors === 'object' && errors instanceof Array) {
                if (errors.length === 0) {
                    return errors;
                }

                const massagedErrors = errors.map((error) => {
                    if (typeof error === 'string') {
                        return { message: error };
                    }

                    if (typeof error === 'object' && error.message) {
                        return error;
                    }
                    return false;
                })
                    .filter(error => !!error.message);

                if (massagedErrors.length) {
                    return massagedErrors;
                }
            }

            return [{ message: i18n.translate('errors.unknown', {}, this.$store && this.$store.state ? this.$store.state.language : undefined) }];
        },
    },
};
</script>
