import React from "react";
import profileImage from "../../assets/Profile/Profile_Pic.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          Hello! My name is Katya and I am a passionate full stack developer currently studying at Upenn Bootcamp and creating exciting projects along the way. I believe that technology has the power to revolutionize our world, and I am thrilled to be a part of that change.

As a full stack developer, I have experience working with various languages, and I love nothing more than tackling new challenges and exploring new ideas. From developing web applications to building user interfaces, I am always up for a new project that allows me to put my skills to the test.

In this portfolio, you will find a collection of my projects that showcase my ability to use and implement my knowledges . Each project demonstrates my approach to solving problems and my commitment to creating high-quality, user-friendly applications.

As a student, I am constantly learning and growing in my field, and I am excited to bring that passion and dedication to your team. If you're looking for a full stack developer who is eager to tackle new challenges and build amazing things, then look no further. Let's work together to make your ideas a reality.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;