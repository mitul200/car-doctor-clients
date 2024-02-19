import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className=" text-center">
        <div className="">
          <p className=" font-bold text-orange-500"> Services </p>
        </div>
        <h2 className="text-3xl font-semibold">Our Services Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which
          <br /> dont look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map(service => <ServiceCard 
        key={service._id}
        service={service}
        ></ServiceCard>)}
      </div>
    </div>
  );
};

export default Services;
