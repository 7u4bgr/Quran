import React, { useState,useEffect } from "react";
import "./App.css";
import { routeArr } from "./routes";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/loading";
function App() {
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, "3000");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {routeArr.map((item) => (
          <Route
            exact
            path={item.path}
            key={item.id}
            element={
              <>
                <Header />
                <item.component />
                <Footer />
                {loading?<Loading/>:null}
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
