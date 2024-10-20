"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDiscord } from "react-icons/fa";

// Import the images
import homeGif from "/public/images/home.gif";
import voiceImg from "/public/images/voice.png";
import sleepGif from "/public/images/sleep.gif";
import feedGif from "/public/images/feed.gif";
import growthGif from "/public/images/growth.gif";
import logo from "/public/images/logo.png";

const Home: React.FC = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/dashboard"); // Navigate to Login
  };

  const navigateToSignUp = () => {
    router.push("/dashboard"); // Navigate to Sign Up
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-black font-sans">
      <nav className="flex justify-between items-center w-11/12 p-5 bg-background text-white">
        <div className="flex items-center text-2xl font-bold">
          <Image className="mr-2 mb-2" src={logo} alt="Logo" width={50} height={50} />
          <span>BabyBytes</span>
        </div>
        <ul className="flex gap-12">
          <li><a href="/" className="hover:text-[#FCC035]">Home</a></li>
          <li><a href="#features" className="hover:text-[#FCC035]">Our Features</a></li>
          <li><a href="#demo" className="hover:text-[#FCC035]">Demo</a></li>
          <li><a href="#trackers" className="hover:text-[#FCC035]">Our Trackers</a></li>
        </ul>
        <div className="flex gap-4">
          <button className="font-bold px-5 py-2 bg-[#E2F6FF] text-teal-800 rounded-lg transition duration-300 hover:bg-[#FCC035] hover:text-black" onClick={navigateToLogin}>
            Login
          </button>
          <button className="font-bold px-5 py-2 bg-[#E2F6FF] text-teal-800 rounded-lg transition duration-300 hover:bg-[#FCC035] hover:text-black" onClick={navigateToSignUp}>
            Register
          </button>
        </div>
      </nav>

      <section id="home" className="flex justify-between items-center text-left p-40 w-11/12 min-h-[85vh] bg-[#E2F6FF] rounded-lg">
        <div className="max-w-xl flex-1">
          <div className="mb-5">
            <Image src={voiceImg} alt="Voice Image" width={200} height={200} />
          </div>
          <p className="text-[#27595A] text-2xl font-bold">💛Using voice AI</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-5">Track Your Baby's <br /> Milestones Effortlessly</h1>
          <p>Using voice AI, enter your baby’s data quickly and easily with BabyBytes🎙️<br />Keep track of milestones, feeding schedules, and more without typing a single word!</p>
          <button className="mt-5 px-10 py-3 bg-yellow-400 text-black rounded-lg font-bold transition duration-300 hover:bg-yellow-500" onClick={navigateToSignUp}>
            Get Started
          </button>
        </div>
        <div className="flex-1">
          <Image src={homeGif} alt="Home Gif" width={400} height={400} />
        </div>
      </section>

      <section id="trackers" className="bg-[#27595A] p-10 rounded-lg text-center mt-10">
        <h2 className="text-white text-5xl font-bold mb-5">Our Core Trackers</h2>
        <p className="text-white text-lg mb-5">
          At BabyBytes, we help you monitor and log your baby's milestones effortlessly. <br />
          Discover how our voice AI technology makes tracking easier and more intuitive!
        </p>
        <div className="flex justify-around flex-wrap">
          {[
            {
              title: "Feed Tracker",
              image: feedGif,
              description: "Track feeding schedules and amounts effortlessly using your voice.",
              bgColor: "bg-[#E2F6FF]", // Feed Tracker background
              imageClass: "px-6",
            },
            {
              title: "Sleep Tracker",
              image: sleepGif,
              description: "Monitor sleep patterns and durations with ease through voice commands.",
              bgColor: "bg-[#FCC035]", // Sleep Tracker background
              imageClass: "mt-0",
            },
            {
              title: "Growth Tracker",
              image: growthGif,
              description: "Log growth milestones and health updates without the hassle of typing.",
              bgColor: "bg-[#44BFAB]", // Growth Tracker background
              imageClass: "mt-0",
            },
          ].map((feature, index) => (
            <div key={index} className={`${feature.bgColor} rounded-lg p-10 m-10 shadow-md flex flex-col items-center w-80 mb-20`}>
              <h3 className="text-black text-xl font-bold mb-5">{feature.title}</h3>
              <Image src={feature.image} alt={feature.title} width={200} height={200} className={feature.imageClass} />
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>


      <footer className="mt-auto p-10 text-center text-white bg-[#27595A] w-full border-t border-[#E2F6FF]">
        <p>BabyBytes &copy; CalHack{new Date().getFullYear()}</p>
        <p>All rights reserved.</p>
        <div className="flex justify-center gap-5 mt-5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
