import {useState} from 'react'
import { useNavigate,Link} from 'react-router-dom';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    photo: "https://source.unsplash.com/random/200x200/?portrait",
    section:"",
    major:"",
    admissionYear:""
  });
  const navigate = useNavigate();
const handleChange = (e) => {
  setStudent({...student,[e.target.name]: e.target.value});
};
const handleSubmit = (e) => {
  e.preventDefault();
  const studentData = {
    name: student.name,
    email: student.email,
    phone: student.phone,
    birthday: student.birthday,
    photo: student.photo,
    section: student.section,
    major: student.major,
    admissionYear: student.admissionYear,
  };
  fetch("http://localhost:8000/student",{
    method:"POST",
    headers:{"content-type": "application/json"},
    body:JSON.stringify(studentData)
  }).then(
    (res) =>{
      alert("Save sucessfully")
      navigate("/")
    }
  ).catch((err)=>{
    console.log(err);
  });
}
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-title">
              <h2>Add new Student</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      required
                      name="name"
                      id="name"
                      value={student.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={student.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={student.phone}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="birthday">Birthday</label>
                    <input
                      type="date"
                      name="birthday"
                      id="birthday"
                      value={student.birthday}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="photo">Photo</label>
                    <input
                      type="text"
                      name="photo"
                      id="photo"
                      value={student.photo}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="section">Section</label>
                    <input
                      type="text"
                      name="section"
                      id="section"
                      value={student.section}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="major">Major</label>
                    <input
                      type="text"
                      name="major"
                      id="major"
                      value={student.major}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="admissionYear">Admission Year</label>
                    <input
                      type="number"
                      placeholder="YYYY"
                      min="2000"
                      max="2023"
                      name="admissionYear"
                      id="admissionYear"
                      value={student.admissionYear}
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
}

export default AddStudent
