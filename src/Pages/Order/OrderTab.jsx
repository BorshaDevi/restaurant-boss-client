import React from 'react';
import FoodCard from './FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid lg:grid-cols-3 gap-10 ml-5">
            {
            items.map(salad => <FoodCard key={salad._id} items={salad}></FoodCard>)
         }
        </div>
    );
};

export default OrderTab;