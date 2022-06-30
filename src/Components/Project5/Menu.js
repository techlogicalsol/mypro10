import React, { useState } from "react";
import Categories from "./Categories";
import items from './Data';
import MenuItems from "./MenuItems";

const allCategories = ['all', ...new Set(items.map((item)=> item.category))]
//console.log(allCategories)

function Menu(){

    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'all') {
          setMenuItems(items);
          return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
      };
    

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title_section">
                            <h3 className="main_menu">Menu</h3>
                            <div className="underline"></div>
                        </div>
                        <Categories 
                            categories={categories}
                            filterItems={filterItems} 
                        />

                        <MenuItems items={menuItems}/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu