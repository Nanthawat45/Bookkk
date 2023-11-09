import './App.css'
//import { AddStudent, EditStudent, StudentDetails, StudentList } from "./pages";
import { AddBook, BookDetails, BookList, EditBook} from "./pages"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <div className="container">
        <h1>React.js CRUD Operation</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />}></Route>
          <Route path="/book/create" element={<AddBook />}> </Route>
          <Route path="/book/edit/:id" element={<EditBook />}> </Route>
          <Route path="/book/detail/:id" element={<BookDetails />}> </Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
