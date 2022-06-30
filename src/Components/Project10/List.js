import React from "react";

function List({list, removeItem, editItem}){
    return(
        <>
            <div className="row">
                {list.map((item)=>{
                    const {id, title} = item;
                    return<div className="col-md-8 mx-auto list-item" key={id}>
                            <div className="grocery_items">{title}</div>

                            <div className="btn_grocery">
                                <button type="button" className="edit_btn" onClick={()=> editItem(id)}>
                                <i class="far fa-edit"></i>
                                </button>

                                <button type="button" className="del_btn" onClick={()=> removeItem(id)}>
                                <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                          </div> 
                })}
            </div>
        </>
    )
}

export default List