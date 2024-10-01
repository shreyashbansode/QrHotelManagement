import React from 'react'
import Styles from './Dashboard.module.css'
import BreadCrumb from '../../common/BreadCrumb'
import { CiMoneyCheck1 } from "react-icons/ci";
import profileIcon from '../../../assets/profile-icon.jpg'
import { CiEdit } from "react-icons/ci";
import Chart from 'react-apexcharts';

const Dashboard = () => {
    const state = {
        options: {
            chart: {
                type: 'area',
                height: 240,
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            title: {
                text: 'Average Check Size (Ruppes)',
                align: 'left',
                style: {
                    fontSize: '16px', // Set the font size
                    fontFamily: 'FuturaPTBook', // Change the font family
                    fontWeight: 'bold', // Optional: set font weight
                    color: '#333', // Optional: set font color
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            },
            tooltip: {
                shared: true,
                intersect: false,
            },
        },
        series: [
            {
                name: 'Sales',
                data: [30, 40, 35, 50, 49, 60, 70],
            },

        ],
    };

    const reservationGraphstate = {
        options: {
            chart: {
                type: 'bar',
                height: 230,
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            title: {
                text: 'Average Check Size (Ruppes)',
                align: 'left',
                style: {
                    fontSize: '16px', // Set the font size
                    fontFamily: 'FuturaPTBook', // Change the font family
                    fontWeight: 'bold', // Optional: set font weight
                    color: '#333', // Optional: set font color
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            },
            tooltip: {
                shared: true,
                intersect: false,
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
        series: [
            {
                name: 'Sales',
                data: [30, 40, 35, 50, 49, 60, 70],
            },

        ],
    };


    return (
        <div className={Styles['dashboard']}>
            <div className={Styles["inner-dashboard"]}>
                <div className={Styles["breadcrumb"]}>
                    <BreadCrumb />
                </div>
                <div className={Styles["expense-card"]}>
                    <div className={Styles["expanse-bx"]}>
                        <div className={Styles["label-div"]}>
                            <h4>Total Revenue</h4>
                            <div className={Styles['icon-container']}>
                                <CiMoneyCheck1 size={15} color='green' />
                            </div>
                        </div>
                        <div className={Styles["price-container"]}>
                            <div>
                                <p>
                                    <span>₹</span>1000
                                </p>
                            </div>
                            <div>
                                <p>
                                    +3.67%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["expanse-bx"]}>
                        <div className={Styles["label-div"]}>
                            <h4>Total Expense</h4>
                            <div className={Styles['icon-container']}>
                                <CiMoneyCheck1 size={15} color='green' />
                            </div>
                        </div>
                        <div className={Styles["price-container"]}>
                            <div>
                                <p>
                                    <span>₹</span>1000
                                </p>
                            </div>
                            <div>
                                <p>
                                    +3.67%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["expanse-bx"]}>
                        <div className={Styles["label-div"]}>
                            <h4>Total Reservation</h4>
                            <div className={Styles['icon-container']}>
                                <CiMoneyCheck1 size={15} color='green' />
                            </div>
                        </div>
                        <div className={Styles["price-container"]}>
                            <div>
                                <p>
                                    <span>₹</span>1000
                                </p>
                            </div>
                            <div>
                                <p>
                                    +3.67%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["expanse-bx"]}>
                        <div className={Styles["label-div"]}>
                            <h4>Occupied Table /h</h4>
                            <div className={Styles['icon-container']}>
                                <CiMoneyCheck1 size={15} color='green' />
                            </div>
                        </div>
                        <div className={Styles["price-container"]}>
                            <div>
                                <p>
                                    <span>75 %</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    +3.67%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles["dashboard-sections"]}>
                    <div className={Styles["sectionDiv"]}>
                        <div className={Styles["reservation-container"]}>
                            <div className={Styles["reservation-label"]}>
                                <h4>Current Reservation</h4>
                                <button>View All</button>
                            </div>

                            <div className={Styles["reservation-list"]}>
                                <div className={Styles['reservation-bx']}>
                                    <div className={Styles['reservation-bx1']}>
                                        <img src={profileIcon} alt="error" />
                                        <span> Shreyash bansode</span>
                                    </div>
                                    <div className={Styles['res-middle-section']}>
                                        <span>17:40</span>
                                        <span>K-1</span>
                                        <span>4 People</span>
                                    </div>
                                    <div className={Styles["delete-reservation"]}>
                                        <span>confirmed</span>
                                        <button>
                                            <CiEdit />
                                            Edit
                                        </button>
                                    </div>
                                </div>
                                <div className={Styles['reservation-bx']}>
                                    <div className={Styles['reservation-bx1']}>
                                        <img src={profileIcon} alt="error" />
                                        <span> Shreyash bansode</span>
                                    </div>
                                    <div className={Styles['res-middle-section']}>
                                        <span>17:40</span>
                                        <span>K-1</span>
                                        <span>4 People</span>
                                    </div>
                                    <div className={Styles["delete-reservation"]}>
                                        <span>confirmed</span>
                                        <button>
                                            <CiEdit />
                                            Edit
                                        </button>
                                    </div>
                                </div>
                                <div className={Styles['reservation-bx']}>
                                    <div className={Styles['reservation-bx1']}>
                                        <img src={profileIcon} alt="error" />
                                        <span> Shreyash bansode</span>
                                    </div>
                                    <div className={Styles['res-middle-section']}>
                                        <span>17:40</span>
                                        <span>K-1</span>
                                        <span>4 People</span>
                                    </div>
                                    <div className={Styles["delete-reservation"]}>
                                        <span>confirmed</span>
                                        <button>
                                            <CiEdit />
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles["reservation-graph-container"]}>
                            <Chart options={reservationGraphstate.options} series={reservationGraphstate.series} type="bar" height={230} />
                        </div>
                    </div>
                    <div className={Styles["sectionDiv"]}>
                        <div className={Styles['Average-graph-container']}>
                            <Chart options={state.options} series={state.series} type="area" height={240} />
                        </div>
                        <div className={Styles["menu-container"]}>
                            <div className={Styles["reservation-label"]}>
                                <h4>Most Popular Menu Items</h4>
                                <button style={{
                                    cursor: 'pointer'
                                }}>View All</button>
                            </div>
                            <div className={Styles['menu']}>

                                <ul>
                                    <li >
                                        <div className={Styles["left-label"]}>
                                            <span>Menu Item Name</span>
                                        </div>
                                        <div className={Styles['right-label']}>
                                            <span>Item Price</span>
                                            <span>Total Revenue</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className={Styles["items-container"]}>
                                            <div className={Styles['item-label']}>
                                                <img src={profileIcon} alt="err" />
                                                <span>Grilled Salmon With Lemon</span>
                                            </div>
                                            <div className={Styles["right-side-price-container"]}>
                                                <span>400 RS</span>
                                                <span>5000 Rs</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles["items-container"]}>
                                            <div className={Styles['item-label']}>
                                                <img src={profileIcon} alt="err" />
                                                <span>Grilled Salmon With Lemon</span>
                                            </div>
                                            <div className={Styles["right-side-price-container"]}>
                                                <span>400 RS</span>
                                                <span>5000 Rs</span>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard