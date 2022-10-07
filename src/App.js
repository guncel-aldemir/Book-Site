import axios from "axios";
import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import BookList from "./Components/BookList/BookList";
import BookDetail from "./Components/BookDetail/BookDetail";
import { Context } from "./Components/Context/Context";
import Home from "./Pages/Home";


function App() {
  const [searchItem,setSearchItem]= useState("");
 
  const [books,setBooks]= useState([]);
  const [results,setResults]= useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [disabled,setDisabled] = useState(true)
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
  
    const fetchData = async ()=>{
      setLoading(true);
      try{
        const data = await axios(`http://openlibrary.org/search.json?title=${searchItem}`).then(response=>response.data.docs);
        console.log("data",data);
        if(data){
          const newBooks = data.slice(0,20).map((book)=>{
            const {key, author_name, cover_i, edition_count, first_publish_year, title,} = book;
            return{
              id: key,
              author: author_name,
              cover_id: cover_i,
              edition_count: edition_count,
              first_publish_year: first_publish_year,
              title: title,
              
            }
          });
          setBooks(newBooks);
          if(newBooks.length>1){
            setResults("Your Search Result")
          } else{
            setResults("No Search Result Found!")
          }
        } else{
          setBooks([]);
          setResults("No Search Result Found!")
        }
        setLoading(false)
      } catch(error){
        console.log(error);
            setLoading(false);
      }
    }
    fetchData();
  },[searchItem])

  const contextData = {
    searchItem,setSearchItem,books,setBooks,results,setResults,loading, setLoading,number, setNumber,name, setName,address, setAddress,disabled,setDisabled
  }
  
  return (
    <Context.Provider value={contextData}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/book" element={<BookList />} />
          <Route path = "/book/:id" element = {<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
