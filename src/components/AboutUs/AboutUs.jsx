import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import profile6 from "../../assets/profile6.png";
import profile7 from "../../assets/profile7.png";
import profile8 from "../../assets/profile8.png";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Samsel Arfin ",
      role: "Founder & CEO",
      image1: profile1, // Main image
      image2:
        "https://web.programming-hero.com/static/media/team-bg.3478c063.png", // Background image
      image3:
        "https://web.programming-hero.com/static/media/glow-bg.b77580da.png", // Glow effect image
    },
    {
      name: "Sabbir Rahman ",
      role: "Co-Founder",
      image1: profile2,
      image2:
        "https://web.programming-hero.com/static/media/team-bg.3478c063.png",
      image3:
        "https://web.programming-hero.com/static/media/glow-bg.b77580da.png",
    },
    {
      name: "Sazzad Mahim",
      role: "Chief Product Officer (CPO)",
      image1: profile3,
      image2:
        "https://web.programming-hero.com/static/media/team-bg.3478c063.png",
      image3:
        "https://web.programming-hero.com/static/media/glow-bg.b77580da.png",
    },
    {
      name: "Mr Jachin",
      role: "Chief Operating Officer (COO)",
      image1: profile4,
      image2:
        "https://web.programming-hero.com/static/media/team-bg.3478c063.png",
      image3:
        "https://web.programming-hero.com/static/media/glow-bg.b77580da.png",
    },
    {
      name: "Karinaslam",
      role: "Advice",
      image1: profile5,
      image2:
        "https://web.programming-hero.com/static/media/team-bg.3478c063.png",
      image3:
        "https://web.programming-hero.com/static/media/glow-bg.b77580da.png",
    },
    {
      name: "Amvar Hussein",
      role: "Lead Mobile Application Developer",
      image1: profile6,
      image2:
        "https://web.programming-hero.com/static/media/team-bg.3478c063.png",
      image3:
        "https://web.programming-hero.com/static/media/glow-bg.b77580da.png",
    },
    {
      name: "Abu Sufian",
      role: "Assistant Manager, HR",
      image1: profile7,
      image2:
        "https://web.programming-hero.com/static/media/team-bg.3478c063.png",
      image3:
        "https://web.programming-hero.com/static/media/glow-bg.b77580da.png",
    },
    {
      name: "Mohammed Rahatul Aseaikin",
      role: "Shovo",
      image1: profile8,
      image2:
        "https://web.programming-hero.com/static/media/team-bg.3478c063.png",
      image3:
        "https://web.programming-hero.com/static/media/glow-bg.b77580da.png",
    },
  ];

  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-[#cb84e2] to-[#b5acff] font-custom">
          Meet Our Team _
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member my-1 text-center mt-5 bg-black text-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className="relative w-[190px] h-[250px] mx-auto rounded-[10px] overflow-hidden bg-cover bg-center -z-10"
                style={{
                  backgroundImage: `url(${member.image2})`,
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-300 transform hover:scale-105"
                  style={{
                    backgroundImage: `url(${member.image1})`, // Main image
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 hover:opacity-60 transition-all duration-300"></div>
                </div>

                {/* Hover Glow Effect Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-300 opacity-0 hover:opacity-100 -z-5 "
                  style={{
                    backgroundImage: `url(${member.image3})`, // Glow effect image
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
              </div>

              {/* Team Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-white">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
