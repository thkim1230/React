import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Info from "./pages/RestaurantInfo";
import List from "./pages/RestaurantList";
import RestaurantProvider from "./context/RestaurantId";
import Login from "./pages/Login";
import ReviewDetail from "./pages/ReviewDetail";
import 'react-calendar/dist/Calendar.css';
import Reservation from "./pages/Reservation";
import Fire from "./pages/fire";

function App() {

  return (
    <RestaurantProvider>
      <Router >
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="info" element={<Info/>} />
          <Route path="/list" element={<List/>}/>
          <Route path="/detail" element={<ReviewDetail/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
          <Route path="/fire" element={<Fire/>}/>
        </Routes>
      </Router>
    </RestaurantProvider>

  );
}

export default App;