'use strict';
import Marionette from 'backbone.marionette';
import authTemplate from 'templates/auth';

export default class Auth extends Marionette.ItemView {
    constructor(...rest) {
        this.template = authTemplate;
        this.onBeforeRender = function() {
            console.log('onBeforeRender: should check for login');
        }
        this.events = {
            'click button.login': execLogin
        };
        super(...rest);

        function execLogin(e) {
            e.preventDefault();
            var password = this.$el.find('input[type=password]').val(),
                username = this.$el.find('input[type=text]').val();

            if (username.length > 3 && password.length > 3) {
                console.log( );
                $.ajax('/api/auth',{method:"POST", data: {username: username, password:password}})
                    .then(function() {
                        console.log(arguments)
                    })
                    .fail(function() {
                        console.log('fail', arguments)
                    });
            }

        }
    }
}
