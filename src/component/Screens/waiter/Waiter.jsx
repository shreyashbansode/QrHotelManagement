import React from 'react'
import Styles from './Waiter.module.css'
import BreadCrumb from '../../common/BreadCrumb'
import waiter from './../../../assets/waiter.png'
import Skeleton from 'react-loading-skeleton'
import { IoCallOutline } from "react-icons/io5";
import { FaCity } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { PiAddressBookFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

const Waiter = () => {
    return (
        <div className={Styles['Waiter']}>
            <div className={Styles["inner-waiter"]}>
                <div className={Styles["breadcrumb"]}>
                    <BreadCrumb />
                </div>
                <div className={Styles["waiterMainContainer"]}>
                    <div className={Styles["waiterLeftSide"]}>
                        <div className={Styles["addWaiter"]}>
                            <img src={waiter} alt="error" />
                            <button>Add Waiter +</button>
                        </div>
                        <div className={Styles["WaiterAllocatedContainer"]}>
                            <div className={Styles["label"]}>
                                <span>Allocated</span>
                            </div>
                            <div className={Styles["waiterAllocationSection"]}>
                                <div className={Styles['WaiterAllocationList']}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles['WaiterAllocationList']}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles['WaiterAllocationList']}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles['WaiterAllocationList']}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles['WaiterAllocationList']}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles['WaiterAllocationList']}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles['WaiterAllocationList']}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles['WaiterAllocationList']}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["waiterRightSide"]}>
                        <div className={Styles['LeaveContainer']}>
                            <div className={Styles["WaiterLeaveSection"]}>
                                <div className={Styles["waiterList"]}>
                                    <div className={Styles["waiter-Img"]}>
                                        <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                    </div>
                                    <div className={Styles["waiter-info"]}>
                                        <h4>Shreyash Bansode</h4>
                                        <div className={Styles['waiter-contact']}>
                                            <div className={Styles['contactDiv']}>
                                                <label >contact</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <IoCall size={10} color='red' />
                                                    <span>+91 9730971045</span>
                                                </div>
                                            </div>
                                            <div className={Styles['contactDiv']}>
                                                <label >City</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <FaCity size={10} color='red' />
                                                    <span>Pune</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["waiterList"]}>
                                    <div className={Styles["waiter-Img"]}>
                                        <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                    </div>
                                    <div className={Styles["waiter-info"]}>
                                        <h4>Shreyash Bansode</h4>
                                        <div className={Styles['waiter-contact']}>
                                            <div className={Styles['contactDiv']}>
                                                <label >contact</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <IoCall size={10} color='red' />
                                                    <span>+91 9730971045</span>
                                                </div>
                                            </div>
                                            <div className={Styles['contactDiv']}>
                                                <label >City</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <FaCity size={10} color='red' />
                                                    <span>Pune</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles["WaiterLeaveSection"]}>
                                <div className={Styles["waiterList"]}>
                                    <div className={Styles["waiter-Img"]}>
                                        <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                    </div>
                                    <div className={Styles["waiter-info"]}>
                                        <h4>Shreyash Bansode</h4>
                                        <div className={Styles['waiter-contact']}>
                                            <div className={Styles['contactDiv']}>
                                                <label >contact</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <IoCall size={10} color='red' />
                                                    <span>+91 9730971045</span>
                                                </div>
                                            </div>
                                            <div className={Styles['contactDiv']}>
                                                <label >City</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <FaCity size={10} color='red' />
                                                    <span>Pune</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["waiterList"]}>
                                    <div className={Styles["waiter-Img"]}>
                                        <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                    </div>
                                    <div className={Styles["waiter-info"]}>
                                        <h4>Shreyash Bansode</h4>
                                        <div className={Styles['waiter-contact']}>
                                            <div className={Styles['contactDiv']}>
                                                <label >contact</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <IoCall size={10} color='red' />
                                                    <span>+91 9730971045</span>
                                                </div>
                                            </div>
                                            <div className={Styles['contactDiv']}>
                                                <label >City</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <FaCity size={10} color='red' />
                                                    <span>Pune</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles["WaiterLeaveSection"]}>
                                <div className={Styles["waiterList"]}>
                                    <div className={Styles["waiter-Img"]}>
                                        <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                    </div>
                                    <div className={Styles["waiter-info"]}>
                                        <h4>Shreyash Bansode</h4>
                                        <div className={Styles['waiter-contact']}>
                                            <div className={Styles['contactDiv']}>
                                                <label >contact</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <IoCall size={10} color='red' />
                                                    <span>+91 9730971045</span>
                                                </div>
                                            </div>
                                            <div className={Styles['contactDiv']}>
                                                <label >City</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <FaCity size={10} color='red' />
                                                    <span>Pune</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["waiterList"]}>
                                    <div className={Styles["waiter-Img"]}>
                                        <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                    </div>
                                    <div className={Styles["waiter-info"]}>
                                        <h4>Shreyash Bansode</h4>
                                        <div className={Styles['waiter-contact']}>
                                            <div className={Styles['contactDiv']}>
                                                <label >contact</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <IoCall size={10} color='red' />
                                                    <span>+91 9730971045</span>
                                                </div>
                                            </div>
                                            <div className={Styles['contactDiv']}>
                                                <label >City</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <FaCity size={10} color='red' />
                                                    <span>Pune</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles["WaiterLeaveSection"]}>
                                <div className={Styles["waiterList"]}>
                                    <div className={Styles["waiter-Img"]}>
                                        <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                    </div>
                                    <div className={Styles["waiter-info"]}>
                                        <h4>Shreyash Bansode</h4>
                                        <div className={Styles['waiter-contact']}>
                                            <div className={Styles['contactDiv']}>
                                                <label >contact</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <IoCall size={10} color='red' />
                                                    <span>+91 9730971045</span>
                                                </div>
                                            </div>
                                            <div className={Styles['contactDiv']}>
                                                <label >City</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <FaCity size={10} color='red' />
                                                    <span>Pune</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["waiterList"]}>
                                    <div className={Styles["waiter-Img"]}>
                                        <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                    </div>
                                    <div className={Styles["waiter-info"]}>
                                        <h4>Shreyash Bansode</h4>
                                        <div className={Styles['waiter-contact']}>
                                            <div className={Styles['contactDiv']}>
                                                <label >contact</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <IoCall size={10} color='red' />
                                                    <span>+91 9730971045</span>
                                                </div>
                                            </div>
                                            <div className={Styles['contactDiv']}>
                                                <label >City</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <FaCity size={10} color='red' />
                                                    <span>Pune</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles["WaiterLeaveSection"]}>
                                <div className={Styles["waiterList"]}>
                                    <div className={Styles["waiter-Img"]}>
                                        <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                    </div>
                                    <div className={Styles["waiter-info"]}>
                                        <h4>Shreyash Bansode</h4>
                                        <div className={Styles['waiter-contact']}>
                                            <div className={Styles['contactDiv']}>
                                                <label >contact</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <IoCall size={10} color='red' />
                                                    <span>+91 9730971045</span>
                                                </div>
                                            </div>
                                            <div className={Styles['contactDiv']}>
                                                <label >City</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <FaCity size={10} color='red' />
                                                    <span>Pune</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["waiterList"]}>
                                    <div className={Styles["waiter-Img"]}>
                                        <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                    </div>
                                    <div className={Styles["waiter-info"]}>
                                        <h4>Shreyash Bansode</h4>
                                        <div className={Styles['waiter-contact']}>
                                            <div className={Styles['contactDiv']}>
                                                <label >contact</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <IoCall size={10} color='red' />
                                                    <span>+91 9730971045</span>
                                                </div>
                                            </div>
                                            <div className={Styles['contactDiv']}>
                                                <label >City</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <FaCity size={10} color='red' />
                                                    <span>Pune</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles["WaiterLeaveSection"]}>
                                <div className={Styles["waiterList"]}>
                                    <div className={Styles["waiter-Img"]}>
                                        <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                    </div>
                                    <div className={Styles["waiter-info"]}>
                                        <h4>Shreyash Bansode</h4>
                                        <div className={Styles['waiter-contact']}>
                                            <div className={Styles['contactDiv']}>
                                                <label >contact</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <IoCall size={10} color='red' />
                                                    <span>+91 9730971045</span>
                                                </div>
                                            </div>
                                            <div className={Styles['contactDiv']}>
                                                <label >City</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <FaCity size={10} color='red' />
                                                    <span>Pune</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["waiterList"]}>
                                    <div className={Styles["waiter-Img"]}>
                                        <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                    </div>
                                    <div className={Styles["waiter-info"]}>
                                        <h4>Shreyash Bansode</h4>
                                        <div className={Styles['waiter-contact']}>
                                            <div className={Styles['contactDiv']}>
                                                <label >contact</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <IoCall size={10} color='red' />
                                                    <span>+91 9730971045</span>
                                                </div>
                                            </div>
                                            <div className={Styles['contactDiv']}>
                                                <label >City</label>
                                                <div className={Styles['icon_Number-container']}>
                                                    <FaCity size={10} color='red' />
                                                    <span>Pune</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={Styles["unAllocatedContainer"]}>
                            <div className={Styles["label"]}>
                                <span>UnAllocated</span>
                            </div>
                            <div className={Styles['unallocationSection']}>
                                <div className={Styles["WaiterLeaveSection"]}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>+91 9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>+91 9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["WaiterLeaveSection"]}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>+91 9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>+91 9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["WaiterLeaveSection"]}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>+91 9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>+91 9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["WaiterLeaveSection"]}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>+91 9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>+91 9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["WaiterLeaveSection"]}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>+91 9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>+91 9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["WaiterLeaveSection"]}>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>+91 9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["waiterList"]}>
                                        <div className={Styles["waiter-Img"]}>
                                            <Skeleton count={2} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                                        </div>
                                        <div className={Styles["waiter-info"]}>
                                            <h4>Shreyash Bansode</h4>
                                            <div className={Styles['waiter-contact']}>
                                                <div className={Styles['contactDiv']}>
                                                    <label >contact</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <IoCall size={10} color='red' />
                                                        <span>+91 9730971045</span>
                                                    </div>
                                                </div>
                                                <div className={Styles['contactDiv']}>
                                                    <label >City</label>
                                                    <div className={Styles['icon_Number-container']}>
                                                        <FaCity size={10} color='red' />
                                                        <span>Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Waiter