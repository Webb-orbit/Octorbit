import { useEffect, useState, useRef } from "react"
import Admin from "./appwrite/auth"
import { useDispatch, useSelector} from "react-redux"
import { storelogin } from "./store/adminslice"
import Loadingpage from "./compos/utiles/Loadingpage"
import { Outlet, useNavigate, useLocation } from "react-router-dom"



const App = () => {
  const disptch = useDispatch()
  const [loading, setloading] = useState(true)
  const {isadmin} = useSelector(state=> state.admin)
  let location = useLocation();
  let navigate = useNavigate();
  const recognitionRef = useRef(null)
  
  useEffect(() => {
    ; (async () => {
      try {
        const isadmin = await Admin.getcurrentaccount()
        if (isadmin && isadmin.labels.includes("admin")) {
          disptch(storelogin(isadmin.$id))
          setloading(false)
        }
      } catch (error) {
        setloading(false)
      }
    }
    )()
  }, [])

  useEffect(() => {
      if (isadmin || recognitionRef.current == null) return; // Do not start recognition if the user is not an admin

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";
recognitionRef.current = recognition



    recognition.onresult = (event) => {
      const command = event.results[event.results.length - 1][0].transcript.toLowerCase();

      if (command === "open") {
        window.open("https://www.youtube.com/");
      } else if (command === "open about") {
        navigate('/mkr/about')
      } else if (command === "hey go out") {
        window.open("https://www.google.com/");
      }
      
    };

    recognition.onend = () => {
      console.log("Recognition ended, restarting...");
      if (isadmin) recognition.start(); // Restart only if admin session is active
    };

    recognition.start();

    return () => {
      recognition.abort();
      recognitionRef.current = null
    };
  }, [isadmin, location]); // Depend on `isadmin`
  
  return loading ? (<Loadingpage />) : (
    <>
        <Outlet />
    </>
  )
}

export default App
