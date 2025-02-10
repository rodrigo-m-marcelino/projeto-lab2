const routerUsers = require('./userRoutes');
module.exports = (app) => {
    app.use(routerUsers);
    // Se eu quiser exportar mais rotas eu adiciono aqui
    // app.use(routeAnotherTable)
};