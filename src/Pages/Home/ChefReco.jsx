import SectionTitle from "../../Components/SeactonTitle/SectionTitle";


const ChefReco = () => {
    return (
        <div className="mt-10 ml-10">
             <SectionTitle
             subUnderline={'--Should Try--'}
             underline={'CHEF RECOMMENDS'}
            >

            </SectionTitle>
            <div className="grid md:grid-cols-3 gap-10">

            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/DfsD26p/pexels-gabby-k-5876742-1.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center items-center">Caeser Salad</h2>
    <p className="justify-center items-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="btn border-b-yellow-500 ">ADD CART</button>
    </div>
  </div>
</div>




<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/DfsD26p/pexels-gabby-k-5876742-1.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center items-center">Caeser Salad</h2>
    <p className="justify-center items-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="btn bg-black text-yellow-500  border-b-yellow-500">ADD CART</button>
    </div>
  </div>
</div>



<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/DfsD26p/pexels-gabby-k-5876742-1.jpg" alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="card-title justify-center items-center">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="btn border-b-yellow-500 ">ADD CART</button>
    </div>
  </div>
</div>


            </div>
        </div>
    );
};

export default ChefReco;