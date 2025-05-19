import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DefaultLayout } from "./layout/DefaultLayout"
import { Entry } from "./page/Entry/Entry.page";
import { Dashboard } from "./page/dashboard/Dashboard.page";


function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
