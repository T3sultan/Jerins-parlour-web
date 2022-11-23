import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./views/components/common/Header/NavBar";
import Login from "./views/pages/auth/Login/Login";
import RequiredAuth from "./views/pages/auth/RequireAuth";
import Signup from "./views/pages/auth/Signup/Signup";
import Contact from "./views/pages/contact/Contact";
import AddService from "./views/pages/Dashboard/AddService";
import Book from "./views/pages/Dashboard/Book";
import BookingList from "./views/pages/Dashboard/BookingList";
import Dashboard from "./views/pages/Dashboard/Dashboard";
import Home from "./views/pages/home/Home";
import OurPortfolio from "./views/pages/OurPortolio/OurPortfolio";
import OurTeam from "./views/pages/OurTeam/OurTeam";
import Review from "./views/pages/Dashboard/Review";
import OrderList from "./views/pages/Dashboard/OrderList";
import MakeAdmin from "./views/pages/Dashboard/MakeAdmin";
import ManageServices from "./views/pages/Dashboard/ManageServices";
import Mores from "./views/pages/More/Mores";
import { ToastContainer } from "react-toastify";
import Payment from "./views/pages/Dashboard/Payment";
import RequireAdmin from "./views/pages/auth/RequireAdmin";

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/portfolio" element={<OurPortfolio />}></Route>
        <Route path="/team" element={<OurTeam />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/more" element={<Mores />}></Route>

        <Route
          path="dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        >
          {/* <Route index element={<Book />}></Route> */}
          <Route path="bookList" element={<BookingList />}></Route>
          <Route path="review" element={<Review />}></Route>
          <Route path="order" element={<OrderList />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>

          <Route path="addService" element={<AddService />}></Route>
          <Route path="makeAdmin" element={<MakeAdmin />}></Route>
          <Route path="manageService" element={<ManageServices />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
