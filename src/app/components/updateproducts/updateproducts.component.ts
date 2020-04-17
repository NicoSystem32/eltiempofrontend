import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Product} from '../../models/product';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css'],
  providers: [ProductService]

})
export class UpdateproductsComponent implements OnInit {
  public user: any;
  public product: Product;
  public status: string;
  public is_edit: boolean;
  public page_title:string;
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.user = {_id:'', nombre: '', categoria: '', precio: '0' };
    this.product = new Product('','', '',null, null);
    this.is_edit = true;
    this.page_title = 'Editar Producto'
  }

  ngOnInit(): void {
    this.getProduct();
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

  getProduct(){
    this._route.params.subscribe(params =>{
      let id = params['id'];
      this._productService.getProduct(id).subscribe(
        response => {
          if(response.product)
          {
            this.product = response.product;
          }else{
            this._router.navigate(['/ElTiempo']);
          }
        },
        error =>{
          console.log(error);
          this._router.navigate(['/ElTiempo']);
        }
      );
    })
  }

}
