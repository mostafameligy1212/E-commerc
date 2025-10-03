export type ProductType ={
    id : string ,
    title : string ,
    imageCover : string ,
    description : string ,
    category : CategoryType ,
    brand : BrandType ,
    price : number ,
    priceAfterDiscount : number ,
    ratingsAverage : number ,
};

export type CategoryType={
    _id : string,
    name : string,
    slug : string,
    image : string,
};
export type BrandType={
    _id : string,
    name : string,
    slug : string,
    image : string,
};

// export type RegisterType =
//     {
//     name: string,
//     email:string,
//     password:string,
//     rePassword:string,
//     phone:string
// }
