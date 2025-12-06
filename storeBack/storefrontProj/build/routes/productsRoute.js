"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
const productHandler_1 = require("../handlers/productHandler");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const authMiddleware_2 = require("../middlewares/authMiddleware");
exports.productRoute = express_1.default.Router();
const producthandler = new productHandler_1.ProductHandler();
exports.productRoute.post('/', authMiddleware_2.authenticate, (0, authMiddleware_1.authorization)(["admin"]), producthandler.createProduct);
exports.productRoute.get('/', producthandler.getAllProducts);
exports.productRoute.get('/search', authMiddleware_2.authenticate, (0, authMiddleware_1.authorization)(["admin", "customer"]), producthandler.searchProducts);
exports.productRoute.get('/:id', producthandler.getAllProductById);
exports.productRoute.patch('/:id', authMiddleware_2.authenticate, (0, authMiddleware_1.authorization)(["admin"]), producthandler.updateProduct);
