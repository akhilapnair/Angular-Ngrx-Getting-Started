import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';


import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromProdut from '../state/product.reducer';
import * as productAction from '../state/product.action';
@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: any;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;

  constructor(private productService: ProductService, public store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    // todo unsub
    this.store.pipe(select(fromProdut.getCurrentProduct)).subscribe(
      currentproduct => this.selectedProduct = currentproduct
    );

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => this.products = products,
      error: (err: any) => this.errorMessage = err.error
    });
    this.store.pipe(select(fromProdut.getShowProductCode)).subscribe(showProductCode => {
      this.displayCode = showProductCode;
    });
  }

  ngOnDestroy(): void {
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new productAction.ToggleProductCode(value));
  }

  newProduct(): void {
    this.store.dispatch(new productAction.InitilizeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new productAction.SetCurrentProduct(product))
  }

}
