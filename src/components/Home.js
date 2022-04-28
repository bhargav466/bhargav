import React from 'react'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import './Home.css'
import db from '../FirebaseCoonect'
import { addDoc, collection,setDoc,doc, getDocs } from "firebase/firestore"; 
// import { useHistory } from "react-router";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  var  [ data1, setData1] = useState([]);

  // const history = useHistory();
  const navigate = useNavigate();

  function ParticularCard(l) {

    //  console.log(l);
     navigate('/cardData',{state:l});
  }


  async function Get(){
    const querySnapshot = await getDocs(collection(db, "users"));
    console.log("data",querySnapshot);
    // setData1([]);
    // data1=[]
    if (data1.length===0){
      await querySnapshot.forEach((doc) => {
        // console.log(doc.id, '=>',doc.data());
        data1= data1.concat(doc.data());
        setData1(data1)
        // console.log("data1",data1);  
      });
    }
   
    
    }

    useEffect(() => {
         Get();
      },[]);
    
  return (
    <div>
       <Link to="/Footer" className="home-main">Contact</Link>
       <h1 className="home">home</h1>
    
       <div className="container">
       {
      data1.map((l)=>{
        return (
          <div className="card" onClick={()=>{ParticularCard(l)}}>
               <p>{l.name}</p>
                <p>{l.email}</p>
                <p>{l.password}</p>
          </div>
        )
      })
    }
    </div>
</div>
  )
}

export default Home