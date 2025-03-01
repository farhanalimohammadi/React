import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation , Link } from 'react-router-dom';
import { login } from '../Redux/Slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    

    const user = { name: 'John Doe' };
    const token = 'fake-token-123';


    dispatch(login({ user, token, remember: rememberMe }));

    const from = location.state?.from?.pathname || '/trader/accountoverview';
    navigate(from, { replace: true });
  };

    const [register , setRegister] = useState({
      email: '' ,
      password: '' , 
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

        const [ hide , setHide ] = useState(true)
        const hideButton = () => {
          setHide(!hide)
        }

  return (
    <form className="w-full flex flex-col items-stretch justify-start gap-y-6">
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
        value={register.password}
        onChange={handleFormData}
        id='password'
        name="password"
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

      <div className="w-full flex flex-row justify-between items-center">
        <div className="">
          <label className='flex flex-row justify-start items-center gap-x-2 cursor-pointer select-none' htmlFor="check">
            { rememberMe ? (
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="24" height="24" rx="4" stroke="#1481FE"/>
              <path d="M6 14L10 18L20 8" stroke="#1481FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="24" height="24" rx="4" stroke="white"/>
</svg>

            ) }
            <span className="text-textsColor-texts text-nameSize font-medium select-none ">Remember Me</span>
          </label>
          <input
          className='hidden'
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          type="checkbox" name="check" id="check" />
        </div>
        <div className="">
          <span className="text-nameSize text-btnColors-Mailblue font-medium underline underline-offset-[3px] select-none cursor-pointer">Forget Pasword</span>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-y-2 ">
        <button
        onClick={handleLogin}
          className="w-full bg-btnColors-Mailblue select-none hover:bg-btnColors-Mailblue/65 transition-all duration-300 ease-linear text-white text-[18px] font-bold py-2 px-4 rounded-[8px] disabled:bg-btnColors-Mailblue/35"
          disabled={Object.values(errors).some(error => error.length > 0) || Object.values(register).some(value => value === "")}
        >
          Register
        </button>
      </div>

    </form>
  );
};

export default Login;