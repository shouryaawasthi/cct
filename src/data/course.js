import autocad from '../assets/images/courses/autocad.webp'
import staadPro from '../assets/images/courses/STAAD-Pro.webp'
import etabs from '../assets/images/courses/etabs.webp'
import revit_arch from '../assets/images/courses/revit_arch.webp'
import revit_str from '../assets/images/courses/revit_str.webp'
import threed from '../assets/images/courses/threed.webp'
import quantity from '../assets/images/courses/quantity.webp'
import primavera from '../assets/images/courses/primavera.webp'
import mxroad from '../assets/images/courses/mxroad.webp'
import sketchup from '../assets/images/courses/sketchup.webp'
import interiordesign from '../assets/images/courses/interiordesign.webp'
import msproject from '../assets/images/courses/ms-project.webp'
import automech from '../assets/images/courses/AutoCAD-Mechanical.webp'
import soliworkmech from '../assets/images/courses/solidworks-mechenical.webp'
import creo from '../assets/images/courses/creo.webp'
import catia from '../assets/images/courses/catia.webp'
import nxcad from '../assets/images/courses/nxcad.webp'
import cnc from '../assets/images/courses/cnc2.webp'
import anyes from '../assets/images/courses/anyes.webp'
import revitmep from '../assets/images/courses/revitmep.webp'
import fusion from '../assets/images/courses/fusion.webp'
import electricalcad from '../assets/images/courses/electricalcad.webp'
import plc from '../assets/images/courses/plc.webp'
import iot from '../assets/images/courses/iot.webp'
import scada from '../assets/images/courses/scada.webp'
import matlab from '../assets/images/courses/matlab.webp'
import pcb from '../assets/images/courses/pcb.webp'
import ai from '../assets/images/courses/ai.webp'
import machinelearning from '../assets/images/courses/machinelearning.webp'
import fullstack from '../assets/images/courses/fullstack.webp'
import reactjs from '../assets/images/courses/reactjs.webp'
import mern from '../assets/images/courses/mern.webp'
import devops from '../assets/images/courses/devops.webp'
import graphicdesign from '../assets/images/courses/graphicdesign.webp'
import python from '../assets/images/courses/python.webp'
import webdesign from '../assets/images/courses/webdesign.webp'
import architectureImage from '../assets/images/courses/architectureImage.webp'
import masterArchitectureImage from '../assets/images/courses/masterArchitectureImage.webp'
import furnitureDesignImage from '../assets/images/courses/furnitureDesignImage.webp'
import dcaImage from '../assets/images/courses/dcaImage.webp'
import tallyImage from '../assets/images/courses/tallyImage.webp'
export const course = [
 {
    name: 'AutoCAD for Civil Engineers',
    slug: 'autocad-civil',
    image: autocad,
    description: 'Design and draft using industry-standard tools.',
    category: 'Civil',
    syllabus: [
      { week: 'Week 1', topic: 'Introduction to AutoCAD', detail: 'Explore the AutoCAD interface, navigation, and basic drawing tools.' },
      { week: 'Week 2', topic: '2D Drafting and Design', detail: 'Create 2D plans using lines, polylines, circles, and hatching.' },
      { week: 'Week 3', topic: '3D Modeling and Rendering', detail: 'Introduction to 3D modeling tools and simple renders.' },
      { week: 'Week 4', topic: 'Advanced Drawing Techniques', detail: 'Use blocks, attributes, layers, and dimensioning.' },
      { week: 'Week 5', topic: 'Civil Applications in AutoCAD', detail: 'Apply AutoCAD to real civil projects like site layouts and piping.' },
      { week: 'Week 6', topic: 'Capstone Project', detail: 'Build a complete AutoCAD project from scratch.' },
    ],
  },
  {
    name: 'STAAD.Pro for Structural Design',
    slug: 'staadpro-civil',
    image: staadPro,
    description: 'Analyze and design civil structures using STAAD.Pro.',
    category: 'Civil',
    syllabus: [
      { week: 'Week 1', topic: 'Introduction to STAAD.Pro', detail: 'Learn interface, workflow, and structural modeling basics.' },
      { week: 'Week 2', topic: 'Structural Modeling', detail: 'Model beams, columns, slabs, and assign properties.' },
      { week: 'Week 3', topic: 'Load Applications', detail: 'Apply dead, live, wind, and seismic loads to your model.' },
      { week: 'Week 4', topic: 'Analysis and Results', detail: 'Perform structural analysis and interpret output data.' },
      { week: 'Week 5', topic: 'Design and Optimization', detail: 'Design RCC and steel members as per codes.' },
      { week: 'Week 6', topic: 'Project Work', detail: 'Complete a full design and documentation project.' },
    ],
  },
  {
    name: 'ETABS for Structural Engineering',
    slug: 'etabs-civil',
    image: etabs,
    description: 'Structural modeling and analysis of buildings with ETABS.',
    category: 'Civil',
    syllabus: [
      { week: 'Week 1', topic: 'Introduction to ETABS', detail: 'Overview of ETABS, UI, and creating a new project.' },
      { week: 'Week 2', topic: 'Modeling Structures', detail: 'Model slabs, columns, and beams for multi-story buildings.' },
      { week: 'Week 3', topic: 'Load Definitions', detail: 'Define and assign various load combinations.' },
      { week: 'Week 4', topic: 'Analysis and Results', detail: 'Run static and dynamic analysis and review displacements and forces.' },
      { week: 'Week 5', topic: 'Design and Detailing', detail: 'Design structural members and generate reinforcement details.' },
      { week: 'Week 6', topic: 'Case Study Project', detail: 'Work on a building design case study using ETABS.' },
    ],
  },
  {
    name: 'Revit Architecture',
    slug: 'revit-architecture',
    image: revit_arch,
    description: 'BIM modeling and architectural design using Revit.',
    category: 'Civil',
    syllabus: [
      { week: 'Week 1', topic: 'Getting Started with Revit', detail: 'Learn about Revit interface and BIM principles.' },
      { week: 'Week 2', topic: 'Modeling Architecture Elements', detail: 'Create walls, doors, windows, floors, and ceilings.' },
      { week: 'Week 3', topic: 'Views, Sections & Sheets', detail: 'Generate plans, elevations, sections, and sheets.' },
      { week: 'Week 4', topic: 'Detailing and Documentation', detail: 'Create construction documents and annotations.' },
      { week: 'Week 5', topic: 'Rendering and Walkthroughs', detail: 'Use materials, lighting, and camera paths for visualization.' },
      { week: 'Week 6', topic: 'Final BIM Project', detail: 'Complete a BIM project including full documentation.' },
    ],
  },
  {
    name: 'Revit Structure',
    slug: 'revit-structure',
    image: revit_str,
    description: 'Structural modeling and analysis in Revit for civil engineers.',
    category: 'Civil',
    syllabus: [
      { week: 'Week 1', topic: 'Revit Structure Basics', detail: 'Set up structural templates and levels.' },
      { week: 'Week 2', topic: 'Structural Elements', detail: 'Model beams, columns, footings, and floors.' },
      { week: 'Week 3', topic: 'Reinforcement Tools', detail: 'Add rebars and reinforcement details.' },
      { week: 'Week 4', topic: 'Schedules & Detailing', detail: 'Generate schedules and add construction details.' },
      { week: 'Week 5', topic: 'Collaboration in BIM', detail: 'Work with architectural models and use coordination tools.' },
      { week: 'Week 6', topic: 'Project Delivery', detail: 'Produce deliverables for a structural design project.' },
    ],
  },
  {
    name: '3ds Max and V-Ray for Visualization',
    slug: '3dsmax-vray',
    image: threed,
    description: 'High-quality 3D modeling and rendering for architecture.',
    category: 'Civil',
    syllabus: [
      { week: 'Week 1', topic: 'Intro to 3ds Max', detail: 'Interface overview, navigation, and basic objects.' },
      { week: 'Week 2', topic: 'Architectural Modeling', detail: 'Create walls, floors, doors, and custom elements.' },
      { week: 'Week 3', topic: 'Texturing and Materials', detail: 'Apply realistic materials and textures.' },
      { week: 'Week 4', topic: 'Lighting and Cameras', detail: 'Set up daylight, interior lights, and camera views.' },
      { week: 'Week 5', topic: 'Rendering with V-Ray', detail: 'Render photorealistic scenes using V-Ray settings.' },
      { week: 'Week 6', topic: 'Project Presentation', detail: 'Create a full walkthrough animation or rendered stills.' },
    ],
  },
  {
    name: 'Quantity Takeoff and Cost Estimation',
    slug: 'quantity-takeoff',
    image: quantity,
    description: 'Learn quantity surveying, BOQ creation, and cost planning.',
    category: 'Civil',
    syllabus: [
      { week: 'Week 1', topic: 'Introduction to Estimation', detail: 'Basics of construction cost estimation and tendering.' },
      { week: 'Week 2', topic: 'Quantity Takeoff Methods', detail: 'Manual and digital takeoff for civil components.' },
      { week: 'Week 3', topic: 'Rate Analysis', detail: 'Labor, material, and equipment cost calculations.' },
      { week: 'Week 4', topic: 'BOQ and Tender Preparation', detail: 'Bill of quantities formatting and tender documentation.' },
      { week: 'Week 5', topic: 'Cost Control Techniques', detail: 'Tracking and adjusting budgets during execution.' },
      { week: 'Week 6', topic: 'Case Study', detail: 'Estimation project based on real construction drawings.' },
    ],
  },
  {
    name: 'Primavera P6 for Project Management',
    slug: 'primavera-civil',
    image: primavera,
    description: 'Plan, schedule, and track projects with Primavera P6.',
    category: 'Civil',
    syllabus: [
      { week: 'Week 1', topic: 'Project Setup and Calendar', detail: 'Create project calendars, WBS, and activities.' },
      { week: 'Week 2', topic: 'Scheduling and Relationships', detail: 'Define dependencies and schedule your project.' },
      { week: 'Week 3', topic: 'Resources and Costs', detail: 'Assign and track labor, material, and costs.' },
      { week: 'Week 4', topic: 'Baselines and Progress', detail: 'Track project progress and performance.' },
      { week: 'Week 5', topic: 'Reports and Layouts', detail: 'Generate custom reports and layouts.' },
      { week: 'Week 6', topic: 'Final Project', detail: 'Develop a full construction schedule in Primavera.' },
    ],
  },
  {
    name: 'Microsoft Project for Civil Engineers',
    slug: 'msproject-civil',
    image: msproject,
    description: 'Manage construction timelines and resources with MS Project.',
    category: 'Civil',
    syllabus: [
      { week: 'Week 1', topic: 'Introduction to MS Project', detail: 'Project creation, task lists, and Gantt charts.' },
      { week: 'Week 2', topic: 'Task Linking and Scheduling', detail: 'Add dependencies, constraints, and calendar settings.' },
      { week: 'Week 3', topic: 'Resources and Costs', detail: 'Allocate resources and track costs over time.' },
      { week: 'Week 4', topic: 'Tracking Progress', detail: 'Set baselines and track actual vs planned performance.' },
      { week: 'Week 5', topic: 'Reports and Dashboards', detail: 'Use built-in reports and visual dashboards.' },
      { week: 'Week 6', topic: 'Capstone Project', detail: 'Develop a detailed project schedule and cost tracking model.' },
    ],
  },
  {
    name: 'MX Road Design',
    slug: 'mx-road',
    image:mxroad,
    description: 'Design road infrastructure with Bentley MX Road.',
    category: 'Civil',
    syllabus: [
      { week: 'Week 1', topic: 'MX Road Overview', detail: 'Introduction to road design concepts and software UI.' },
      { week: 'Week 2', topic: 'Data Input and Survey', detail: 'Import and use survey data for alignment design.' },
      { week: 'Week 3', topic: 'Horizontal & Vertical Alignment', detail: 'Design road centerline and vertical profiles.' },
      { week: 'Week 4', topic: 'Cross Sections & Templates', detail: 'Create pavement templates and apply cross-sections.' },
      { week: 'Week 5', topic: 'Quantity Reports & Outputs', detail: 'Generate road quantities and earthwork calculations.' },
      { week: 'Week 6', topic: 'Road Project Compilation', detail: 'Finalize a road project with full design deliverables.' },
    ],
  },
  {
    name: 'Google SketchUp for Civil Design',
    slug: 'sketchup-civil',
    image: sketchup,
    description: 'Quick and easy 3D modeling for civil concepts.',
    category: 'Civil',
    syllabus: [
      { week: 'Week 1', topic: 'Getting Started with SketchUp', detail: 'UI overview, drawing tools, and object manipulation.' },
      { week: 'Week 2', topic: 'Architectural Modeling', detail: 'Create buildings, slabs, roofs, and openings.' },
      { week: 'Week 3', topic: 'Components and Groups', detail: 'Create reusable elements and manage model hierarchy.' },
      { week: 'Week 4', topic: 'Materials and Scenes', detail: 'Apply textures and create scene transitions.' },
      { week: 'Week 5', topic: 'Exporting and Layouts', detail: 'Export drawings and prepare presentations with LayOut.' },
      { week: 'Week 6', topic: 'Design Challenge', detail: 'Model and present a civil concept using SketchUp.' },
    ],
  },
  {
    name: 'Interior Design for Civil Spaces',
    slug: 'interior-civil',
    image: interiordesign,
    description: 'Design interior spaces from concept to visualization.',
    category: 'Civil',
    syllabus: [
      { week: 'Week 1', topic: 'Principles of Interior Design', detail: 'Learn space planning, ergonomics, and style.' },
      { week: 'Week 2', topic: 'Furniture and Layouts', detail: 'Design room layouts, select furniture, and materials.' },
      { week: 'Week 3', topic: 'Color and Lighting', detail: 'Apply color theory and lighting techniques.' },
      { week: 'Week 4', topic: '3D Visualization', detail: 'Use SketchUp/3ds Max for visualizing interiors.' },
      { week: 'Week 5', topic: 'Budgeting and Estimation', detail: 'Estimate interior project costs and sourcing.' },
      { week: 'Week 6', topic: 'Interior Project', detail: 'Complete a full room or apartment interior design.' },
    ],
  },
  // mechenical
  {
    name: 'AutoCAD for Mechanical Engineers',
    slug: 'autocad-mech',
    image: automech,
    description: '2D drafting and basic 3D modeling for mechanical design.',
    category: 'Mechanical',
    syllabus: [
      { week: 'Week 1', topic: 'AutoCAD Basics', detail: 'UI, drawing tools, layers, and precision drafting.' },
      { week: 'Week 2', topic: '2D Mechanical Drafting', detail: 'Dimensioning, tolerance, and mechanical symbols.' },
      { week: 'Week 3', topic: 'Assemblies & Blocks', detail: 'Creating reusable blocks and simple assembly drawings.' },
      { week: 'Week 4', topic: 'Sheet Set & Layouts', detail: 'Prepare detailed sheet layouts and title blocks.' },
      { week: 'Week 5', topic: 'Intro to 3D in AutoCAD', detail: 'Basic extrusion, revolve, and view tools.' },
      { week: 'Week 6', topic: 'Mini Capstone', detail: 'Produce a mechanical drawing set using all learned tools.' },
    ],
  },
  {
    name: 'SolidWorks Fundamentals',
    slug: 'solidworks-mech',
    image: soliworkmech,
    description: 'Complete 3D modeling and mechanical simulation basics.',
    category: 'Mechanical',
    syllabus: [
      { week: 'Week 1', topic: 'Interface & Sketching', detail: 'Start with basic shapes, constraints, and relations.' },
      { week: 'Week 2', topic: '3D Features', detail: 'Extrude, revolve, fillet, shell, and pattern features.' },
      { week: 'Week 3', topic: 'Assembly Modeling', detail: 'Build multi-part assemblies with constraints.' },
      { week: 'Week 4', topic: 'Drawing Production', detail: 'Generate 2D drawings from models with annotations.' },
      { week: 'Week 5', topic: 'Basic Simulation', detail: 'Apply static load tests and design validation.' },
      { week: 'Week 6', topic: 'Project Work', detail: 'Create a full part-to-assembly project.' },
    ],
  },
  {
    name: 'Creo Parametric',
    slug: 'creo-mech',
    image: creo,
    description: 'Parametric 3D CAD design with Creo.',
    category: 'Mechanical',
    syllabus: [
      { week: 'Week 1', topic: 'Creo Workflow', detail: 'Learn the Creo interface and sketch tools.' },
      { week: 'Week 2', topic: 'Feature Modeling', detail: 'Use extrude, revolve, and the feature tree.' },
      { week: 'Week 3', topic: 'Part Design & Modification', detail: 'Edit features and build complex parts.' },
      { week: 'Week 4', topic: 'Assembly & Constraints', detail: 'Assemble multi-component models.' },
      { week: 'Week 5', topic: '2D Drawing Production', detail: 'Generate annotated 2D drawings from 3D.' },
      { week: 'Week 6', topic: 'Capstone Project', detail: 'Complete a parametric assembly and drawings.' },
    ],
  },
  {
    name: 'CATIA V5 for Mechanical Design',
    slug: 'catia-v5-mech',
    image: catia,
    description: 'Advanced surface and solid modeling in CATIA V5.',
    category: 'Mechanical',
    syllabus: [
      { week: 'Week 1', topic: 'CATIA Interface', detail: 'Set up part design environment, sketch basics.' },
      { week: 'Week 2', topic: 'Solid Modeling Tools', detail: 'Use pad, pocket, hole, fillet, and draft.' },
      { week: 'Week 3', topic: 'Advanced Modeling', detail: 'Loft, sweep, patterns, and shell tools.' },
      { week: 'Week 4', topic: 'Assembly Design', detail: 'Create and constrain multi-part assemblies.' },
      { week: 'Week 5', topic: 'Drafting & Detailing', detail: 'Produce 2D drawings with dimensions and sections.' },
      { week: 'Week 6', topic: 'Multi-Part Project', detail: 'Build a complete assembly with detail sheets.' },
    ],
  },
  {
    name: 'Siemens NX CAD',
    slug: 'nx-cad-mech',
    image: nxcad,
    description: 'Professional-grade modeling with Siemens NX.',
    category: 'Mechanical',
    syllabus: [
      { week: 'Week 1', topic: 'NX Interface', detail: 'Sketching, constraints, and part modeling.' },
      { week: 'Week 2', topic: 'Parametric Design', detail: 'Feature-based workflow and parametric control.' },
      { week: 'Week 3', topic: 'Advanced Surfaces', detail: 'Complex surface modeling techniques.' },
      { week: 'Week 4', topic: 'Assembly & PMI', detail: 'Model assemblies and add product manufacturing info.' },
      { week: 'Week 5', topic: 'Drafting & Templates', detail: 'Generate drawing templates and annotations.' },
      { week: 'Week 6', topic: 'Capstone Assembly', detail: 'Build and document a full mechanical assembly.' },
    ],
  },
  {
    name: 'CNC Programming',
    slug: 'cnc-programming',
    image: cnc,
    description: 'Manual and G‑code based CNC programming.',
    category: 'Mechanical',
    syllabus: [
      { week: 'Week 1', topic: 'CNC Basics', detail: 'Understand CNC setup, coordinate systems, and G‑codes.' },
      { week: 'Week 2', topic: '2‑Axis Milling G‑Codes', detail: 'Write part programs for milling operations manually.' },
      { week: 'Week 3', topic: 'Drilling & Turning Codes', detail: 'Program basic turn-mill and drilling operations.' },
      { week: 'Week 4', topic: 'Macro Programming', detail: 'Use subprograms, loops, and conditional statements.' },
      { week: 'Week 5', topic: 'Simulation & Troubleshooting', detail: 'Verify code with simulation software.' },
      { week: 'Week 6', topic: 'Hands‑On Project', detail: 'Execute a CNC run and optimize the program.' },
    ],
  },
  {
    name: 'ANSYS Mechanical',
    slug: 'ansys-mech',
    image: anyes,
    description: 'Static and modal analysis in ANSYS Mechanical.',
    category: 'Mechanical',
    syllabus: [
      { week: 'Week 1', topic: 'ANSYS UI & Model Setup', detail: 'Import geometry, mesh settings, and boundary conditions.' },
      { week: 'Week 2', topic: 'Static Structural Analysis', detail: 'Run linear static load cases.' },
      { week: 'Week 3', topic: 'Modal & Frequency Analysis', detail: 'Find natural frequencies and mode shapes.' },
      { week: 'Week 4', topic: 'Thermal‑Structural Coupling', detail: 'Perform thermal-structural coupled analyses.' },
      { week: 'Week 5', topic: 'Non‑Linear & Contact Analysis', detail: 'Model contact, material nonlinearities.' },
      { week: 'Week 6', topic: 'ANSYS Project', detail: 'Apply analysis to a real mechanical design.' },
    ],
  },
  {
    name: 'Revit MEP for Mechanical Engineers',
    slug: 'revit-mep',
    image: revitmep,
    description: 'Design mechanical, electrical, and plumbing systems in Revit.',
    category: 'Mechanical',
    syllabus: [
      { week: 'Week 1', topic: 'MEP Interface & Templates', detail: 'Set up MEP project environment.' },
      { week: 'Week 2', topic: 'HVAC System Design', detail: 'Model ducts, AHUs, diffusers, and analysis.' },
      { week: 'Week 3', topic: 'Piping for Plumbing', detail: 'Design piping systems and fixtures.' },
      { week: 'Week 4', topic: 'Electrical Distribution', detail: 'Create lighting, panel schedules.' },
      { week: 'Week 5', topic: 'Coordination & Clash Detection', detail: 'Use Navisworks and Revit collaboration tools.' },
      { week: 'Week 6', topic: 'MEP Project', detail: 'Finalize a full MEP BIM model.' },
    ],
  },
  {
    name: 'Fusion 360 for Mechanical Design',
    slug: 'fusion360-mech',
    image: fusion,
    description: 'Cloud-based CAD/CAM/CAE design in Fusion 360.',
    category: 'Mechanical',
    syllabus: [
      { week: 'Week 1', topic: 'Interface & Sketching', detail: 'Learn sketch constraints and parametric design.' },
      { week: 'Week 2', topic: '3D Modeling Tools', detail: 'Extrude, loft, sweep, and form modeling.' },
      { week: 'Week 3', topic: 'Assembly & Joints', detail: 'Assemble multi-part designs and motion.' },
      { week: 'Week 4', topic: 'Simulation & Analysis', detail: 'Run static stress and motion studies.' },
      { week: 'Week 5', topic: 'CAM Toolpaths', detail: 'Generate CNC toolpaths from your model.' },
      { week: 'Week 6', topic: 'Fusion Project', detail: 'Complete a full CAD/CAM workflow project.' },
    ],
  },
  //electrical
  {
    name: 'Electrical CAD Design',
    slug: 'electrical-cad',
    image: electricalcad,
    description: 'Circuit layout and electrical schematics.',
    category: 'Electrical',
    syllabus: [
      { week: 'Week 1', topic: 'Introduction to Electrical CAD', detail: 'Overview of CAD software and schematic tools.' },
      { week: 'Week 2', topic: 'Electrical Schematics', detail: 'Create multi-line and single-line diagrams.' },
      { week: 'Week 3', topic: 'Component Placement & Wiring', detail: 'Place symbols and route wires accurately.' },
      { week: 'Week 4', topic: 'Power Distribution Systems', detail: 'Design busbars, panels, and circuit protections.' },
      { week: 'Week 5', topic: 'Automation in CAD', detail: 'Use layers, blocks, and macros to speed design.' },
      { week: 'Week 6', topic: 'Capstone Project', detail: 'Build a finalized schematic set for an electrical panel.' },
    ],
  },
  {
    name: 'PLC Programming for Industry',
    slug: 'plc-electrical',
    image: plc,
    description: 'Automation and control system basics.',
    category: 'Electrical',
    syllabus: [
      { week: 'Week 1', topic: 'PLCs & Architecture', detail: 'Study PLC structure and industrial uses.' },
      { week: 'Week 2', topic: 'Ladder Logic Programming', detail: 'Write basic ladder programs for I/O control.' },
      { week: 'Week 3', topic: 'Timers & Counters', detail: 'Integrate timers, counters, and comparison logic.' },
      { week: 'Week 4', topic: 'Advanced Instruction Sets', detail: 'Use data tables, shift registers, and maths.' },
      { week: 'Week 5', topic: 'HMI & SCADA Integration', detail: 'Connect PLC to HMI screens and SCADA systems.' },
      { week: 'Week 6', topic: 'Final Project', detail: 'Implement a control system with PLC & HMI.' },
    ],
  },
  {
    name: 'IoT with Arduino',
    slug: 'iot-arduino',
    image: iot,
    description: 'Learn IoT development with Arduino and integrate smart devices.',
    category: 'Electrical',
    syllabus: [
      { week: 'Week 1', topic: 'Intro to IoT & Arduino', detail: 'Set up Arduino IDE and basic I/O experiments.' },
      { week: 'Week 2', topic: 'Sensors & Actuators', detail: 'Read sensors and control motors/relays.' },
      { week: 'Week 3', topic: 'IoT Communication', detail: 'Use WiFi, MQTT, HTTP to connect devices.' },
      { week: 'Week 4', topic: 'Data Logging', detail: 'Record sensor data locally and remotely.' },
      { week: 'Week 5', topic: 'Cloud & Dashboards', detail: 'Visualize data using cloud platforms.' },
      { week: 'Week 6', topic: 'IoT Capstone', detail: 'Create a full IoT device with remote monitoring.' },
    ],
  },
  {
    name: 'SCADA Systems',
    slug: 'scada-elec',
    image: scada,
    description: 'Supervisory control and data acquisition systems.',
    category: 'Electrical',
    syllabus: [
      { week: 'Week 1', topic: 'SCADA Overview', detail: 'SCADA architecture, RTUs, PLC interfaces.' },
      { week: 'Week 2', topic: 'HMI Configuration', detail: 'Design screens and graphical control interfaces.' },
      { week: 'Week 3', topic: 'PLC Integration', detail: 'Connect live SCADA panels to PLCs.' },
      { week: 'Week 4', topic: 'Alarm & Event Handling', detail: 'Configure alarms, logs, and event triggers.' },
      { week: 'Week 5', topic: 'Data Reporting & Graphs', detail: 'Create trends, dashboards, historical logs.' },
      { week: 'Week 6', topic: 'SCADA Project', detail: 'Set up a SCADA control room prototype.' },
    ],
  },
  {
    name: 'MATLAB & Simulink for Electrical Systems',
    slug: 'matlab-simulink-elec',
    image: matlab,
    description: 'Model, simulate, and analyze electrical systems with MATLAB.',
    category: 'Electrical',
    syllabus: [
      { week: 'Week 1', topic: 'MATLAB Basics', detail: 'Command window, scripts, variables.' },
      { week: 'Week 2', topic: 'Control Structures & Data', detail: 'Loops, arrays, functions.' },
      { week: 'Week 3', topic: 'Simulink Modeling', detail: 'Build block diagrams and run simulations.' },
      { week: 'Week 4', topic: 'Electrical Toolboxes', detail: 'Use Simscape Electrical components.' },
      { week: 'Week 5', topic: 'Control Systems & PID Design', detail: 'Implement controllers in Simulink.' },
      { week: 'Week 6', topic: 'Simulation Project', detail: 'Build a power electronics or control simulation.' },
    ],
  },
  {
    name: 'PCB Design with Eagle',
    slug: 'pcb-eagle-elec',
    image: pcb,
    description: 'Design and fabricate printed circuit boards using Eagle.',
    category: 'Electrical',
    syllabus: [
      { week: 'Week 1', topic: 'Eagle Schematic Capture', detail: 'Draw component symbols and nets.' },
      { week: 'Week 2', topic: 'PCB Layout', detail: 'Place footprints and route signals.' },
      { week: 'Week 3', topic: 'Design Rule Checks', detail: 'Define clearance, trace width, and DRC rules.' },
      { week: 'Week 4', topic: 'Gerber Generation', detail: 'Output Gerber files for fabrication.' },
      { week: 'Week 5', topic: 'Assembly Documentation', detail: 'Create BOM and pick-and-place files.' },
      { week: 'Week 6', topic: 'PCB Prototype Project', detail: 'Design a complete PCB for small electronics.' },
    ],
  },
 
  //cs
  {
    name: 'Artificial Intelligence Fundamentals',
    slug: 'ai-fundamentals',
    image: ai,
    description: 'Learn core AI concepts including search, logic, and decision-making.',
    category: 'CS & IT',
    syllabus: [
      { week: 'Week 1', topic: 'Intro to AI', detail: 'History, applications, and problem-solving agents.' },
      { week: 'Week 2', topic: 'Search Algorithms', detail: 'Uninformed and informed search techniques.' },
      { week: 'Week 3', topic: 'Knowledge Representation', detail: 'Logic, ontologies, and semantic networks.' },
      { week: 'Week 4', topic: 'Planning & Decision Trees', detail: 'AI planning with STRIPS and decision models.' },
      { week: 'Week 5', topic: 'Natural Language Basics', detail: 'Text processing and understanding semantics.' },
      { week: 'Week 6', topic: 'AI Project', detail: 'Build a rule-based or search-based AI application.' },
    ],
  },
  {
    name: 'Machine Learning with Python',
    slug: 'machine-learning-python',
    image: machinelearning,
    description: 'Fundamentals of machine learning tailored for engineers.',
    category: 'CS & IT',
    syllabus: [
      { week: 'Week 1', topic: 'Intro to Machine Learning', detail: 'Supervised, unsupervised, and reinforcement learning.' },
      { week: 'Week 2', topic: 'Data Preprocessing', detail: 'Cleaning, normalization, and feature engineering.' },
      { week: 'Week 3', topic: 'Regression & Classification', detail: 'Linear regression, logistic regression, SVMs.' },
      { week: 'Week 4', topic: 'Decision Trees & Clustering', detail: 'Random forest, KNN, K-means.' },
      { week: 'Week 5', topic: 'Model Evaluation', detail: 'Cross-validation, confusion matrix, ROC curves.' },
      { week: 'Week 6', topic: 'Final ML Project', detail: 'Deploy a predictive model on real-world data.' },
    ],
  },
  {
    name: 'Full Stack Web Development',
    slug: 'fullstack-webdev',
    image: fullstack,
    description: 'Learn complete web development from frontend to backend.',
    category: 'CS & IT',
    syllabus: [
      { week: 'Week 1', topic: 'HTML, CSS & Responsive Design', detail: 'Page structure, styling, Flexbox, and media queries.' },
      { week: 'Week 2', topic: 'JavaScript & DOM', detail: 'Interactivity, events, and modern JavaScript.' },
      { week: 'Week 3', topic: 'Backend with Node.js & Express', detail: 'RESTful APIs, middleware, and routing.' },
      { week: 'Week 4', topic: 'Databases with MongoDB', detail: 'Schemas, CRUD operations, and Mongoose.' },
      { week: 'Week 5', topic: 'User Auth & Deployment', detail: 'JWT, bcrypt, and hosting on Vercel/Render.' },
      { week: 'Week 6', topic: 'Capstone Web App', detail: 'Build a complete project with frontend/backend.' },
    ],
  },
  {
    name: 'React.js Development',
    slug: 'react-js',
    image: reactjs,
    description: 'Build dynamic UI applications using React.',
    category: 'CS & IT',
    syllabus: [
      { week: 'Week 1', topic: 'React & JSX Basics', detail: 'Intro to components and React DOM.' },
      { week: 'Week 2', topic: 'Props & State', detail: 'Manage component state and pass props.' },
      { week: 'Week 3', topic: 'Event Handling & Hooks', detail: 'UseEffect, UseState, and custom hooks.' },
      { week: 'Week 4', topic: 'Routing with React Router', detail: 'Implement navigation and dynamic routes.' },
      { week: 'Week 5', topic: 'Redux & Context API', detail: 'State management and data flow.' },
      { week: 'Week 6', topic: 'React Project', detail: 'Build a fully functional single-page app.' },
    ],
  },
  {
    name: 'MERN Stack Mastery',
    slug: 'mern-stack',
    image: mern,
    description: 'Master MongoDB, Express, React, and Node.js.',
    category: 'CS & IT',
    syllabus: [
      { week: 'Week 1', topic: 'React & UI Setup', detail: 'Frontend layout using React and Tailwind.' },
      { week: 'Week 2', topic: 'API Development with Express', detail: 'CRUD APIs with authentication and routes.' },
      { week: 'Week 3', topic: 'MongoDB Integration', detail: 'Model schemas, relationships, and validations.' },
      { week: 'Week 4', topic: 'JWT Auth & Security', detail: 'Login, registration, and access tokens.' },
      { week: 'Week 5', topic: 'Frontend Integration', detail: 'Connect backend APIs to React frontend.' },
      { week: 'Week 6', topic: 'Deployment & Capstone', detail: 'Deploy full MERN app to the cloud.' },
    ],
  },
  {
    name: 'DevOps Fundamentals',
    slug: 'devops',
    image: devops,
    description: 'Learn CI/CD, containers, and cloud deployment.',
    category: 'CS & IT',
    syllabus: [
      { week: 'Week 1', topic: 'DevOps Concepts & Tools', detail: 'DevOps lifecycle, Git, and workflow.' },
      { week: 'Week 2', topic: 'CI/CD with Jenkins & GitHub', detail: 'Automate builds and tests.' },
      { week: 'Week 3', topic: 'Containerization with Docker', detail: 'Docker images, containers, volumes.' },
      { week: 'Week 4', topic: 'Orchestration with Kubernetes', detail: 'Pods, services, scaling.' },
      { week: 'Week 5', topic: 'Monitoring & Logging', detail: 'Prometheus, Grafana, and ELK stack.' },
      { week: 'Week 6', topic: 'Cloud Deployment', detail: 'Deploy apps to AWS/GCP/Azure.' },
    ],
  },
  {
    name: 'Graphic Design Essentials',
    slug: 'graphic-design',
    image: graphicdesign,
    description: 'Learn design principles, tools, and creative workflows.',
    category: 'CS & IT',
    syllabus: [
      { week: 'Week 1', topic: 'Design Principles', detail: 'Typography, color theory, and composition.' },
      { week: 'Week 2', topic: 'Adobe Photoshop', detail: 'Photo editing, layers, and effects.' },
      { week: 'Week 3', topic: 'Illustrator & Vector Art', detail: 'Create logos and vector graphics.' },
      { week: 'Week 4', topic: 'Canva & Web Assets', detail: 'Quick graphics for social and web.' },
      { week: 'Week 5', topic: 'Branding & Portfolio', detail: 'Build personal branding assets.' },
      { week: 'Week 6', topic: 'Final Design Project', detail: 'Submit and present your design portfolio.' },
    ],
  },
  {
    name: 'Python Programming',
    slug: 'python-programming',
    image: python,
    description: 'Core programming skills for software engineers.',
    category: 'CS & IT',
    syllabus: [
      { week: 'Week 1', topic: 'Intro to Python', detail: 'Syntax, variables, and data types.' },
      { week: 'Week 2', topic: 'Control Flow & Functions', detail: 'Loops, conditionals, and reusable code.' },
      { week: 'Week 3', topic: 'Data Structures', detail: 'Lists, dictionaries, sets, and tuples.' },
      { week: 'Week 4', topic: 'OOP in Python', detail: 'Classes, objects, inheritance, encapsulation.' },
      { week: 'Week 5', topic: 'File I/O & Error Handling', detail: 'Read/write files, exception handling.' },
      { week: 'Week 6', topic: 'Mini Project', detail: 'Build a CLI tool or web scraper.' },
    ],
  },
  {
    name: 'Web Design & UI/UX',
    slug: 'web-design-uiux',
    image: webdesign,
    description: 'Design modern websites with a focus on UX and UI principles.',
    category: 'CS & IT',
    syllabus: [
      { week: 'Week 1', topic: 'UI/UX Foundations', detail: 'Wireframing, user research, and prototyping.' },
      { week: 'Week 2', topic: 'Design Tools: Figma & XD', detail: 'Create mockups, components, and style guides.' },
      { week: 'Week 3', topic: 'Responsive Layouts', detail: 'Design for multiple screen sizes.' },
      { week: 'Week 4', topic: 'Accessibility & Aesthetics', detail: 'Design inclusive and visually pleasing interfaces.' },
      { week: 'Week 5', topic: 'Handoff to Developers', detail: 'Prepare assets and code specs.' },
      { week: 'Week 6', topic: 'Final UI/UX Project', detail: 'Design a multi-page website prototype.' },
    ],
  },
  //other
  {
  name: 'Diploma in Architecture & Civil Design',
  slug: 'architecture-civil-design',
  image: architectureImage, 
  description: 'Learn the essentials of architectural design and civil planning using industry-standard tools and principles.',
  category: 'Other',
  syllabus: [
    { week: 'Week 1', topic: 'Introduction to Architecture', detail: 'Basic principles, scales, and drawing tools.' },
    { week: 'Week 2', topic: 'AutoCAD for Civil Design', detail: '2D drafting and construction plans.' },
    { week: 'Week 3', topic: '3D Modeling with SketchUp', detail: 'Basic modeling, visualization, and walkthroughs.' },
    { week: 'Week 4', topic: 'Building Codes & Regulations', detail: 'Understanding municipal codes and structural norms.' },
    { week: 'Week 5', topic: 'Structural Design Basics', detail: 'Foundations, RCC, steel, and load calculations.' },
    { week: 'Week 6', topic: 'Project: Residential Layout Plan', detail: 'Create and present a full site layout with drawings.' },
  ],
},
{
  name: 'Master Diploma in Architecture & Interior Design',
  slug: 'master-architecture-interior-design',
  image: masterArchitectureImage,
  description: 'Comprehensive training in architectural and interior design using software and manual drafting techniques.',
  category: 'Other',
  syllabus: [
    { week: 'Week 1', topic: 'Interior Design Principles', detail: 'Space planning, color theory, and materials.' },
    { week: 'Week 2', topic: 'AutoCAD & 3D Max', detail: '2D & 3D drawing for architecture and interiors.' },
    { week: 'Week 3', topic: 'Lighting and Ventilation Design', detail: 'Functional and aesthetic lighting strategies.' },
    { week: 'Week 4', topic: 'Furniture & Fixture Planning', detail: 'Built-in and loose furniture layouts.' },
    { week: 'Week 5', topic: 'Estimation and Costing', detail: 'Project budgeting and material cost analysis.' },
    { week: 'Week 6', topic: 'Final Interior Design Project', detail: 'Design and presentation of a complete interior layout.' },
  ],
},
{
  name: 'Diploma in Furniture Design',
  slug: 'furniture-design',
  image: furnitureDesignImage,
  description: 'Master the art of designing functional and aesthetic furniture with practical tools and software.',
  category: 'Other',
  syllabus: [
    { week: 'Week 1', topic: 'Design Fundamentals', detail: 'Ergonomics, trends, and material selection.' },
    { week: 'Week 2', topic: 'AutoCAD & Sketching', detail: '2D drafting and basic sketching for furniture.' },
    { week: 'Week 3', topic: '3D Modeling for Furniture', detail: 'Use of 3ds Max or SketchUp for design.' },
    { week: 'Week 4', topic: 'Joinery & Construction Techniques', detail: 'Common joints and carpentry methods.' },
    { week: 'Week 5', topic: 'Presentation Boards', detail: 'Renderings, mood boards, and sample materials.' },
    { week: 'Week 6', topic: 'Final Furniture Prototype Design', detail: 'Design a full custom furniture piece.' },
  ],
},
{
  name: 'Diploma in Computer Applications (DCA)',
  slug: 'dca',
  image: dcaImage,
  description: 'Foundational computer course covering office tools, internet, and software fundamentals.',
  category: 'Other',
  syllabus: [
    { week: 'Week 1', topic: 'Computer Fundamentals', detail: 'Hardware, software, OS, input/output devices.' },
    { week: 'Week 2', topic: 'MS Word & Excel', detail: 'Document formatting, formulas, charts, and tables.' },
    { week: 'Week 3', topic: 'MS PowerPoint & Outlook', detail: 'Slides, presentations, and email handling.' },
    { week: 'Week 4', topic: 'Internet & Email', detail: 'Browsing, search engines, attachments, safety.' },
    { week: 'Week 5', topic: 'Basics of Programming', detail: 'Intro to logic building and pseudocode.' },
    { week: 'Week 6', topic: 'Final Lab Test & Project', detail: 'Project using Office tools with full evaluation.' },
  ],
},
{
  name: 'Tally with GST',
  slug: 'tally-gst',
  image: tallyImage,
  description: 'Learn computerized accounting with Tally ERP 9 and GST filing essentials.',
  category: 'Other',
  syllabus: [
    { week: 'Week 1', topic: 'Introduction to Accounting & Tally', detail: 'Ledger creation and voucher entry.' },
    { week: 'Week 2', topic: 'Inventory & Taxation', detail: 'Stock groups, GST setup, and invoice creation.' },
    { week: 'Week 3', topic: 'Banking & Payroll', detail: 'Bank reconciliation and salary entries.' },
    { week: 'Week 4', topic: 'GST Reports & Returns', detail: 'GSTR1, GSTR3B filing with practice.' },
    { week: 'Week 5', topic: 'Advanced Accounting', detail: 'Cost centers, budgets, and interest calculations.' },
    { week: 'Week 6', topic: 'Final Accounting Project', detail: 'Simulate a company’s accounts for a full quarter.' },
  ],
}


];


