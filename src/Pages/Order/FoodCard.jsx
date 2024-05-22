

const FoodCard = ({items}) => {
    const {name,image,recipe,price}=items
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image}alt="Shoes" /></figure>
  <p className="absolute  px-4 right-0 bg-black text-white">${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn border-b-yellow-500 uppercase">add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;