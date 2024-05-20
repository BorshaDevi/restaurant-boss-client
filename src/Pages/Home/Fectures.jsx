import SectionTitle from "../../Components/SeactonTitle/SectionTitle";


const Fectures = () => {
    return (
        <div className="mt-10">
            <div className="hero min-h-screen bg-fixed" style={{backgroundImage: 'url(https://i.ibb.co/G9YCq04/pexels-davideibiza-1739748.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content flex">
    <div className="max-w-md ">
      <SectionTitle subUnderline={'--Check it out--'}
             underline={'Fecture'}>

      </SectionTitle>

      <div className=" ">
        <div>
        <img src="https://i.ibb.co/G9YCq04/pexels-davideibiza-1739748.jpg" alt="" />
        </div>
        <div className="ml-10">
            <p>May 27,2023</p>
            <h5 className="uppercase">where can i get some? </h5>
            <p>Farmers markets are fantastic places to find fresh, locally sourced produce, meats, and dairy products. These markets often feature seasonal fruits and vegetables, homemade goods, and artisanal products.</p>
            <button className=" border-b-slate-300 btn bg-black ">Order Now</button>
        </div>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Fectures;