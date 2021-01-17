import { Company } from "./company";
import { Product } from "./product";

export class Category {
    uid:String;
    img:String;
    nombre:String;
    descripcion:String;
    companias?:Company[];
    productos?:Product[]
    
}
