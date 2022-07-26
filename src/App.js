import { useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginContainer from "./Containers/LoginContainer";
import ListContainer from "./Containers/ListContainer";
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.loginReducer);

  useEffect(() => {
    if (data?.payload?.code === 200) {
      navigate("/list");
    } else {
      navigate("/login");
    }
  }, [data]);



  return (
    <div className="bd-main">
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/list" element={<ListContainer />} />
      </Routes>
    </div>
  );
}

export default App;
