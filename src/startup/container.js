const { createContainer, asClass, asValue, asFunction } = require('awilix');

//config
const config = require('../config')
const app = require('.');

//services
const { HomeService, AuthService, UserService } = require('../services')

// //controllers
const { HomeController, AuthController, UserController } = require('../controllers');

// //rutas
const {
    HomeRoutes,
    AuthRoutes,
    UserRoutes
} = require('../routes/index.routes');
const Routes = require('../routes');

//models
const { User } = require('../models');

//repositories
const { UserRepository } = require('../repositories');

const container = createContainer();

container.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    UserService: asClass(UserService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
}).register({
    User: asValue(User)
}).register({
    UserRepository: asClass(UserRepository).singleton()
});

module.exports = container;