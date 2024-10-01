import React, { useEffect, useState } from 'react'
import Styles from './Sidebar.module.css'
import { ImSpinner10 } from "react-icons/im";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg"
import { useNavigate, useLocation } from 'react-router-dom';
import profileImg from './../../assets/profile-icon.jpg'


const Sidebar = () => {
    const [activeTabPath, setActiveTabPath] = useState('')
    const navigate = useNavigate();
    const navigationhandler = (path) => {
        navigate(`/main/${path}`)
    }
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        setActiveTabPath(path)
    }, [location.pathname])

    console.log(activeTabPath)

    return (
        <>
            <div className={Styles["sidebar"]}>
                <div className={Styles["logo-icon"]}>
                    <ImSpinner10 size={20} color='white' />
                    <h3>Admin</h3>
                </div>
                <div className={Styles["list-container"]}>
                    <ul>
                        <li onClick={() => navigationhandler('dashboard')} style={{
                            border: activeTabPath == '/main/dashboard' && '1px solid #444242'
                        }} >Dashboard</li>
                        <li onClick={() => navigationhandler('table')}
                            style={{
                                border: activeTabPath == '/main/table' && '1px solid #444242'
                            }}
                        >Tables</li>
                        <li onClick={() => navigationhandler('reservation')}
                            style={{
                                border: activeTabPath == '/main/reservation' && '1px solid #444242'
                            }}
                        >Reservation</li>
                        <li onClick={() => navigationhandler('waiter')}
                            style={{
                                border: activeTabPath == '/main/waiter' && '1px solid #444242'
                            }}
                        >Waiters</li>
                        <li onClick={() => navigationhandler('menu')}
                            style={{
                                border: activeTabPath == '/main/menu' && '1px solid #444242'
                            }}
                        >Menu</li>
                        <li onClick={() => navigationhandler('customer')}
                            style={{
                                border: activeTabPath == '/main/customer' && '1px solid #444242'
                            }}
                        >Customers</li>
                        <li onClick={() => navigationhandler('order')}
                            style={{
                                border: activeTabPath == '/main/order' && '1px solid #444242'
                            }}
                        >Order</li>
                    </ul>
                </div>
                <div className={Styles["logout-section"]}>
                    <div className={Styles["profile"]}>
                        <div className={Styles["left-profile-icon"]}>
                            <img src={profileImg} alt="error" />
                            <span>shreyash bansode</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar