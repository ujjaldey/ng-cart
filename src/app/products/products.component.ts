import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  products: any;
  cartProducts: any;

  constructor(private router: Router) { }

  ngOnInit() {
    let data = localStorage.getItem('cart');

    if (data != "null") {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [{
      id: 1,
      title: "Americano",
      description: "Americano",
      img: "https://static.toiimg.com/photo/66026741.cms",
      price: 2
    }, {
      id: 2,
      title: "Americano",
      description: "Americano",
      img: "https://static.toiimg.com/photo/66026741.cms",
      price: 2
    }, {
      id: 3,
      title: "Americano",
      description: "Americano",
      img: "https://static.toiimg.com/photo/66026741.cms",
      price: 2
    }, {
      id: 4,
      title: "Americano",
      description: "Americano",
      img: "https://static.toiimg.com/photo/66026741.cms",
      price: 2
    }, {
      id: 5,
      title: "Americano",
      description: "Americano",
      img: "https://static.toiimg.com/photo/66026741.cms",
      price: 2
    }, {
      id: 6,
      title: "Americano",
      description: "Americano",
      img: "https://static.toiimg.com/photo/66026741.cms",
      price: 2
    }, {
      id: 7,
      title: "Americano",
      description: "Americano",
      img: "https://static.toiimg.com/photo/66026741.cms",
      price: 2
    }, {
      id: 8,
      title: "Americano",
      description: "Americano",
      img: "https://static.toiimg.com/photo/66026741.cms",
      price: 2
    }, {
      id: 9,
      title: "Americano",
      description: "Americano",
      img: "https://static.toiimg.com/photo/66026741.cms",
      price: 2
    }];
  }

  addToCart(index) {
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data != "null") {
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);

    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }

  updateCartData(cartData) {
    this.cartProducts = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
