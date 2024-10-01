import React, { useState } from 'react'
import Styles from './Tables.module.css'
import BreadCrumb from '../../common/BreadCrumb'
import AllTable from './AllTable'
import ReservedTable from './ReservedTable'
import OccupiedTable from './OccupiedTable'
import FreeTables from './FreeTables'

const Tables = () => {

    const [activeTab, setActiveTab] = useState('free');

    const tabHandler = (value) => {
        setActiveTab(value)
    }
    return (
        <div className={Styles['table']}>
            <div className={Styles["inner-table"]}>
                <div className={Styles["breadcrumb"]}>
                    <BreadCrumb />
                </div>
                <div className={Styles["table-container"]}>
                    <div className={Styles["tab-container"]}>
                        <div className={Styles["left-side-tab"]}>
                            <button >All</button>
                            <button onClick={() => tabHandler('free')} style={{
                                background: activeTab == 'free' && '#000000b8',
                                color: activeTab == 'free' && 'white'
                            }}>Free</button>
                            <button onClick={() => tabHandler('Reserved')}
                                style={{
                                    background: activeTab == 'Reserved' && '#000000b8',
                                    color: activeTab == 'Reserved' && 'white'
                                }}
                            >Reserved</button>
                            <button onClick={() => tabHandler('Occupied')}
                                style={{
                                    background: activeTab == 'Occupied' && '#000000b8',
                                    color: activeTab == 'Occupied' && 'white'
                                }}
                            >Occupied</button>
                        </div>
                        <div className={Styles["right-side-tab"]}>
                            <button>Add Table + </button>
                        </div>
                    </div>
                    <div className={Styles['tables']}>
                        <div className={Styles["tablesBoxContainer"]}>
                            {
                                activeTab == 'free' ? <FreeTables /> : activeTab == 'Reserved' ? <ReservedTable /> : activeTab == 'Occupied' ? <OccupiedTable /> : <AllTable />
                            }
                            {/* <ReservedTable /> */}
                            {/* <OccupiedTable /> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Tables