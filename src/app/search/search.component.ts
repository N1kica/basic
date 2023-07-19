import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AsyncPipe, NgFor } from "@angular/common";
import { combineLatest, map, Observable, switchMap } from "rxjs";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { GridItemsComponent } from "./ui/grid-items.component";

export interface Product {
  name: string;
  description: string;
  image: string;
  model: string;
  price: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe, NgFor, GridItemsComponent],
  template: `
    <div class="flex justify-center items-center h-80 bg-search text-white">
        <h1>SEARCH</h1>
    </div>
    <app-grid-items class="grid gap-6 p-8 mx-auto max-w-screen-2xl" [products]="products$ | async" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  private store = inject(AngularFirestore);
  private storage = inject(AngularFireStorage);

  products$: Observable<Product[]> = this.store.collection<Product>('products').valueChanges().pipe(
    switchMap(products =>
      combineLatest(
        products.map(product => this.storage.ref(product.image).getDownloadURL().pipe(
          map(image => ({
            name: product.name,
            model: product.model,
            description: product.description,
            image: image,
            price: product.price
          }))
        ))
      )
    )
  );
}
