/* jshint devel:true  */

import Marionette from 'backbone.marionette';
import AppLayout from 'modules/app-layout';
import Footer from 'modules/footer';
import Nav from 'modules/nav';
import Auth from 'modules/auth';

var App = new Marionette.Application();

App.on('start', function() {
    'use strict';

    App.rootLayout = new AppLayout({
        el: '#main'
    });
    App.rootLayout.render();
    App.rootLayout.getRegion('footer').show(new Footer());

    App.navLayout = new Nav({
        el: 'nav.navbar'
    });
    App.navLayout.render();
    App.navLayout.getRegion('auth').show(new Auth());
});

App.start();
