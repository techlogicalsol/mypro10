import React from "react";

function MenuItems({items}){
    return(
        <>
            {/* <div className="row">
                {data.map((item)=>{
                    const {id, title, img, desc, price} = item;
                    return<div className="col-md-6" key={id}>
                    
            <div className="row">
                <div className="col-md-4 mb-5" style={{padding: "0"}}>
                    <img src={img} className="menuImg" alt={title} />
                </div>
            <div className="col-md-8 mb-5">
                <div className="card-block">
                <h4 className="menu_title">{title}</h4>
                <h4 className="menu_price">{price}</h4>
                <p>{desc}</p>
                </div>
            </div>

        </div>
                    
        </div>
        })}
    </div> */}


    <div className="row">
    {items.map((item)=>(
        <div className="col-md-4 mb-4">
           <img src={item.img} alt={item.title} className="menuImg" />  
           <div className="menu_title">   
                {item.category}
           </div>
           <div className="menu_subtitle">
                <p>{item.title}</p>   
               <p>${item.price}.00</p> 
            </div>
           <span className="description">{item.desc}</span>      
        </div>
        ))}
    </div>
        
    

        </>
    )
}

export default MenuItems

