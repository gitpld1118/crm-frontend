import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Entry } from "./page/Entry/Entry.page";
import { Dashboard } from "./page/dashboard/Dashboard.page";
import { AddTicket } from "./page/new-ticket/AddTicket.page";
import { TicketLists } from "./page/ticket-lists/TicketLists.page";
import { Ticket } from "./page/ticket/Ticket.page";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route element={<DefaultLayout />}>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/add-ticket" element={<PrivateRoute><AddTicket /></PrivateRoute>} />
            <Route path="/tickets" element={<PrivateRoute><TicketLists /></PrivateRoute>} />
            <Route path="/ticket/:tId" element={<PrivateRoute><Ticket /></PrivateRoute>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

<PrivateRoute></PrivateRoute>

export default App;

