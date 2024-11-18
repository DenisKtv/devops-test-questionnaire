export const environment = {
    http: {
        host: '127.0.0.1',
        port: 3000
    },
    mongoose: {
        uri: 'mongodb://localhost/questionnaire',
        options: {
            reconnectTries: Number.MAX_VALUE,
            autoReconnect : true,
            useNewUrlParser: true
        }
    }
};