import React from "react";
import { Link } from "react-router-dom";

const Book = (book) => {

  return (
    <div className="container container-book-item">
      <div className="row row-book-item">
        <div className="book-item-card">
          <div className="book-item-img">
            <img src={book.cover_img} alt="" />
          </div>
          <div className="book-item-info">
            <Link to={`/book/${book.id}`}>
              <div className="book-item-title">
                <p>{book.title}</p>
              </div>
            </Link>
            <div className="book-item-author">
                <span className="author">Author:</span>
                <p className="author-name">{book.author}</p>
            </div>
            <div className="book-item-edition-info">
                <span className="total-edition">Total Edition:</span>
                <p className="edition">{book.edition_count}</p>
            </div>
            <div className="book-item-publish-year">
                <span className="publish-year">First Publish Year:</span>
                <p className="publish">{book.first_publish_year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
