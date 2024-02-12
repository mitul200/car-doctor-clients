import { Link } from 'react-router-dom';
import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={image1}
          className="w-full h-[600px] rounded-2xl "
        />
        <div className="absolute flex  gap-x-6 transform -translate-y-1/2 left-24 right-5 bottom-0">
          <div className=' text-slate-100'>
            <h2 className=' text-6xl font-semibold'>Affordable <br /> Price For <br /> Car Servicing</h2>
            <p className=' mt-5 mb-5'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
            <div>
            <Link className="btn bg-orange-600">Discover More</Link>
            <Link className="btn ms-5">Latest Project</Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-x-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={image2}
          className="w-full h-[600px] rounded-2xl "
        />
        <div className="absolute flex  gap-x-6 transform -translate-y-1/2 left-24 right-5 bottom-0">
          <div className=' text-slate-100'>
            <h2 className=' text-6xl font-semibold'>Affordable <br /> Price For <br /> Car Servicing</h2>
            <p className=' mt-5 mb-5'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
            <div>
            <Link className="btn bg-orange-600">Discover More</Link>
            <Link className="btn ms-5">Latest Project</Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-x-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={image3}
          className="w-full h-[600px] rounded-2xl "
        />
        <div className="absolute flex  gap-x-6 transform -translate-y-1/2 left-24 right-5 bottom-0">
          <div className=' text-slate-100'>
            <h2 className=' text-6xl font-semibold'>Affordable <br /> Price For <br /> Car Servicing</h2>
            <p className=' mt-5 mb-5'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
            <div>
            <Link className="btn bg-orange-600">Discover More</Link>
            <Link className="btn ms-5">Latest Project</Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-x-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={image4}
          className="w-full h-[600px] rounded-2xl "
        />
        <div className="absolute flex  gap-x-6 transform -translate-y-1/2 left-24 right-5 bottom-0">
          <div className=' text-slate-100'>
            <h2 className=' text-6xl font-semibold'>Affordable <br /> Price For <br /> Car Servicing</h2>
            <p className=' mt-5 mb-5'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
            <div>
            <Link className="btn bg-orange-600">Discover More</Link>
            <Link className="btn ms-5">Latest Project</Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-x-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
