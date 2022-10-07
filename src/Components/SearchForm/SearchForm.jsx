import React, {useContext, useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../Assets/Icons/SearchIcon/bx-search.svg";
import { Context } from "../Context/Context";
import "./SearchFrom.scss";
const SearchForm = () => {
const {searchItem,setSearchItem,setResult} = useContext(Context);



const handleSubmit = (e) =>{
    e.preventDefault();
    if(searchItem.length === 0){
        alert("Please Write a Book Name")
    } else{
        setSearchItem()
    }

}
useEffect(()=>{
    setSearchItem()
},[])
  return (
    <div className="container container-searchform">
        <div className="row row-searchform">
            <div className="search-form"  >
                <div className="search-form-items">
                    <input type="text" placeholder="Find Your Soul..." className="form-control" onChange={(e)=>setSearchItem(e.target.value)}/>
                    <button className="submit-btn" type="submit" onClick={handleSubmit}>
                   
                        <Link to="/book">
                        <img src={SearchIcon} alt=""/>
                        </Link>
                        
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
};

export default SearchForm;
