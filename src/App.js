import { Route,Router,Routes } from 'react-router-dom';
import RestaurantInfo from './pages/RestaurantInfo';
import Menu from './pages/RestaurantMenu';
import Review from './pages/RestaurantReview';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantInfo />} />
        <Route path="/RestaurantMenu" element={<Menu />} />
        <Route path="/RestaurantReview" element={<Review />} />
      </Routes>
  </Router>
  );
}
export default App;
