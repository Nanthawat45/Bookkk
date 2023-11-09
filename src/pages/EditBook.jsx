import { useState, useEffect } from "react";
import { useNavigate, Link, useParams} from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    name : "",
    author : "",
    price : "",
    genre : "",
    image : "https://source.unsplash.com/random/200x200/?book",
  });
const navigate = useNavigate();
const handleChange = (e) => {
  setBook({...book,[e.target.name]: e.target.value});
};

   useEffect(() => {
     fetch("http://localhost:8000/book/" + id)
       .then((res) => res.json())
       .then((data) => {
         setBook(data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, [id]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      name : book.name,
      author : book.author,
      price : book.price,
      enre : book.genre,
      image : book.image,
    };
    fetch("http://localhost:8000/book/"+ id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookData),
    })
      .then((res) => {
        alert("Save sucessfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
return (
  <div className="row">
    <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-title">
            <h2>Edit Book</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="id">ID</label>
                  <input
                    type="text"
                    disabled
                    name="id"
                    id="id"
                    value={id}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    required
                    name="name"
                    id="name"
                    value={book.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <input
                    type="text"
                    name="author"
                    id="author"
                    value={book.author}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={book.price}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="enre">Enre</label>
                  <input
                    type="date"
                    name="enre"
                    id="enre"
                    value={book.enre}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="image">image</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    value={book.image}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <button className="btn btn-success" type="submit">
                    Save
                  </button>
                  <Link to="/" className="btn btn-danger">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
);
};
export default EditBook;