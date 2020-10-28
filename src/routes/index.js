const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');

module.exports = function({
    HomeRoutes,
    AuthRoutes,
    UserRoutes,
    ProductRoutes,
    CategoryRoutes,
    ClientRoutes,
    VentaRoutes
}) {
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

    apiRoutes.use("/home", HomeRoutes);
    apiRoutes.use("/auth", AuthRoutes);
    apiRoutes.use("/user", UserRoutes);
    apiRoutes.use("/product", ProductRoutes);
    apiRoutes.use("/category", CategoryRoutes);
    apiRoutes.use("/client", ClientRoutes);
    apiRoutes.use("/venta", VentaRoutes);

    router.use("/v1/api", apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
}