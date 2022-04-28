import React, { useEffect } from 'react'
import {useState} from 'react'
import './Footer.css'
import { IoLocationSharp,IoCall,IoMail } from "react-icons/io5";
import db from '../FirebaseCoonect'
// console.log("db is",db)
// Add a second document with a generated ID.
import { addDoc, collection,setDoc,doc, getDocs } from "firebase/firestore"; 
// import { collection, getDocs } from "firebase/firestore";

async function Add(name,email,password){
  try {
    const docRef = await setDoc(doc(db, "users",name), {
      name: name,
      email: email,
      password: password,
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}




const Footer = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  var  [ data1, setData1] = useState([]);
  // function DisplaingData(data1){
  //   console.log(data1)
  //    console.log("name = ",data1.name);
  //    console.log("email = ",data1.email);
  //    console.log("name = ",data1.password);
  // }

  // async function Get(){
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   console.log("data",querySnapshot);
  //   await querySnapshot.forEach((doc) => {
  //     // console.log(doc.id, '=>',doc.data());
  //    data1= data1.concat(doc.data());
  //     setData1(data1)
  //     console.log("data1",data1);  
  //   });
  //   }

  return (
    <div className="container">
    {/* {data1.length}{data1} */}
    {
      data1.map((l)=>{
        console.log("hiiiiiii")
        return (
          <div>
            {l.name}
          </div>
        )
      })
    }
        <div className="main-section">
            <div className="header-part">
                 <h1>Contact</h1>
                 <em className="paragraph">Fan ? drop a note</em>
            </div>
            <div className="middle-part">
                 <div className="left-side">
                     <p><IoLocationSharp/>Chicago,us</p>
                     <p> <IoCall/>Phone: +5674567574</p>
                     <p><IoMail/>Email:mail@email.com</p>
                 </div>
                 <div className="right-side">
                      <div className="form-container">
                          <div>
                              <input type="text" placeholder="Name" className="form-control" onChange={(e)=>setName(e.target.value)}></input>
                              </div>
                              <div>
                              <input type="text" placeholder="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}></input>
                            </div>
                         
                     </div>
                     <div className="down-form">
                         <input type="text" placeholder="Password" className="form-control3" onChange={(e)=>setPassword(e.target.value)}></input>
                     </div>
                  
           <div className="button-container"><button type="submit"  className="Button" onClick={()=>{Add(name,email,password)}} >SEND</button>
           {/* <button type="submit"  className="Button" onClick={()=>{Get()}} >Post</button> */}
      </div>


                        
                 </div>
            </div>
        </div>
        {/* <div style={{width:300,height:300,backgroundColor:'green'}}>
           <div style={{float:'right'}}>Hello</div>
        </div> */}


    </div>
  )
}

export default Footer