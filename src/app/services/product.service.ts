import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {Global} from './global';

@Injectable()
export class ProductService{

    public url: string;

    constructor(
       private _http: HttpClient 
    ){
        this.url = Global.url;
    }
    pruebas(){
        return "Soy el servicio de productos =)";
    }

    getProducts():Observable<any>{
        return this._http.get(this.url+'productos');
    }

    create(product): Observable<any>{
        let params = JSON.stringify(product);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'guardar',params,{headers:headers});
    }
    getProduct(productId):Observable<any>{
        console.log(productId);
        return this._http.get(this.url+'actualizaproducto/'+productId);
        
    }
}