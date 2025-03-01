import React from "react";

import { useState , useRef , useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate , useLocation, Link} from "react-router-dom";




export default function SignUp(){

  const [ hide , setHide ] = useState(true)
  const hideButton = () => {
    setHide(!hide)
  }

  //for registration...
  const [register , setRegister] = useState({
    gender: '',
    firstName: '',
    lastName: '' ,
    email: '' ,
    password: '' , 
    countery: ''
  })
  
  const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@(gmail\.com|yahoo\.com|outlook\.com|email\.com)$/;
      return emailRegex.test(email);
    };

    const validateName = (name) => {
      const nameRegex = /^[A-Za-z\u0600-\u06FF]+$/; 
      return nameRegex.test(name);
    };

    const validatePassword = (password) => {
      let errors = [];
      if (password.length < 11) errors.push("11 characrer");
      if (!/\d/.test(password)) errors.push("1 number");
      if (!/[a-z]/.test(password)) errors.push("1 lowercase letter");
      if (!/[A-Z]/.test(password)) errors.push("1 uppercase letter");
      if (!/[!@#$%^&*\-_+?><]/.test(password)) errors.push("special characters");
      return errors;
    };
    const handleFormData = (e) => {
      const { name, value } = e.target;
      setRegister((prev) => ({ ...prev, [name]: value }));
      
      let newErrors = { ...errors };
  
      if (name === "email") {
        newErrors.email = validateEmail(value) ? "" : "Invalid email";
      }
      if (name === "firstName" || name === "lastName") {
        newErrors[name] = validateName(value) ? "" : "Only letters are allowed";
      }
      if (name === "password") {
        newErrors.password = validatePassword(value);
      }
      setErrors(newErrors);
    };

//for selectbox of gender
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const selectRef = useRef(null);
  const selectRef2 = useRef(null);
  const handleClickOutside = (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  const handleClickOutside2 = (e) => {
    if (selectRef2.current && !selectRef2.current.contains(e.target)) {
      setIsOpen2(false);
    }
  };

  // const navigate = useNavigate();
  // const location = useLocation();
  // const handleSubmit = (e) =>{
  //   e.preventDefalt()
  //   navigate('/login', { state: { from: location.state?.from }, replace: true });
  // }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside2);
    return () => document.removeEventListener("mousedown", handleClickOutside2);
  }, []);

  return(
      <form className="w-full flex flex-col items-stretch justify-start gap-y-6">
        <div ref={selectRef} className="w-full flex flex-col items-start justify-center gap-y-2 relative">
              <span className="text-nameSize text-textsColor-texts font-bold  select-none">Gender</span>
              
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full cursor-pointer hover:scale-x-[0.99] bg-componentBg-inputBg text-textsColor-texts text-nameSize font-bold px-4 py-3 rounded-[8px] outline-none border-none transition-all duration-300 ease-linear flex flex-row justify-between items-center"
              >
                <span>{register.gender ? register.gender : "Select item"}</span>
                <svg
                  className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-200 ease-linear`}
                  width="18"
                  height="9"
                  viewBox="0 0 18 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full bg-componentBg-inputBg text-textsColor-texts absolute top-[84px] flex flex-col justify-start items-stretch rounded-[8px]"
                  >
                    {["Mr.", "Mrs.", "Ms."].map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          setRegister((prev) => ({ ...prev, gender: e.target.textContent }));
                          setIsOpen(false);
                        }}
                        className="px-4 py-2 text-textsColor-texts text-nameSize font-light hover:bg-btnColors-Mailblue hover:text-white transition-all duration-200 ease-linear rounded-[8px] cursor-pointer"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
          </AnimatePresence>
        </div>

        <div className="w-full flex flex-col items-start justify-center gap-y-2 ">
          <label htmlFor='name' className="text-nameSize text-textsColor-texts font-bold  select-none">First Name</label>
          <input
          value={register.firstName}
          onChange={handleFormData}
          id='name'
          name="firstName"
          type="text"
          className={`w-full bg-componentBg-inputBg text-textsColor-texts text-nameSize font-light px-4 py-3 rounded-[8px] outline-none ${errors.firstName ? 'border-[1px] border-solid border-[#FC3548]' : 'border-none'} focus:scale-x-[0.99] transition-all duration-300 ease-linear`} placeholder="First Name" />
          {errors.firstName && <span className="p-2 bg-componentBg-inputBg mt-2 rounded-[8px] text-textsColor-texts text-[12px] font-medium border-[1px] border-solid border-[#FC3548]">{errors.firstName}</span>}
        </div>

        <div className="w-full flex flex-col items-start justify-center gap-y-2 ">
          <label htmlFor='lastname' className="text-nameSize text-textsColor-texts font-bold  select-none">Last Name</label>
          <input
          value={register.lastName}
          onChange={handleFormData}
          id='lastname'
          name="lastName"
          type="text"
          className={`w-full bg-componentBg-inputBg text-textsColor-texts text-nameSize font-light px-4 py-3 rounded-[8px] outline-none ${errors.lastName ? 'border-[1px] border-solid border-[#FC3548]' : 'border-none'} focus:scale-x-[0.99] transition-all duration-300 ease-linear`} placeholder="Last Name" />
          {errors.lastName && <span className="p-2 bg-componentBg-inputBg mt-2 rounded-[8px] text-textsColor-texts text-[12px] font-medium border-[1px] border-solid border-[#FC3548]">{errors.lastName}</span>}
        </div>

        <div className="w-full flex flex-col items-start justify-center gap-y-2 ">
          <label htmlFor='email' className="text-nameSize text-textsColor-texts font-bold  select-none">Email</label>
          <input
          value={register.email}
          onChange={handleFormData}
          id='email'
          name="email"
          type="email"
          className={`w-full bg-componentBg-inputBg text-textsColor-texts text-nameSize font-light px-4 py-3 rounded-[8px] outline-none ${errors.email ? 'border-[1px] border-solid border-[#FC3548]' : 'border-none'} focus:scale-x-[0.99] transition-all duration-300 ease-linear`} placeholder="@email.com" />
          {errors.email && <span className="p-2 bg-componentBg-inputBg mt-2 rounded-[8px] text-textsColor-texts text-[12px] font-medium border-[1px] border-solid border-[#FC3548]">{errors.email}</span>}
        </div>

        <div className="w-full flex flex-col items-start justify-center gap-y-2 relative">
          <label htmlFor='password' className="text-nameSize text-textsColor-texts font-bold select-none">Password</label>
          <input
          id='password'
          name="password"
          value={register.password}
          onChange={handleFormData}
          type={`${hide ? "password" : "text"}`}
          className={`w-full bg-componentBg-inputBg text-textsColor-texts text-nameSize font-light px-4 py-3 rounded-[8px] outline-none ${errors.password?.length ? "border-[#FC3548] border-solid border-[1px]" : "border-none"} focus:scale-x-[0.99] transition-all duration-300 ease-linear`} placeholder="Password" />
          {errors.password?.length > 0 && (
            <div className="flex flex-row w-[80%] flex-wrap justify-start items-start gap-x-2">
              {errors.password.map((error, index) => (
                <span key={index} className="p-2 bg-componentBg-inputBg mt-2 rounded-[8px] text-textsColor-texts text-[12px] font-medium border-[1px] border-solid border-[#FC3548]">{error}</span>
              ))}
            </div>
          )}
          

          <div
          onClick={hideButton}
          className="absolute top-[44px] right-2 cursor-pointer ">

            {
              hide ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5819 11.9999C15.5819 13.9799 13.9819 15.5799 12.0019 15.5799C10.0219 15.5799 8.42188 13.9799 8.42188 11.9999C8.42188 10.0199 10.0219 8.41992 12.0019 8.41992C13.9819 8.41992 15.5819 10.0199 15.5819 11.9999Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.9998 20.2707C15.5298 20.2707 18.8198 18.1907 21.1098 14.5907C22.0098 13.1807 22.0098 10.8107 21.1098 9.4007C18.8198 5.8007 15.5298 3.7207 11.9998 3.7207C8.46984 3.7207 5.17984 5.8007 2.88984 9.4007C1.98984 10.8107 1.98984 13.1807 2.88984 14.5907C5.17984 18.1907 8.46984 20.2707 11.9998 20.2707Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
              )
              : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.8198 5.77047C16.0698 4.45047 14.0698 3.73047 11.9998 3.73047C8.46984 3.73047 5.17984 5.81047 2.88984 9.41047C1.98984 10.8205 1.98984 13.1905 2.88984 14.6005C3.67984 15.8405 4.59984 16.9105 5.59984 17.7705" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.41992 19.5297C9.55992 20.0097 10.7699 20.2697 11.9999 20.2697C15.5299 20.2697 18.8199 18.1897 21.1099 14.5897C22.0099 13.1797 22.0099 10.8097 21.1099 9.39969C20.7799 8.87969 20.4199 8.38969 20.0499 7.92969" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.5095 12.7002C15.2495 14.1102 14.0995 15.2602 12.6895 15.5202" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.47 14.5293L2 21.9993" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.9993 2L14.5293 9.47" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              )
            }
            


          </div>
        </div>
      
        <div ref={selectRef2} className="w-full flex flex-col items-start justify-center gap-y-2 relative">
              <span className="text-nameSize text-textsColor-texts font-bold  select-none">Countery</span>
              
              <div
                onClick={() => setIsOpen2(!isOpen2)}
                className="w-full cursor-pointer hover:scale-x-[0.99] bg-componentBg-inputBg text-textsColor-texts text-nameSize font-bold px-4 py-3 rounded-[8px] outline-none border-none transition-all duration-300 ease-linear flex flex-row justify-between items-center"
              >
                <span>{register.countery ? register.countery : "Select Countery"}</span>
                <svg
                  className={`${isOpen2 ? "rotate-180" : "rotate-0"} transition-all duration-200 ease-linear`}
                  width="18"
                  height="9"
                  viewBox="0 0 18 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <AnimatePresence>
                {isOpen2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-[120px] bg-componentBg-inputBg text-textsColor-texts absolute -top-24 flex flex-col justify-start items-stretch rounded-[8px] overflow overflow-hidden"
                  >
                    {['iran' , 'iraq' , 'american' , 'england' , 'italy' , 'france' , 'germany' , 'canada' , 'soudi'].map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          setRegister((prev) => ({ ...prev, countery: e.target.textContent }));
                          setIsOpen(false);
                        }}
                        className="px-4 py-2 text-textsColor-texts text-nameSize font-light hover:bg-btnColors-Mailblue hover:text-white transition-all duration-200 ease-linear rounded-[8px] cursor-pointer"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
          </AnimatePresence>
        </div>

        <div className="w-full flex flex-col items-start justify-center gap-y-2 ">
          <Link
            to={'/users/login'}
            className="w-full bg-btnColors-Mailblue hover:bg-btnColors-Mailblue/65 transition-all duration-300 ease-linear text-white text-[18px] font-bold py-2 px-4 rounded-[8px] disabled:bg-btnColors-Mailblue/35"
            disabled={Object.values(errors).some(error => error.length > 0) || Object.values(register).some(value => value === "")}
          >
            Register
          </Link>
        </div>
      </form>
  )
}