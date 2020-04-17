import { Component, OnInit } from '@angular/core';
import { Product} from '../../models/product';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css'],
  providers: [ProductService]
  
})
export class CreateproductComponent implements OnInit {
  public user: any;
  public product: Product;
  public status: string;
  public page_title:string;
  constructor(
    private _productService: ProductService
  ) {
    this.user = {nombre: '', categoria: '', precio: '0'};
    this.product = new Product('','','',null,null);
    this.page_title = 'Crear Producto';
   }

  ngOnInit() {
    
  }

  onSubmit(){
    console.log(this.product);
    this._productService.create(this.product).subscribe(
      response => {
        if(response.status == 'success')
        {
          this.status = 'success';
          this.product = response.product;
          alert('Se insertó el producto correctamente =)');
          console.log(response);
        }else
        {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
      
    );

  }

}
