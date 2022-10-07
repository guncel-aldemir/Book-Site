import React,{useEffect,useState} from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import "./BookDetail.scss";
import Back from "../../Assets/Icons/BookListIcon/bx-arrow-back.svg";
import Ops from "../../Assets/Images/opps.jpg"
import { Link,useLocation } from "react-router-dom";
import Purchase from "../../Pages/Purchase/Purchase";

const BookDetail = () => {
   const location = useLocation(); 
   
     const id = location.pathname.slice(6);
    const [loading, setLoading] = useState(false);
    const [open,setOpen] = useState(false);
    const [bookDetail, setBookDetail] = useState(null);
    useEffect(()=>{
        setLoading(true);
        const getBookDetails = async ()=>{
        
            try{
                
                const data = await axios(`https://openlibrary.org/works/${id}.json`).then(response=>response.data);
                
                if(data){
                    const {description, title, covers, subject_places, subject_times, subjects} = data;
                    const newBook = {
                        description: description ? description : "No description found",
                        title: title,
                        cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : Ops,
                        subject_places: subject_places ? subject_places : "No subject places found",
                        subject_times : subject_times ? subject_times : "No subject times found",
                        subjects: subjects ? subjects : "No subjects found"
                      };
                      setBookDetail(newBook);
                }else{
                    setBookDetail(null);
                }
                setLoading(false);
            }catch(error){
                console.log(error);
                setLoading(false);
            }
        }
        getBookDetails();
    },[id]);
    
    if(loading) return <Loader/>;

    const handleBuy = () =>{
      setOpen(true)
    }
  return (
    <div className="container container-book-details">
      <div className="row row-book-details">
        <div className="back">
          <Link to="/book">
            <img src={Back} alt=""/>
            <span>Turn Back the Books</span>
          </Link>
        </div>
        <div className="book-details-content">
          <div className="book-details-img">
            <img src={bookDetail?.cover_img} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-info title">
              <h4>{bookDetail?.title}</h4>
            </div>  
            <div className="book-details-info desc">
              <p>{bookDetail?.description}</p>
            </div>
            <div className="book-details-item">
              <span>Subject Places:</span>
              <p>{bookDetail?.subject_places}</p>
            </div>
            <div className="book-details-item2">
              <span>Subject Times:</span>
              <p>{bookDetail?.subject_times}</p>
            </div>
            <div className="Buy">
              
              <button className="btn-buy" onClick={handleBuy}>Buy Now!</button>
            </div>
          </div>
        </div>
        {open && <Purchase setOpen={setOpen}/>}
      </div>
    </div>
  );
  }
export default BookDetail;
