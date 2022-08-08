import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  
    return (
      <div>
        Welcome to Dashboard!!
        <p><Link variant="primary" to="/sc">View Security list</Link></p>
        <p><Link variant="primary" to="/td">View Trade list</Link></p>
      </div>
    );
  };