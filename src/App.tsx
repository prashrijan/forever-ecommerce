import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
    About,
    Cart,
    Collection,
    Contact,
    Home,
    Login,
    Orders,
    PlaceOrders,
    Product,
    SignUp,
} from "./pages";

function App() {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            {/* public routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:productId" element={<Product />} />

                {/* private routes */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/place-order" element={<PlaceOrders />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </div>
    );
}

export default App;
