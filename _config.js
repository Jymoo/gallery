var config = {}

// Update to have your correct username and password
config.mongoURI = {
    //production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    //development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    //test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',

    production: 'mongodb+srv://mongo:EGR8eRYJBXoqcppX@cluster0.kj5eajm.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://mongo:EGR8eRYJBXoqcppX@cluster0.kj5eajm.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://mongo:EGR8eRYJBXoqcppX@cluster0.kj5eajm.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;




