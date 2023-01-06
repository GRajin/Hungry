import './App.css'
import H1 from "./components/H1/H1"
import Image from "./components/Image/Image"
import Form from "./components/Form/Form"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Restaurant from './components/Restaurant/Restaurant'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        <Route path={"*"} element={
          <>
            <div className="login-form">
              <H1 className="head" value="Login Form" />
              <Image width="50%" heigth="20%" alt="Food Image" />
              <Form className="form-login" />
            </div>
          </>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
