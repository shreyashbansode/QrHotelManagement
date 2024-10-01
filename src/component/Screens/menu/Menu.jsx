import React from 'react'
import Styles from './Menu.module.css'
import BreadCrumb from '../../common/BreadCrumb'
import menuIcon from './../../../assets/menuIcon.png'
import foodImg from './../../../assets/foodImg.jpg'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Menu = () => {


    const foodData = [
        {
            id: 1,
            name: "Margherita Pizza",
            category: "Pizza",
            price: 8.99,
            ingredients: ["Tomato Sauce", "Mozzarella", "Basil"],
            vegetarian: true,
        },
        {
            id: 2,
            name: "Cheeseburger",
            category: "Burger",
            price: 10.99,
            ingredients: ["Beef Patty", "Cheddar Cheese", "Lettuce", "Tomato", "Pickles"],
            vegetarian: false,
        },
        {
            id: 3,
            name: "Caesar Salad",
            category: "Salad",
            price: 7.99,
            ingredients: ["Romaine Lettuce", "Croutons", "Caesar Dressing", "Parmesan Cheese"],
            vegetarian: true,
        },
        {
            id: 4,
            name: "Chicken Tikka Masala",
            category: "Indian",
            price: 12.99,
            ingredients: ["Chicken", "Tomato Sauce", "Spices", "Cream"],
            vegetarian: false,
        },
        {
            id: 5,
            name: "Spaghetti Aglio e Olio",
            category: "Pasta",
            price: 9.49,
            ingredients: ["Spaghetti", "Garlic", "Olive Oil", "Parsley"],
            vegetarian: true,
        },
        {
            id: 6,
            name: "Sushi Roll",
            category: "Japanese",
            price: 11.99,
            ingredients: ["Rice", "Nori", "Fish", "Avocado"],
            vegetarian: false,
        },
        {
            id: 7,
            name: "Veggie Burger",
            category: "Burger",
            price: 9.49,
            ingredients: ["Vegetable Patty", "Lettuce", "Tomato", "Onion"],
            vegetarian: true,
        },
        {
            id: 8,
            name: "Chocolate Cake",
            category: "Dessert",
            price: 5.99,
            ingredients: ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Butter"],
            vegetarian: true,
        },
    ];

    return (
        <div className={Styles['Menu']}>
            <div className={Styles["inner-menu"]}>
                <div className={Styles["breadcrumb"]}>
                    <BreadCrumb />
                </div>
                <div className={Styles["menu-container"]}>
                    <div className={Styles["leftsideMenu"]}>
                        <div className={Styles["addMenu-container"]}>
                            <img src={menuIcon} alt="errr" />
                            <button>Add Menu +</button>
                        </div>
                        <div className={Styles["outStock-container"]}>
                            <div className={Styles["outmenu-container"]}>
                                <div className={Styles["menuDiv1"]}>
                                    <div className={Styles["menu-img"]}>
                                        <Skeleton count={3} width={50} />
                                    </div>
                                    <div className={Styles["menu-info"]}>
                                        <h4>Chocolate Cake</h4>
                                        <span>Category:<span style={{
                                            color: 'red'
                                        }}>Desert</span></span>
                                        <p>80.66 Rs</p>
                                    </div>

                                </div>
                                <div className={Styles["menuDiv1"]}>
                                    <div className={Styles["menu-img"]}>
                                        <Skeleton count={3} width={50} />
                                    </div>
                                    <div className={Styles["menu-info"]}>
                                        <h4>Chocolate Cake</h4>
                                        <span>Category:<span style={{
                                            color: 'red'
                                        }}>Desert</span></span>
                                        <p>80.66 Rs</p>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles["outmenu-container"]}>
                                <div className={Styles["menuDiv1"]}>
                                    <div className={Styles["menu-img"]}>
                                        <Skeleton count={3} width={50} />
                                    </div>
                                    <div className={Styles["menu-info"]}>
                                        <h4>Chocolate Cake</h4>
                                        <span>Category:<span style={{
                                            color: 'red'
                                        }}>Desert</span></span>
                                        <p>80.66 Rs</p>
                                    </div>

                                </div>
                                <div className={Styles["menuDiv1"]}>
                                    <div className={Styles["menu-img"]}>
                                        <Skeleton count={3} width={50} />
                                    </div>
                                    <div className={Styles["menu-info"]}>
                                        <h4>Chocolate Cake</h4>
                                        <span>Category:<span style={{
                                            color: 'red'
                                        }}>Desert</span></span>
                                        <p>80.66 Rs</p>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles["outmenu-container"]}>
                                <div className={Styles["menuDiv1"]}>
                                    <div className={Styles["menu-img"]}>
                                        <Skeleton count={3} width={50} />
                                    </div>
                                    <div className={Styles["menu-info"]}>
                                        <h4>Chocolate Cake</h4>
                                        <span>Category:<span style={{
                                            color: 'red'
                                        }}>Desert</span></span>
                                        <p>80.66 Rs</p>
                                    </div>

                                </div>
                                <div className={Styles["menuDiv1"]}>
                                    <div className={Styles["menu-img"]}>
                                        <Skeleton count={3} width={50} />
                                    </div>
                                    <div className={Styles["menu-info"]}>
                                        <h4>Chocolate Cake</h4>
                                        <span>Category:<span style={{
                                            color: 'red'
                                        }}>Desert</span></span>
                                        <p>80.66 Rs</p>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles["outmenu-container"]}>
                                <div className={Styles["menuDiv1"]}>
                                    <div className={Styles["menu-img"]}>
                                        <Skeleton count={3} width={50} />
                                    </div>
                                    <div className={Styles["menu-info"]}>
                                        <h4>Chocolate Cake</h4>
                                        <span>Category:<span style={{
                                            color: 'red'
                                        }}>Desert</span></span>
                                        <p>80.66 Rs</p>
                                    </div>

                                </div>
                                <div className={Styles["menuDiv1"]}>
                                    <div className={Styles["menu-img"]}>
                                        <Skeleton count={3} width={50} />
                                    </div>
                                    <div className={Styles["menu-info"]}>
                                        <h4>Chocolate Cake</h4>
                                        <span>Category:<span style={{
                                            color: 'red'
                                        }}>Desert</span></span>
                                        <p>80.66 Rs</p>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles["outmenu-container"]}>
                                <div className={Styles["menuDiv1"]}>
                                    <div className={Styles["menu-img"]}>
                                        <Skeleton count={3} width={50} />
                                    </div>
                                    <div className={Styles["menu-info"]}>
                                        <h4>Chocolate Cake</h4>
                                        <span>Category:<span style={{
                                            color: 'red'
                                        }}>Desert</span></span>
                                        <p>80.66 Rs</p>
                                    </div>

                                </div>
                                <div className={Styles["menuDiv1"]}>
                                    <div className={Styles["menu-img"]}>
                                        <Skeleton count={3} width={50} />
                                    </div>
                                    <div className={Styles["menu-info"]}>
                                        <h4>Chocolate Cake</h4>
                                        <span>Category:<span style={{
                                            color: 'red'
                                        }}>Desert</span></span>
                                        <p>80.66 Rs</p>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles["outmenu-container"]}>
                                <div className={Styles["menuDiv1"]}>
                                    <div className={Styles["menu-img"]}>
                                        <Skeleton count={3} width={50} />
                                    </div>
                                    <div className={Styles["menu-info"]}>
                                        <h4>Chocolate Cake</h4>
                                        <span>Category:<span style={{
                                            color: 'red'
                                        }}>Desert</span></span>
                                        <p>80.66 Rs</p>
                                    </div>

                                </div>
                                <div className={Styles["menuDiv1"]}>
                                    <div className={Styles["menu-img"]}>
                                        <Skeleton count={3} width={50} />
                                    </div>
                                    <div className={Styles["menu-info"]}>
                                        <h4>Chocolate Cake</h4>
                                        <span>Category:<span style={{
                                            color: 'red'
                                        }}>Desert</span></span>
                                        <p>80.66 Rs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["rightsideMenu"]}>
                        <div className={Styles["outmenu-container"]}>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={Styles["outmenu-container"]}>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={Styles["outmenu-container"]}>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={Styles["outmenu-container"]}>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={Styles["outmenu-container"]}>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={Styles["outmenu-container"]}>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div className={Styles["outmenu-container"]}>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                            <div className={Styles["menuDiv1"]}>
                                <div className={Styles["menu-img"]}>
                                    <Skeleton count={3} width={50} />
                                </div>
                                <div className={Styles["menu-info"]}>
                                    <h4>Chocolate Cake</h4>
                                    <span>Category:<span style={{
                                        color: 'red'
                                    }}>Desert</span></span>
                                    <p>80.66 Rs</p>
                                </div>
                                <div className={Styles['menuRight-side']}>
                                    <span>24,Tuesday</span>
                                    <select name="" id="">
                                        <option value="">Instock</option>
                                        <option value="">OutStock</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu