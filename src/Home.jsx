import React from 'react';
import './Home.css';
import bg from './pankaj.jpg'

const About = () => {
  const onButtonClick =()=>{
    const pdfurl = "sample.pdf"
    const link = document.createElement('a')
    link.href = pdfurl
    link.download = "Pankaj_Kr_Yadav(SDE).pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <>
    <section id="intro">
      <div className="animated-sentence">
        <p><b>I am an aspiring data analyst and front-end developer with expertise in HTML, CSS, JavaScript, MySQL,</b></p>
        <p><b> R programming, MS Excel, PowerBI, and ReactJS.</b></p>
        <p><b>I am dedicated and motivated, passionate about turning data insights into impactful solutions.</b></p>
        <p><b>I enjoy creating dynamic and responsive web applications that deliver a seamless user experience.</b></p>
      </div>
      <div className="btn">
        <button onClick={onButtonClick}>Download CV</button>
        <button>Contact Me</button>
      </div>
      <img src={bg} alt="Background" className="bg" />

    </section>
    </>
  );
}

export default About;
