module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [

        // First application
        {
            name      : "Momonio",
            script    : "./index.js",
            env: {
                PORT: "3006",
                MONGODB_URI: "mongodb://momonio-db:corvettE8@ds251807.mlab.com:51807/momonio",
                SECRET: "DexIsEenBaasEnLivIsEenBazin",
                KEY: "Dexperts2015"
            }
        }
    ]
};