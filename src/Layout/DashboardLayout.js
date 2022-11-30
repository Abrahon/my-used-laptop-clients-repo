import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import AllBuyers from '../Pages/Dashboard/AllBuyers/AllBuyers';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyers] = AllBuyers(user?.email);
    const [isSeller] = useAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">




                    <li><Link to='/dashboard/allsellerallbuyer'>All Seller</Link></li>

                        {
                            isAdmin && <>



                                <li><Link to='/dashboard/myproduct'>My Orders</Link></li>
                                <li><Link to='/dashboard/myorders'>My Products</Link></li>



                                <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>


                            </>
                        }
                        {
                            isBuyers &&
                            <>
                                <li><Link to='/dashboard/myproduct'>My Orders</Link></li>


                            </>

                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myorders'>My Products</Link></li>



                            </>


                        }
                        <li><Link to='/dashboard/error'>Reported</Link></li>



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;