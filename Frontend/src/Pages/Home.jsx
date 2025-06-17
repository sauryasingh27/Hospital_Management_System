import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import Appointment from "./Appointment";
import AppointmentFooter from "../components/AppointmentFooter";

const Home = () => {
  return (
    <>
      <Hero
        title={ "Welcome to Axon Hospital"}
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <AppointmentFooter />
      <MessageForm />
    </>
  );
};

export default Home;