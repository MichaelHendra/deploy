// src/component/Navbar.js
import { Link } from "react-router-dom";
import cssModule from "./Navbar.module.css";
//images
import Logo from "../assets/Logo.png";
import Cari from "../assets/search.png";
import Bell from "../assets/bell.png";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar({ openModal, openModalRegister }) {
  const [islogin, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      setLogin(true);
    }
  }, []);

  const handleLogout = async () => {
    try{
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await axios.post('http://localhost:8000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data){
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setLogin(false);
        window.location.reload();
        console.log("Berhasil Coy");
      }else{
        console.error("Logout failed:", response.data.message);
      }
    }catch(error){
      console.error("Logout failed:" ,error);
    }
  };
  return (
    <div className={cssModule.sNavbar}>
      <nav>
        <ul>
          <li><Link to="/"><img src={Logo} alt="Logo" className={`${cssModule.LinkNav} ${cssModule.logo}`} /></Link></li>
          <li><Link to="/" className={cssModule.LinkNav}>Home</Link></li>
          <li><Link to="/movie" className={cssModule.LinkNav}>Movies</Link></li>
          {islogin ? (
            <>
            <li><Link to='/mylist' className={cssModule.LinkNav}>My List</Link></li>
              <li className={cssModule.kanan}>
                <Link to="/user" className={cssModule.btn}>Account</Link>
              </li>
              <li className={cssModule.kanan}>
                <button className={cssModule.btn} onClick={handleLogout}>Logout</button>
              </li>
            </>
          ):(
            <>
              <li className={cssModule.kanan}>
                <button className={cssModule.btn} onClick={openModal}>Login</button>
              </li>
              <li className={cssModule.kanan}>
                <button className={cssModule.btn} onClick={openModalRegister}>Register</button>
              </li>
            </>
          )}
          <li className={`${cssModule.kanan} ${cssModule.LinkNav}`}>
            <Link to="/"><img src={Bell} alt="bell" className={cssModule.Sd} /></Link>
          </li>
          <li className={`${cssModule.kanan} ${cssModule.LinkNav}`}>
            <Link to="/"><img src={Cari} alt="cari" className={cssModule.Sd} /></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
