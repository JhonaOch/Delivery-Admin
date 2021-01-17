import { Time } from "@angular/common";
import { Category } from "./category";
import { Product } from "./product";

export class Company {
    uid:String;
    img:String;
    nombre:String;
    direccion:String;
    ruc:String;
    telefono:String;
    correo:String;
    horario_apertura:Time;
    horario_cierre:Time;
    descripcion:String;
    categorias?:Category[];


}
