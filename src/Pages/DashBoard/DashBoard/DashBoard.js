import React from "react";
import "./DashBoard.css";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import Pay from "../Pay/Pay";
import AddReview from "../AddReview/AddReview";
import ManageProducts from "../ManageProducts/ManageProducts";
import AddProduct from "../AddProduct/AddProduct";
import AllOrders from "./AllOrders/AllOrders";
import useAuth from "../../../hooks/useAuth";


const DashBoard = () => {
  let { path, url } = useRouteMatch();
  const { logout, admin } = useAuth();

  return (
    <div className=" my-2" id="dashboard-area">
      <div className="container">
        <div className="row border border-dark">
          {/*=========== dashboard sidebar start==============*/}
          <div className="col-md-3 vh-100 c-bg">
            <div className="ps-3">
              <nav className="nav flex-column py-5 ">
                  <NavLink id="hoverText" className="nav-link " to="/">
                     Home
                    </NavLink>


                {/* {!admin && ( */}
                  <>
                    <NavLink id="hoverText" className="nav-link " to={`${url}`}>
                      My Orders
                    </NavLink>

                    <NavLink id="hoverText" className="nav-link " to={`${url}/addReview`}>
                      Add Review
                    </NavLink>

                    <NavLink id="hoverText" className="nav-link " to={`${url}/pay`}>
                      Pay
                    </NavLink>
                  </>
                {/* )} */}
                {/*===========link only for admin========== */}

                {/* {admin && ( */}
                  <>
                    <NavLink className="nav-link text-white" to={`${url}/manageProducts`}>
                      Manage Products
                    </NavLink>

                    <NavLink className="nav-link text-white" to={`${url}/allOrders`}>
                      All Orders
                    </NavLink>

                    <NavLink className="nav-link text-white" to={`${url}/addProduct`}>
                      Add Product
                    </NavLink>

                    <NavLink className="nav-link text-white" to={`${url}/makeAdmin`}>
                      Make Admin
                    </NavLink>
                  </>
                {/* )} */}
              </nav>
              <div className=" c-margin">
                <button onClick={logout} type="button" className="btn btn-danger btn-sm text-white">
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/*=========== dashboard sidebar end==============*/}

          {/* dashboard content */}
          <div className="col-md-9 vh-100 overflow-auto">
            <div className="">
              <h6 className="fw-bold p-3 sticky-top">Dashboard</h6>
              <Switch>
                <Route exact path={path}>
                  <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/pay`}>
                  <Pay></Pay>
                </Route>
                <Route path={`${path}/addReview`}>
                  <AddReview></AddReview>
                </Route>

                {/*===========options only for admin========== */}
                <Route path={`${path}/manageProducts`}>
                  <ManageProducts></ManageProducts>
                </Route>

                <Route path={`${path}/allOrders`}>
                  <AllOrders></AllOrders>
                </Route>

                <Route path={`${path}/addProduct`}>
                  <AddProduct></AddProduct>
                </Route>

                <Route path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;


