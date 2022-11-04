import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}
export default App;