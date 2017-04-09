if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '.' })
        .then(function(reg) {
            console.log('Registered service worker ', reg);
        });

    navigator.serviceWorker.addEventListener('controllerchange', function(event) {
        console.log('[controllerchange] A "controllerchange" event has happened ' +
            'within navigator.serviceWorker: ', event
        );

        navigator.serviceWorker.controller.addEventListener('statechange', function() {
            console.log('[controllerchange][statechange] ' , this.state);

            if (this.state === 'activated') {
                console.log('ready to go offline!');
            }
        });
    });
}
