import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheackOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  const {user} = useContext(AuthContext)
  console.log(user);


  const handelBookService =(event)=>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const date = form.date.value
    const price = form.price.value
    const email = user?.email

    const booking ={
        castomarName: name,
        email,
        date,
        service: _id,
        price: price,
    }

    console.log(booking);


    fetch('http://localhost:5000/bookings',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(booking)
    })
    .then(res =>res.json())
    .then(data => {
        console.log(data);
    })

  }


  return (
    <div>
      <h2 className="text-center">book services : {title}</h2>
      <form className="card-body" onSubmit={handelBookService}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="Name"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Time & Date</span>
            </label>
            <input
              type="Date"
              placeholder="Date"
              name="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
            //   placeholder="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="Price"
              defaultValue={`$`+3500}
              name="price"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CheackOut;
