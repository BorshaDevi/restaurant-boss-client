import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import orderImg from '../../assets/assets/home/chef-service.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hook/useMenu";
import FoodCard from "./FoodCard";
const Order = () => {
    const {menus}=useMenu()
    const pizzas=menus.filter(menu => menu.category === 'pizza')
    const desserts=menus.filter(menu => menu.category === 'dessert')
    const salads=menus.filter(menu => menu.category === 'salad')
    const soups=menus.filter(menu => menu.category === 'soup')
    const drinks=menus.filter(menu => menu.category === 'drinks')
    
    return (
        <div>
             <Helmet>
                <title>Restaurant Boss | Order your menu</title>
            </Helmet>
            <Cover img={orderImg} title={'Order your Menu'}></Cover>
            <Tabs>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drink</Tab>
    </TabList>
        
    <TabPanel>
        <div className="grid lg:grid-cols-3 gap-10 ml-5">
            
    {
            salads.map(salad => <FoodCard key={salad._id} items={salad}></FoodCard>)
         }
        </div>
    </TabPanel>
    <TabPanel>
        <div className="grid lg:grid-cols-3 gap-10 ml-5">

    {
            pizzas.map(pizza => <FoodCard key={pizza._id} items={pizza}></FoodCard>)
         }
        </div>
    </TabPanel>
    <TabPanel>
        <div className="grid lg:grid-cols-3 gap-10 ml-5">

    {
            soups.map(soup => <FoodCard key={soup._id} items={soup}></FoodCard>)
         }
        </div>
    </TabPanel>
    <TabPanel>
        <div className="grid lg:grid-cols-3 gap-10 ml-5">

    {
            desserts.map(dessert => <FoodCard key={dessert._id} items={dessert}></FoodCard>)
         }
        </div>
    </TabPanel>
    <TabPanel>
        <div className="grid lg:grid-cols-3 gap-10 ml-5">

    {
            drinks.map(drink => <FoodCard key={drink._id} items={drink}></FoodCard>)
         }
        </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Order;