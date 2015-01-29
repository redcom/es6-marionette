var LdapStrategy = require('passport-ldapauth').Strategy;

// LDAP  Config
var ldapConfig = {
    server: {: 389
        url: 'ldap://' + global.config.ldap,
        searchBase: 'o=gr',
        searchFilter: '(uid={{username}})'
    },
};

module.exports = function(passport) {

    passport.use(new LdapStrategy(ldapConfig,
        function(profile, done) {
            return done(null, profile);
        }
    ));

    passport.serializeUser(function(user, done) {
        // this  sill save the user in session
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        // this will get the user from session
        done(null, user);
    });
};
