import { useEffect, useState } from "react";
import { Button } from "./components/button";
import Navbar from "./components/navbar";

/*const App = () => {
  // Usestate -  state management
  const [name, FuntionToChangeVariableName] = useState('Okikiola')
  const [age, FunctionToChangeAge] = useState(20)
  
  const inTouchName = {
    color: "white",
    backgroundColor: "darkblue",
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    transition: "0.3s, ease-in-out",
  };
  // let userAvailable = false;
  const users = [
    {id: 1, name: 'John Doe', age: 24},
    {id: 2, name: 'Eliza Doe', age: 24},
    {id: 3, name: 'Carmal Doe', age: 24},
    {id: 4, name: 'John Doe', age: 24}
  ]
  const [userAvailable, setuserAvailable] = useState(false)
  // const [first, setfirst] = useState(second)
  // const [allUser, setallUser] = useState([])
  // setallUser(['goat', 'meat'])
  // console.log("These are all Users: ", allUser);
  
  // let userAvailable;
  useEffect(() => {
    
    setTimeout(() => {
      setuserAvailable(true);
      console.log(userAvailable);
      
    }, 2000);
  }, [])
  
  
  // REACT HOOKS
  const nameToShow = "Ghost";
  return (
    <div>
      <Navbar />
      <Button customBorder={inTouchName.borderRadius} text={nameToShow} />
      <h1 className={`text-2xl bg-[${inTouchName.backgroundColor}]`}>
        {nameToShow}
      </h1>
      <div>
      {userAvailable ? 
        users.map((user, index) => {
          console.log(index)
          return (
          <div className="bg-red-500 mb-4" key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
          </div>
          )
        })
       : <p>Loading...</p>}


      </div>
    </div>
  );
};
export default App;*/

// import React from "react";
// import StudentsPage from "./components/StudentsPage";

// const App = () => {
//   const users= [{
//     id:1,
//     avatar:"https://images.pexels.com/photos/27523299/pexels-photo-27523299.jpeg",
//     name:"kira joseph",
//     age:28,
//     gender:"female",
//     email:"kirajoseph@gmail.com"
//   }, {
//     id:2,
//     name:"john Doe",
//     age:22,
//     gender:"male",
//     email:"johndoe3@gmail.com"
//   },{
//     id:3,
//     name:"john Doe",
//     age:21,
//     gender:"female",
//     email:"johndoe3@gmail.com"
//   },{
//     id:4,
//     name:"sarah Doe",
//     age:28,
//     gender:"female",
//     email:"sarahoe3@gmail.com"
//   },{
//     id:5,
//     name:"peter Doe",
//     age:28,
//     gender:"female",
//     email:"peterdoe3@gmail.com"
//   },]

//   return (
//     <div><StudentsPage data={users}/></div>
//   )
// }

// export default App

import React from "react";
import Landing from "./components/Landing";
import { Route } from "react-router";
import { Routes } from "react-router";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import ProductsPage from "./components/ProductsPage";
import Products from "./components/Productsdetail";
import Productdetails from "./components/Productsdetail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/product/:id" element={<Productdetails />} />

          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              {" "}
              <h1>Error 404! </h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
