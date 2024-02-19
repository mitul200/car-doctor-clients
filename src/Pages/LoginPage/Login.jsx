import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

  const {singIn} = useContext(AuthContext)
 


  const handelLogin =(event)=>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(name,email,password);
    singIn(email, password)
    .then(result =>{
      const user  = result.user
      console.log(user);
    })
    .catch(error=>console.log(error))

    
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-full p-10 mx-auto">
        <div className="text-center lg:text-left w-1/2">
          <img className='h-[450px]' src={loginImg} alt="" />
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
          <p className=' text-center font-semibold text-2xl text-purple-700'>Please Login</p>
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
                <span className="label-text">Password</span>
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
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* <button className="">Login</button> */}
               <input className='btn text-white font-bold btn-primary' type="submit" value="Login" />
            </div>
          </form>
          <p className=' mb-4 text-center font-semibold'>Are you new here <span className='text-blue-600'><Link to={'/singUp'}>Sing Up</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
