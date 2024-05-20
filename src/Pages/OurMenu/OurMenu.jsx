import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";

import bgImg from '../../assets/assets/menu/banner3.jpg'
import Menu from "../Home/Menu";
import desserts from '../../assets/assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/assets/menu/pizza-bg.jpg'
import salads from '../../assets/assets/menu/salad-bg.jpg'
import soups from '../../assets/assets/menu/soup-bg.jpg'

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant Boss | Our Menu</title>
            </Helmet>
            <Cover img={bgImg} title={'OUR menu'}></Cover>
            {/* <Menu></Menu>
            <Cover img={desserts} title={'Desserts'}></Cover>
            <Menu></Menu>
            <Cover img={pizza} title={'pizza'}></Cover>
            <Menu></Menu>
            <Cover img={salads}title={'salads'}></Cover>
            <Menu></Menu>
            <Cover img={soups} title={'soups'}></Cover>
            <Menu></Menu> */}
            
        </div>
    );
};

export default OurMenu;