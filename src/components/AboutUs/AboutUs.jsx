

const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Jhankar Mahbub',
            role: 'Chief Executive Officer (CEO)',
            image1: 'https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1670513031775Jhankar-Mahbub.png', // Main image
            image2: 'https://web.programming-hero.com/static/media/team-bg.3478c063.png', // Background image
            image3: 'https://web.programming-hero.com/static/media/glow-bg.b77580da.png', // Glow effect image
        },
        {
            name: 'Md Rossi Ahmed',
            role: 'Chief Product Officer (CPO)',
            image1: 'https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703568999Rokibul%20Hasan%20Rokib.png',
            image2: 'https://web.programming-hero.com/static/media/team-bg.3478c063.png',
            image3: 'https://web.programming-hero.com/static/media/glow-bg.b77580da.png',
        },
        {
            name: 'ABDUR RAKIB',
            role: 'Chief Operating Officer (COO)',
            image1: 'https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703697176Riyan%20Hasan.png',
            image2: 'https://web.programming-hero.com/static/media/team-bg.3478c063.png', // Background image
            image3: 'https://web.programming-hero.com/static/media/glow-bg.b77580da.png', // Glow effect image
        },
        {
            name: 'Karinaslam',
            role: 'Advice',
            image1: 'https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1711285189104Abdur%20Rakib.png',
            image2: 'https://web.programming-hero.com/static/media/team-bg.3478c063.png', // Background image
            image3: 'https://web.programming-hero.com/static/media/glow-bg.b77580da.png', // Glow effect image
        },
        {
            name: 'Amvar Hussein',
            role: 'Lead Mobile Application Developer',
            image1: 'https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1670513285266Sadia-Sultana-Kumu.png',
            image2: 'https://web.programming-hero.com/static/media/team-bg.3478c063.png', // Background image
            image3: 'https://web.programming-hero.com/static/media/glow-bg.b77580da.png', // Glow effect image
        },
        {
            name: 'Abu Sufian',
            role: 'Assistant Manager, HR',
            image1: 'https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703717436Sumiya%20Akter%20Shajuti.png',
            image2: 'https://web.programming-hero.com/static/media/team-bg.3478c063.png', // Background image
            image3: 'https://web.programming-hero.com/static/media/glow-bg.b77580da.png', // Glow effect image
        },
        {
            name: 'Mohammed Rahatul Aseaikin',
            role: 'Shovo',
            image1: '	https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703280947Abu%20Sufian.png',
            image2: 'https://web.programming-hero.com/static/media/team-bg.3478c063.png', // Background image
            image3: 'https://web.programming-hero.com/static/media/glow-bg.b77580da.png', // Glow effect image
        },
        {
            name: 'Mirza Showvik',
            role: 'DS Developer',
            image1: 'https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1685703568999Rokibul%20Hasan%20Rokib.png',
            image2: 'https://web.programming-hero.com/static/media/team-bg.3478c063.png', // Background image
            image3: 'https://web.programming-hero.com/static/media/glow-bg.b77580da.png', // Glow effect image
        },
    ];

    return (
        <div className="bg-black py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-[#eaaaff] to-[#b5acff] font-custom">Meet Our Team _</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="team-member my-1 text-center mt-5 bg-black text-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
                            {/* Team Member Card */}
                            <div className="relative w-[190px] h-[250px] mx-auto rounded-[10px] overflow-hidden bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${member.image2})`, // Default background image
                                }}
                            >
                                {/* Main Image (with Hover Effect) */}
                                <div className="absolute inset-0 bg-cover bg-center transition-all duration-300 transform hover:scale-105"
                                    style={{
                                        backgroundImage: `url(${member.image1})`, // Main image
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%',
                                    }}>
                                    {/* Hover Effect: Dark overlay with design */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 hover:opacity-60 transition-all duration-300"></div>
                                </div>

                                {/* Hover Glow Effect Image */}
                                <div className="absolute inset-0 bg-cover bg-center transition-all duration-300 opacity-0 hover:opacity-100 z-10"
                                    style={{
                                        backgroundImage: `url(${member.image3})`, // Glow effect image
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%',
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

