/* jshint devel:true  */

import Marionette from 'backbone.marionette';
import AppLayout from 'modules/app-layout';
import Footer from 'modules/footer';
import Nav from 'modules/nav';

var App = new Marionette.Application();

App.on('start', function() {
    'use strict';

    App.navLayout = new Nav({
        el: 'nav.navbar'
    });
    App.rootLayout = new AppLayout({
        el: '#main'
    });

    App.rootLayout.render();
    App.navLayout.render();

    App.rootLayout.getRegion('footer').show(new Footer());
});

App.start();
