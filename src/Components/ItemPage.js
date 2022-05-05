import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './ItemPage.css';

const getDataFromLS = () => {
    const getData = localStorage.getItem('data');
    if(getData){
        return JSON.parse(getData);
    }
    else{
        return []
    }
}




function ItemPage(){

    //main array of objects
    const[data,setData] = useState(getDataFromLS());
    
    const number = JSON.stringify(localStorage.getItem('number'));
    //input field state
    const[itemName, setItemName] = useState('');
    const[itemCode, setItemCode] = useState('');
    const[sellingPrice, setSellingPrice] = useState('');
    const[purchasePrice, setPurchasePrice] = useState('');
    const[unit, setUnit] = useState('PCS');
    const[date, setDate] = useState('');

    const[toggleSubmit, setToggleSubmit] = useState(true);

    const[isEditItem, setIsEditItem] = useState(null);

    //form submit event
    const handleAddDataSubmit = (e) =>{
        e.preventDefault();
        //creating an object
        let addData = {
            itemName,
            itemCode,
            sellingPrice,
            purchasePrice,
            unit,
            date,
        }
        if(!itemName || !itemCode){
            alert("Enter Item Name and Item Code");
        }
        else if(itemName && itemCode && !toggleSubmit){
            setData(
                data.map((elem)=> {
                    if(elem.itemCode === isEditItem){
                        return{...elem, itemName:itemName, 
                            itemCode:itemCode,
                            sellingPrice:sellingPrice,
                            purchasePrice:purchasePrice,
                            unit:unit,
                            date:date,
                        
                        }
                    }
                    return elem;
                })
            )

            setItemName('');
            setItemCode('');
            setSellingPrice('');
            setPurchasePrice('');
            setUnit('');
            setDate('');

            setToggleSubmit(true);

            setIsEditItem(null);
        }
        else{
            setData([...data,addData]);
            setItemName('');
            setItemCode('');
            setSellingPrice('');
            setPurchasePrice('');
            setUnit('');
            setDate('');
        }
    }
 
    //saving data to local storage
    useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(data));
    },[data]);

    const editItem = (id) =>{
        let newEditItem = data.find((elem)=>{
            return elem.itemCode == id;
        });
        setItemName(newEditItem.itemName);
        setItemCode(newEditItem.itemCode);
        setSellingPrice(newEditItem.sellingPrice);
        setPurchasePrice(newEditItem.purchasePrice);
        setUnit(newEditItem.unit);
        setDate(newEditItem.date);

        setToggleSubmit(false);

        setIsEditItem(id);
    }

    const displayData = data.map(addData => {
        return(
            <>
            <tr key={addData.itemCode}>
                <td><input className="radio" type="radio" name="radio" onClick={ () => {editItem (addData.itemCode)}}/></td>
                <td>{addData.itemName}</td>
                <td>{addData.itemCode}</td>
                <td>{addData.sellingPrice}</td>
                <td>{addData.purchasePrice}</td>
                <td>{addData.unit}</td>
                <td>{addData.date}</td>
            </tr>
            </>
        );
        
    })

    return(
        <>
            <div className="body">
                <div className="navbar">
                    <h3>{number.replace(/"/g,'')}</h3>
                    <Link to="/" style={{textDecoration:"none", color:"#787A91"}}><h3 className="logout">Logout</h3></Link>
                </div>
                <div className="head">
                    <div className="items">
                        <p style={{fontSize:"105%", textAlign:"left"}}>Items</p>
                    </div>
                    <div className="create-edit">
                        <p style={{fontSize:"105%"}}>Creat / Edit items</p>
                    </div>
                </div>
                <div className="align">
                    <div className="search" style={{borderRight:"1px solid black", paddingRight:"2.1%", height:"84vh"}}>
                        <form>
                            <p className="icon"><input type="text" placeholder="Search Item" className="search-bar" style={{width:"200px", border: "none", padding:"0"}}/><i class="fa fa-search"></i></p>
                        </form>
                                <div>
                                    {data.length>0 && 
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <th className="th">ITEM NAME</th>
                                                    <th className="th">ITEM CODE</th>
                                                    <th className="th">SELLING PRICE</th>
                                                    <th className="th">PURCHASE PRICE</th>
                                                    <th className="th">UNIT</th>
                                                    <th className="th">DATE</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{textAlign:"center"}}>
                                                {displayData}
                                            </tbody>
                                        </table>
                                    }
                                    {data.length < 1 && 
                                    <>
                                    <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <th className="th">ITEM NAME</th>
                                                    <th className="th">ITEM CODE</th>
                                                    <th className="th">SELLING PRICE</th>
                                                    <th className="th">PURCHASE PRICE</th>
                                                    <th className="th">UNIT</th>
                                                    <th className="th">DATE</th>
                                                </tr>
                                            </thead>
                                                                                        
                                        </table>
                                        <img src={require("../images/Screenshot 2022-05-03 041829.png")} alt="imgs-logo" style={{width:"50%", marginTop:"10%"}} />

                                        </>
                                        }
                                </div>
                        
                    </div>
                    <div className="create-form" style={{marginTop:"1%"}}>
                        <form onSubmit={handleAddDataSubmit}>
                            <table>
                                <thead>
                                <tr>
                                    <th>Item Name *</th>
                                    <th>Item Code *</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <input type="text" name="name" placeholder="Enter Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" name="code" placeholder="Enter Item Code" value={itemCode} onChange={(e) => setItemCode(e.target.value)}/>
                                    </td>
                                </tr>
                                </tbody>
                                <p>Stock &amp; Pricing details (Optional)</p>
                                <thead>
                                <tr>
                                    <th>Sales Price</th>
                                    <th>Purchase Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <input type="text" name="selling_price" placeholder="&#8377; 0" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" name="purchase_price" placeholder="&#8377; 0" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)}/>
                                    </td>
                                </tr>
                                </tbody>
                                <thead>
                                <tr>
                                    <th>Measuring UNIT</th>
                                    <th>Opening Stock Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <select name="units" value={unit} onChange={(e) => setUnit(e.target.value)}>
                                            <option name="pcs">PCS</option>
                                            <option name="boxes">BOXES</option>
                                            <option name="gms">GMS</option>
                                            <option name="kgs">KGS</option>
                                            <option name="ltr">LTR</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="date" name="date" placeholder="Select date" value={date} onChange={(e) => setDate(e.target.value)}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            {
                                toggleSubmit ? <input type="submit"className="submit-form" value="Save" name="submit" style={{padding:"2%", width:"106%", marginTop:"4%", fontWeight:"bold", border:"2px solid #4c3ccc" }}/> : 
                                <input type="submit"className="submit-form" value="Edit" name="submit" style={{padding:"2%", width:"106%", marginTop:"4%", fontWeight:"bold", border:"2px solid #4c3ccc" }}/>
                            }
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ItemPage;