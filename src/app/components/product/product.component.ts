import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductService} from '../../services/product.service';
import { Product} from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  public product: Product;
  constructor(
    public _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

   }

  ngOnInit(): void {

    this._route.params.subscribe(params =>{
      let id = params['id'];
      this._productService.getProduct(id).subscribe(
        response => {
          console.log(response);
          if(response.product)
          {
            this.product = response.product;
          }else
          {
            this._router.navigate(['/ElTiempo']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/ElTiempo']);
        }
      );
    })

  }

}
