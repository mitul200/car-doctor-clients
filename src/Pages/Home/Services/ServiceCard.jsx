import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
  // console.log(service);
  // eslint-disable-next-line react/prop-types
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <p className=" text-xl font-semibold"> Name : {title}</p>
        <h2 className="card-title text-orange-500">Price : $ {price}</h2>
        <div className="card-actions">
          <Link to={`/cheackOut/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
