import React, { useEffect } from 'react'
import Styles from './MainRoutes.module.css'
import Sidebar from './navigation/Sidebar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Screens/Dashboard/Dashboard'
import Tables from './Screens/Tables/Tables'
import Reservation from './Screens/reservation/Reservation'
import Waiter from './Screens/waiter/Waiter'
import Menu from './Screens/menu/Menu'
import Customer from './Screens/customer/Customer'
import Order from './Screens/order/Order'

const MainRoutes = () => {
    return (
        <div className={Styles["MainRoute"]}>
            <div className={Styles["sidebar"]}>
                <Sidebar />
            </div>
            <div className={Styles["right-side-container"]}>
                <Routes>
                    <Route path='/' element={<Navigate to='/dashboard' />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/table' element={<Tables />} />
                    <Route path='/reservation' element={<Reservation />} />
                    <Route path='/waiter' element={<Waiter />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='/customer' element={<Customer />} />
                </Routes>
            </div>
        </div>
    )
}

export default MainRoutes