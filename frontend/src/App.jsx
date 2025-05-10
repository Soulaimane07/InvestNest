import Home from "./Pages/App/Home/Home";
import Login from "./Pages/Auth/Login/Login";
import Signup from "./Pages/Auth/Signup/Signup";
import Welcome from "./Pages/Auth/Welcome/Welcome";
import Properties from "./Pages/App/Properties/Properties";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import MyDeals from "./Pages/App/MyDeals/MyDeals";
import { useEffect, useState } from "react";
import Property from "./Pages/App/Property/Property";
import SavedProperties from "./Pages/App/Saved/SavedProperties";
import LikedProperties from "./Pages/App/Liked/LikedProperties";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeals, fetchLikedProperties, fetchProperties, fetchSavedProperties } from "../app/Slices/PropertiesSlice";
import { login, logout, setLang } from "../app/Slices/userSlice";
import Wallet from "./Pages/App/Wallet/Wallet";
import { fetchWallet } from "../app/Slices/walletSlice";
import Profile from "./Pages/App/Settings/Profile";
import Password from "./Pages/App/Settings/Password";
import Plans from "./Pages/App/Settings/Plans";
import Goal from "./Components/Goal/Goal";

function App() {
  const dispatch = useDispatch()


  const userFromStore = useSelector((state) => state.user.user);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userFromStore);
  }, [userFromStore]);


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("stake-user"));
    const lang = localStorage.getItem("stake-lang");

    dispatch(setLang(lang));
    setUser(userData);
  
    if (userData) {
      dispatch(login(userData));
      dispatch(fetchWallet(userData.id));
      dispatch(fetchProperties());
      dispatch(fetchSavedProperties(userData.id));
      dispatch(fetchLikedProperties(userData.id));
      dispatch(fetchDeals(userData.id));
    } else {
      dispatch(logout());
    }
  }, [dispatch]);
  


  const OpenGoal = false;

  
  

  return (
    <>
    {user && OpenGoal && <Goal />}
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
              <Route path="/my-wallet" element={<Wallet />} />
              <Route path="/settings">
                <Route path="profile" element={<Profile />} />
                <Route path="password" element={<Password />} />
                <Route path="plans" element={<Plans />} />
              </Route>
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
    </>
  )
}

export default App
