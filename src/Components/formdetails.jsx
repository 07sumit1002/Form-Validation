import React from "react";
import { useLocation } from "react-router-dom";

const FormDetails = () => {
  const location = useLocation();
  const { firstName, lastName, username, email, phoneNo, country, city, panNo, aadharNo } = location.state;

  return (
    <div>
      <h3>Submitted Details</h3>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNo}</p>
      <p>Country: {country}</p>
      <p>City: {city}</p>
      <p>PAN No.: {panNo}</p>
      <p>Aadhar No.: {aadharNo}</p>
    </div>
  );
};

export default FormDetails;
