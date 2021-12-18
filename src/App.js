import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";
import EmailList from "./EmailList";
import Header from "./Header";
import Mail from "./Mail";
import SendMail from "./SendMail";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
        <SendMail />
      </div>
    </Router>
  );
}

export default App;
