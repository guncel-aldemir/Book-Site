import React, {useContext,useEffect} from "react";
import Exit from "../../Assets/Icons/ExitIcon/xmark-solid.svg";
import { Context } from "../../Components/Context/Context";
import "./Purchase.scss";

const Purchase = ({setOpen}) => {
  const {number,setNumber,name,setName,address, setAddress,disabled,setDisabled}=useContext(Context);



  const handleErrorMessageNumber = (value) =>{
    if(value <= 0 && value !== "" )
    return(
      <p style={{ color: "red" }}>please enter book number which is upper than 0..</p>
    )
  }
  const handleErrorMessageName = (value) =>{
    if(value.length < 3 && value !== "" )
    return(
      <p style={{ color: "red" }}>your name must have at least 3 letters.</p>
    )
  }
  const handleErrorMessageAddress = (value) =>{
    if(value.length < 16 && value !== "" )
    return(
      <p style={{ color: "red" }}>your address must have at least 16 letters.</p>
    )
  } 
  const handleBuy = ()=>{
    setOpen(false);
    alert("Congratulations, you find your soul. Your book will send your address. ")
    
  }
  const handleDisabled = () => {
    if (
      name.length > 2 &&
      number > 0 &&
      address.toString().length === 16
    ) {
      setDisabled(false);
    }
  };
  useEffect(() => {
    handleDisabled();
  }, [name, number, address]);
  return (
    <div className="container container-purchase">
      <div className="row row-purchase">
        <div className="purchase">
          <div className="purchase-exit">
            <img src={Exit} alt="" onClick={()=> setOpen(false)}/>
          </div>
          <form className="purchase-form">
            <label>Number of Book:</label>
            <input type="number" placeholder="Number of Soul... " className="number"onChange={(e)=>setNumber(e.target.value)}/>
            {handleErrorMessageNumber(number)}
            <label>FullName:</label>
            <input type="text" placeholder="Please Write Your FullName" value={name}  onChange={(e)=>setName(e.target.value.replace(/[^a-z]/gi, ''))}/>
            {handleErrorMessageName(name)}
            <label>Address:</label>
            <input type="text" className="address" placeholder="Enter Your Correct Address" maxLength={16} onChange={(e)=>setAddress(e.target.value)}/>
            {handleErrorMessageAddress(address)}
          </form>
          <button disabled={disabled} className={disabled ? "btnDisabled btn":"btn rButton"} onClick={handleBuy}>Buy Your Soul</button>
        </div>
      </div>
    </div>
  );
 
};

export default Purchase;
