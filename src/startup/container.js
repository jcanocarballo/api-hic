const { createContainer, asClass, asValue, asFunction } = require('awilix');

//config
const config = require('../config')
const app = require('.');

//services
const { HomeService, AuthService, UserService, ProductService } = require('../services')

// //controllers
const { HomeController, AuthController, UserController, ProductController } = require('../controllers');

// //rutas
const {
    HomeRoutes,
    AuthRoutes,
    UserRoutes,
    ProductRoutes
} = require('../routes/index.routes');
const Routes = require('../routes');

//models
const { User, Product } = require('../models');

//repositories
const { UserRepository, ProductRepository } = require('../repositories');

const container = createContainer();

container.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    UserService: asClass(UserService).singleton(),
    ProductService: asClass(ProductService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    ProductController: asClass(ProductController.bind(ProductController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    ProductRoutes: asFunction(ProductRoutes).singleton()
}).register({
    User: asValue(User),
    Product: asValue(Product)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    ProductRepository: asClass(ProductRepository).singleton()
});

module.exports = container;