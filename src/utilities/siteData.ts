import { IoRocketSharp } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

/**
 * Centralized data structure for different sections and pages of the site.
 */
export const SITE_DATA = {
  // --- 1. Data for Core Values ---
  coreValues: [
    {
      id: "cv1",
      icon: FaHandshake, // Reference to an imported React component
      title: "Integrity",
      details: "Trust built on transparency.",
    },
    {
      id: "cv2",
      icon: IoRocketSharp,
      title: "Innovation",
      details: "Technology that evolves with purpose.",
    },
    {
      id: "cv3",
      icon: TbTargetArrow,
      title: "Impact",
      details:
        "Solutions that change how organizations work, protect, and grow.",
    },
  ],

  // --- 2. Data for What we do ---
  solutions: [
    {
      id: "sol1",
      title: "BeSpoke Solutions",
      imageSrc:
        "/assets/images/solutions/sol1.webp",
      imageAlt: "Abstract graphic for bespoke solutions",
      details:
        "We don't believe in one-size-fits-all technology. Our BeSpoke Solutions unit works with you to design and deploy systems built precisely for your business goals — whether it's a workflow automation engine, an enterprise portal, or an integrated payments platform.",
      link: "/bespoke-solutions",
      color: "#010721",
      offerings: null, // Used for items that don't have a bulleted list
    },
    {
      id: "sol2",
      title: "Cybersecurity",
      imageSrc:
        "/assets/images/solutions/sol2.webp",
      imageAlt: "Padlock graphic for cybersecurity",
      details:
        "Protect your business with proactive, end-to-end cyber defense services.",
      link: '/cybersecurity', // No primary link on this card
      color: "#000102",
      offeringsTitle: "Our offerings include:",
      offerings: [
        "Vulnerability Assessment & Penetration Testing (VAPT)",
        "NDPR / GDPR Compliance",
        "Virtual CISO (vCISO) Services",
        "DevSecOps Integration",
        "PCI-DSS",
        "ISMS",
        "ISO 2700, ISO 27032 Implementation & Audit",
      ],
    },
    {
      id: "sol3",
      title: "Cyber Insurance",
      imageSrc:
        "/assets/images/solutions/sol3.webp",
      imageAlt: "Security shield graphic for cyber insurance",
      details:
        "We help businesses quantify, mitigate, and insure against digital risks. Our cyber-risk assessment engine and partnerships with insurers ensure coverage that matches your real-world exposure.",
      link: '/cyber-insurance',
      color: "#060845",
      offerings: null,
    },
    {
      id: "sol4",
      title: "GovTech",
      imageSrc:
        "/assets/images/solutions/sol4.webp",
      imageAlt: "Cityscape with digital overlays for GovTech",
      details:
        "We collaborate with governments and agencies to build secure, citizen-centric digital ecosystems. From complaint-management systems to data-driven policymaking tools, we redefine public sector efficiency.",
      link: '/gov-tech',
      color: "#02183D",
      offerings: null,
    },
    {
      id: "sol5",
      title: "Digital Transformation",
      imageSrc:
        "/assets/images/solutions/sol5.webp",
      imageAlt: "Cloud computing graphic for digital transformation",
      details:
        "Guiding organizations through every phase of digital modernization — from process automation to cloud migration — ensuring agility, resilience, and innovation.",
      link: '/digital-transformation',
      color: "#15236B",
      offerings: null,
    },
    {
      id: "sol6",
      title: "Data & Artificial Intelligence",
      imageSrc:
        "/assets/images/solutions/sol6.webp",
      imageAlt: "Android robot with data graphics for AI",
      details:
        "Harness data for smarter decisions. We design AI-driven analytics systems and predictive models that turn data into actionable insights — securely and ethically.",
      link: '/data-and-ai',
      color: "#00449E",
      offerings: null,
    },
  ],

  // --- 2. Data for What we do ---
  partners:[
    {
      id: "part1",
      alt:"Company Partner Portfolio",
      imageSrc: "/assets/images/partners/portfolio.png"
    },
    {
      id: "part2",
      alt:"Chartered Insurance Institute of Nigeria logo",
      imageSrc: "/assets/images/partners/insurance-institute.jpg"
    },
    {
      id: "part3",
      alt:"Nigerian Council of Registered Insurance Brokers logo",
      imageSrc: "/assets/images/partners/insurance-brokers.png"
    }
  ],

  corePartners:[
    {
      id: "cp1",
      name:"NDPC",
      logo: "/assets/images/partners/core-partners/NDPC.jpg"
    },
    {
      id: "cp2",
      name:"NITDA",
      logo: "/assets/images/partners/core-partners/NITDA.png"
    },
    {
      id: "cp3",
      name:"Business France",
      logo: "/assets/images/partners/core-partners/business-france.png"
    },
    {
      id: "cp4",
      name:"NAICOM",
      logo: "/assets/images/partners/core-partners/NAICOM.png"
    },
    {
      id: "cp5",
      name:"NCRIB",
      logo: "/assets/images/partners/core-partners/NCRIB.png"
    },
    {
      id: "cp6",
      name:"CIIN",
      logo: "/assets/images/partners/core-partners/CIIN.jpg"
    }
  ],

  regPartners:[
    {
      id: "rp1",
      name:"MIP",
      logo: "/assets/images/partners/partners/mip.jpg"
    },
    {
      id: "rp2",
      name:"Uniswitch",
      logo: "/assets/images/partners/partners/uniswitch.png"
    },
    {
      id: "rp3",
      name:"YOA",
      logo: "/assets/images/partners/partners/yoa.png"
    }
  ],
  clients:[
    {
      id: "cl1",
      name:"Comercio Partners",
      logo: "/assets/images/clients/comercio-partner.png"
    },
    {
      id: "cl2",
      name:"UCH Ibadan",
      logo: "/assets/images/clients/UCH-ibadan.png"
    },
    {
      id: "cl3",
      name:"Fidelity Pension Managers",
      logo: "/assets/images/clients/fidelity.png"
    },
    {
      id: "cl4",
      name:"Citizens Pension",
      logo: "/assets/images/clients/citizens-pension.png"
    },
    {
      id: "cl5",
      name:"Cardinal Stone Pensions",
      logo: "/assets/images/clients/cardinal-stone-pension.png"
    },
    {
      id: "cl6",
      name:"Cornerstone",
      logo: "/assets/images/clients/cornerstone.png"
    },
    {
      id: "cl7",
      name:"AXA Mansard",
      logo: "/assets/images/clients/mansard.png"
    },
    {
      id: "cl8",
      name:"LIRS",
      logo: "/assets/images/clients/LIRS.jpg"
    },
    {
      id: "cl9",
      name:"Justice and Progress",
      logo: "/assets/images/clients/justice-and-progress.png"
    },
    {
      id: "cl10",
      name:"First Guaranty",
      logo: "/assets/images/clients/first-guaranty.jpeg"
    },
    {
      id: "cl11",
      name:"FGI",
      logo: "/assets/images/clients/fgi.jpg"
    },
  ],
  brands:[
    {
      id: "br1",
      name:"Verifimi",
      logo: "/assets/images/brands/verifimi.jpg"
    },
    {
      id: "br2",
      name:"Smart Blue",
      logo: "/assets/images/brands/smart-blue.jpg"
    },
    {
      id: "br3",
      name:"Smart Blue Pay",
      logo: "/assets/images/brands/smart-blue-pay.jpg"
    },
    {
      id: "br4",
      name:"CIDA",
      logo: "/assets/images/brands/cida.png"
    },
    {
      id: "br5",
      name:"DIDA",
      logo: "/assets/images/brands/dida.png"
    },
    {
      id: "br6",
      name:"CIDT",
      logo: "/assets/images/brands/cidt.png"
    },
    {
      id: "br7",
      name:"FPDA",
      logo: "/assets/images/brands/fpda.png"
    },
    {
      id: "br8",
      name:"Aijilytics",
      logo: "/assets/images/brands/aijilytics.jpg"
    }
  ]

  // --- 2. Data for the 'Features' Page (Mapping Product Features) ---
  //   productFeatures: [
  //     {
  //       id: "pf1",
  //       icon: Icon4,
  //       title: "Real-Time Analytics",
  //       description:
  //         "Get immediate insights with our powerful, integrated data processing engine.",
  //       isNew: true,
  //     },
  //     {
  //       id: "pf2",
  //       icon: Icon5,
  //       title: "Secure by Design",
  //       description:
  //         "Built with industry-leading encryption and compliance standards from the ground up.",
  //       isNew: false,
  //     },
  //   ],

  //   // --- 3. Data for the 'Contact' Page (Mapping Office Locations) ---
  //   officeLocations: [
  //     {
  //       city: "New York",
  //       address: "123 Wall St.",
  //       phone: "+1 555 1234",
  //     },
  //     {
  //       city: "London",
  //       address: "45 Parliament Sq.",
  //       phone: "+44 20 7000 0000",
  //     },
  //   ],
};
