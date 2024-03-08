import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import moneyIcn from "../assets/images/moneyIcn.png";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/userApiSlice";
import { useEffect } from "react";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import Message from "../components/Message";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading, error }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({
          name,
          password,
          email,
          gender,
          phone,
        }).unwrap();
        navigate("/home");
        dispatch(setCredentials({ ...res }));
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-lg">
        <div className="p-4 py-6 text-white bg-green-600 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">
              <img
                src={moneyIcn}
                className="rounded-lg h-8 mr-3 inline mb-2 "
                alt="Flowbite Logo"
              />
              E-Tracker
            </a>
          </div>

          <p className="mt-6 font-normal text-center  md:mt-0">
            Track your expenses easily with our Expense Tracker. Stay on top of
            your finances, monitor your spending, and make informed financial
            decisions.
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Have an account?</span>
            <NavLink to="/" className="underline">
              Login
            </NavLink>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            <NavLink to={"/signup"} className="underline">
              Read our terms and conditions
            </NavLink>

            <a href="#" className="underline"></a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Create An Account
          </h3>
          {error && <Message message={error?.data?.message || error.error} />}

          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <select
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="text-sm font-semibold  text-gray-500 w-full px- py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  <option hidden>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone_number"
                id="p_no"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
              </div>
              <input
                type="text"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Confirm Password
                </label>
              </div>
              <input
                type="text"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2"></div>
            <div>
              <button
                type="submit"
                onClick={submitHandler}
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-green-600 rounded-md shadow hover:bg-green-500 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                {isLoading ? <Loader /> : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
