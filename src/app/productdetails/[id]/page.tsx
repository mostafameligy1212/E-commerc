import { getSpacificProduct } from "_/app/_services/GetSpacificProduct";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import AddProductBtn from "_/app/_Component/AddProductBtn/AddProductBtn";
import BtnWishListA_R from "_/app/_Component/AddProductBtn/BtnWishListA_R";

export default async function ProductDetails(props : PageProps<'/productdetails/[id]'>) {
  const {id} = await props.params;
  const product = await getSpacificProduct(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  let starCount = product?.ratingsAverage || 0;
  let emptyStar = 5 - starCount;

  let arr: number[] = [];
  let arrEmptyStar: number[] = [];

  for (let i = 0; i < Math.floor(starCount); i++) {
    arr.push(1);
  }

  if (starCount % 1 !== 0) {
    arr.push(0.5);
  }

  for (let i = 0; i < emptyStar; i++) {
    arrEmptyStar.push(1);
  }

  return (
    <div className="text-lg">
      <div className="grid-cols-1 min-h-screen sm:grid-cols-4 grid justify-center items-center w-3/4 mx-auto">
        <div className="col-span-1 relative">
          <img
            src={product?.imageCover}
            className="w-full block"
            alt={product?.title}
          />
          <div className="absolute top-2 left-2">
          <BtnWishListA_R id={product?.id}/>
          </div>
        </div>
        <div className="col-span-3 flex flex-col ps-10 gap-4 ">
          <h2 className="font-bold text-4xl">{product?.title}</h2>
          <p className="text-gray-600">{product?.description}</p>

          <div>
            {product?.priceAfterDiscount ? (
              <>
                <span className="line-through pe-3 text-red-500">
                  {product?.price}
                </span>
                <span>{product?.priceAfterDiscount} EGP</span>
              </>
            ) : (
              <span>price : {product?.price} EGP</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span>rate: {product?.ratingsAverage}</span>
            <span className="flex">
              {arr.map((star, index) =>
                star === 0.5 ? (
                  <IoIosStarHalf key={index} size={25} color="#F29B00" />
                ) : (
                  <IoIosStar key={index} size={25} color="#F29B00" />
                )
              )}
              {arrEmptyStar.map((_, index) => (
                <IoIosStarOutline key={index} size={25} color="#F29B00" />
              ))}
            </span>
          </div>

          <p>category: {product?.category?.name}</p>
          <p>brand: {product?.brand?.name}</p>

          <AddProductBtn id={product?.id} />
        </div>
      </div>
    </div>
  );
}