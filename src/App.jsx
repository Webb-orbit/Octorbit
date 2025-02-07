import { useEffect, useState } from "react"
import Admin from "./appwrite/auth"
import { useDispatch, useSelector} from "react-redux"
import { storelogin } from "./store/adminslice"
import Loadingpage from "./compos/utiles/Loadingpage"
import { Outlet } from "react-router-dom"


const App = () => {
  const disptch = useDispatch()
  const [loading, setloading] = useState(true)
  const {isadmin} = useSelector(state=> state.admin)
  
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
    if (!isadmin) return; // Do not start recognition if the user is not an admin

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const command = event.results[event.results.length - 1][0].transcript.toLowerCase();

      if (command === "open") {
        window.open("https://www.youtube.com/");
      } else if (command === "open about") {
        window.open("https://www.github.com");
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
      recognition.abort(); // Properly clean up recognition instance
    };
  }, [isadmin]); // Depend on `isadmin`
  
  return loading ? (<Loadingpage />) : (
    <>
        <Outlet />
    </>
  )
}

export default App
