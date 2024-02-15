// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
const SingUp = () => {

   const  handelSingUp =()=>{

    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row w-full p-10 mx-auto">
          <div className="text-center lg:text-left w-1/2">
            <img className='h-[450px]' src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelSingUp} className="card-body">
              <p className=' text-center font-semibold text-2xl text-purple-700'>Please Sing Up</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name='name'
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Confirm password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* <button className="">Login</button> */}
                 <input className='btn text-white font-bold btn-primary' type="submit" value="Sing Up" />
              </div>
            </form>
            <p className=' mb-4 text-center font-semibold'>Already Have an account? <span className='text-blue-600'><Link to={'/login'}>Login</Link></span></p>
          </div>
        </div>
      </div>
    );
};

export default SingUp;