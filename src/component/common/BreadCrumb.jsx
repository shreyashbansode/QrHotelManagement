import React from 'react'
import Styles from './BreadCrumb.module.css'
const BreadCrumb = () => {
    return (
        <div className={Styles["breadcrumb-container"]}>
            <div className={Styles["label"]}>
                <h3>Dashboard</h3>
            </div>
            <div className={Styles["right-side-container"]}>
                <div className={Styles["search-container"]}>
                    <input type="text" placeholder='search' />
                </div>
                <span>Monday,july 2</span>
            </div>
        </div>
    )
}

export default BreadCrumb