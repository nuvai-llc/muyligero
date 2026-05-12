<style lang="scss">
@import "../css/_globals";

$welcomeVerticalSpacing: 80px;

#lpWelcomeContainer {
    background: url("/images/bg_main.webp") 50% 50% no-repeat;
    background-size: cover;
    min-height: 100vh;
    padding-top: $welcomeVerticalSpacing;
}

#lpWelcome {
    h1 {
        color: #000;
        font-size: 28px;
        font-weight: normal;
        margin: 0 0 $welcomeVerticalSpacing;
        text-align: center;

        strong {
            font-size: 36px;
        }
    }

    .lpError {
        margin: 0 0 12px;
    }
}

.lpContainer {
    margin: 0 auto;
    max-width: 900px;
    padding: 0 $spacingMedium;
}

.lpWelcomeContent {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
}

.lpWelcomeRegisterContainer,
.lpWelcomeSigninContainer {
    background: rgba(241, 234, 220, 0.92);
    border-top: 2px solid $orange1;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
    padding: $spacingLarge;

    .lpWelcomeContainerHeader {
        font-size: 20px;
    }
}

.lpWelcomeRegisterContainer {
    display: flex;
    flex: 0 0 550px;
    margin-right: $spacingLarge;
}

.lpWelcomeSigninContainer {
    flex: 0 0 275px;
}

.lpWelcomeRegister {
    flex: 0 0 46%;
    margin-right: $spacingLarge;
}

#lpValueProp {
    margin: 38px 0 $spacingMedium;
    padding: 0;

    li {
        list-style-type: none;
        margin: 0 0 14px;
    }

    h3 {
        margin: 0;

        strong {
            font-size: 20px;
            margin-right: 5px;
        }
    }
}

#lpWelcomeScreenshot {
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
    max-width: 96%;
}

#lpLaunchBanner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: $yellow1;
    color: $content;
    padding: $spacingSmall;
    text-align: center;
}

</style>

<template>
    <div id="lpWelcomeContainer">
        <div id="lpLaunchBanner">
            <div class="lpContainer">
                <strong>Bienvenido a la nueva versión de MuyLigero.</strong> Esperamos que te guste, y si tienes cualquier duda puedes <a href="mailto:info@lighterpack.com" class="lpHref">ponerte en contacto</a>.
            </div>
        </div>
        <div id="lpWelcome" class="lpContainer">
            <h1><strong>MuyLigero</strong> te ayuda a llevar el control del equipo que llevas en tus aventuras.</h1>
            <div class="lpWelcomeContent">
                <div class="lpWelcomeRegisterContainer">
                    <div class="lpWelcomeRegister">
                        <h3 class="lpWelcomeContainerHeader">
                            Crear una cuenta
                        </h3>
                        <registerForm />
                    </div>
                    <div class="lpValuePropContainer">
                        <ul id="lpValueProp">
                            <li id="valueEnter">
                                <h3><strong>1.</strong>Introduce tus listas de equipaje</h3>
                            </li>
                            <li id="valueVisualize">
                                <h3><strong>2.</strong>Visualiza el peso de tu mochila</h3>
                            </li>
                            <li id="valueShare">
                                <h3><strong>3.</strong>Comparte tus listas con otras personas</h3>
                            </li>
                        </ul>
                        <img id="lpWelcomeScreenshot" src="/images/screenshot.jpg" alt="Captura de la interfaz de MuyLigero">
                    </div>
                </div>
                <div class="lpWelcomeSigninContainer">
                    <h3 class="lpWelcomeContainerHeader">
                        Iniciar sesión
                    </h3>
                    <SigninForm />
                </div>
            </div>
        </div>

        <globalAlerts />
    </div>
</template>

<script>
import globalAlerts from '../components/global-alerts.vue';
import modal from '../components/modal.vue';
import registerForm from '../components/register-form.vue';
import SigninForm from '../components/signin-form.vue';

export default {
    name: 'Welcome',
    components: {
        globalAlerts,
        modal,
        registerForm,
        SigninForm,
    },
    beforeMount() {
        if (this.$store.state.library) {
            router.push('/');
        }
    },
};
</script>
