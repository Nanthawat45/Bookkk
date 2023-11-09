import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookList = () => {
  const [stdData, setStdData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/Book")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setStdData(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const loadEdit = (id) => {
    navigate("/book/edit/" + (id));
  };
  const loadDetail = (id) => {
    navigate("/book/detail/" + (id));
  };
  const removebook = (id) => {
    if(window.confirm("Do you want to remove ?")){
      fetch("http://localhost:8000/book/"+id,{
        method:"DELETE",
      })
      .then((res) => {
        alert("remove successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h2>Book List</h2>
          </div>
          <div className="card-body">
            <div className="divbtn">
              <Link to="/book/create" className="btn btn-success">
                Add New (+)
              </Link>
            </div>
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Major</td>
                  <td>Admission Year</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {stdData &&
                  stdData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.major}</td>
                      <td>{item.admissionYear}</td>
                      <td>
                        <a
                          className="btn btn-success"
                          onClick={() => {
                            loadEdit(item.id);
                          }}
                        >
                          Edit
                        </a>
                        <a
                          className="btn btn-danger"
                          onClick={() => {
                            removeBook(item.id);
                          }}
                        >
                          Remove
                        </a>
                        <a
                          className="btn btn-primary"
                          onClick={() => {
                            loadDetail(item.id);
                          }}
                        >
                          Detail
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookList;