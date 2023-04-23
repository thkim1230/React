import { Route,Router,Routes } from 'react-router-dom';
import RtHome from '../component/RestaurantComponent/RestaurantHome';

const RestaurantPage =() =>{

    return(
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<RtHome/>}/>
                    <Route path='/Restaurant/menu' element={<RtHome/>}/>
                    <Route path='/Restaurant/review' element={<RtHome/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default RestaurantPage;