import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Info from "./pages/RestaurantInfo";
import Menu from './component/restaurantComponent/RestaurantMenu';
import Review from "./component/restaurantComponent/RestaurantReview";
import List from "./pages/RestaurantList";
import RestaurantProvider from "./context/RestaurantId";
import Login from "./pages/Login";
function App() {

  return (
    <RestaurantProvider>
      <Router >
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="info" element={<Info/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/review" element={<Review/>} />
          <Route path="/list" element={<List/>}/>
        </Routes>
      </Router>
    </RestaurantProvider>

  );
}

export default App;