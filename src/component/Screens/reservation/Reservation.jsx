import React from 'react'
import Styles from './Reservation.module.css'
import BreadCrumb from './../../../component/common/BreadCrumb'
import createReservation from './../../../assets/create-reservation.svg'
import profileImg from './../../../assets/profile-icon.jpg'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import TableImg from './../../../assets/table-img.png'
const Reservation = () => {
    return (
        <div className={Styles['Reservation']}>
            <div className={Styles["inner-reservation"]}>
                <div className={Styles["breadcrumb"]}>
                    <BreadCrumb />
                </div>
                <div className={Styles["Reservation-Container"]}>
                    <div className={Styles["leftSide-Reserve-container"]}>

                        <div className={Styles["create-reservation"]}>
                            <img src={createReservation} alt="error" />
                            <div className={Styles["create-btn"]}>
                                <button>Create Reservation +</button>
                            </div>
                        </div>
                        <div className={Styles['mainReserveContainer']}>
                            <div className={Styles['reserveContainer']}>
                                <div className={Styles['statusLabel']}>
                                    <span>Incomming</span>
                                    <div className={Styles["btnsContainer"]}>
                                        <div>
                                            <button>Cancel</button>
                                        </div>
                                        <div>
                                            <button>Accept</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["reserveInfo-div"]}>
                                    <div className={Styles["infoLeft"]}>
                                        <div className={Styles["label"]}>
                                            <span>Customer Information</span>

                                        </div>
                                        <div className={Styles["profile-info"]}>
                                            <img src={profileImg} alt="error" />
                                            <div className={Styles['Reserve-Email']}>
                                                <span>shreyashbansode1@gmail.com</span>
                                            </div>
                                        </div>
                                        <p>+ 91 9730971045</p>
                                        <div className={Styles["btnsContainer"]}>
                                            <div>
                                                <IoCall size={10} />
                                                <button>Call</button>
                                            </div>
                                            <div>
                                                <MdEmail size={10} />
                                                <button>Email</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["infoRight"]}>
                                        <div className={Styles["label"]}>
                                            <span>Reservation Information</span>
                                        </div>
                                        <div className={Styles["table-info"]}>
                                            <div className={Styles["table-img"]}>
                                                <img src={TableImg} alt="errror" />
                                            </div>
                                            <div className={Styles["infomation-container"]}>
                                                <span>SB-10 <span className={Styles['InfoSpan']}> 1 Floor</span> </span>
                                                <p>Guest <span className={Styles['InfoSpan']}>2 Persons</span></p>
                                                <p>Time <span className={Styles['InfoSpan']}>17:30</span></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles['reserveContainer']}>
                                <div className={Styles['statusLabel']}>
                                    <span>Incomming</span>
                                    <div className={Styles["btnsContainer"]}>
                                        <div>
                                            <button>Cancel</button>
                                        </div>
                                        <div>
                                            <button>Accept</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["reserveInfo-div"]}>
                                    <div className={Styles["infoLeft"]}>
                                        <div className={Styles["label"]}>
                                            <span>Customer Information</span>

                                        </div>
                                        <div className={Styles["profile-info"]}>
                                            <img src={profileImg} alt="error" />
                                            <div className={Styles['Reserve-Email']}>
                                                <span>shreyashbansode1@gmail.com</span>
                                            </div>
                                        </div>
                                        <p>+ 91 9730971045</p>
                                        <div className={Styles["btnsContainer"]}>
                                            <div>
                                                <IoCall size={10} />
                                                <button>Call</button>
                                            </div>
                                            <div>
                                                <MdEmail size={10} />
                                                <button>Email</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["infoRight"]}>
                                        <div className={Styles["label"]}>
                                            <span>Reservation Information</span>
                                        </div>
                                        <div className={Styles["table-info"]}>
                                            <div className={Styles["table-img"]}>
                                                <img src={TableImg} alt="errror" />
                                            </div>
                                            <div className={Styles["infomation-container"]}>
                                                <span>SB-10 <span className={Styles['InfoSpan']}> 1 Floor</span> </span>
                                                <p>Guest <span className={Styles['InfoSpan']}>2 Persons</span></p>
                                                <p>Time <span className={Styles['InfoSpan']}>17:30</span></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles['reserveContainer']}>
                                <div className={Styles['statusLabel']}>
                                    <span>Incomming</span>
                                    <div className={Styles["btnsContainer"]}>
                                        <div>
                                            <button>Cancel</button>
                                        </div>
                                        <div>
                                            <button>Accept</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["reserveInfo-div"]}>
                                    <div className={Styles["infoLeft"]}>
                                        <div className={Styles["label"]}>
                                            <span>Customer Information</span>

                                        </div>
                                        <div className={Styles["profile-info"]}>
                                            <img src={profileImg} alt="error" />
                                            <div className={Styles['Reserve-Email']}>
                                                <span>shreyashbansode1@gmail.com</span>
                                            </div>
                                        </div>
                                        <p>+ 91 9730971045</p>
                                        <div className={Styles["btnsContainer"]}>
                                            <div>
                                                <IoCall size={10} />
                                                <button>Call</button>
                                            </div>
                                            <div>
                                                <MdEmail size={10} />
                                                <button>Email</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["infoRight"]}>
                                        <div className={Styles["label"]}>
                                            <span>Reservation Information</span>
                                        </div>
                                        <div className={Styles["table-info"]}>
                                            <div className={Styles["table-img"]}>
                                                <img src={TableImg} alt="errror" />
                                            </div>
                                            <div className={Styles["infomation-container"]}>
                                                <span>SB-10 <span className={Styles['InfoSpan']}> 1 Floor</span> </span>
                                                <p>Guest <span className={Styles['InfoSpan']}>2 Persons</span></p>
                                                <p>Time <span className={Styles['InfoSpan']}>17:30</span></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles['reserveContainer']}>
                                <div className={Styles['statusLabel']}>
                                    <span>Incomming</span>
                                    <div className={Styles["btnsContainer"]}>
                                        <div>
                                            <button>Cancel</button>
                                        </div>
                                        <div>
                                            <button>Accept</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["reserveInfo-div"]}>
                                    <div className={Styles["infoLeft"]}>
                                        <div className={Styles["label"]}>
                                            <span>Customer Information</span>

                                        </div>
                                        <div className={Styles["profile-info"]}>
                                            <img src={profileImg} alt="error" />
                                            <div className={Styles['Reserve-Email']}>
                                                <span>shreyashbansode1@gmail.com</span>
                                            </div>
                                        </div>
                                        <p>+ 91 9730971045</p>
                                        <div className={Styles["btnsContainer"]}>
                                            <div>
                                                <IoCall size={10} />
                                                <button>Call</button>
                                            </div>
                                            <div>
                                                <MdEmail size={10} />
                                                <button>Email</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["infoRight"]}>
                                        <div className={Styles["label"]}>
                                            <span>Reservation Information</span>
                                        </div>
                                        <div className={Styles["table-info"]}>
                                            <div className={Styles["table-img"]}>
                                                <img src={TableImg} alt="errror" />
                                            </div>
                                            <div className={Styles["infomation-container"]}>
                                                <span>SB-10 <span className={Styles['InfoSpan']}> 1 Floor</span> </span>
                                                <p>Guest <span className={Styles['InfoSpan']}>2 Persons</span></p>
                                                <p>Time <span className={Styles['InfoSpan']}>17:30</span></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles['reserveContainer']}>
                                <div className={Styles['statusLabel']}>
                                    <span>Incomming</span>
                                    <div className={Styles["btnsContainer"]}>
                                        <div>
                                            <button>Cancel</button>
                                        </div>
                                        <div>
                                            <button>Accept</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["reserveInfo-div"]}>
                                    <div className={Styles["infoLeft"]}>
                                        <div className={Styles["label"]}>
                                            <span>Customer Information</span>

                                        </div>
                                        <div className={Styles["profile-info"]}>
                                            <img src={profileImg} alt="error" />
                                            <div className={Styles['Reserve-Email']}>
                                                <span>shreyashbansode1@gmail.com</span>
                                            </div>
                                        </div>
                                        <p>+ 91 9730971045</p>
                                        <div className={Styles["btnsContainer"]}>
                                            <div>
                                                <IoCall size={10} />
                                                <button>Call</button>
                                            </div>
                                            <div>
                                                <MdEmail size={10} />
                                                <button>Email</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles["infoRight"]}>
                                        <div className={Styles["label"]}>
                                            <span>Reservation Information</span>
                                        </div>
                                        <div className={Styles["table-info"]}>
                                            <div className={Styles["table-img"]}>
                                                <img src={TableImg} alt="errror" />
                                            </div>
                                            <div className={Styles["infomation-container"]}>
                                                <span>SB-10 <span className={Styles['InfoSpan']}> 1 Floor</span> </span>
                                                <p>Guest <span className={Styles['InfoSpan']}>2 Persons</span></p>
                                                <p>Time <span className={Styles['InfoSpan']}>17:30</span></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={Styles["rightSide-Reserve-container"]}>
                        <div className={Styles['reserveContainer']}>
                            <div className={Styles['statusLabel']}>
                                <p>Accepted</p>
                            </div>
                            <div className={Styles["reserveInfo-div"]}>
                                <div className={Styles["infoLeft"]}>
                                    <div className={Styles["label"]}>
                                        <span>Customer Information</span>
                                    </div>
                                    <div className={Styles["profile-info"]}>
                                        <img src={profileImg} alt="error" />
                                        <div className={Styles['Reserve-Email']}>
                                            <span>shreyashbansode1@gmail.com</span>
                                        </div>
                                    </div>
                                    <p>+ 91 9730971045</p>
                                    <div className={Styles["btnsContainer"]}>
                                        <div>
                                            <IoCall size={10} />
                                            <button>Call</button>
                                        </div>
                                        <div>
                                            <MdEmail size={10} />
                                            <button>Email</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["infoRight"]}>
                                    <div className={Styles["label"]}>
                                        <span>Reservation Information</span>
                                    </div>
                                    <div className={Styles["table-info"]}>
                                        <div className={Styles["table-img"]}>
                                            <img src={TableImg} alt="errror" />
                                        </div>
                                        <div className={Styles["infomation-container"]}>
                                            <span>SB-10 <span className={Styles['InfoSpan']}> 1 Floor</span> </span>
                                            <p>Guest <span className={Styles['InfoSpan']}>2 Persons</span></p>
                                            <p>Time <span className={Styles['InfoSpan']}>17:30</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles['reserveContainer']}>
                            <div className={Styles['statusLabel']}>
                                <p>Accepted</p>
                            </div>
                            <div className={Styles["reserveInfo-div"]}>
                                <div className={Styles["infoLeft"]}>
                                    <div className={Styles["label"]}>
                                        <span>Customer Information</span>
                                    </div>
                                    <div className={Styles["profile-info"]}>
                                        <img src={profileImg} alt="error" />
                                        <div className={Styles['Reserve-Email']}>
                                            <span>shreyashbansode1@gmail.com</span>
                                        </div>
                                    </div>
                                    <p>+ 91 9730971045</p>
                                    <div className={Styles["btnsContainer"]}>
                                        <div>
                                            <IoCall size={10} />
                                            <button>Call</button>
                                        </div>
                                        <div>
                                            <MdEmail size={10} />
                                            <button>Email</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["infoRight"]}>
                                    <div className={Styles["label"]}>
                                        <span>Reservation Information</span>
                                    </div>
                                    <div className={Styles["table-info"]}>
                                        <div className={Styles["table-img"]}>
                                            <img src={TableImg} alt="errror" />
                                        </div>
                                        <div className={Styles["infomation-container"]}>
                                            <span>SB-10 <span className={Styles['InfoSpan']}> 1 Floor</span> </span>
                                            <p>Guest <span className={Styles['InfoSpan']}>2 Persons</span></p>
                                            <p>Time <span className={Styles['InfoSpan']}>17:30</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles['reserveContainer']}>
                            <div className={Styles['statusLabel']}>
                                <p>Accepted</p>
                            </div>
                            <div className={Styles["reserveInfo-div"]}>
                                <div className={Styles["infoLeft"]}>
                                    <div className={Styles["label"]}>
                                        <span>Customer Information</span>
                                    </div>
                                    <div className={Styles["profile-info"]}>
                                        <img src={profileImg} alt="error" />
                                        <div className={Styles['Reserve-Email']}>
                                            <span>shreyashbansode1@gmail.com</span>
                                        </div>
                                    </div>
                                    <p>+ 91 9730971045</p>
                                    <div className={Styles["btnsContainer"]}>
                                        <div>
                                            <IoCall size={10} />
                                            <button>Call</button>
                                        </div>
                                        <div>
                                            <MdEmail size={10} />
                                            <button>Email</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["infoRight"]}>
                                    <div className={Styles["label"]}>
                                        <span>Reservation Information</span>
                                    </div>
                                    <div className={Styles["table-info"]}>
                                        <div className={Styles["table-img"]}>
                                            <img src={TableImg} alt="errror" />
                                        </div>
                                        <div className={Styles["infomation-container"]}>
                                            <span>SB-10 <span className={Styles['InfoSpan']}> 1 Floor</span> </span>
                                            <p>Guest <span className={Styles['InfoSpan']}>2 Persons</span></p>
                                            <p>Time <span className={Styles['InfoSpan']}>17:30</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles['reserveContainer']}>
                            <div className={Styles['statusLabel']}>
                                <p>Accepted</p>
                            </div>
                            <div className={Styles["reserveInfo-div"]}>
                                <div className={Styles["infoLeft"]}>
                                    <div className={Styles["label"]}>
                                        <span>Customer Information</span>
                                    </div>
                                    <div className={Styles["profile-info"]}>
                                        <img src={profileImg} alt="error" />
                                        <div className={Styles['Reserve-Email']}>
                                            <span>shreyashbansode1@gmail.com</span>
                                        </div>
                                    </div>
                                    <p>+ 91 9730971045</p>
                                    <div className={Styles["btnsContainer"]}>
                                        <div>
                                            <IoCall size={10} />
                                            <button>Call</button>
                                        </div>
                                        <div>
                                            <MdEmail size={10} />
                                            <button>Email</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["infoRight"]}>
                                    <div className={Styles["label"]}>
                                        <span>Reservation Information</span>
                                    </div>
                                    <div className={Styles["table-info"]}>
                                        <div className={Styles["table-img"]}>
                                            <img src={TableImg} alt="errror" />
                                        </div>
                                        <div className={Styles["infomation-container"]}>
                                            <span>SB-10 <span className={Styles['InfoSpan']}> 1 Floor</span> </span>
                                            <p>Guest <span className={Styles['InfoSpan']}>2 Persons</span></p>
                                            <p>Time <span className={Styles['InfoSpan']}>17:30</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles['reserveContainer']}>
                            <div className={Styles['statusLabel']}>
                                <p>Accepted</p>
                            </div>
                            <div className={Styles["reserveInfo-div"]}>
                                <div className={Styles["infoLeft"]}>
                                    <div className={Styles["label"]}>
                                        <span>Customer Information</span>
                                    </div>
                                    <div className={Styles["profile-info"]}>
                                        <img src={profileImg} alt="error" />
                                        <div className={Styles['Reserve-Email']}>
                                            <span>shreyashbansode1@gmail.com</span>
                                        </div>
                                    </div>
                                    <p>+ 91 9730971045</p>
                                    <div className={Styles["btnsContainer"]}>
                                        <div>
                                            <IoCall size={10} />
                                            <button>Call</button>
                                        </div>
                                        <div>
                                            <MdEmail size={10} />
                                            <button>Email</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["infoRight"]}>
                                    <div className={Styles["label"]}>
                                        <span>Reservation Information</span>
                                    </div>
                                    <div className={Styles["table-info"]}>
                                        <div className={Styles["table-img"]}>
                                            <img src={TableImg} alt="errror" />
                                        </div>
                                        <div className={Styles["infomation-container"]}>
                                            <span>SB-10 <span className={Styles['InfoSpan']}> 1 Floor</span> </span>
                                            <p>Guest <span className={Styles['InfoSpan']}>2 Persons</span></p>
                                            <p>Time <span className={Styles['InfoSpan']}>17:30</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles['reserveContainer']}>
                            <div className={Styles['statusLabel']}>
                                <p>Accepted</p>
                            </div>
                            <div className={Styles["reserveInfo-div"]}>
                                <div className={Styles["infoLeft"]}>
                                    <div className={Styles["label"]}>
                                        <span>Customer Information</span>
                                    </div>
                                    <div className={Styles["profile-info"]}>
                                        <img src={profileImg} alt="error" />
                                        <div className={Styles['Reserve-Email']}>
                                            <span>shreyashbansode1@gmail.com</span>
                                        </div>
                                    </div>
                                    <p>+ 91 9730971045</p>
                                    <div className={Styles["btnsContainer"]}>
                                        <div>
                                            <IoCall size={10} />
                                            <button>Call</button>
                                        </div>
                                        <div>
                                            <MdEmail size={10} />
                                            <button>Email</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles["infoRight"]}>
                                    <div className={Styles["label"]}>
                                        <span>Reservation Information</span>
                                    </div>
                                    <div className={Styles["table-info"]}>
                                        <div className={Styles["table-img"]}>
                                            <img src={TableImg} alt="errror" />
                                        </div>
                                        <div className={Styles["infomation-container"]}>
                                            <span>SB-10 <span className={Styles['InfoSpan']}> 1 Floor</span> </span>
                                            <p>Guest <span className={Styles['InfoSpan']}>2 Persons</span></p>
                                            <p>Time <span className={Styles['InfoSpan']}>17:30</span></p>
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

export default Reservation