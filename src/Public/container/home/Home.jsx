import React, { useEffect } from "react";
import AOS from "aos";

import HomeNavBar from "../../layout/navbar/PublicNavBar";
import AnnouncementModal from "../../components/home/AnnouncementModal";
import HomeBackground from "../../components/home/HomeBg";
import JoinEvent from "../../components/home/JoinEvent";
import WhyBatsyayan from "../../components/home/WhyScl";
import SchoolFeature from "../../components/home/SchoolFeature";
import SchoolLevel from "../../components/home/SclLevel";
import MsgPrincipalHome from "../../components/home/MsgPrincipal";
import HomeBlogs from "../../components/home/HomeBlog";
import StartJourney from "../../components/home/StartJourney";
import Map from "../../components/home/Map";
import Footer from "../../layout/footer/Footer";
import HomeGallery from "../../components/home/HomeGallery";
import { useAuth } from "../../../contexts/GlobalProvider";
import "../../../../node_modules/aos/dist/aos.css";
import "./uhome.css";

const Home = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    setCurrentLocation("Home");
  }, [setCurrentLocation]);

  return (
    <>
      <HomeNavBar />
      <AnnouncementModal />
      <HomeBackground />
      <JoinEvent />
      <WhyBatsyayan />
      <SchoolFeature />
      <SchoolLevel />
      <MsgPrincipalHome />
      <StartJourney />
      <HomeBlogs category="Academic Blogs" />
      <HomeGallery />
      <Map />
      <Footer />
    </>
  );
};

export default Home;
