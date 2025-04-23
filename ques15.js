import React, { useState } from "react";


const Home = () => <div><h2>Welcome to Home</h2></div>;
const About = () => <div><h2>About Us</h2></div>;
const Contact = () => <div><h2>Contact Us</h2></div>;

const Navbar = ({ setActivePage }) => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
      <ul style={{ listStyleType: "none", display: "flex", gap: "20px" }}>
        <li style={{ cursor: "pointer" }} onClick={() => setActivePage("home")}>Home</li>
        <li style={{ cursor: "pointer" }}
