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
import SavedProperties from "./Pages/App/Saved/SavedProperties";
import LikedProperties from "./Pages/App/Liked/LikedProperties";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikedProperties, fetchProperties, fetchSavedProperties } from "../app/Slices/PropertiesSlice";
import { login, logout } from "../app/Slices/userSlice";

function App() {
  const dispatch = useDispatch()


  const userFromStore = useSelector((state) => state.user.data);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userFromStore);
  }, [userFromStore]);


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("stake-user"));
    setUser(userData);
  
    if (userData) {
      dispatch(login(userData));
      dispatch(fetchProperties());
      dispatch(fetchSavedProperties(userData.id));
      dispatch(fetchLikedProperties(userData.id));
    } else {
      dispatch(logout());
    }
  }, [dispatch]);
  
  
  

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
                <Route path="saved" element={<SavedProperties />} />
                <Route path="liked" element={<LikedProperties />} />
              </Route>
              
              <Route path="/my-deals" element={<MyDeals />} />
              <Route path="/settings" element={<Settings />} />
            </>
          :
            <>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
