

const FoodCard = ({items}) => {
    const {name,image,recipe}=items
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image}alt="Shoes" /></figure>
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