import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Category from "./Category";
import ChefReco from "./ChefReco";
import Fectures from "./Fectures";
import Menu from "./Menu";
import Testimonials from "./Testimonials";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant Boss | Home</title>
            </Helmet>
            <Slider></Slider>
            <Category></Category>
            <Menu></Menu>
            <ChefReco></ChefReco>
            <Fectures></Fectures>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;