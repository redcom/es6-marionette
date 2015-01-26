var LDAPStrategy = require('passport-ldapauth').Strategy;

// LDAP  Config
var ldapConfig = {
    server: {
        url: 'ldap://' + global.config.ldap,
        bindDn: 'cn=read-only-admin,ou=mathematicians,dc=example,dc=com',
        bindCredentials: 'password',
        searchBase: 'ou=mathematicians,dc=example,dc=com',
        searchFilter: '(uid={{username}})'
    }
    /*
    ,
     *usernameField: 'username',
     *passwordField: 'password'
     */
};

module.exports = function(app, passport) {

    passport.use(new LDAPStrategy(
        ldapConfig,
        function(profile, done) {
            console.log("aaaaaaaaaaaaaaaaa");
            console.log("aaaaaaaaaaaaaaaaa");
            console.log("aaaaaaaaaaaaaaaaa");
            console.log("aaaaaaaaaaaaaaaaa");
            console.log("aaaaaaaaaaaaaaaaa");
            return done(null, profile);
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    app.use(passport.initialize());
    app.use(passport.session());

};
