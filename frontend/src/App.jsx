import Home from "./Pages/App/Home/Home";
import Login from "./Pages/Auth/Login/Login";
import Signup from "./Pages/Auth/Signup/Signup";
import Welcome from "./Pages/Auth/Welcome/Welcome";
import Properties from "./Pages/App/Properties/Properties";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import MyDeals from "./Pages/App/MyDeals/MyDeals";
import Settings from "./Pages/App/Settings/Settings";
import { useEffect, useState } from "react";
import Property from "./Pages/App/Property/Property";

function App() {

  const [user, setUser] = useState()

  useEffect(()=> {
    let userData = JSON.parse( localStorage.getItem("stake-user") )
    setUser(userData)
  }, [])
  

  return (
    <BrowserRouter>
      <Routes>
        {user 
          ?
            <>
              <Route path="/" element={<Home />} />
              
              <Route path="/properties">
                <Route index element={<Properties />} />
                <Route path=":id" element={<Property />} />
              </Route>
              
              <Route path="/my-deals" element={<MyDeals />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          :
            <>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
