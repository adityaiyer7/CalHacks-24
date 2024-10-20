
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Import the image
import homeGif from "/images/home.gif"; 
import voiceImg from "/images/voice.png";
import sleepGif from "/images/sleep.gif";
import feedGif from "/images/feed.gif";
import growthGif from "/images/growth.gif";

export default function Home() {
  const router = useRouter();
  const navigateToLogin = () => {
    //router.push("/login"); // Navigate to Login
    router.push("/dashboard");
  };
  const navigateToSignUp = () => {
    router.push("/register"); // Navigate to Sign Up
  };
  return (
    <div style={styles.pageWrapper}>
      <nav style={styles.navbar}>
        <div style={styles.brand}>
          {/* <h1>Baby Tracker AI</h1> */}
          <p style={styles.appName}>Baby Tracker AI</p>
        </div>
        <ul style={styles.navMenu}>
          <li><a href="/">Home</a></li>
          <li><a href="#features">Our Features</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div style={styles.authButtons}>
          <button style={styles.button} onClick={navigateToLogin}>Login</button>
          <button style={styles.button} onClick={navigateToSignUp}>Register</button>
        </div>
      </nav>
      <section id="home" style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.micImageWrapper}>
            <Image 
              src={"/images/voice.png"} 
              alt="Voice Image" 
              width={200} 
              height={200} 
            />
          </div>
          <p style={styles.heroTitle}>Track Your Baby's Milestones Effortlessly</p>
          <p>Using voice AI, enter your baby’s data quickly and easily. Keep track of milestones, feeding schedules, and more without typing a single word!</p>
          <button style={styles.ctaButton} onClick={navigateToSignUp}>Get Started</button>
        </div>
        <div style={styles.heroImageWrapper}>
          <Image 
            src={"/images/home.gif"} 
            alt="Home Gif" 
            width={400} 
            height={400} 
          />
        </div>
      </section>
      <section id="features" style={styles.featuresSection}>
        <p style={styles.featuresHeading}>Our Features</p>
        <p style={styles.featuresDescription}>At Baby Tracker AI, we help you monitor and log your baby's milestones effortlessly, ensuring you never miss a moment. <br></br>Discover how our voice AI technology makes tracking easier and more intuitive!</p>
        <div style={styles.featuresWrapper}>
          <div style={styles.feedCard}>
            <p style={styles.featureTitle}>Feed Tracker</p>
            <div style={styles.feedImageWrapper}>
              <Image 
                src={"/images/feed.gif"} 
                alt="Feed Gif" 
                width={200} 
                height={200} 
              />
            </div>
            <p>Track feeding schedules and amounts effortlessly using your voice.</p>
          </div>
          <div style={styles.sleepCard}>
            <p style={styles.featureTitle}>Sleep Tracker</p>
            <div style={styles.featureImageWrapper}>
              <Image 
                src={"/images/sleep.gif"} 
                alt="Sleep Gif" 
                width={300} 
                height={300} 
              />
            </div>
            <p>Monitor sleep patterns and durations with ease through voice commands.</p>
          </div>
          <div style={styles.growthCard}>
            <p style={styles.featureTitle}>Growth Tracker</p>
            <div style={styles.featureImageWrapper}>
              <Image 
                src={"/images/growth.gif"} 
                alt="Growth Tracker" 
                width={300} 
                height={300} 
              />
            </div>
            <p>Log growth milestones and health updates without the hassle of typing.</p>
          </div>
        </div>
      </section>
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Baby Tracker AI. All rights reserved.</p>
        <p>
          <a href="#about" style={styles.footerLink}>About Us</a> | 
          <a href="#contact" style={styles.footerLink}>Contact</a>
        </p>
      </footer>
    </div>
  );
}
// Inline CSS Styles
const styles: { [key: string]: React.CSSProperties } = {
  // Main Wrapper
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#27595A',
    color: '#000000',
    minHeight: '100vh',
  },
  // Hero Section Styles
  heroSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
    padding: '20px 180px',
    minHeight: '85vh',
    paddingBottom: '100px',
    backgroundColor: '#E2F6FF',
    borderRadius: '10px',
  },
  // Navbar Styles
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    backgroundColor: '#27595A',
    color: '#fff',
  },
  brand: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navMenu: {
    listStyle: 'none',
    display: 'flex',
    gap: '50px',
  },
  authButtons: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    fontWeight: 'bold',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#E2F6FF',
    color: '#27595A',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  ctaButton: {
    marginTop: '50px',
    padding: '15px 40px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#FCC035',
    color: '#000000',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontWeight: 'bold',
  },
  // Hero Content
  heroContent: {
    maxWidth: '600px',
    flex: '1',
  },
  heroTitle: {
    color: '#171616',
    fontSize: '50px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  // Features Section Styles
  featuresSection: {
    backgroundColor: '#27595A',
    padding: '40px 20px',
    borderRadius: '10px',
    marginTop: '40px',
    textAlign: 'center',
    alignContent: 'center',
    width: '100%',
    minHeight: '100vh',
  },
  featuresHeading: {
    color: '#fff',
    fontSize: '50px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  featuresDescription: {
    color: '#E2F6FF',
    fontSize: '18px',
    margin: '20px 0',
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  featuresWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '50px',
    flexWrap: 'wrap',
  },
  feedCard: {
    backgroundColor: '#E2F6FF',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    flex: '1 1 30%',
    maxWidth: '300px',
  },
  feedImageWrapper: {
    paddingLeft: '10%',
  },
  sleepCard: {
    backgroundColor: '#FCC035',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    flex: '1 1 30%',
    maxWidth: '300px',
  },
  growthCard: {
    backgroundColor: '#42BFAB',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    flex: '1 1 30%',
    maxWidth: '300px',
  },
  featureTitle: {
    color: '#000000',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  featureImageWrapper: {
    alignItems: 'center',
    marginBottom: '20px',
  },
  // Footer Styles
  footer: {
    marginTop: 'auto',
    padding: '20px',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#27595A',
    width: '100%',
    borderTop: '1px solid #E2E2E2',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  },
};