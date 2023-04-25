import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import RestaurantInfo from './pages/RestaurantInfo';
import Menu from './pages/RestaurantMenu';
import Review from "./pages/RestaurantReview";

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<RestaurantInfo/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/review" element={<Review/>} />
      </Routes>
    </Router>
  );
}

export default App;