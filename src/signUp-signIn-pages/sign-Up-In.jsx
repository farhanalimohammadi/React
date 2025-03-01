import React from "react";
import { Link, useParams } from "react-router-dom";
import SignUp from './sign-up'
import SignIn from './sign-in'
import { useState , useEffect} from "react";
export default function SignUpIn(){


    const { sign } = useParams();
    const signValue = sign === 'login' ? true : sign === 'register' ? false : null;
    
    const [isSignIn, setIsSignIn] = useState(signValue); 
    
    useEffect(() => {
      if (signValue !== null) {
        setIsSignIn(signValue);
      }
    }, [signValue]);




        return(
                <div className="w-full min-h-screen bg-componentBg-primeryBg relative flex flex-row justify-center items-center overflow-x-hidden">

                <div className="w-[35%] flex flex-col justify-center items-center mt-8 mb-8 ">
          
                  <div className={`min-w-[473px] max-w-[200px] flex flex-col items-stretch justify-start ${isSignIn ? "gap-y-12" : "gap-y-6" }  `}>
          
                    <div className="w-full flex flex-row items-center justify-center gap-x-[10px] bg-componentBg-buttonBg rounded-[8px] p-2 relative">
                      <div className={` z-10 w-[49%] absolute ${isSignIn ? "translate-x-[-49%]" : "translate-x-[49%]"} transition-all duration-300 ease-linear h-[40px] bg-btnColors-Mailblue rounded-[4px] flex justify-center items-center text-textsColor-texts text-nameSize font-medium py-2  cursor-pointer`}></div>
                      <Link to={'/users/login'}
                      className="z-20 w-[49%] rounded-[4px] flex justify-center items-center text-textsColor-texts text-nameSize font-medium py-2  cursor-pointer select-none"><span className="">Sing in</span></Link>
                      <Link to={'/users/register'}
                      className="z-20 w-[49%] rounded-[4px] flex justify-center items-center text-textsColor-texts text-nameSize font-medium py-2 cursor-pointer select-none"><span className="">Register</span></Link>
                    </div>
                    {/* ////////////////////////////////////////////////////////////////////////////////////// */}

                       {isSignIn ? <SignIn/> : <SignUp />}
          
                  </div>
          
                </div>
          
                <div className="w-[65%] select-none flex flex-col items-center justify-end">
                  <img
                    className="max-w-full h-[780px] object-contain z-20 fixed bottom-0"
                    src={'https://s3-alpha-sig.figma.com/img/2a43/0b54/0767922a4d366ada75ad4bee211ec42e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nNSN89tq6QqwRvli29kzdpenzADu66fjmjwQGuxikHPZxYHWqhxTNLi431EbHh9PwEmnjjO7mremJ95L5rhpdcnmshAfOAFM4wEBK6BsKFsPt3jvwxtje01vHneRoWvsK6Waotmn6ByBPZCJVCD2JfNIs5CuzX61drUd762vSK58DWkQ26FX0x2~5tYoxG5gdtSgDOh~Hd5kce2cjVvCMqa74arb0v5TkRFp8RgsVoykOXDxPdZMBOqhzMgOcyPZ3gDL72u7R92w--PsYmuQ25K8-~eVTKewruB2gIl8mcALRWWGwmZo5qFQJNjoZGyQsa9BRVBtNYa-H9GTmtwBew__'}
                    alt=""
                  />
                  {/* <img
                    className=" object-contain z-10 w-[72px] h-[212px] blur-[2px] absolute top-[120px] right-[170px]"
                    src={'https://s3-alpha-sig.figma.com/img/66b5/a11b/da3c4a7414815fd8fd4aa5ee48a37623?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tIrLX1TbcKZASv6cWENZLWS-AaNcEySVqHM3DKd3ucw6RmnnKZI6ZsvIBwFDAHK64dBZZnBhC0w2odatyfT6teOLjfRauuVM1so~P2~PF0i-nUT1YAc30TEbtGbJrH96U3cHtruCNDVFdMekTL03JrrkpDdzQCPQPq2uV31hwP0pZKXe152KBVE7vUmonUDSDbdNjMsd5MP~uOXunb0ZRn7m0ATlCKSqzm8XSrGa61rQ0xxrhxU2~S8JPaY~6qor94xvuCum8vuv3m0MGiInbbeVjRPcdy0XS58lXKKJyKIlcuR~oT6u7RIuHXzAPl9Hyj9aN6lw-AgqfqZwUqNcuA__'}
                    alt=""
                  /> */}
                  <img
                    className=" z-10 w-[500px] h-[500px] fixed top-[50px] right-[120px]"
                    src={'https://s3-alpha-sig.figma.com/img/6cce/8e77/f7bfeb256445176c7e9cb58c61066b0f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QN-NmRQYisHN6kmsSAMrORSEmAHrNjgtPnDke1BJu~CzvIx3Rdjva~f3InBUM8suBJzvlzBFUcJo5OHUj-gNLPz4NxMPb8~2ZEOwj-s8j9-PiSM1K0ioGtyCpGRgtFw~7j~Zqt7wq6fztzNjC9U92qWPjsWQptSod-LTd5nJx5L43GAX0ulCKAxIWkPnPnYemkasCzHy5yd27ly3LTcJt9wed8rc~gA60UQI5U67bSugCEjcHWl330uf-kQ17SBWOzOHFqDEhgAf~fp7EnYVy22oc1GnTW-GZyeHBc67rKN3VQ2CwblqfUvZnpwoC0obyYNfqISzOy9s9hxuaaw-JQ__'}
                    alt=""
                  />
                </div>
          
                <div className="w-[600px] h-[600px] select-none bg-btnColors-Mailblue/20 fixed top-[-250px] right-[-250px] rounded-full blur-[80px]"></div>
          
              </div>
        )

}