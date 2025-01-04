import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "./Header";

const ViewDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUserDetails(response.data);
        toast.dismiss();
        toast.success("User details fetched successfully!");
      })
      .catch((error) => {
        console.log("There was an error fetching user details!", error);
        toast.dismiss();
        toast.error("There was an error fetching user details");
      });
  }, [id]);
  if (!userDetails) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Header />
      <div
        className="text-center px-[2em] leading-[30px] pt-[3em] lg:capitalize bg-[#FFFFFF] lg:text-[20px] lg:leading-[40px]
      text-[#000]"
      >
        <h2 className="capitalize text-[30px] pb-[0.5em]">user details</h2>
        <p>id: {userDetails.id}</p>
        <p> name: {userDetails.name}</p>
        <p>username: {userDetails.username}</p>
        <p>email: {userDetails.email}</p>
        <p> street: {userDetails.address.street}</p>
        <p>suite: {userDetails.address.suite}</p>
        <p>city: {userDetails.address.city}</p>
        <p>zipecode: {userDetails.address.zipcode}</p>
        <p>lat: {userDetails.address.geo.lat}</p>
        <p>lng: {userDetails.address.geo.lng}</p>
        <p>phone: {userDetails.phone}</p>
        <p>website: {userDetails.website}</p>
        <p>company name: {userDetails.company.name}</p>
        <p>company catchPrase: {userDetails.company.catchPhrase}</p>
        <p> company bs: {userDetails.company.bs}</p>
      </div>
      <div className="justify-self-center mt-[3em] bg-blue-500 w-[200px] h-[60px] text-center mb-[2em]
      text-[#FFFFFF] text-[20px] pt-[0.5em] rounded-[3px]">
        <Link to="/">Back to home page</Link>
      </div>
    </div>
  );
};

export default ViewDetails;
