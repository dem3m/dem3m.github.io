// EDIT ME: all site content lives here. Put images in /public/images and use e.g. "images/p01.jpg".
export const site = {
  name: "Daniil Em",
  initials: "DE",
  email: "demaerospace@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniilem/",
  github: "https://github.com/your-handle", // placeholder: replace
  resume: "resume.pdf", // place in /public
  year: 2026,
  heroImage: null, // e.g. "images/hero.jpg"
  intro:
    "I'm an Aerospace Engineering student at Embry-Riddle Aeronautical University, specializing in Jet Propulsion with a minor in Systems Engineering. My work focuses on propulsion systems, engineering design, computational simulation, and hands-on development.",
};

// Per-project fields. Anything left null / empty is simply not shown on the page.
// Images go in /public/images (e.g. image: "images/adam-hero.jpg"). Poster goes in /public/files.
const mediaSlots = [
  { src: null, caption: "Caption placeholder" },
  { src: null, caption: "Caption placeholder" },
  { src: null, caption: "Caption placeholder" },
];

export const projects = [
  {
    id: "01",
    title: "Hybrid Microturbine Generator",
    cardImage: "images/project-01/adam-render.png",
    cardLayout: "portrait",
    heroCaption: "ADAM assembly render showing the generator, support structure, and microturbine.",
    contribution: "Co-led ADAM development, with work on intake CFD, material selection, and preliminary structural vibration analysis.",
    highlights: [
      { value: "97.78%", label: "Intake pressure recovery in CFD" },
      { value: "6 kW", label: "Electrical power design target" },
      { value: "2026", label: "Undergraduate research poster award" },
    ],
    taskTitle: "Intake Design and CFD Analysis",
    category: "Propulsion / CFD / Composites",
    summary: "A hybrid turbojet designed to produce 6 kW of power with a peak thrust of 32 kg.",
    role: "Co-leader, Engineer",
    work: ["CAD", "CFD", "Testing", "Composite layup"],
    image: null,
    link: { label: "ADAM WEBSITE ↗", url: null }, // add the ADAM site URL here
    background:
      "Turbojet hybrid engines are a rapidly emerging technology in aerospace. This project, named \u201CADAM\u201D, is a passion project between five student engineers to develop a shippable powerplant product that generates both thrust and usable electric power. We are actively seeking partnerships and grants.",
    grants: [
      "Undergraduate Research Poster of the Year Award 2026 (ERAU)",
      "Engaging Philanthropy in Inquiry & Creativity Grant 2025 (ERAU)",
      "Engaging Philanthropy in Inquiry & Creativity Grant 2026 (ERAU)",
    ],
    poster: null, // e.g. "files/adam-poster.pdf" (put the PDF in /public/files)
    objective:
      "Design and validate a non-uniform air intake, focusing on pressure recovery, turbulence intensity, and material choice.",
    requirements: [
      "Pressure recovery must be greater than or equal to 97.5%",
      "Material must withstand up to 150 \u00B0C",
    ],
    results: [
      "Pressure recovery of 97.78%",
      "3D-printed PPCF intake, able to withstand up to 227 \u00B0C",
    ],
    taskMedia: [
      { src: "images/project-01/totalpressure.png", caption: "Intake CFD: total pressure distribution used to examine pressure losses through the intake and around the generator." },
      { src: "images/project-01/ADAMINTAKETESTING.jpg", caption: "Physical intake testing setup, documenting the hardware stage alongside the CFD work." },
    ],
    researchPoster: {
      title: "Project ADAM: Hybrid Microturbine Power & Propulsion System",
      description: "We presented this research poster at Embry-Riddle Aeronautical University's 2026 undergraduate research symposium, Discovery Day, and received the Undergraduate Research Poster of the Year Award.",
      pdf: "files/adam-research-poster.pdf",
      url: "https://commons.erau.edu/discovery-day/db-discovery-day-2026/poster-session/200/",
    },
    technicalWork: [
      {
        "title": "Structural Vibration Analysis \u2014 Turbine Generator Mount",
        "objective": [
          "Design and evaluate the structural vibration characteristics of a machined AISI 1018 steel bracket supporting a brushless generator mounted to the inlet face of a turbine.",
          "Identify natural frequencies and potential resonance conditions, and evaluate deformation and stress under rotating harmonic excitation."
        ],
        "requirements": [
          "Model the bracket assembly in Fusion 360 and import the geometry into ANSYS Mechanical.",
          "Represent the turbine mounting interface and brushless motor using simplified geometry and equivalent motor mass properties.",
          "Conduct Modal Analysis to identify natural frequencies and corresponding deformation modes.",
          "Refine the finite element mesh and investigate the effects of bracket stiffness and mounting conditions.",
          "Conduct Harmonic Response Analysis over a frequency range of 10\u20132,000 Hz.",
          "Apply frequency-dependent rotating harmonic loads through perpendicular force components with a phase offset.",
          "Evaluate frequency-response displacement and equivalent stress to identify potential resonance and stress concentration regions."
        ],
        "results": [
          "Modal Analysis identified the first natural frequency at approximately 15.238 Hz, with additional higher-order bending and structural vibration modes.",
          "Completed a frequency-dependent Harmonic Response Analysis spanning 10\u20132,000 Hz.",
          "Frequency-response displacement analysis showed a maximum plotted amplitude of approximately 3.0644 \u00d7 10\u207b\u2077 m.",
          "Equivalent stress frequency-response analysis showed a peak plotted amplitude of approximately 98.027 Pa.",
          "Identified differences between low-frequency global bending and higher-frequency localized structural response.",
          "Established a preliminary FEA baseline to support future bracket optimization and further dynamic validation."
        ],
        "note": "Preliminary computational results using simplified motor geometry, idealized connections, and assumed rotating imbalance excitation. These results are not experimentally validated, certified operating limits, or proof of structural safety.",
        "media": [
          {
            "src": "images/project-01/FEACOMPONENT1.png",
            "label": "GENERATOR SUPPORT / FINITE ELEMENT MODEL",
            "caption": "Meshed turbine generator mounting assembly showing the simplified generator geometry, support bracket, and turbine mounting interface."
          },
          {
            "src": "images/project-01/FEACHART2.png",
            "label": "HARMONIC DISPLACEMENT / FREQUENCY RESPONSE",
            "caption": "Frequency-dependent displacement response under rotating harmonic excitation. The analysis identifies structural response peaks throughout the evaluated frequency range."
          },
          {
            "src": "images/project-01/FEACHART1.png",
            "label": "HARMONIC EQUIVALENT STRESS / FREQUENCY RESPONSE",
            "caption": "Equivalent stress response across the excitation frequency range, highlighting the distinction between global displacement and localized structural stress response."
          },
          {
            "src": "images/project-01/FEAWORKBENCH.png",
            "label": "ANSYS WORKBENCH / ANALYSIS WORKFLOW",
            "caption": "ANSYS Workbench workflow linking the Modal and Harmonic Response analyses through shared model data and transferred modal solution data."
          }
        ]
      }
    ],
    other: [],
    media: [
      { src: "images/project-01/RESEARCHEXPO.jpg", caption: "Presenting ADAM research at ERAU's undergraduate research symposium. The project received the 2026 Undergraduate Research Poster of the Year Award.", featured: true },
      { src: "images/project-01/velocitmagnitude1.png", caption: "ANSYS velocity magnitude contour through the hybrid microturbine intake.", uncropped: true },
      { src: "images/project-01/ADAMwireframerender.png", caption: "Wireframe view of the ADAM assembly, showing component arrangement within the integrated powerplant.", uncropped: true },
      { src: "images/project-01/ADAMIRL.jpg", caption: "Physical ADAM hardware, complementing the assembly render and simulation work.", featured: true },
      { src: "images/project-01/ADAMINTAKETESTING2.jpg", caption: "ADAM intake testing." },
      ...mediaSlots.slice(2),
    ],
  },
  {
    id: "02",
    title: "Hybrid eVTOL UAV",
    cardImage: "images/project-02/lilithcfd3.png",
    heroCaption: "CFD pathlines around LILITH, colored by velocity magnitude.",
    contribution: "Performed propeller-flow simulations and developed MATLAB tools to compare motor, propeller, and battery configurations.",
    highlights: [
      { value: "MRF", label: "Propeller-flow simulation method" },
      { value: "MATLAB", label: "Motor and propeller trade studies" },
    ],
    taskTitle: "Propeller Wash Analysis",
    category: "UAV / CFD / Systems Integration",
    summary: "A UAV built for speed, utilizing an innovative hybrid-turbojet powerplant.",
    role: "Simulation and Test Engineer",
    work: ["CAD", "CFD", "MATLAB", "Systems integration"],
    image: "images/project-02/lilithcfd3.png",
    link: { label: "", url: null },
    background:
      "To supplement the ADAM hybrid turbojet, the same team is developing an eVTOL hybrid UAV. This UAV utilizes the turbojet hybrid along with four brushless motors. Along with proving the viability of the ADAM product, this UAV is trying to beat the world record for drone speed.",
    grants: ["Engaging Philanthropy in Inquiry & Creativity Grant 2026 (ERAU)"],
    poster: null,
    objective: "Evaluate propeller wash effects on the drone body.",
    taskMedia: [
      { src: "images/project-02/MRFLILITH.png", caption: "Multiple reference frame (MRF) simulation of propeller flow around the LILITH UAV body." },
    ],
    otherMedia: [
      { src: "images/project-02/fourmotorthrust.png", caption: "MATLAB motor-propeller configuration study: modeled four-motor total thrust and electrical power versus RPM for AOS3220-700KV motors with 10.0 x 4.5 two-blade propellers." },
    ],
    requirements: [], // TODO: add requirements, then they will appear automatically
    results: ["Simulated propeller performance using the multiple reference frame (MRF) method in ANSYS Fluent."],
    other: [
      "Brushless motor and propeller trade study.",
      "MATLAB program to evaluate motor, propeller, and battery configurations against kV, RPM, and thrust requirements.",
    ],
    media: [
      { src: "images/project-02/LILITH.jpg", caption: "The LILITH team with the airframe, connecting the simulation work to the physical aircraft.", featured: true },
      { src: "images/project-02/EDFTesting.jpg", caption: "Electric ducted fan testing as part of UAV propulsion development.", featured: true },
      { src: "images/project-02/lilithwithadam.png", caption: "LILITH and ADAM together, showing the relationship between the airframe and hybrid powerplant.", uncropped: true },
      { src: "images/project-02/MRFLILITH2.png", caption: "LILITH multiple reference frame (MRF) flow simulation, view 2.", uncropped: true },
      ...mediaSlots.slice(2),
    ],
  },
  {
    id: "03",
    title: "Testing and Electronics Integration",
    cardImage: "images/project-03/p100-front.jpg",
    heroCaption: "Assembled aluminum extrusion test cell with the propulsion hardware installed.",
    contribution: "Managed test-cell development and integrated custom DAQ hardware, wireless communication, and real-time Python monitoring.",
    highlights: [
      { value: "200 ms", label: "Required data update interval" },
      { value: "12 V DC", label: "Test-cell power supply" },
      { value: "CSV", label: "Recorded sensor-data output" },
    ],
    taskTitle: "Data Acquisition Hardware and Software",
    category: "Embedded Systems / Experimentation",
    summary:
      "A new aluminum extrusion propulsion test cell designed to safely accommodate different propulsion systems, fitted with custom DAQ hardware and software.",
    role: "Project Manager, Engineer",
    work: ["Embedded systems", "Soldering", "PCB design", "Python", "MATLAB", "LabVIEW", "ESP32", "Arduino"],
    image: "images/project-03/assembled-test-cell.jpg",
    link: { label: "", url: null },
    background:
      "The Experimental Jet Engine Propulsion (XJEP) club at Embry-Riddle specializes in designing and modifying air-breathing engines, primarily microturbines. Testing and data accumulation is vital for club research and project development. From member to Data and Controls Lead to infrastructure project manager, I have redefined the entire testing architecture for the club, both through hardware and software.",
    grants: [],
    poster: null,
    objective:
      "Replace the LabVIEW equipment with a cost-effective alternative, along with creating a terminal that can monitor sensor data in real time.",
    requirements: [
      "Cheaper than the existing alternative",
      "Must record temperature, force, and voltage",
      "Produce precise and accurate data every 200 ms",
      "Must withstand a rough environment: heat and vibration",
      "Operation simple enough to be accessible to other students",
    ],
    results: [
      "DAQ box running on an Arduino\u2013Python architecture",
      "Supports 2 K-type thermocouples, 1 load cell, 2 thermistors, 1 DC voltage sensor, and 1 AC voltage sensor",
      "Operates wirelessly using the test cell's 12 V DC power source",
      "Python program displays all sensor readings in real time, then formats and saves to CSV when the session is complete",
      "Data from stock engine tests align with manufacturer values",
    ],
    taskMedia: [
      { src: "images/project-03/ESP32DAQUpdated.jpg", caption: "Updated ESP32 DAQ hardware supporting the project's sensor monitoring and wireless data acquisition work." },
      { src: "images/project-03/ESP32DAQ.jpg", caption: "Earlier DAQ hardware configuration, retained to show the system's development." },
      { src: "images/project-03/p100-test-stand.jpg", caption: "P100 microturbine mounted on the aluminum extrusion structure, showing the propulsion hardware supported by the test cell." },
    ],
    other: [
      "PCB design",
      "Sensor design and fabrication",
      "Hardware assembly",
      "Standard operating procedure (SOP) development",
    ],
    media: [
      { src: "images/project-03/TESTING1Blurred.jpg", caption: "Daniil Em and Owen Maute, seated, preparing a Kingtech microturbine test with the XJEP team.", featured: true },
      { src: "images/project-03/Testing2.png", caption: "Propulsion testing with the XJEP team, documenting the operational context for the test-cell and DAQ work.", featured: true },
      { src: "images/project-01/ADAMINTAKETESTING.jpg", caption: "ADAM intake testing setup." },
      { src: "images/project-01/ADAMINTAKETESTING2.jpg", caption: "ADAM intake testing." },
      ...mediaSlots.slice(2),
    ],
  },
];

export const expertise = [
  { title: "CAD / Design", skills: ["CATIA V5", "Fusion 360", "GD&T", "Systems Integration"] },
  { title: "CFD / Propulsion", skills: ["ANSYS Fluent", "STAR-CCM+", "RANS CFD", "MRF / Rotating Reference Frames", "Intake Flow Analysis"] },
  { title: "Embedded / Controls", skills: ["Python", "MATLAB", "NI LabVIEW", "Arduino IDE", "KiCad / PCB Design", "Data Acquisition (DAQ)", "Sensor Integration"] },
  { title: "Fabrication / Test", skills: ["Composite Layup", "3D Printing", "Laser-CNC", "Soldering", "MIG / TIG Welding", "Test Cell Instrumentation", "Experimental Testing"] },
];

// Leadership experience displayed on the leadership page.
export const leadership = [
  {
    role: "Treasurer",
    org: "Experimental Jet Engine Propulsion Club",
    dates: "04/2026 - Present",
    people: 10,
    team: "Graduate and undergraduate engineering students",
    focus: "Coordinated with team leads across the organization to meet financial needs while keeping spending within club resources.",
    topics: [],
  },
  {
    role: "Data and Controls Lead",
    org: "Experimental Jet Engine Propulsion Club",
    dates: "04/2025 - 04/2026",
    people: 5,
    team: "Undergraduate engineering students",
    topics: ["Soldering", "Circuit design", "Python in VS Code", "Arduino IDE", "Excel data analysis"],
    outcome: "Migrated the entire DAQ system from LabVIEW to an Arduino-Python configuration that met the organization's data acquisition needs. Prepared the next Data and Controls Lead to work confidently with all of the organization's electronic systems.",
  },
  {
    role: "Club Infrastructure Lead",
    image: "images/leadership/INITIUMblurred.jpg",
    imageCaption: "INITIUM club infrastructure team working together in the workshop.",
    dates: "03/2026 - Present",
    org: "Experimental Jet Engine Propulsion Club",
    people: 10,
    team: "Undergraduate engineering students",
    topics: ["System requirements", "CAD design thinking", "System integration thinking"],
    outcome: "Completed the new test cell in half the projected time.",
    highlight: "50%",
    highlightLabel: "of projected completion time",
  },
  {
    role: "Welding Instructor",
    dates: "05/2025 - 08/2025",
    people: 4,
    team: "High school students",
    topics: ["Basic metal classification", "MIG welding", "TIG welding", "Angle grinding and cutting", "Metalworking methods", "Welding technology: types, purposes and processes"],
    outcome: "Established a welding workshop program and trained two high school volunteers to continue running it after my departure.",
    highlight: "2",
    highlightLabel: "volunteers trained to carry on the program",
  },
  {
    role: "STEM Camp Leader",
    dates: "05/2025 - 08/2025",
    people: 5,
    team: "High school volunteers",
    students: 20,
    studentGroup: "Middle school students",
    topics: ["Fundamental physics", "Basic rocket science", "Model rocketry"],
    outcome: "Introduced and explained fundamental rocket science to middle school students, and operated the camp for its entire duration without injuries or conflicts.",
    image: "images/leadership/Mentoring1.png",
    imageCaption: "STEM camp mentoring and rocket science education.",
  },
];
