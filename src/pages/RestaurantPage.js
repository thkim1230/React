import { useState } from 'react';
import Restaurant from '../component/RestaurantComponent/Restaurant';
import RestaurantMain from '../component/RestaurantComponent/RestaurantMain';
import RestaurantNav from '../component/RestaurantComponent/RestaurantNav';
import HomeFooter from '../component/footer/Foot';

const RestaurantPage =() =>{
    const [category, setCategory] = useState('info');
    const onSelect = (category) => setCategory(category);

    return(
        <>
            <RestaurantMain/>
            <RestaurantNav category={category} onSelect={onSelect}/>
            <Restaurant category={category}/>
            <HomeFooter/>
        </>
    );
}

export default RestaurantPage;