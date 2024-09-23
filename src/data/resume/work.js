/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'LitmusTest',
    position: 'OpenSource Contributor',
    url: 'https://github.com/mestafrica/digitizing-the-ges-curriculum',
    startDate: '2024-07-01',
    summary: 'Ghana Education Service Curriculum Digitization.',
    highlights: [
      'Developed responsive and user-friendly interfaces for the digitized curriculum, ensuring accessibility across devices.',
      'Designed intuitive and engaging user interfaces to enhance the learning experience for students and educators',
      'Worked closely with a team of developers and designers to integrate new features and maintain consistent design standards',
    ],
  },
  {
    name: 'AshToken Referral Platform',
    position: 'Frontend Developer',
    // url: 'https://smileidentity.com',
    startDate: '2024-16-05',
    endDate: '2024-22-07',
    summary: `AshToken is a cryptocurrency referral platform that allows users to share 
    referral links to promote the AshToken cryptocurrency. 
    Users can track referrals, earn commissions, and generate 
    unique referral codes for purchasing AshToken on PancakeSwap. 
    The platform provides multiple payment options for receiving 
    commissions, including cash (via Zelle, bank transfers, or mobile 
    money) and crypto (through BEP20 wallet addresses). It serves as a tool for promoting 
    AshToken while enabling users to earn rewards through referrals.`,
    highlights: [
      'Built a robust referral platform enabling users to invite others into the program, track referrals, and monitor community growth.',
      'Developed a comprehensive dashboard for users to oversee commissions, manage their referral network, and customize payment preferences.',
      'Implemented payment options, including BEP20 wallet addresses, for seamless transactions and commission payouts.',
      'Ensured the platform was fully responsive and optimized for various devices, providing an intuitive user experience.',
    ],
  },
  {
    name: ' Yooke Driver Portal',
    position: 'Frontend Developer',
    url: 'https://github.com/dezmymachine/yooke-driver-portal-beyondTech',
    startDate: '2024-01-04',
    summary: `Yooke is a driver portal designed for ridesharing services. 
    It allows drivers to manage their rides, track earnings, and interact with passengers. 
    The portal includes features such as booking management, trip history, 
    payment tracking, and support services. It aims to streamline the driver's 
    experience by offering a user-friendly interface where they can access real-time 
    updates on ride requests, navigate routes, and manage their schedules efficiently.`,
    highlights: [
      'Created the InstaSafe. Fast, automated investment docs for YC companies.',
      'Advise several startups in the fund.',
    ],
  },
  {
    name: 'Mest Africa',
    position: 'Web Developer Trainee',
    // url: 'https://arthena.com',
    startDate: '2024-01-02',
    endDate: '2024-31-04',
    summary: `The GROW Program, offered by Generation Ghana and delivered by MEST Africa, 
    is a specialized training initiative focused on web development. 
    The program equips participants with in-demand skills in the MERN 
    stack (MongoDB, Express, React, Node.js) and provides practical experience 
    through projects such as building web apps, marketplaces, and portfolios. 
    It includes internships, real-world immersion, and a final personal project to solidify learning. 
    The program aims to prepare participants for careers in tech by offering mentorship, hands-on coding 
    experience, and opportunities to network with industry professionals.`,
    highlights: [
      'Led a team of 4 developers.',
      'Developed an agro products market website that fosters buying and selling of agro products.',
      'Developed a CRUD movie streaming web app that allows the user to navigate seamlessly and search movies based on specific identifiers using API.',
      'Developed a portfolio website that allows the user to update details from a server through a REST API.',
    ],
  },
  {
    name: 'Earth Studios',
    position: 'Digital Marketer & Content Lead',
    // url: 'http://enveritas.org',
    startDate: '2022-11-01',
    endDate: '2024-26-01',
    summary: `Earth Studios is a creative agency that specializes in digital marketing, content creation, and brand strategy. 
    The studio focuses on helping businesses and individuals enhance their digital presence through tailored marketing campaigns, 
    engaging content, and data-driven strategies. Their services include social media management, content development, digital 
    advertising, and performance tracking. Earth Studios aims to drive brand growth by leveraging creative solutions and ensuring 
    that clients' messaging resonates with their target audiences across various digital platforms.`,
    highlights: [
      'Edited and proofread content for digital media platforms, including blogs, Facebook, Twitter, Instagram.',
      'Developed and implemented content strategies that align with the brand’s goals.',
      'Collaborated with the social media team to monitor engagement metrics, track success, and adjust strategies accordingly for brands.',
    ],
  },
  {
    name: 'Youth Employment Agency',
    position: 'Procurement Assistant',
    url: 'https://yea.gov.gh/',
    startDate: '2020-01-05',
    endDate: '2022-31-04',
    summary: `The Youth Employment Agency (YEA) is a government initiative in Ghana designed to address youth unemployment by providing 
    job opportunities, skills training, and entrepreneurship support for young people. YEA offers various employment programs 
    across sectors such as health, agriculture, education, and community services, aiming to equip the youth with relevant skills and work experience. 
    The agency collaborates with private and public sector organizations to create sustainable employment paths, reduce poverty, and contribute to national 
    development. Through its initiatives, YEA plays a key role in empowering Ghanaian youth to become self-reliant and economically active.`,
    highlights: [
      'Managed Tenders, ensuring compliance with statutory supplier requirements.',
      'Maintained and updated the supplier registration database, purchasing orders and contracts.',
      'Evaluated suppliers based on delivery quality, lead time, and after-sales service, and prepared reports on procurement activities, budget expenditure, and tender evaluations.',
    ],
  },
];

export default work;
