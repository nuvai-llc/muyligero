const DEFAULT_LANGUAGE = 'es';
const ALLOWED_LANGUAGES = ['es', 'ca', 'eu', 'gl', 'pt', 'en'];

const translations = {
    es: {
        common: {
            appName: 'MuyLigero',
            createAccount: 'Crear cuenta',
            signIn: 'Entrar',
            signOut: 'Cerrar sesion',
            settings: 'Ajustes',
            share: 'Compartir',
            help: 'Ayuda',
            save: 'Guardar',
            cancel: 'Cancelar',
            delete: 'Eliminar',
            accountSettings: 'Ajustes de cuenta',
            language: 'Idioma',
            currency: 'Moneda',
            backToSignIn: 'Volver al inicio de sesion',
            send: 'Enviar',
        },
        languages: {
            es: 'Español',
            ca: 'Català',
            eu: 'Euskera',
            gl: 'Galego',
            pt: 'Português',
            en: 'English',
        },
        theme: {
            light: 'Claro',
            dark: 'Oscuro',
        },
        welcome: {
            bannerTitle: 'Bienvenido a la nueva version de {appName}.',
            bannerBodyPrefix: 'Esperamos que te guste, y si tienes cualquier duda puedes',
            bannerContactLink: 'ponerte en contacto',
            hero: '{appName} te ayuda a llevar el control del equipo que llevas en tus aventuras.',
            createAccount: 'Crear una cuenta',
            signIn: 'Iniciar sesion',
            value1: 'Introduce tus listas de equipaje',
            value2: 'Visualiza el peso de tu mochila',
            value3: 'Comparte tus listas con otras personas',
            screenshotAlt: 'Captura de la interfaz de {appName}',
        },
        auth: {
            signInTitle: 'Iniciar sesion',
            needAccount: 'Necesitas registrarte?',
            registerTitle: 'Crear una cuenta',
            alreadyRegistered: 'Ya tienes cuenta?',
            localDataNotice: 'Tus datos actuales en este ordenador se guardaran en tu nueva cuenta.',
            resetSentMessage: 'Hemos enviado un email a la direccion asociada a tu cuenta de {appName}. Nota: los correos a direcciones yahoo.com pueden fallar. Escribe a info@lighterpack.com si no recibes el mensaje.',
            forgotCredentials: 'Has olvidado tu usuario o contrasena?',
            forgotPasswordTitle: 'Has olvidado tu contrasena?',
            forgotPasswordPrompt: 'Introduce tu nombre de usuario.',
            forgotUsernameTitle: 'Has olvidado tu usuario?',
            forgotUsernamePrompt: 'Introduce tu direccion de email.',
        },
        forms: {
            username: 'Usuario',
            email: 'Correo electronico',
            emailAddress: 'Direccion de email',
            password: 'Contrasena',
            confirmPassword: 'Confirmar contrasena',
            currentPassword: 'Contrasena actual',
            newPassword: 'Nueva contrasena',
            confirmNewPassword: 'Confirmar nueva contrasena',
            newEmail: 'Nuevo email',
            confirmationText: 'Texto de confirmacion',
            continueWithoutAccount: 'Continuar sin registrarme',
        },
        settings: {
            images: 'Imagenes de articulos',
            prices: 'Precios de articulos',
            worn: 'Articulos puestos',
            consumable: 'Articulos consumibles',
            listDescription: 'Descripciones de listas',
        },
        dashboard: {
            listNamePlaceholder: 'Nombre de la lista',
        },
        sidebar: {
            lists: 'Listas',
            closet: 'Armario',
            newList: 'Nueva lista',
            importCsv: 'Importar CSV',
            copyList: 'Copiar una lista',
            reorderList: 'Reordenar esta lista',
            removeList: 'Eliminar esta lista',
            searchItems: 'Buscar articulos',
            removeItemForever: 'Eliminar este articulo para siempre',
            dragItem: 'Arrastrar este articulo',
            defaultListName: 'Nueva lista',
        },
        list: {
            welcomeTitle: 'Bienvenido a {appName}.',
            welcomeIntro: 'Esto es lo que necesitas para empezar:',
            step1: 'Haz clic en los elementos para editarlos. Pon nombre a tu lista y a cada categoria.',
            step2: 'Anade categorias nuevas y asigna peso a los articulos para empezar a ver el resumen.',
            step3: 'Cuando termines, comparte tu lista con otras personas.',
            localNotice: 'Tus datos se estan guardando en tu ordenador. Para compartir tus listas, crea una cuenta.',
            description: 'Descripcion de la lista',
            markdownCompatible: 'compatible',
            addCategory: 'Nueva categoria',
            categoryNamePlaceholder: 'Nombre de la categoria',
            reorderCategory: 'Reordenar esta categoria',
            removeCategory: 'Eliminar esta categoria',
            newItem: 'Nuevo articulo',
            removeCategoryConfirm: 'Estas seguro de que quieres eliminar esta categoria? Esta accion no se puede deshacer.',
            removeItemConfirm: 'Estas seguro de que quieres eliminar este articulo? Esta accion no se puede deshacer.',
            removeListConfirm: 'Estas seguro de que quieres eliminar esta lista? Esta accion no se puede deshacer.',
        },
        summary: {
            category: 'Categoria',
            price: 'Precio',
            weight: 'Peso',
            total: 'Total',
            consumable: 'Consumible',
            worn: 'Puesto',
            baseWeight: 'Peso base',
            itemsCount: '{count} articulos',
            packWeightTitle: '{weight} {unit} peso de la mochila (consumible + peso base)',
            qty: 'cant.',
        },
        share: {
            shareList: 'Comparte tu lista',
            embedList: 'Inserta tu lista',
            exportCsv: 'Exportar a CSV',
            generateError: 'Ha ocurrido un error al generar el ID de tu lista. Intentalo de nuevo mas tarde.',
        },
        account: {
            signedInAs: 'Sesion iniciada como {username}',
            deleteAccount: 'Eliminar cuenta',
            title: 'Ajustes de cuenta',
        },
        accountDelete: {
            title: 'Eliminar cuenta?',
            warning: 'Esta accion es permanente y no se puede deshacer.',
            instructions: 'Si quieres eliminar tu cuenta, introduce tu contrasena actual y el texto {phrase}:',
            phrase: 'eliminar mi cuenta',
            button: 'Eliminar cuenta permanentemente',
        },
        help: {
            title: 'Ayuda',
            gettingStarted: 'Primeros pasos:',
            step1: 'Haz clic en los elementos para editarlos. Pon nombre a tu lista y a cada categoria.',
            step2: 'Anade categorias y articulos a tu lista.',
            step3: 'Cuando termines, comparte tu lista con otras personas.',
            wornTitle: 'Cantidades y articulos puestos',
            wornBody: 'Si tienes varias unidades de un articulo y lo marcas como puesto, solo la primera unidad contara como peso puesto. El resto contara como peso de mochila. Esto se hace porque la mayoria de articulos de los que llevas varias unidades solo llevas una puesta al mismo tiempo. Por eso no conviene listar zapatos o bastones con peso individual y cantidad dos; es mejor usar el peso combinado con cantidad uno.',
            linkedTitle: 'Articulos en varias listas',
            linkedBody: 'Si copias tu lista o arrastras un articulo desde la biblioteca a una segunda lista, esos articulos quedan vinculados. Eso significa que cualquier cambio en un articulo se actualizara en todas las listas donde aparezca. Si quieres copiar una lista sin enlaces, por ahora puedes exportarla a CSV e importarla de nuevo.',
            contact: 'Si necesitas mas ayuda, escribenos por email.',
        },
        importCsv: {
            title: 'Confirma la importacion',
            item: 'Articulo',
            category: 'Categoria',
            description: 'Descripcion',
            qty: 'Cant.',
            weight: 'Peso',
            unit: 'Unidad',
            importList: 'Importar lista',
            cancelImport: 'Cancelar importacion',
            tooLarge: 'El archivo es demasiado grande',
            selectCsv: 'Selecciona un archivo CSV.',
            invalidFormat: 'No se ha podido cargar la hoja. Revisa el formato.',
        },
        validation: {
            enterUsername: 'Introduce un nombre de usuario.',
            usernameLength: 'Introduce un nombre de usuario de entre 3 y 32 caracteres.',
            enterEmail: 'Introduce un email.',
            enterPassword: 'Introduce una contrasena.',
            confirmPassword: 'Confirma la contrasena.',
            passwordsMismatch: 'Las contrasenas no coinciden.',
            passwordLength: 'Introduce una contrasena de entre 5 y 60 caracteres.',
            enterYourUsername: 'Introduce tu nombre de usuario.',
            enterYourPassword: 'Introduce tu contrasena.',
            enterCurrentPassword: 'Introduce tu contrasena actual.',
            enterConfirmationText: 'Introduce el texto de confirmacion.',
        },
        errors: {
            unknown: 'Ha ocurrido un error desconocido.',
            loadData: 'Ha ocurrido un error al cargar tus datos.',
            fetchData: 'Ha ocurrido un error al recuperar tus datos. Intentalo de nuevo mas tarde.',
            saveData: 'Ha ocurrido un error al guardar tus datos.',
            genericRetry: 'Ha ocurrido un error. Intentalo de nuevo mas tarde.',
        },
        data: {
            copyOf: 'Copia de {name}',
        },
    },
    pt: {},
    en: {},
    ca: {},
    eu: {},
    gl: {},
};

const cloneSpanish = function (language) {
    translations[language] = JSON.parse(JSON.stringify(translations.es));
};

['en', 'ca', 'eu', 'gl', 'pt'].forEach(cloneSpanish);

translations.en.common = {
    ...translations.en.common,
    createAccount: 'Create account',
    signIn: 'Sign in',
    signOut: 'Sign out',
    settings: 'Settings',
    share: 'Share',
    help: 'Help',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    accountSettings: 'Account settings',
    language: 'Language',
    currency: 'Currency',
    backToSignIn: 'Back to sign in',
    send: 'Send',
};
translations.en.languages = { es: 'Spanish', ca: 'Catalan', eu: 'Basque', gl: 'Galician', pt: 'Portuguese', en: 'English' };
translations.en.theme = { light: 'Light', dark: 'Dark' };
translations.en.welcome = {
    ...translations.en.welcome,
    bannerTitle: 'Welcome to the new version of {appName}.',
    bannerBodyPrefix: 'We hope you like it, and if you have any questions you can',
    bannerContactLink: 'get in touch',
    hero: '{appName} helps you keep track of the gear you take on your adventures.',
    createAccount: 'Create an account',
    signIn: 'Sign in',
    value1: 'Enter your packing lists',
    value2: 'Visualize your pack weight',
    value3: 'Share your lists with other people',
    screenshotAlt: '{appName} interface screenshot',
};
translations.en.auth = {
    ...translations.en.auth,
    signInTitle: 'Sign in',
    needAccount: 'Need an account?',
    registerTitle: 'Create an account',
    alreadyRegistered: 'Already registered?',
    localDataNotice: 'Your current data on this computer will be saved to your new account.',
    resetSentMessage: 'We sent an email to the address linked to your {appName} account. Note: emails to yahoo.com addresses may fail. Write to info@lighterpack.com if you do not receive it.',
    forgotCredentials: 'Forgot your username or password?',
    forgotPasswordTitle: 'Forgot your password?',
    forgotPasswordPrompt: 'Enter your username.',
    forgotUsernameTitle: 'Forgot your username?',
    forgotUsernamePrompt: 'Enter your email address.',
};
translations.en.forms = {
    ...translations.en.forms,
    username: 'Username',
    email: 'Email',
    emailAddress: 'Email address',
    password: 'Password',
    confirmPassword: 'Confirm password',
    currentPassword: 'Current password',
    newPassword: 'New password',
    confirmNewPassword: 'Confirm new password',
    newEmail: 'New email',
    confirmationText: 'Confirmation text',
    continueWithoutAccount: 'Continue without signing up',
};
translations.en.settings = {
    images: 'Item images',
    prices: 'Item prices',
    worn: 'Worn items',
    consumable: 'Consumable items',
    listDescription: 'List descriptions',
};
translations.en.dashboard = { listNamePlaceholder: 'List name' };
translations.en.sidebar = {
    lists: 'Lists',
    closet: 'Closet',
    newList: 'New list',
    importCsv: 'Import CSV',
    copyList: 'Copy a list',
    reorderList: 'Reorder this list',
    removeList: 'Delete this list',
    searchItems: 'Search items',
    removeItemForever: 'Delete this item forever',
    dragItem: 'Drag this item',
    defaultListName: 'New list',
};
translations.en.list = {
    welcomeTitle: 'Welcome to {appName}.',
    welcomeIntro: 'Here is what you need to get started:',
    step1: 'Click items to edit them. Name your list and each category.',
    step2: 'Add new categories and assign weight to items to start seeing the summary.',
    step3: 'When you are done, share your list with other people.',
    localNotice: 'Your data is being saved on your computer. To share your lists, create an account.',
    description: 'List description',
    markdownCompatible: 'supported',
    addCategory: 'New category',
    categoryNamePlaceholder: 'Category name',
    reorderCategory: 'Reorder this category',
    removeCategory: 'Delete this category',
    newItem: 'New item',
    removeCategoryConfirm: 'Are you sure you want to delete this category? This action cannot be undone.',
    removeItemConfirm: 'Are you sure you want to delete this item? This action cannot be undone.',
    removeListConfirm: 'Are you sure you want to delete this list? This action cannot be undone.',
};
translations.en.summary = {
    category: 'Category',
    price: 'Price',
    weight: 'Weight',
    total: 'Total',
    consumable: 'Consumable',
    worn: 'Worn',
    baseWeight: 'Base weight',
    itemsCount: '{count} items',
    packWeightTitle: '{weight} {unit} pack weight (consumable + base weight)',
    qty: 'qty.',
};
translations.en.share = {
    shareList: 'Share your list',
    embedList: 'Embed your list',
    exportCsv: 'Export to CSV',
    generateError: 'An error occurred while generating your list ID. Please try again later.',
};
translations.en.account = {
    signedInAs: 'Signed in as {username}',
    deleteAccount: 'Delete account',
    title: 'Account settings',
};
translations.en.accountDelete = {
    title: 'Delete account?',
    warning: 'This action is permanent and cannot be undone.',
    instructions: 'If you want to delete your account, enter your current password and the text {phrase}:',
    phrase: 'delete my account',
    button: 'Delete account permanently',
};
translations.en.help = {
    title: 'Help',
    gettingStarted: 'Getting started:',
    step1: 'Click items to edit them. Name your list and each category.',
    step2: 'Add categories and items to your list.',
    step3: 'When you are done, share your list with other people.',
    wornTitle: 'Quantities and worn items',
    wornBody: 'If you have several units of an item and mark it as worn, only the first unit will count as worn weight. The rest will count as pack weight. This is because most items you carry in multiple units are only worn one at a time. That is why it is usually better not to list shoes or poles with an individual weight and quantity two; using the combined weight with quantity one is better.',
    linkedTitle: 'Items in multiple lists',
    linkedBody: 'If you copy your list or drag an item from the library into a second list, those items remain linked. That means any change to an item will be updated in every list where it appears. If you want to copy a list without links, for now you can export it to CSV and import it again.',
    contact: 'If you need more help, send us an email.',
};
translations.en.importCsv = {
    title: 'Confirm import',
    item: 'Item',
    category: 'Category',
    description: 'Description',
    qty: 'Qty.',
    weight: 'Weight',
    unit: 'Unit',
    importList: 'Import list',
    cancelImport: 'Cancel import',
    tooLarge: 'The file is too large',
    selectCsv: 'Select a CSV file.',
    invalidFormat: 'The sheet could not be loaded. Check the format.',
};
translations.en.validation = {
    enterUsername: 'Enter a username.',
    usernameLength: 'Enter a username between 3 and 32 characters.',
    enterEmail: 'Enter an email.',
    enterPassword: 'Enter a password.',
    confirmPassword: 'Confirm the password.',
    passwordsMismatch: 'Passwords do not match.',
    passwordLength: 'Enter a password between 5 and 60 characters.',
    enterYourUsername: 'Enter your username.',
    enterYourPassword: 'Enter your password.',
    enterCurrentPassword: 'Enter your current password.',
    enterConfirmationText: 'Enter the confirmation text.',
};
translations.en.errors = {
    unknown: 'An unknown error occurred.',
    loadData: 'An error occurred while loading your data.',
    fetchData: 'An error occurred while fetching your data. Please try again later.',
    saveData: 'An error occurred while saving your data.',
    genericRetry: 'An error occurred. Please try again later.',
};
translations.en.data = { copyOf: 'Copy of {name}' };

translations.ca.common = {
    ...translations.ca.common,
    createAccount: 'Crea un compte',
    signIn: 'Entra',
    signOut: 'Tanca la sessio',
    settings: 'Configuracio',
    share: 'Comparteix',
    help: 'Ajuda',
    save: 'Desa',
    cancel: 'Cancel·la',
    delete: 'Elimina',
    accountSettings: 'Configuracio del compte',
    language: 'Idioma',
    currency: 'Moneda',
    backToSignIn: 'Torna a l inici de sessio',
    send: 'Envia',
};
translations.ca.languages = { es: 'Espanyol', ca: 'Català', eu: 'Euskara', gl: 'Gallec', pt: 'Portuguès', en: 'Anglès' };
translations.ca.theme = { light: 'Clar', dark: 'Fosc' };
translations.ca.welcome = {
    ...translations.ca.welcome,
    bannerTitle: 'Benvingut a la nova versio de {appName}.',
    bannerBodyPrefix: 'Esperem que t agradi, i si tens qualsevol dubte pots',
    bannerContactLink: 'posar-te en contacte',
    hero: '{appName} t ajuda a portar el control de l equip que portes a les teves aventures.',
    createAccount: 'Crea un compte',
    signIn: 'Inicia sessio',
    value1: 'Introdueix les teves llistes d equip',
    value2: 'Visualitza el pes de la teva motxilla',
    value3: 'Comparteix les teves llistes amb altres persones',
    screenshotAlt: 'Captura de la interfície de {appName}',
};
translations.ca.auth = {
    ...translations.ca.auth,
    signInTitle: 'Inicia sessio',
    needAccount: 'Necessites registrar-te?',
    registerTitle: 'Crea un compte',
    alreadyRegistered: 'Ja tens compte?',
    localDataNotice: 'Les teves dades actuals en aquest ordinador es desaran al teu compte nou.',
    resetSentMessage: 'Hem enviat un correu a l adreca associada al teu compte de {appName}. Nota: els correus a adreces yahoo.com poden fallar. Escriu a info@lighterpack.com si no el reps.',
    forgotCredentials: 'Has oblidat l usuari o la contrasenya?',
    forgotPasswordTitle: 'Has oblidat la contrasenya?',
    forgotPasswordPrompt: 'Introdueix el teu nom d usuari.',
    forgotUsernameTitle: 'Has oblidat el teu usuari?',
    forgotUsernamePrompt: 'Introdueix la teva adreca de correu.',
};
translations.ca.forms = {
    ...translations.ca.forms,
    username: 'Usuari',
    email: 'Correu electronic',
    emailAddress: 'Adreca de correu',
    password: 'Contrasenya',
    confirmPassword: 'Confirma la contrasenya',
    currentPassword: 'Contrasenya actual',
    newPassword: 'Contrasenya nova',
    confirmNewPassword: 'Confirma la contrasenya nova',
    newEmail: 'Correu nou',
    confirmationText: 'Text de confirmacio',
    continueWithoutAccount: 'Continua sense registrar-me',
};
translations.ca.settings = {
    images: 'Imatges dels articles',
    prices: 'Preus dels articles',
    worn: 'Articles posats',
    consumable: 'Articles consumibles',
    listDescription: 'Descripcions de les llistes',
};
translations.ca.dashboard = { listNamePlaceholder: 'Nom de la llista' };
translations.ca.sidebar = {
    lists: 'Llistes',
    closet: 'Armari',
    newList: 'Llista nova',
    importCsv: 'Importa CSV',
    copyList: 'Copia una llista',
    reorderList: 'Reordena aquesta llista',
    removeList: 'Elimina aquesta llista',
    searchItems: 'Cerca articles',
    removeItemForever: 'Elimina aquest article per sempre',
    dragItem: 'Arrossega aquest article',
    defaultListName: 'Llista nova',
};
translations.ca.list = {
    welcomeTitle: 'Benvingut a {appName}.',
    welcomeIntro: 'Aixo es el que necessites per comencar:',
    step1: 'Fes clic als elements per editar-los. Posa nom a la teva llista i a cada categoria.',
    step2: 'Afegeix categories noves i assigna pes als articles per comencar a veure el resum.',
    step3: 'Quan acabis, comparteix la teva llista amb altres persones.',
    localNotice: 'Les teves dades s estan desant al teu ordinador. Per compartir les teves llistes, crea un compte.',
    description: 'Descripcio de la llista',
    markdownCompatible: 'compatible',
    addCategory: 'Categoria nova',
    categoryNamePlaceholder: 'Nom de la categoria',
    reorderCategory: 'Reordena aquesta categoria',
    removeCategory: 'Elimina aquesta categoria',
    newItem: 'Article nou',
    removeCategoryConfirm: 'Segur que vols eliminar aquesta categoria? Aquesta accio no es pot desfer.',
    removeItemConfirm: 'Segur que vols eliminar aquest article? Aquesta accio no es pot desfer.',
    removeListConfirm: 'Segur que vols eliminar aquesta llista? Aquesta accio no es pot desfer.',
};
translations.ca.summary = {
    category: 'Categoria',
    price: 'Preu',
    weight: 'Pes',
    total: 'Total',
    consumable: 'Consumible',
    worn: 'Posat',
    baseWeight: 'Pes base',
    itemsCount: '{count} articles',
    packWeightTitle: '{weight} {unit} pes de la motxilla (consumible + pes base)',
    qty: 'qtat.',
};
translations.ca.share = {
    shareList: 'Comparteix la teva llista',
    embedList: 'Insereix la teva llista',
    exportCsv: 'Exporta a CSV',
    generateError: 'Hi ha hagut un error en generar l ID de la teva llista. Torna-ho a provar mes tard.',
};
translations.ca.account = {
    signedInAs: 'Sessio iniciada com {username}',
    deleteAccount: 'Elimina el compte',
    title: 'Configuracio del compte',
};
translations.ca.accountDelete = {
    title: 'Eliminar el compte?',
    warning: 'Aquesta accio es permanent i no es pot desfer.',
    instructions: 'Si vols eliminar el teu compte, introdueix la teva contrasenya actual i el text {phrase}:',
    phrase: 'elimina el meu compte',
    button: 'Elimina el compte permanentment',
};
translations.ca.help = {
    title: 'Ajuda',
    gettingStarted: 'Primers passos:',
    step1: 'Fes clic als elements per editar-los. Posa nom a la teva llista i a cada categoria.',
    step2: 'Afegeix categories i articles a la teva llista.',
    step3: 'Quan acabis, comparteix la teva llista amb altres persones.',
    wornTitle: 'Quantitats i articles posats',
    wornBody: 'Si tens diverses unitats d un article i el marques com a posat, nomes la primera unitat comptara com a pes posat. La resta comptara com a pes de motxilla.',
    linkedTitle: 'Articles en diverses llistes',
    linkedBody: 'Si copies la teva llista o arrossegues un article des de la biblioteca a una segona llista, aquests articles queden vinculats. Qualsevol canvi en un article s actualitzara a totes les llistes on aparegui.',
    contact: 'Si necessites mes ajuda, escriu-nos per correu electronic.',
};
translations.ca.importCsv = {
    title: 'Confirma la importacio',
    item: 'Article',
    category: 'Categoria',
    description: 'Descripcio',
    qty: 'Qtat.',
    weight: 'Pes',
    unit: 'Unitat',
    importList: 'Importa la llista',
    cancelImport: 'Cancel·la la importacio',
    tooLarge: 'L arxiu es massa gran',
    selectCsv: 'Selecciona un arxiu CSV.',
    invalidFormat: 'No s ha pogut carregar el full. Revisa el format.',
};
translations.ca.validation = {
    enterUsername: 'Introdueix un nom d usuari.',
    usernameLength: 'Introdueix un nom d usuari d entre 3 i 32 caracters.',
    enterEmail: 'Introdueix un correu electronic.',
    enterPassword: 'Introdueix una contrasenya.',
    confirmPassword: 'Confirma la contrasenya.',
    passwordsMismatch: 'Les contrasenyes no coincideixen.',
    passwordLength: 'Introdueix una contrasenya d entre 5 i 60 caracters.',
    enterYourUsername: 'Introdueix el teu nom d usuari.',
    enterYourPassword: 'Introdueix la teva contrasenya.',
    enterCurrentPassword: 'Introdueix la teva contrasenya actual.',
    enterConfirmationText: 'Introdueix el text de confirmacio.',
};
translations.ca.errors = {
    unknown: 'Hi ha hagut un error desconegut.',
    loadData: 'Hi ha hagut un error en carregar les teves dades.',
    fetchData: 'Hi ha hagut un error en recuperar les teves dades. Torna-ho a provar mes tard.',
    saveData: 'Hi ha hagut un error en desar les teves dades.',
    genericRetry: 'Hi ha hagut un error. Torna-ho a provar mes tard.',
};
translations.ca.data = { copyOf: 'Copia de {name}' };

translations.eu.common = {
    ...translations.eu.common,
    createAccount: 'Sortu kontua',
    signIn: 'Sartu',
    signOut: 'Itxi saioa',
    settings: 'Ezarpenak',
    share: 'Partekatu',
    help: 'Laguntza',
    save: 'Gorde',
    cancel: 'Utzi',
    delete: 'Ezabatu',
    accountSettings: 'Kontuaren ezarpenak',
    language: 'Hizkuntza',
    currency: 'Moneta',
    backToSignIn: 'Itzuli saio hasierara',
    send: 'Bidali',
};
translations.eu.languages = { es: 'Gaztelania', ca: 'Katalana', eu: 'Euskara', gl: 'Galegoa', pt: 'Portugesa', en: 'Ingelesa' };
translations.eu.theme = { light: 'Argia', dark: 'Iluna' };
translations.eu.welcome = {
    ...translations.eu.welcome,
    bannerTitle: 'Ongi etorri {appName}-ren bertsio berrira.',
    bannerBodyPrefix: 'Espero dugu gustatzea, eta zalantzaren bat baduzu',
    bannerContactLink: 'jar zaitezke gurekin harremanetan',
    hero: '{appName}-k zure abenturetan eramaten duzun ekipamenduaren kontrola eramaten laguntzen dizu.',
    createAccount: 'Sortu kontua',
    signIn: 'Hasi saioa',
    value1: 'Sartu zure ekipamendu-zerrendak',
    value2: 'Ikusi zure motxilaren pisua',
    value3: 'Partekatu zure zerrendak beste pertsona batzuekin',
    screenshotAlt: '{appName}-ren interfazearen pantaila-argazkia',
};
translations.eu.auth = {
    ...translations.eu.auth,
    signInTitle: 'Hasi saioa',
    needAccount: 'Erregistratu behar duzu?',
    registerTitle: 'Sortu kontua',
    alreadyRegistered: 'Baduzu jada kontua?',
    localDataNotice: 'Ordenagailu honetako zure egungo datuak zure kontu berrian gordeko dira.',
    resetSentMessage: '{appName} kontuari lotutako helbidera email bat bidali dugu. Oharra: yahoo.com helbideetara bidalitako mezuak huts egin dezakete. Idatzi info@lighterpack.com helbidera jasotzen ez baduzu.',
    forgotCredentials: 'Erabiltzaile-izena edo pasahitza ahaztu duzu?',
    forgotPasswordTitle: 'Pasahitza ahaztu duzu?',
    forgotPasswordPrompt: 'Sartu zure erabiltzaile-izena.',
    forgotUsernameTitle: 'Erabiltzaile-izena ahaztu duzu?',
    forgotUsernamePrompt: 'Sartu zure email helbidea.',
};
translations.eu.forms = {
    ...translations.eu.forms,
    username: 'Erabiltzailea',
    email: 'Posta elektronikoa',
    emailAddress: 'Email helbidea',
    password: 'Pasahitza',
    confirmPassword: 'Berretsi pasahitza',
    currentPassword: 'Oraingo pasahitza',
    newPassword: 'Pasahitz berria',
    confirmNewPassword: 'Berretsi pasahitz berria',
    newEmail: 'Email berria',
    confirmationText: 'Baieztapen testua',
    continueWithoutAccount: 'Jarraitu erregistratu gabe',
};
translations.eu.settings = {
    images: 'Artikuluen irudiak',
    prices: 'Artikuluen prezioak',
    worn: 'Jantzita dauden artikuluak',
    consumable: 'Artikulu kontsumigarriak',
    listDescription: 'Zerrenden deskribapenak',
};
translations.eu.dashboard = { listNamePlaceholder: 'Zerrendaren izena' };
translations.eu.sidebar = {
    lists: 'Zerrendak',
    closet: 'Armairua',
    newList: 'Zerrenda berria',
    importCsv: 'Inportatu CSV',
    copyList: 'Kopiatu zerrenda bat',
    reorderList: 'Berrantolatu zerrenda hau',
    removeList: 'Ezabatu zerrenda hau',
    searchItems: 'Bilatu artikuluak',
    removeItemForever: 'Ezabatu artikulu hau betiko',
    dragItem: 'Arrastatu artikulu hau',
    defaultListName: 'Zerrenda berria',
};
translations.eu.list = {
    welcomeTitle: 'Ongi etorri {appName}-ra.',
    welcomeIntro: 'Hau da hasteko behar duzuna:',
    step1: 'Egin klik elementuetan editatzeko. Jarri izena zure zerrendari eta kategoria bakoitzari.',
    step2: 'Gehitu kategoria berriak eta esleitu pisua artikuluei laburpena ikusten hasteko.',
    step3: 'Amaitzean, partekatu zure zerrenda beste pertsona batzuekin.',
    localNotice: 'Zure datuak zure ordenagailuan gordetzen ari dira. Zure zerrendak partekatzeko, sortu kontua.',
    description: 'Zerrendaren deskribapena',
    markdownCompatible: 'bateragarria',
    addCategory: 'Kategoria berria',
    categoryNamePlaceholder: 'Kategoriaren izena',
    reorderCategory: 'Berrantolatu kategoria hau',
    removeCategory: 'Ezabatu kategoria hau',
    newItem: 'Artikulu berria',
    removeCategoryConfirm: 'Ziur zaude kategoria hau ezabatu nahi duzula? Ekintza hau ezin da desegin.',
    removeItemConfirm: 'Ziur zaude artikulu hau ezabatu nahi duzula? Ekintza hau ezin da desegin.',
    removeListConfirm: 'Ziur zaude zerrenda hau ezabatu nahi duzula? Ekintza hau ezin da desegin.',
};
translations.eu.summary = {
    category: 'Kategoria',
    price: 'Prezioa',
    weight: 'Pisua',
    total: 'Guztira',
    consumable: 'Kontsumigarria',
    worn: 'Jantzita',
    baseWeight: 'Oinarrizko pisua',
    itemsCount: '{count} artikulu',
    packWeightTitle: '{weight} {unit} motxilaren pisua (kontsumigarria + oinarrizko pisua)',
    qty: 'kop.',
};
translations.eu.share = {
    shareList: 'Partekatu zure zerrenda',
    embedList: 'Txertatu zure zerrenda',
    exportCsv: 'Esportatu CSVra',
    generateError: 'Errore bat gertatu da zure zerrendaren IDa sortzean. Saiatu berriro geroago.',
};
translations.eu.account = {
    signedInAs: '{username} bezala saioa hasita',
    deleteAccount: 'Ezabatu kontua',
    title: 'Kontuaren ezarpenak',
};
translations.eu.accountDelete = {
    title: 'Kontua ezabatu?',
    warning: 'Ekintza hau iraunkorra da eta ezin da desegin.',
    instructions: 'Zure kontua ezabatu nahi baduzu, sartu zure oraingo pasahitza eta {phrase} testua:',
    phrase: 'ezabatu nire kontua',
    button: 'Ezabatu kontua betiko',
};
translations.eu.help = {
    title: 'Laguntza',
    gettingStarted: 'Lehen urratsak:',
    step1: 'Egin klik elementuetan editatzeko. Jarri izena zure zerrendari eta kategoria bakoitzari.',
    step2: 'Gehitu kategoriak eta artikuluak zure zerrendara.',
    step3: 'Amaitzean, partekatu zure zerrenda beste pertsona batzuekin.',
    wornTitle: 'Kantitateak eta jantzita dauden artikuluak',
    wornBody: 'Artikulu baten hainbat unitate badituzu eta jantzita bezala markatzen baduzu, lehen unitateak bakarrik zenbatuko du jantzita dagoen pisu gisa. Gainerakoa motxilaren pisu gisa zenbatuko da.',
    linkedTitle: 'Hainbat zerrendatako artikuluak',
    linkedBody: 'Zure zerrenda kopiatzen baduzu edo liburutegitik bigarren zerrenda batera artikulu bat arrastatzen baduzu, artikulu horiek lotuta geratzen dira. Artikulu batean egindako edozein aldaketa agertzen den zerrenda guztietan eguneratuko da.',
    contact: 'Laguntza gehiago behar baduzu, idatzi iezaguzu email bidez.',
};
translations.eu.importCsv = {
    title: 'Berretsi inportazioa',
    item: 'Artikulua',
    category: 'Kategoria',
    description: 'Deskribapena',
    qty: 'Kop.',
    weight: 'Pisua',
    unit: 'Unitatea',
    importList: 'Inportatu zerrenda',
    cancelImport: 'Utzi inportazioa',
    tooLarge: 'Fitxategia handiegia da',
    selectCsv: 'Hautatu CSV fitxategi bat.',
    invalidFormat: 'Ezin izan da orria kargatu. Egiaztatu formatua.',
};
translations.eu.validation = {
    enterUsername: 'Sartu erabiltzaile-izen bat.',
    usernameLength: 'Sartu 3 eta 32 karaktere arteko erabiltzaile-izena.',
    enterEmail: 'Sartu email bat.',
    enterPassword: 'Sartu pasahitz bat.',
    confirmPassword: 'Berretsi pasahitza.',
    passwordsMismatch: 'Pasahitzak ez datoz bat.',
    passwordLength: 'Sartu 5 eta 60 karaktere arteko pasahitza.',
    enterYourUsername: 'Sartu zure erabiltzaile-izena.',
    enterYourPassword: 'Sartu zure pasahitza.',
    enterCurrentPassword: 'Sartu zure oraingo pasahitza.',
    enterConfirmationText: 'Sartu baieztapen testua.',
};
translations.eu.errors = {
    unknown: 'Errore ezezagun bat gertatu da.',
    loadData: 'Errore bat gertatu da zure datuak kargatzean.',
    fetchData: 'Errore bat gertatu da zure datuak eskuratzean. Saiatu berriro geroago.',
    saveData: 'Errore bat gertatu da zure datuak gordetzean.',
    genericRetry: 'Errore bat gertatu da. Saiatu berriro geroago.',
};
translations.eu.data = { copyOf: '{name}-ren kopia' };

translations.gl.common = {
    ...translations.gl.common,
    createAccount: 'Crear conta',
    signIn: 'Entrar',
    signOut: 'Pechar sesion',
    settings: 'Axustes',
    share: 'Compartir',
    help: 'Axuda',
    save: 'Gardar',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    accountSettings: 'Axustes da conta',
    language: 'Idioma',
    currency: 'Moeda',
    backToSignIn: 'Volver ao inicio de sesion',
    send: 'Enviar',
};
translations.gl.languages = { es: 'Español', ca: 'Catalán', eu: 'Éuscaro', gl: 'Galego', pt: 'Portugués', en: 'Inglés' };
translations.pt.common = {
    ...translations.pt.common,
    createAccount: 'Criar conta',
    signIn: 'Entrar',
    signOut: 'Terminar sessão',
    settings: 'Definições',
    share: 'Partilhar',
    help: 'Ajuda',
    save: 'Guardar',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    accountSettings: 'Definições da conta',
    language: 'Idioma',
    currency: 'Moeda',
    backToSignIn: 'Voltar ao início de sessão',
    send: 'Enviar',
};
translations.pt.languages = { es: 'Espanhol', ca: 'Català', eu: 'Euskera', gl: 'Galego', pt: 'Português', en: 'Inglês' };
translations.pt.theme = { light: 'Claro', dark: 'Escuro' };
translations.pt.welcome = {
    ...translations.pt.welcome,
    bannerTitle: 'Bem-vindo à nova versão do {appName}.',
    bannerBodyPrefix: 'Esperamos que gostes e, se tiveres alguma dúvida, podes',
    bannerContactLink: 'entrar em contacto',
    hero: 'O {appName} ajuda-te a controlar o equipamento que levas nas tuas aventuras.',
    createAccount: 'Criar conta',
    signIn: 'Iniciar sessão',
    value1: 'Introduz as tuas listas de equipamento',
    value2: 'Visualiza o peso da tua mochila',
    value3: 'Partilha as tuas listas com outras pessoas',
    screenshotAlt: 'Captura da interface do {appName}',
};
translations.gl.theme = { light: 'Claro', dark: 'Escuro' };
translations.gl.welcome = {
    ...translations.gl.welcome,
    bannerTitle: 'Benvido a nova version de {appName}.',
    bannerBodyPrefix: 'Agardamos que che guste e, se tes calquera dubida, podes',
    bannerContactLink: 'poñerte en contacto',
    hero: '{appName} axudache a levar o control do equipo que levas nas tuas aventuras.',
    createAccount: 'Crear unha conta',
    signIn: 'Iniciar sesion',
    value1: 'Introduce as tuas listas de equipaxe',
    value2: 'Visualiza o peso da tua mochila',
    value3: 'Comparte as tuas listas con outras persoas',
    screenshotAlt: 'Captura da interface de {appName}',
};
translations.gl.auth = {
    ...translations.gl.auth,
    signInTitle: 'Iniciar sesion',
    needAccount: 'Necesitas rexistrarte?',
    registerTitle: 'Crear unha conta',
    alreadyRegistered: 'Xa tes conta?',
    localDataNotice: 'Os teus datos actuais neste ordenador gardaranse na tua nova conta.',
    resetSentMessage: 'Enviamos un email ao enderezo asociado a tua conta de {appName}. Nota: os correos a enderezos yahoo.com poden fallar. Escribe a info@lighterpack.com se non o recibes.',
    forgotCredentials: 'Esqueciches o teu usuario ou contrasinal?',
    forgotPasswordTitle: 'Esqueciches o teu contrasinal?',
    forgotPasswordPrompt: 'Introduce o teu nome de usuario.',
    forgotUsernameTitle: 'Esqueciches o teu usuario?',
    forgotUsernamePrompt: 'Introduce o teu enderezo de email.',
};
translations.gl.forms = {
    ...translations.gl.forms,
    username: 'Usuario',
    email: 'Correo electronico',
    emailAddress: 'Enderezo de email',
    password: 'Contrasinal',
    confirmPassword: 'Confirmar contrasinal',
    currentPassword: 'Contrasinal actual',
    newPassword: 'Novo contrasinal',
    confirmNewPassword: 'Confirmar novo contrasinal',
    newEmail: 'Novo email',
    confirmationText: 'Texto de confirmacion',
    continueWithoutAccount: 'Continuar sen rexistrarme',
};
translations.gl.settings = {
    images: 'Imaxes dos artigos',
    prices: 'Prezos dos artigos',
    worn: 'Artigos postos',
    consumable: 'Artigos consumibles',
    listDescription: 'Descricions das listas',
};
translations.gl.dashboard = { listNamePlaceholder: 'Nome da lista' };
translations.gl.sidebar = {
    lists: 'Listas',
    closet: 'Armario',
    newList: 'Nova lista',
    importCsv: 'Importar CSV',
    copyList: 'Copiar unha lista',
    reorderList: 'Reordenar esta lista',
    removeList: 'Eliminar esta lista',
    searchItems: 'Buscar artigos',
    removeItemForever: 'Eliminar este artigo para sempre',
    dragItem: 'Arrastrar este artigo',
    defaultListName: 'Nova lista',
};
translations.gl.list = {
    welcomeTitle: 'Benvido a {appName}.',
    welcomeIntro: 'Isto e o que precisas para empezar:',
    step1: 'Fai clic nos elementos para editalos. Ponlle nome a tua lista e a cada categoria.',
    step2: 'Engade categorias novas e asigna peso aos artigos para empezar a ver o resumo.',
    step3: 'Cando remates, comparte a tua lista con outras persoas.',
    localNotice: 'Os teus datos estan gardandose no teu ordenador. Para compartir as tuas listas, crea unha conta.',
    description: 'Descripcion da lista',
    markdownCompatible: 'compatible',
    addCategory: 'Nova categoria',
    categoryNamePlaceholder: 'Nome da categoria',
    reorderCategory: 'Reordenar esta categoria',
    removeCategory: 'Eliminar esta categoria',
    newItem: 'Novo artigo',
    removeCategoryConfirm: 'Seguro que queres eliminar esta categoria? Esta accion non se pode desfacer.',
    removeItemConfirm: 'Seguro que queres eliminar este artigo? Esta accion non se pode desfacer.',
    removeListConfirm: 'Seguro que queres eliminar esta lista? Esta accion non se pode desfacer.',
};
translations.gl.summary = {
    category: 'Categoria',
    price: 'Prezo',
    weight: 'Peso',
    total: 'Total',
    consumable: 'Consumible',
    worn: 'Posto',
    baseWeight: 'Peso base',
    itemsCount: '{count} artigos',
    packWeightTitle: '{weight} {unit} peso da mochila (consumible + peso base)',
    qty: 'cant.',
};
translations.gl.share = {
    shareList: 'Comparte a tua lista',
    embedList: 'Insire a tua lista',
    exportCsv: 'Exportar a CSV',
    generateError: 'Houbo un erro ao xerar o ID da tua lista. Inténtao de novo mais tarde.',
};
translations.gl.account = {
    signedInAs: 'Sesion iniciada como {username}',
    deleteAccount: 'Eliminar conta',
    title: 'Axustes da conta',
};
translations.gl.accountDelete = {
    title: 'Eliminar conta?',
    warning: 'Esta accion e permanente e non se pode desfacer.',
    instructions: 'Se queres eliminar a tua conta, introduce o teu contrasinal actual e o texto {phrase}:',
    phrase: 'eliminar a miña conta',
    button: 'Eliminar conta permanentemente',
};
translations.gl.help = {
    title: 'Axuda',
    gettingStarted: 'Primeiros pasos:',
    step1: 'Fai clic nos elementos para editalos. Ponlle nome a tua lista e a cada categoria.',
    step2: 'Engade categorias e artigos a tua lista.',
    step3: 'Cando remates, comparte a tua lista con outras persoas.',
    wornTitle: 'Cantidades e artigos postos',
    wornBody: 'Se tes varias unidades dun artigo e o marcas como posto, so a primeira unidade contara como peso posto. O resto contara como peso da mochila.',
    linkedTitle: 'Artigos en varias listas',
    linkedBody: 'Se copias a tua lista ou arrastras un artigo desde a biblioteca a unha segunda lista, eses artigos quedan vinculados. Calquera cambio nun artigo actualizase en todas as listas onde apareza.',
    contact: 'Se precisas mais axuda, escribenos por email.',
};
translations.gl.importCsv = {
    title: 'Confirma a importacion',
    item: 'Artigo',
    category: 'Categoria',
    description: 'Descripcion',
    qty: 'Cant.',
    weight: 'Peso',
    unit: 'Unidade',
    importList: 'Importar lista',
    cancelImport: 'Cancelar importacion',
    tooLarge: 'O arquivo e demasiado grande',
    selectCsv: 'Selecciona un arquivo CSV.',
    invalidFormat: 'Non se puido cargar a folla. Revisa o formato.',
};
translations.gl.validation = {
    enterUsername: 'Introduce un nome de usuario.',
    usernameLength: 'Introduce un nome de usuario de entre 3 e 32 caracteres.',
    enterEmail: 'Introduce un email.',
    enterPassword: 'Introduce un contrasinal.',
    confirmPassword: 'Confirma o contrasinal.',
    passwordsMismatch: 'Os contrasinais non coinciden.',
    passwordLength: 'Introduce un contrasinal de entre 5 e 60 caracteres.',
    enterYourUsername: 'Introduce o teu nome de usuario.',
    enterYourPassword: 'Introduce o teu contrasinal.',
    enterCurrentPassword: 'Introduce o teu contrasinal actual.',
    enterConfirmationText: 'Introduce o texto de confirmacion.',
};
translations.gl.errors = {
    unknown: 'Houbo un erro descoñecido.',
    loadData: 'Houbo un erro ao cargar os teus datos.',
    fetchData: 'Houbo un erro ao recuperar os teus datos. Inténtao de novo mais tarde.',
    saveData: 'Houbo un erro ao gardar os teus datos.',
    genericRetry: 'Houbo un erro. Inténtao de novo mais tarde.',
};
translations.gl.data = { copyOf: 'Copia de {name}' };

let currentLanguage = DEFAULT_LANGUAGE;

const deepGet = function (input, path) {
    return path.split('.').reduce((value, key) => {
        if (!value || typeof value !== 'object') {
            return undefined;
        }
        return value[key];
    }, input);
};

const interpolate = function (message, params = {}) {
    return message.replace(/\{(\w+)\}/g, (fullMatch, key) => {
        if (typeof params[key] === 'undefined' || params[key] === null) {
            return '';
        }
        return String(params[key]);
    });
};

const normalizeLanguage = function (language) {
    return ALLOWED_LANGUAGES.indexOf(language) > -1 ? language : DEFAULT_LANGUAGE;
};

const setLanguage = function (language) {
    currentLanguage = normalizeLanguage(language);
    return currentLanguage;
};

const translate = function (key, params = {}, language = currentLanguage) {
    const normalizedLanguage = normalizeLanguage(language);
    const template = deepGet(translations[normalizedLanguage], key) || deepGet(translations[DEFAULT_LANGUAGE], key);
    if (typeof template !== 'string') {
        return key;
    }
    return interpolate(template, params);
};

const languageOptions = ALLOWED_LANGUAGES.map(language => ({
    value: language,
    label: translate(`languages.${language}`, {}, language),
}));

const installI18n = function (Vue) {
    Vue.prototype.$t = function (key, params = {}) {
        const language = this.$store && this.$store.state && this.$store.state.language ? this.$store.state.language : currentLanguage;
        return translate(key, params, language);
    };
};

module.exports = {
    ALLOWED_LANGUAGES,
    DEFAULT_LANGUAGE,
    installI18n,
    languageOptions,
    setLanguage,
    translate,
};
