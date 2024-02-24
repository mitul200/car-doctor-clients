import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handelDelet =(id)=>{
    const proced =confirm('are you sure you want to delet')
    if(proced){
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                alert('Delet successfully')
                const remining = bookings.filter(booking => booking._id !== id)
                setBookings(remining)
            }
        })
    }

  }

  // console.log(bookings);
  return (
    <div>
      <h2>helllow :{bookings.length} </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            
            <tr>
            <th></th>
              <th>Name</th>
              <th>DATE</th>
              <th>PRICE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow key={booking._id}
              handelDelet={handelDelet}
               booking={booking}></BookingsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
