import  express  from "express";
import { ProductHandler } from "../handlers/productHandler";
import { authorization } from "../middlewares/authMiddleware";
import { authenticate } from '../middlewares/authMiddleware';



export const productRoute=express.Router();
const producthandler=new ProductHandler();

productRoute.post('/',authenticate,authorization(["admin"]),producthandler.createProduct);
productRoute.get('/',producthandler.getAllProducts);
productRoute.get('/search',authenticate,authorization(["admin","customer"]),producthandler.searchProducts);
productRoute.get('/:id',producthandler.getAllProductById);
productRoute.patch('/:id',authenticate,authorization(["admin"]),producthandler.updateProduct);

