import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";

import bgImg from '../../assets/assets/menu/banner3.jpg'
import Menu from "../Home/Menu";
import desserts from '../../assets/assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/assets/menu/pizza-bg.jpg'
import salads from '../../assets/assets/menu/salad-bg.jpg'
import soups from '../../assets/assets/menu/soup-bg.jpg'
import SectionTitle from "../../Components/SeactonTitle/SectionTitle";
import MenuCategory from "../../Components/MenuCategory/MenuCategory";
import useMenu from "../../Hook/useMenu";

const OurMenu = () => {
    const {menus}=useMenu()
    const offers=menus.filter(menu => menu.category === 'offered')
    const pizzas=menus.filter(menu => menu.category === 'pizza')
    const dessert=menus.filter(menu => menu.category === 'dessert')
    const salad=menus.filter(menu => menu.category === 'salad')
    const soup=menus.filter(menu => menu.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Restaurant Boss | Our Menu</title>
            </Helmet>
            <Cover img={bgImg} title={'OUR menu'}></Cover>
            <SectionTitle subUnderline={'--Do not miss--'}
             underline={'Todays offer'}>

      </SectionTitle>
      <MenuCategory items={offers}></MenuCategory>
      <Cover img={desserts} title={'Desserts'}></Cover>
      <MenuCategory items={dessert}></MenuCategory>
      <Cover img={pizza} title={'pizza'}></Cover>
      <MenuCategory items={pizzas}></MenuCategory>
      <Cover img={salads}title={'salads'}></Cover>
      <MenuCategory items={salad}></MenuCategory>
      <Cover img={soups} title={'soups'}></Cover>
      <MenuCategory items={soup}></MenuCategory>
            {/* <Menu></Menu>
            <Menu></Menu>
            <Menu></Menu>
            <Menu></Menu>
            <Menu></Menu> */}
            
        </div>
    );
};

export default OurMenu;