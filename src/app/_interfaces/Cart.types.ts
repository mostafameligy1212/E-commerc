import { ProductType } from "./products";

export type itemType ={
  count : number,
  _id : string,
  price : number,
  product : ProductType,

}

export type CartResponsType = {
    numOfCartItems:number,
    products : itemType[] ,
    totalCartPrice :number ,
    cartId:string,
}

export type wishItemType  = {

}

// export interface WishResponsType {
//   numOfItems: number;
//   products: itemType [];
// }


export interface WishListProductLite {
  id: string;
  title: string;
  price: number;
  imageCover: string;
}

export interface WishResponsType {
  numOfItems: number;
  products: WishListProductLite[];
}