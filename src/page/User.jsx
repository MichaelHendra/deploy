import { useEffect, useState } from "react"
import cssModule from "./User.module.css"
import { Link } from "react-router-dom";
import Profile from '../assets/account.png'

function User () {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const [users,setUser] = useState([]);
    useEffect(() => {
        const fetchUser = async () => {
            try{
                const response = await fetch(`http://localhost:8000/api/user/${userId}`,{
                    method: 'GET',
                    headers:{
                            'Authorization': `Bearer ${token}`
                    },
                });
                const data = await response.json();
                console.log(data);
                if(Array.isArray(data)){
                    setUser(data);
                }else{
                    console.error("Expected an array but got:", data);
                }
            }catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchUser();
    },[]);
return(
    <div className={cssModule.bGUser}>
        <div className={cssModule.h1User}>
            <h1>User Info</h1>
        </div>
        <div  className={cssModule.ContainerUser}>
            {users.map((user, index) => (
            <div key={index} className={cssModule.UserContent}>
            <div className={cssModule.CarduserKiri}>
                <div className={cssModule.FormGrup}>
                    <img src={Profile} alt="Profile" width="48px" height="48px" />
                </div>
                <div className={cssModule.FormGrup}>
                    <label htmlFor="nama">Nama</label>
                    <p>{user.name}</p>
                </div>
                <div className={cssModule.FormGrup}>
                    <label htmlFor="nama">Email</label>
                    <p>{user.email}</p>
                </div>
                <div className={cssModule.FormGrup}>
                    <label htmlFor="nama">No Telp</label>
                    <p>{user.telp}</p>
                </div>
                <div className={cssModule.FormGrup}>
                    <Link className={cssModule.linkUser} to='/user/update/'>Ubah Data</Link>
                </div>
            </div>

            <div className={cssModule.CarduserKanan}>
                <div className={cssModule.FormGrup}>
                    <h1>Langganan Saat Ini</h1>
                </div>
                <div className={cssModule.LineUser}>
                    <div className={cssModule.FormGrup1}>
                        <label htmlFor="nama">Nama</label>
                        <p>{user.plan_id}</p>
                    </div>
                    <div className={cssModule.FormGrup1}>
                        <label htmlFor="nama">Email</label>
                        <p>{user.nama_sub}</p>
                    </div>
                </div>
                <div className={cssModule.LineUser}>
                    <div className={cssModule.FormGrup1}>
                        <label htmlFor="nama">No Telp</label>
                        <p>{user.date_sub}</p>
                    </div>
                    <div className={cssModule.FormGrup1}>
                        <label htmlFor="nama">No Telp</label>
                        <p>{user.valid_date}</p>
                    </div>
                </div>
                <div className={cssModule.FormGrup1}>
                    <Link className={cssModule.linkUser} to='/subcribe'>Ubah Langganan </Link>
                </div>
            </div>
            </div>
            ))}
        </div>
    </div>
)
}

export default User