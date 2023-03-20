import Labs from './labs';
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiters";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import React from "react";

function App() {
  return (

      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path={"/*"}
                         element={<Labs/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiters/*"
                         element={<Tuiter/>}/>
              </Routes>

          </div>
      </BrowserRouter>

  );
}
export default App;

