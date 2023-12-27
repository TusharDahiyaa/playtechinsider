import "./App.css";
import AboutUs from "./Components/AboutUs";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Components/Store/Store";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import ForgetPassword from "./Components/Login/ForgetPassword";
import SignUp from "./Components/Login/SignUp";
import ResetPassword from "./Components/Login/ResetPassword";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import { Provider } from "./context/cartReducer";
import Checkout from "./Components/Cart/Checkout";
import PaymentsPage from "./Components/Payment/PaymentsPage";
import OrderConfirmation from "./Components/Payment/Confirmation";
import MyOrders from "./Components/Orders/MyOrders";
import AccountSettings from "./Components/Account/AccountSettings";

export default function App() {
  return (
    <>
      <Provider>
        <Navbar />
        <Router basename="/">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/paymentPage" element={<PaymentsPage />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/myOrders" element={<MyOrders />} />
            <Route path="/accountSettings" element={<AccountSettings />} />
            <Route
              path="/confirmation/:orderId"
              element={<OrderConfirmation />}
            />
            <Route
              path="/resetpassword/:resetToken"
              element={<ResetPassword />}
            />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </>
  );
}
