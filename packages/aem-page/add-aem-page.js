module.exports = targets => {
    const builtins = targets.of('@magento/pwa-buildpack');

    builtins.envVarDefinitions.tap(defs => {
        defs.sections.push({
            name: 'AEM Page',
            variables: [
                {
                    name: 'AEM_API_HOST',
                    type: 'str',
                    desc: 'Specify the api host for AEM',
                    default: ''
                },
                {
                    name: 'AEM_MODEL_PATH',
                    type: 'str',
                    desc: 'Specify the model path for AEM',
                    default: ''
                }
            ]
        });
    });

    builtins.specialFeatures.tap(features => {
        features[targets.name] = {
            esModules: true,
            cssModules: true
        };
    });

    const venia = targets.of('@magento/venia-ui');

    venia.navItems.tap(navItems => [
        ...navItems,
        {
            name: 'AEM Page',
            to: '/aempage'
        }
    ]);

    venia.routes.tap(routes => [
        ...routes,
        {
            name: 'AEM Page',
            pattern: '/aempage',
            path: targets.name + '/lib/pages/aempage.js',
            exact: true
        }
    ]);

    return targets;
};
