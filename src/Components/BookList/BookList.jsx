import React, { useContext } from "react";
import "./BookList.scss";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Book from "./Book";
import CoverImg from "../../Assets/Images/opps.jpg";
import Back from "../../Assets/Icons/BookListIcon/bx-arrow-back.svg";
//https://covers.openlibrary.org/b/id/240727-S.jpg;
const BookList = () => {
  const {books,loading,results} = useContext(Context);
 
  const booksWithCovers = books.map((singleBook)=>{
    return{
      ...singleBook,
      id:(singleBook.id).replace("/works/",""),
      cover_img:singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : CoverImg
    }
  });
 
 
  if(loading) return <Loader />;
 
  return(
    <div className="container booklist-container">
      <div className="row row-booklist">
        <div className="booklists">
          <Link to="/" >
          <img src={Back} alt=""/>
            <span> Back Home Page</span>
            
          </Link>
         <div className="booklists-title">
          <h2>{results}</h2>
         </div>
         <div className="booklists-content">
          {booksWithCovers.slice(0,30).map((item,index)=>{
            return(
             <Book key={index} {...item}/>
            )
          })}
         </div>
        </div>
      </div>
    </div>
  )
};

export default BookList;
