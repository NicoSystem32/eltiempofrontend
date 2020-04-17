import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service';
import { Product} from '../../models/product'

@Component({
  selector: 'app-lookproducts',
  templateUrl: './lookproducts.component.html',
  styleUrls: ['./lookproducts.component.css'],
  providers: [ProductService]
})
export class LookproductsComponent implements OnInit {

  public products: Product[];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    
    this._productService.getProducts().subscribe(
      response => {
        
        if(response.product)
        {
          console.log(response)
          this.products = response.product;
        }else
        {
          
        }
      },
      error => {
        console.log(error);
      }
      
    );
  }

}
