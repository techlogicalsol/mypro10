import React, { useState } from "react";
import Alert from "./Alert";
import List from "./List";

function GroceryBud(){

    const [name, setName] = useState('');
    const [list, setList] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [editID, setEditID] = useState(null)
    const [alert, setAlert] = useState({
        show: false, msg: "", type: ""
    })


    const handleSubmit = (e)=>{
        e.preventDefault()
        //console.log("click")

        if(!name){
            // setAlert({show: true, msg: "please enter value", type: "danger"})
            showAlert(true, 'danger', 'Please enter value')
        }
        else if(name && isEdit){
            setList(list.map((item)=>{
                if(item.id === editID){
                    return{...item, title: name}
                }
                return item
            }))
            setName('')
            setEditID(null)
            setIsEdit(false)
            showAlert(true, 'success', 'value changed')
        }
        else{
            showAlert(true, 'success', 'item added to the list')

            const newItem = {id: new Date().getTime().toString(), title:name};
            setList([...list, newItem])
            setName('')
        }
    }


    const showAlert = (show=false, type="", msg="")=>{
        setAlert({show, type, msg})
    }


    const clearList = ()=>{
        showAlert(true, 'danger', 'empty list')
        setList([])
    }

    const removeItem = (id)=>{
        showAlert(true, 'danger', 'item removed')
        setList(list.filter((item)=> item.id !== id))
    }


    const editItem = (id)=>{
        const specificItem = list.find((item)=> item.id === id);
        setIsEdit(true)
        setEditID(id)
        setName(specificItem.title)
    }

    return(
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8 mx-auto bg-light p-4">

                    <form onSubmit={handleSubmit}>
                        {alert.show && <Alert {...alert} showAlert={showAlert} list={list}/>}
                        <h3 className="text-center">Grocery Basket</h3>

                        <div className="form_control">
                            <input 
                                type="text" 
                                className="grocery" 
                                placeholder="e.g. bread, milk etc."
                                value={name}
                                onChange={(e)=> setName(e.target.value)} 
                            />
                            <button type="submit" className="list_btn">
                                {isEdit ? 'edit' : 'submit'}
                            </button>
                        </div>
                    </form>

                        {list.length > 0 &&
                        <div>
                        <List 
                            list={list}
                            removeItem={removeItem}
                            editItem={editItem}
                            />
                            <div className="clearbtn">
                            <button className="btn btn-outline-danger" onClick={clearList}>Clear Items</button>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroceryBud