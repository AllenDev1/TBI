export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
};

export const TEAM: TeamMember[] = [
  {
    name: 'Narayan Dev',
    role: 'Founder / CEO',
    image: '/team/narayan.jpg',
    bio: 'Leading our creative vision in brand design and strategy.',
    social: {
      linkedin: 'https://www.linkedin.com/in/narayan-dev',
      instagram: 'https://www.instagram.com/allend3v/',
      twitter: 'https://twitter.com/Allendev01',
      github: 'https://github.com/AllenDev1',
    },
  },
  {
    name: 'Sarthak Mainali',
    role: 'Executive Director',
    image: '/team/sarthak.png',
    bio: 'Driving strategic initiatives and business development.',
    social: {
      instagram: 'https://www.instagram.com/sarthakmainali/',
      linkedin: 'https://www.linkedin.com/in/sarthak-mainali-020984324/',
      facebook: 'https://www.facebook.com/sarthakMainali8?mibextid=ZbWKwL',
    },
  },
  {
    name: 'Bishnu Dev',
    role: 'Tech Lead',
    image: '/team/bishnu.jpeg',
    bio: 'Building robust, scalable solutions with cutting-edge technologies.',
    social: {
      linkedin: 'https://www.linkedin.com/in/bishnu-dev/',
      github: 'https://github.com/bordernone',
      twitter: 'https://twitter.com/bishnudev1234',
      instagram: 'https://www.instagram.com/bishnu.dev_/',
    },
  },
  {
    name: 'Rajiv Sah',
    role: 'Marketing Manager',
    image: '/team/rajiv.jpg',
    bio: 'Driving marketing strategies and brand growth.',
    social: {
      instagram: 'https://www.instagram.com/rajiv.sah.9469/',
    },
  },
  {
    name: 'Yana Chaudhary',
    role: 'Social Media Manager',
    image: '/team/yana.jpg',
    bio: 'Managing social presence and engaging with our community.',
    social: {
      instagram: 'https://www.instagram.com/that_kid_yana/',
      linkedin: 'https://www.linkedin.com/in/yana-chaudhary/',
    },
  },
  {
    name: 'Ujjwal Dev',
    role: 'Graphic Designer',
    image: '/team/ujjwal.jpeg',
    bio: 'Creating stunning visuals and brand identities.',
    social: {
      instagram: 'https://www.instagram.com/ujjwaldev02/',
      facebook: 'https://www.facebook.com/ujjwal.dev.161?mibextid=LQQJ4d',
      linkedin: 'https://www.linkedin.com/in/ujjwal-dev-214725199/',
    },
  },
  {
    name: 'Sukhchandra Sharma',
    role: 'Full Stack Developer',
    image: '/team/sukhisir.jpg',
    bio: 'Building end-to-end solutions with modern web technologies.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sukhchandra/',
      instagram: 'https://www.instagram.com/sukhisharma123/',
      github: 'https://github.com/SukhiSharma123',
    },
  },
  {
    name: 'Roshan Pokhrel',
    role: 'Frontend Developer',
    image: '/team/roshan.png',
    bio: 'Crafting beautiful, user-centric experiences that make an impact.',
    social: {
      linkedin: 'https://www.linkedin.com/in/iamrowshan/',
      instagram: 'https://www.instagram.com/_.rowshan/',
      github: 'https://github.com/Roshan-ops',
    },
  },
  {
    name: 'Rupesh Khadka',
    role: 'Frontend Developer',
    image: '/team/rupesh.jpg',
    bio: 'Building engaging user interfaces with modern frontend technologies.',
    social: {
      linkedin: 'https://www.linkedin.com/in/rupesh-khadka-131229234/',
      github: 'https://github.com/Rupesh-cell/',
    },
  },
];

export const MASCOT: TeamMember = {
  name: 'Scooby',
  role: 'Chief Happiness Officer',
  image: '/team/scooby.jpg',
  bio: 'Spreading tail-wagging joy and keeping morale high, one belly rub at a time!',
  social: {
    instagram: 'https://www.instagram.com/scooby_tbi/',
  },
};
