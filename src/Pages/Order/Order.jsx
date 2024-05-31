import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import orderImg from '../../assets/assets/home/chef-service.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hook/useMenu";
import FoodCard from "./FoodCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import OrderTab from "./OrderTab";
const Order = () => {
    const categorys=['salad','pizza','soup','dessert','drink']
    const {category}=useParams()
    const inter=categorys.indexOf(category)
    const [tabIndex, setTabIndex] = useState(inter);
    
    const [menus]=useMenu()
    
    const pizzas=menus.filter(menu => menu.category === 'pizza')
    const desserts=menus.filter(menu => menu.category === 'dessert')
    const salads=menus.filter(menu => menu.category ==='salad')
    const soups=menus.filter(menu => menu.category === 'soup')
    const drinks=menus.filter(menu => menu.category === 'drinks')
    
    return (
        
        <div>
             <Helmet>
                <title>Restaurant Boss | Order your menu</title>
            </Helmet>
            <Cover img={orderImg} title={'Order your Menu'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>salad</Tab>
      <Tab>pizza</Tab>
      <Tab>soup</Tab>
      <Tab>dessert</Tab>
      <Tab>drinks</Tab>
    </TabList>
        
    <TabPanel>
       
            
    <OrderTab items={salads}></OrderTab>
        
    </TabPanel>
    <TabPanel>
     <OrderTab items={pizzas}></OrderTab>
    </TabPanel>
    <TabPanel>
     
     <OrderTab items={soups}></OrderTab>
    
    </TabPanel>
    <TabPanel>
     <OrderTab items={desserts}></OrderTab>
   
    </TabPanel>
    <TabPanel>
     <OrderTab items={drinks}></OrderTab>
   
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Order;