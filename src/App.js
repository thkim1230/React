import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Info from "./pages/RestaurantInfo";
import Menu from './pages/RestaurantMenu';
import Review from "./pages/RestaurantReview";
import List from "./pages/RestaurantList";
import RestaurantProvider from "./context/RestaurantId";
import Login from "./pages/Login";

function App() {

  return (
    <RestaurantProvider>
      <Router >
        <Routes>
          <Route path="/" element={<List/>} />
          <Route path="info" element={<Info/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/review" element={<Review/>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </RestaurantProvider>

  );
}

export default App;