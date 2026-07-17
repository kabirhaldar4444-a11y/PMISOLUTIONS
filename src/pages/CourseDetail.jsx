import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';
import { courseDetailMap, professionalCatalog, popularPrograms } from '../data/coursesData';
import { FaGraduationCap, FaClock, FaTag, FaCheckCircle, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import ReadyImage from '../assets/images/ready_to_get_started.jpg';

const getDurationRange = (courseId) => {
  const rangeMap = {
    // Popular programs
    "self-confidencebuildingtraining":          "35 to 50 Hours",
    "resiliencecoachtraining":                  "25 to 40 Hours",
    "motivationalspeakertraining":              "35 to 50 Hours",
    "bodylanguageexperttraining":               "38 to 50 Hours",
    "personalbrandingstrategisttraining":       "30 to 45 Hours",
    "mindsetmasterytraining":                   "20 to 35 Hours",
    "relationshipcoachingtraining":             "18 to 32 Hours",
    "decisionmakingmasterytraining":            "28 to 40 Hours",
    "adaptiveleadershiptraining":               "25 to 38 Hours",
    "theeverydayaitoolkit":                     "15 to 28 Hours",
    "confidenceandcharismatraining":            "32 to 48 Hours",
    "aiproductivitypowerup":                    "20 to 35 Hours",
    // General Professional
    "professionaldevelopmentcertification":     "28 to 42 Hours",
    "advancedcareerskillscertification":        "30 to 45 Hours",
    "workplaceexcellencecertification":         "22 to 36 Hours",
    "professionalgrowthcertification":          "25 to 40 Hours",
    "careerdevelopmentcertification":           "32 to 48 Hours",
    "workplacereadinesscertification":          "18 to 32 Hours",
    // Business & Management
    "certificateinbusinessmanagement":          "35 to 50 Hours",
    "certificateinleadershipteammanagement":    "38 to 50 Hours",
    "certificateinprojectcoordination":         "28 to 42 Hours",
    "certificateinofficeadministration":        "22 to 36 Hours",
    "certificateinbusinessoperations":          "30 to 45 Hours",
    "certificateinsupervisoryskills":           "20 to 34 Hours",
    // Productivity & Office Skills
    "advancedmsexcelcertification":             "18 to 32 Hours",
    "businesscommunicationcertification":       "20 to 35 Hours",
    "timemanagementproductivitycertification": "15 to 28 Hours",
    "professionalemailwritingcertification":    "10 to 20 Hours",
    "officeproductivitycertification":          "18 to 30 Hours",
    "datahandlingcertification":                "22 to 36 Hours",
    // Marketing & Communication
    "digitalmarketingcertification":            "32 to 48 Hours",
    "socialmediamanagementcertification":       "22 to 38 Hours",
    "contentwritingcertification":              "18 to 32 Hours",
    "customerrelationshipmanagementcertification": "28 to 42 Hours",
    "brandcommunicationcertification":          "20 to 35 Hours",
    "publicrelationscertification":             "25 to 40 Hours",
    // Technology & Digital Skills
    "webdevelopmentcertification":              "40 to 50 Hours",
    "computerapplicationscertification":        "28 to 42 Hours",
    "itskillscertification":                    "30 to 45 Hours",
    "digitalskillscertification":               "22 to 36 Hours",
    "basicprogrammingcertification":            "32 to 48 Hours",
    "websitemanagementcertification":           "22 to 36 Hours",
    // Career Development
    "careeradvancementcertification":           "25 to 40 Hours",
    "professionalexcellencecertification":      "28 to 42 Hours",
    "corporatereadinesscertification":          "20 to 34 Hours",
    "industryreadinesscertification":           "22 to 36 Hours",
    "employabilityskillscertification":         "18 to 30 Hours",
    "workplacesuccesscertification":            "20 to 34 Hours",
    // Additional Professional Skills
    "customerservicecertification":             "15 to 28 Hours",
    "salesskillscertification":                 "20 to 34 Hours",
    "businessetiquettecertification":           "12 to 24 Hours",
    "problemsolvingcertification":              "22 to 36 Hours",
    "decisionmakingcertification":              "24 to 38 Hours",
    "leadershipessentialscertification":        "28 to 42 Hours",
  };
  return rangeMap[courseId] || "20 to 35 Hours";
};

const getDynamicCourseDetails = (matchedCourse, category) => {
  const title = matchedCourse.title;
  
  let paragraphs = [];
  let learningAreas = [];
  let objectives = [];
  let keyTopics = [];
  let targetAudience = [];
  let prerequisites = [];
  let careerBenefits = [];

  if (category === "General Professional") {
    paragraphs = [
      `The ${title} is a premier training program designed to equip modern professionals with the high-impact competencies required for corporate excellence. In today's dynamic workplace, maintaining professional growth and demonstrating exceptional work standards are critical keys to climbing the corporate ladder. This course targets these essential areas, helping participants establish a robust executive identity that commands respect.`,
      `Through a highly structured curriculum, learners explore the foundational principles of workplace excellence, career resilience, and strategic career alignment. The modules cover professional presence, active corporate participation, and modern methods for managing business transitions. This guarantees that candidates are not only ready to perform, but also prepared to lead and innovate.`,
      `By choosing this PMI Services-recognized certification, you are investing in a future-ready professional framework. This program blends theoretical models with hands-on practice, empowering you to implement the best corporate standards in your daily work operations immediately.`
    ];
    learningAreas = [
      "Establishing a highly visible and respected professional identity",
      "Developing key emotional and social intelligence in corporate setups",
      "Strategies for proactive career scaling and long-term professional growth",
      "Managing complex workspace challenges, adversity, and transitions",
      "Adhering to global corporate compliance and administrative best practices"
    ];
    objectives = [
      "Develop and project a highly polished, authoritative executive presence",
      "Handle high-pressure business environments and workspace transitions with ease",
      "Identify key pathways for individual and team career development",
      "Foster high-integrity collaboration with cross-functional corporate teams",
      "Implement standard industry best practices to achieve daily operational excellence"
    ];
    keyTopics = [
      "Professional Presence", "Corporate Standards", "Career Growth Strategies",
      "Emotional Intelligence", "Workspace Resilience", "Agile Collaboration",
      "Ethical Standards", "Business Agility", "Stakeholder Communication"
    ];
    targetAudience = [
      "Mid-level professionals preparing for higher corporate responsibilities",
      "Team leads and supervisors who need to model professional excellence",
      "Aspiring professionals seeking to accelerate their promotional growth",
      "Fresh graduates looking to stand out during corporate inductions"
    ];
    prerequisites = [
      "No specific technical prerequisites or prior certifications needed",
      "Open to all working professionals and students worldwide",
      "Basic understanding of standard workplace structures and environments"
    ];
    careerBenefits = [
      "Significantly enhance your credibility and personal brand in your organization",
      "Qualify for rapid promotions, salary advancements, and high-responsibility roles",
      "Become a certified champion of workplace excellence and professional growth",
      "Receive a globally recognized digital validation to verify your competencies"
    ];
  } else if (category === "Business & Management") {
    paragraphs = [
      `The ${title} program provides a deep, comprehensive framework for mastering modern organizational management and operational design. High-performing organizations rely on leaders who can coordinate complex projects, manage diverse teams, and supervise business operations with precision. This course is designed to transition professionals into strategic management roles.`,
      `The training syllabus covers the end-to-end elements of supervisor skills, project planning, resource allocation, and team motivation. Participants gain critical insights into operational efficiency, workflow optimization, and performance metrics, allowing them to lead with analytical confidence and clear communication.`,
      `Whether supervising small teams or coordinating large-scale corporate operations, this self-paced course equips you with the management tools, ready-to-use templates, and evaluation standards needed to make an immediate impact.`
    ];
    learningAreas = [
      "Supervising diverse teams and managing cross-functional workspaces",
      "Planning, coordinating, and executing projects from inception to delivery",
      "Optimizing daily operational workflows and resource efficiency",
      "Applying decision-making and problem-solving models in complex environments",
      "Gaining team buy-in and leading organizational alignment initiatives"
    ];
    objectives = [
      "Execute projects and coordinate team workflows within timeline and budget parameters",
      "Apply supervisory skills to boost team motivation, engagement, and output",
      "Design and monitor KPIs to optimize daily operational performance",
      "Solve complex business bottlenecks using modern diagnostic frameworks",
      "Lead strategic change management and organizational scaling efforts confidently"
    ];
    keyTopics = [
      "Strategic Management", "Team Supervision", "Project Coordination",
      "Operational Design", "Workflow Optimization", "KPI Monitoring",
      "Resource Allocation", "Risk Management", "Business Governance"
    ];
    targetAudience = [
      "Department managers, team supervisors, and project coordinators",
      "Entrepreneurs and business owners looking to scale their internal operations",
      "Professionals transitioning from technical roles into management positions",
      "Management students seeking practical corporate supervisor skills"
    ];
    prerequisites = [
      "Familiarity with standard business setups or team dynamics",
      "Basic analytical reasoning and project planning interest",
      "No advanced management degrees or coding knowledge required"
    ];
    careerBenefits = [
      "Prepare yourself for senior leadership, operations director, or management roles",
      "Drive measurable operational savings and productivity gains for your employer",
      "Validate your project and team leadership capabilities with an official credential",
      "Build a versatile toolkit of corporate management practices recognized globally"
    ];
  } else if (category === "Productivity & Office Skills") {
    paragraphs = [
      `The ${title} is a highly practical, application-focused training course built to maximize your daily office productivity and technical competency. Success in the modern corporate office relies on executing tasks with speed, managing databases correctly, and communicating with absolute clarity. This program is your definitive guide to office efficiency.`,
      `From advanced spreadsheet handling to professional business writing, this course covers all the technical and communicative components needed to complete tasks in half the time. Candidates learn how to organize information, automate manual spreadsheet checks, and draft emails that get instant results.`,
      `By mastering these core office productivity modules, you become an indispensable contributor to your team, raising standard operating procedures and reducing administrative overhead.`
    ];
    learningAreas = [
      "Structuring professional business emails and corporate reports with clarity",
      "Managing, filtering, and analyzing complex data structures using spreadsheets",
      "Time management matrices and personal productivity hacks",
      "Using standard office software applications to automate routine tasks",
      "Ensuring digital security, data privacy, and files organization"
    ];
    objectives = [
      "Write concise, clear business correspondence that inspires swift action",
      "Build, analyze, and present complex spreadsheet models to support business decisions",
      "Reclaim hours of weekly work by eliminating personal productivity leaks",
      "Handle sensitive corporate databases with complete accuracy and compliance",
      "Coordinate hybrid and remote workspace tasks with zero communication delays"
    ];
    keyTopics = [
      "Business Communication", "Spreadsheet Mastery", "Time Optimization",
      "Professional Writing", "Data Organization", "Task Automation",
      "Digital Workspace Etiquette", "Information Security", "Report Generation"
    ];
    targetAudience = [
      "Administrative coordinators, executive assistants, and support staff",
      "Analysts, finance professionals, and data coordinators",
      "Remote and hybrid employees seeking to optimize their daily outputs",
      "Professionals who feel overwhelmed by manual document work and emails"
    ];
    prerequisites = [
      "Access to standard office applications (e.g., Microsoft Office, Google Workspace)",
      "Basic computer literacy and document navigation skills",
      "English reading proficiency for course syllabus"
    ];
    careerBenefits = [
      "Gain an immediate reputation as the highly efficient, tech-fluent go-to expert",
      "Free up significant working hours to focus on strategic, high-value tasks",
      "Qualify for office administration, database coordination, or analyst roles",
      "Earn a recognized certificate that proves your hands-on business capabilities"
    ];
  } else if (category === "Marketing & Communication") {
    paragraphs = [
      `The ${title} offers an intensive curriculum focused on the modern mechanics of brand building, digital marketing, and strategic communication. Today's business world demands professionals who can capture attention, engage diverse customer bases, and build long-term trust. This certification provides the comprehensive strategies to achieve exactly that.`,
      `The course moves through high-impact modules covering content writing, social media coordination, and customer relationship management. Participants learn to analyze audience behavior, plan multi-channel communication strategies, and craft public relations messages that protect and build brand value.`,
      `Designed for immediate, practical application, this program ensures you can design campaigns, measure marketing success, and communicate with stakeholders with absolute certainty.`
    ];
    learningAreas = [
      "Creating engaging, SEO-optimized business content for digital channels",
      "Designing and implementing multi-channel brand communication strategies",
      "Managing customer relationships and building long-term user retention",
      "Analyzing market trends and tracking digital marketing campaign metrics",
      "Handling public relations and navigating strategic communication issues"
    ];
    objectives = [
      "Draft high-conversion, professional written content for diverse platforms",
      "Coordinate and scale social media profiles to boost brand presence",
      "Increase customer loyalty and NPS metrics through advanced CRM practices",
      "Analyze data and marketing analytics to measure campaign ROI precisely",
      "Formulate public relations plans to secure positive brand coverage"
    ];
    keyTopics = [
      "Brand Positioning", "Digital Marketing", "Content Creation",
      "Customer Relationships", "CRM Tools", "Social Media Strategy",
      "Public Relations", "Marketing Analytics", "Strategic Communication"
    ];
    targetAudience = [
      "Marketing professionals, copywriters, and content designers",
      "Social media coordinators and community managers",
      "Customer success representatives and CRM administrators",
      "Business founders trying to reach broader target audiences"
    ];
    prerequisites = [
      "Basic understanding of modern digital platforms and browsers",
      "An interest in creative writing, brand building, or customer relations",
      "No coding background required"
    ];
    careerBenefits = [
      "Access diverse, high-growth career options in marketing, PR, or customer success",
      "Deliver measurable growth in brand traffic, customer retention, and lead generation",
      "Build a portfolio of campaigns backed by an accredited marketing certificate",
      "Command respect as a creative and analytical business communicator"
    ];
  } else if (category === "Technology & Digital Skills") {
    paragraphs = [
      `The ${title} is a comprehensive, future-ready certification designed to elevate your technical skills, web capabilities, and digital literacy. As industries undergo rapid digital transformations, professionals with certified IT and web skills enjoy unparalleled career advantages. This course provides the hands-on technical competencies needed to lead in this landscape.`,
      `Learners explore the core elements of web architecture, basic programming concepts, and digital tools integration. The program emphasizes practical execution, helping participants manage web systems, handle software configurations, and collaborate smoothly with technical developers.`,
      `By completing this self-paced course, you transition from a passive technology user to an active digital architect, capable of driving technological change inside any modern organization.`
    ];
    learningAreas = [
      "Foundational principles of web management and website structures",
      "Basic programming logic, automation scripts, and tech stacks",
      "IT troubleshooting, systems maintenance, and security protocols",
      "Leveraging modern digital tools to multiply operational speed",
      "Collaborating effectively with technical development teams"
    ];
    objectives = [
      "Deploy, manage, and optimize modern professional websites",
      "Apply programming logic and basic scripts to automate routine operations",
      "Diagnose and troubleshoot basic IT configuration problems independently",
      "Configure digital workspaces and security parameters to safeguard data",
      "Bridge the communication gap between technical departments and business managers"
    ];
    keyTopics = [
      "Web Management", "Basic Programming", "IT Infrastructure",
      "Digital Transformation", "Cybersecurity Basics", "Systems Configuration",
      "Tech Stack Alignment", "Automation Scripting", "Software Integration"
    ];
    targetAudience = [
      "Non-technical professionals looking to transition into the tech space",
      "Administrative staff tasked with managing corporate websites or IT setups",
      "Product managers, marketers, and analysts working closely with tech teams",
      "Aspiring developers who want a comprehensive foundation in digital systems"
    ];
    prerequisites = [
      "Access to a computer with internet and basic command-line navigation interest",
      "Willingness to study logical code structures and technical system parameters",
      "No prior coding or technical degree required"
    ];
    careerBenefits = [
      "Qualify for high-demand, tech-forward roles in digital operations and web coordination",
      "Collaborate more efficiently with developers, saving project costs and timelines",
      "Establish an unshakeable foundation for learning advanced coding or systems design",
      "Earn a technical credential that demonstrates future-ready capability to employers"
    ];
  } else {
    // Career Development / Additional Skills fallback
    paragraphs = [
      `The ${title} is a high-impact, transformative development program designed to fast-track your career growth and ensure global employability. Succeeding in today's competitive corporate space requires more than technical talent — it calls for problem solving, negotiation, workplace etiquette, and corporate readiness. This course bridges that critical gap.`,
      `Through scenario-based training, candidates learn how to handle tough business scenarios, deliver exceptional customer service, close complex sales, and negotiate win-win solutions. The curriculum focuses on accelerating professional presence and building a growth mindset that adapts to any industry.`,
      `Upon completing this PMI Services-aligned program, you emerge as a highly employable, adaptable candidate who is immediately prepared to deliver outstanding corporate outcomes.`
    ];
    learningAreas = [
      "Mastering professional business etiquette and corporate standards",
      "Advanced problem-solving and strategic decision-making in teams",
      "High-impact customer service and client relationship management",
      "Sales skill frameworks, negotiating, and closing techniques",
      "Developing long-term corporate readiness and career adaptability"
    ];
    objectives = [
      "Communicate with impeccable professional business etiquette in global setups",
      "Resolve complex team and operational bottlenecks using logical frameworks",
      "Deliver outstanding customer experiences that drive repeat business and loyalty",
      "Structure persuasive arguments to close sales and secure business deals",
      "Construct a strategic, long-term personal plan for career development and promotion"
    ];
    keyTopics = [
      "Business Etiquette", "Problem Solving", "Customer Experience",
      "Sales & Negotiation", "Corporate Readiness", "Career Adaptability",
      "Strategic Planning", "Influence & Persuasion", "Interpersonal Excellence"
    ];
    targetAudience = [
      "Aspiring professionals, fresh graduates, and career changers",
      "Sales, customer service, and business development representatives",
      "Team leaders managing customer-facing or professional service teams",
      "Anyone who wants to elevate their business conduct and strategic career plan"
    ];
    prerequisites = [
      "No specific professional experience required",
      "A proactive attitude toward personal development and career building",
      "English reading comprehension for online study materials"
    ];
    careerBenefits = [
      "Accelerate your career entry or transition with high corporate readiness credentials",
      "Achieve high customer satisfaction, sales closures, and strategic contributions",
      "Stand out as a highly polished, adaptable candidate in any recruitment process",
      "Receive a professional certification that validates your comprehensive business skills"
    ];
  }

  return {
    paragraphs,
    learningAreas,
    objectives,
    keyTopics,
    targetAudience,
    prerequisites,
    careerBenefits
  };
};

const getDurationHours = (courseId) => {
  const customMap = {
    // Popular programs
    "self-confidencebuildingtraining": 40,
    "resiliencecoachtraining": 32,
    "motivationalspeakertraining": 45,
    "bodylanguageexperttraining": 48,
    "personalbrandingstrategisttraining": 42,
    "mindsetmasterytraining": 30,
    "relationshipcoachingtraining": 28,
    "decisionmakingmasterytraining": 36,
    "adaptiveleadershiptraining": 35,
    "theeverydayaitoolkit": 24,
    "confidenceandcharismatraining": 45,
    "aiproductivitypowerup": 32,
    
    // Professional Certification catalog courses
    "professionaldevelopmentcertification": 40,
    "advancedcareerskillscertification": 42,
    "workplaceexcellencecertification": 35,
    "professionalgrowthcertification": 38,
    "careerdevelopmentcertification": 45,
    "workplacereadinesscertification": 30,
    
    "certificateinbusinessmanagement": 48,
    "certificateinleadershipteammanagement": 50,
    "certificateinprojectcoordination": 40,
    "certificateinofficeadministration": 36,
    "certificateinbusinessoperations": 45,
    "certificateinsupervisoryskills": 32,
    
    "advancedmsexcelcertification": 30,
    "businesscommunicationcertification": 32,
    "timemanagementproductivitycertification": 24,
    "professionalemailwritingcertification": 15,
    "officeproductivitycertification": 28,
    "datahandlingcertification": 35,
    
    "digitalmarketingcertification": 45,
    "socialmediamanagementcertification": 36,
    "contentwritingcertification": 30,
    "customerrelationshipmanagementcertification": 40,
    "brandcommunicationcertification": 32,
    "publicrelationscertification": 38,
    
    "webdevelopmentcertification": 50,
    "computerapplicationscertification": 40,
    "itskillscertification": 42,
    "digitalskillscertification": 36,
    "basicprogrammingcertification": 45,
    "websitemanagementcertification": 35,
    
    "careeradvancementcertification": 38,
    "professionalexcellencecertification": 40,
    "corporatereadinesscertification": 32,
    "industryreadinesscertification": 35,
    "employabilityskillscertification": 28,
    "workplacesuccesscertification": 30,
    
    "customerservicecertification": 24,
    "salesskillscertification": 30,
    "businessetiquettecertification": 20,
    "problemsolvingcertification": 32,
    "decisionmakingcertification": 35,
    "leadershipessentialscertification": 40,
    "communicationskillscertification": 28
  };

  if (courseId && customMap[courseId]) {
    return customMap[courseId];
  }

  if (courseId) {
    let hash = 0;
    for (let i = 0; i < courseId.length; i++) {
      hash += courseId.charCodeAt(i);
    }
    return (hash % 25) + 25;
  }
  return 36;
};

const CourseDetail = ({ courseId: propCourseId }) => {
  const { courseId: paramCourseId } = useParams();
  const activeCourseId = propCourseId || paramCourseId;

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentData, setPaymentData] = useState({ name: '', email: '', phone: '', amount: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  // Build ids list for prev/next navigation from all catalog courses
  const ids = [];
  professionalCatalog.forEach(cat => {
    cat.courses.forEach(c => { if (c.id && !ids.includes(c.id)) ids.push(c.id); });
  });

  // Image is stored directly on course object; fallback for unknown courses
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80";

  const getCourseImageUrl = (id) => {
    const c = courseDetailMap[id];
    if (c && c.image) return c.image;
    return FALLBACK_IMAGE;
  };

  // REMOVE old courseImageMap — images now stored in each course data file
  const _unused = {
    // Popular Programs
    "self-confidencebuildingtraining":          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1920&q=80",
    "resiliencecoachtraining":                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80",
    "motivationalspeakertraining":              "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1920&q=80",
    "bodylanguageexperttraining":               "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80",
    "personalbrandingstrategisttraining":       "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80",
    "mindsetmasterytraining":                   "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80",
    "relationshipcoachingtraining":             "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80",
    "decisionmakingmasterytraining":            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
    "adaptiveleadershiptraining":               "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80",
    "theeverydayaitoolkit":                     "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1920&q=80",
    "confidenceandcharismatraining":            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1920&q=80",
    "aiproductivitypowerup":                    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1920&q=80",
    // General Professional
    "professionaldevelopmentcertification":     "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80",
    "advancedcareerskillscertification":        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1920&q=80",
    "workplaceexcellencecertification":         "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80",
    "professionalgrowthcertification":          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80",
    "careerdevelopmentcertification":           "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80",
    "workplacereadinesscertification":          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80",
    // Business & Management
    "certificateinbusinessmanagement":          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    "certificateinleadershipteammanagement":    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80",
    "certificateinprojectcoordination":         "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1920&q=80",
    "certificateinofficeadministration":        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    "certificateinbusinessoperations":          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80",
    "certificateinsupervisoryskills":           "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80",
    // Productivity & Office Skills
    "advancedmsexcelcertification":             "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
    "businesscommunicationcertification":       "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80",
    "timemanagementproductivitycertification":  "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=1920&q=80",
    "professionalemailwritingcertification":    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80",
    "officeproductivitycertification":          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
    "datahandlingcertification":               "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
    // Marketing & Communication
    "digitalmarketingcertification":            "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1920&q=80",
    "socialmediamanagementcertification":       "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1920&q=80",
    "contentwritingcertification":              "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1920&q=80",
    "customerrelationshipmanagementcertification": "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=1920&q=80",
    "brandcommunicationcertification":          "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1920&q=80",
    "publicrelationscertification":             "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=1920&q=80",
    // Technology & Digital Skills
    "webdevelopmentcertification":              "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=1920&q=80",
    "computerapplicationscertification":        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1920&q=80",
    "itskillscertification":                    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
    "digitalskillscertification":               "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80",
    "basicprogrammingcertification":            "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1920&q=80",
    "websitemanagementcertification":           "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1920&q=80",
    // Career Development
    "careeradvancementcertification":           "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80",
    "professionalexcellencecertification":      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
    "corporatereadinesscertification":          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80",
    "industryreadinesscertification":           "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1920&q=80",
    "employabilityskillscertification":         "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=80",
    "workplacesuccesscertification":            "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1920&q=80",
    // Additional Professional Skills
    "customerservicecertification":             "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80",
    "salesskillscertification":                 "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80",
    "businessetiquettecertification":           "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80",
    "problemsolvingcertification":              "https://images.unsplash.com/photo-1503551723145-6c040742065b?auto=format&fit=crop&w=1920&q=80",
    "decisionmakingcertification":              "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?auto=format&fit=crop&w=1920&q=80",
    "leadershipessentialscertification":        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1920&q=80",
    "communicationskillscertification":         "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1920&q=80"
  }; // end _unused

  const courseImageUrl = getCourseImageUrl(activeCourseId);

  // All 24 certifications are now in courseDetailMap directly
  const course = courseDetailMap[activeCourseId] || null;

  // Fallback if course data is missing
  if (!course) {
    return (
      <div className="course-detail-fallback py-xxl text-center" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <h2>Course Details Not Found</h2>
          <p>The selected course details could not be loaded. Please return to the courses list.</p>
          <Link to="/courses" className="btn btn-primary my-md">Back to Courses</Link>
        </div>
      </div>
    );
  }

  const currentIndex = ids.indexOf(activeCourseId);
  let prevCourseId = '';
  let nextCourseId = '';

  if (currentIndex !== -1) {
    const prevIndex = (currentIndex - 1 + ids.length) % ids.length;
    const nextIndex = (currentIndex + 1) % ids.length;
    prevCourseId = ids[prevIndex];
    nextCourseId = ids[nextIndex];
  } else if (ids.length > 0) {
    prevCourseId = ids[ids.length - 1];
    nextCourseId = ids[0];
  }

  const getCoursePath = (id) => {
    const popularIds = [
      "self-confidencebuildingtraining", "resiliencecoachtraining", "motivationalspeakertraining",
      "bodylanguageexperttraining", "personalbrandingstrategisttraining", "mindsetmasterytraining",
      "relationshipcoachingtraining", "decisionmakingmasterytraining", "adaptiveleadershiptraining",
      "theeverydayaitoolkit", "confidenceandcharismatraining", "executivepresenceandleadership"
    ];
    return popularIds.includes(id) ? `/${id}` : `/course/${id}`;
  };

  const prevPath = getCoursePath(prevCourseId);
  const nextPath = getCoursePath(nextCourseId);

  // Default parsed price for the modal
  const parsedPrice = course?.price ? parseInt(course.price.replace(/\D/g, ''), 10) : 15000;

  const handleEnrollClick = () => {
    setPaymentData({ ...paymentData, amount: parsedPrice });
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Use environment variable for backend URL, fallback to localhost for development
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
      
      const response = await fetch(`${API_BASE_URL}/api/payu/create-payment-link`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: paymentData.amount,
          name: paymentData.name,
          email: paymentData.email,
          phone: paymentData.phone,
          courseTitle: course.title
        }),
      });

      const data = await response.json();

      if (data.success && data.url) {
        // Redirect the user to the secure PayU checkout page
        window.location.href = data.url;
      } else {
        alert('Failed to generate payment link. PayU says: ' + JSON.stringify(data.details || data.error));
        setIsProcessing(false);
      }
    } catch (error) {
      console.error('Error contacting backend:', error);
      alert('Error contacting the secure payment server. Please ensure the backend is running and the URL is correct.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="course-detail-page">
      {/* 1. Dynamic Course Hero Banner */}
      <section
        className="course-detail-hero animate-fade-in"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${courseImageUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        {/* Left Arrow Navigation */}
        {prevCourseId && (
          <Link to={prevPath} className="course-nav-arrow arrow-left" title="Previous Course">
            <FaChevronLeft size={20} />
          </Link>
        )}

        {/* Right Arrow Navigation */}
        {nextCourseId && (
          <Link to={nextPath} className="course-nav-arrow arrow-right" title="Next Course">
            <FaChevronRight size={20} />
          </Link>
        )}

        <div className="container hero-center-content text-center">
          <span className="course-badge-hero">Globally Aligned Certification</span>
          <h1>{course.title}</h1>
          <p className="subtitle">{course.subtitle}</p>
          <div className="course-hero-stats flex flex-wrap justify-center gap-md my-sm">
            <span className="hero-stat-badge"><FaTag /> <strong>Fee:</strong> {course.price}</span>
            <span className="hero-stat-badge"><FaClock /> <strong>Duration:</strong> {course.duration}</span>
          </div>
        </div>
      </section>

      {/* 2. Main course details description and Syllabus */}
      <SectionWrapper bg="white">
        <div className="grid grid-3 gap-xl align-start">
          {/* Left Column (2-cols wide): Description */}
          <div className="course-description-area grid-col-2 flex-column gap-md animate-fade-in">
            <h3 className="section-title">Course Description</h3>
            {course.paragraphs.map((p, idx) => (
              <p key={idx} className="course-para">{p}</p>
            ))}
          </div>

          {/* Right Column: Enrollment Card only */}
          <div className="course-sidebar-area animate-fade-in">
            <Card className="course-cta-card flex-column align-center text-center gap-md shadow-sm bg-white">
              <FaGraduationCap size={45} className="text-accent" />
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>Professional Fee</span>
                <strong style={{ fontSize: '1.8rem', color: 'var(--accent-color)' }}>{course.price}</strong>
              </div>
              <button onClick={handleEnrollClick} className="btn btn-primary w-100 flex align-center justify-center gap-sm" style={{ border: 'none', cursor: 'pointer' }}>
                Enroll Now <FaChevronRight size={10} />
              </button>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Self-paced online evaluation included</span>
            </Card>

            {/* Learning Policy note */}
            <div className="learning-policy-note">
              <span className="footer-details-heading">Learning Policy:</span>
              <p>{course.terms}</p>
            </div>
          </div>
        </div>

        {/* ── Extended Rich Sections ── */}
        <div className="course-extended-sections">

          {/* What You Will Learn — full-width 2-col grid */}
          <div className="ext-block what-you-learn-block">
            <h3 className="ext-block-title"><span className="ext-emoji">✅</span> What You Will Learn</h3>
            <div className="learn-items-grid">
              {course.learningAreas.map((area, idx) => (
                <div key={idx} className="learn-item">
                  <FaCheckCircle className="learn-item-icon" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Course Objectives */}
          {course.objectives && course.objectives.length > 0 && (
            <div className="ext-block">
              <h3 className="ext-block-title"><span className="ext-emoji">🎯</span> Course Objectives</h3>
              <p className="ext-block-intro">{course.objectivesIntro || 'By the end of this program, participants will have achieved the following measurable outcomes:'}</p>
              <div className="objectives-grid">
                {course.objectives.map((obj, idx) => (
                  <div key={idx} className="objective-card">
                    <span className="objective-number">{String(idx + 1).padStart(2, '0')}</span>
                    <p>{obj}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Topics */}
          {course.keyTopics && course.keyTopics.length > 0 && (
            <div className="ext-block">
              <h3 className="ext-block-title"><span className="ext-emoji">📚</span> Key Topics Covered</h3>
              <div className="topics-grid">
                {course.keyTopics.map((topic, idx) => (
                  <div key={idx} className="topic-pill">
                    <FaCheckCircle className="topic-icon" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Target Audience + Prerequisites */}
          {(course.targetAudience || course.prerequisites) && (
            <div className="audience-prereq-grid">
              {course.targetAudience && course.targetAudience.length > 0 && (
                <div className="ext-block audience-block">
                  <h3 className="ext-block-title"><span className="ext-emoji">👥</span> Who Should Enroll</h3>
                  <ul className="audience-list">
                    {course.targetAudience.map((item, idx) => (
                      <li key={idx}><span className="list-arrow">▸</span>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {course.prerequisites && course.prerequisites.length > 0 && (
                <div className="ext-block prereq-block">
                  <h3 className="ext-block-title"><span className="ext-emoji">✅</span> Prerequisites</h3>
                  <ul className="prereq-list">
                    {course.prerequisites.map((item, idx) => (
                      <li key={idx}><span className="list-arrow">▸</span>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Career Benefits */}
          {course.careerBenefits && course.careerBenefits.length > 0 && (
            <div className="ext-block career-block">
              <h3 className="ext-block-title"><span className="ext-emoji">🚀</span> Career Benefits &amp; Outcomes</h3>
              <p className="ext-block-intro">{course.careerBenefitsIntro || 'Earning this certification significantly enhances your professional value and opens new career pathways:'}</p>
              <div className="career-benefits-grid">
                {course.careerBenefits.map((benefit, idx) => (
                  <div key={idx} className="career-benefit-card">
                    <div className="career-benefit-icon">✦</div>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </SectionWrapper>

      {/* 3. Ready to get started Banner */}
      <section className="ready-banner text-center py-xl">
        <div className="container ready-container flex-column align-center gap-md">
          <h2>Ready to get started?</h2>
          <p>When you choose PMI Services, you're choosing a partner invested in your certification success and lifelong professional growth.</p>
          <Link to="/contact" className="btn btn-outline-white">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="payment-modal-overlay">
          <div className="payment-modal-content animate-fade-in">
            <button className="payment-modal-close" onClick={() => setShowPaymentModal(false)}>&times;</button>
            <h3 className="payment-modal-title">Enroll in Course</h3>
            <p className="payment-modal-subtitle">{course.title}</p>
            
            <form onSubmit={handlePaymentSubmit} className="payment-form">
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter your full name" 
                  value={paymentData.name} 
                  onChange={(e) => setPaymentData({...paymentData, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email" 
                  value={paymentData.email} 
                  onChange={(e) => setPaymentData({...paymentData, email: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Payment Amount (INR)</label>
                <div className="amount-input-wrapper">
                  <span className="currency-symbol">₹</span>
                  <input 
                    type="number" 
                    required 
                    min="1000" 
                    max={parsedPrice}
                    placeholder="Enter amount" 
                    value={paymentData.amount} 
                    onChange={(e) => setPaymentData({...paymentData, amount: e.target.value})}
                    className="amount-input"
                  />
                </div>
                <small className="form-text text-muted">
                  Full course fee is ₹{parsedPrice}. You can edit the amount to make a partial payment (Minimum ₹1000).
                </small>
              </div>

              <button type="submit" className="btn btn-primary w-100 payu-submit-btn" disabled={isProcessing}>
                {isProcessing ? 'Processing...' : `Proceed to Pay ₹${paymentData.amount || 0}`}
              </button>
              
              <div className="payu-secure-badge">
                <FaCheckCircle className="text-success" /> Secured by PayU
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .course-detail-page {
          overflow-x: hidden;
        }

        /* Detail Page Hero Banner Specific Styles */
        .course-detail-hero {
          position: relative;
          padding: 12rem 6% 6rem;
          text-align: center;
          color: white;
          min-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-center-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .course-badge-hero {
          background-color: var(--accent-color);
          color: #ffffff;
          padding: 0.35rem 0.9rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: var(--spacing-sm);
          display: inline-block;
          box-shadow: 0 4px 10px rgba(218, 41, 28, 0.25);
        }

        .course-detail-hero h1 {
          font-size: clamp(2.3rem, 4.5vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -1.5px;
          margin-bottom: 1.2rem;
          line-height: 1.15;
          text-transform: capitalize;
          max-width: 90%;
          color: #ffffff;
          text-shadow: 0 2px 5px rgba(0,0,0,0.5);
          margin-left: auto;
          margin-right: auto;
        }

        .course-detail-hero .subtitle {
          font-size: 1.18rem;
          font-weight: 400;
          letter-spacing: 0.5px;
          line-height: 1.6;
          max-width: 80%;
          margin: 0 auto 1.5rem;
          color: #e2e8f0;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
          opacity: 0.95;
        }

        .course-hero-stats {
          width: 100%;
        }

        .hero-stat-badge {
          background-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(4px);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 0.45rem 0.9rem;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Navigation Arrows styling */
        .course-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all var(--transition-fast);
          cursor: pointer;
        }

        .course-nav-arrow:hover {
          background-color: var(--accent-color);
          border-color: var(--accent-color);
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 4px 15px rgba(218, 41, 28, 0.4);
        }

        .arrow-left {
          left: 3%;
        }

        .arrow-right {
          right: 3%;
        }

        /* Grid layouts */
        .grid-col-2 {
          grid-column: span 2;
        }

        .section-title {
          font-size: 1.5rem;
          color: var(--primary-color);
          margin-bottom: var(--spacing-sm);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          padding-bottom: var(--spacing-xs);
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background-color: var(--accent-color);
        }

        .course-para {
          font-size: 1.05rem;
          color: #4a5568;
          line-height: 1.65;
        }

        /* Sidebar content styling */
        .course-sidebar-area {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .course-cta-card {
          border-top: 4px solid var(--accent-color);
          padding: var(--spacing-xl);
        }

        .syllabus-card {
          border-top: 4px solid var(--primary-color);
          padding: var(--spacing-xl);
        }

        .syllabus-title {
          font-size: 1.25rem;
          color: var(--primary-color);
          margin-bottom: var(--spacing-sm);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .syllabus-list {
          padding: 0;
        }

        .syllabus-list li {
          font-size: 0.95rem;
          color: #4a5568;
          line-height: 1.5;
        }

        .flex-shrink-0 {
          flex-shrink: 0;
        }

        .footer-details-heading {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--primary-color);
        }

        @media (max-width: 1024px) {
          .grid-col-2 {
            grid-column: span 3;
          }
          
          .course-sidebar-area {
            grid-column: span 3;
          }
        }

        @media (max-width: 768px) {
          .course-detail-hero {
            padding: 10rem 4% 5rem;
            min-height: auto;
          }

          .course-detail-hero h1 {
            font-size: 2rem;
            margin-bottom: 0.8rem;
          }

          .course-detail-hero .subtitle {
            font-size: 1rem;
            max-width: 95%;
          }

          .course-nav-arrow {
            width: 36px;
            height: 36px;
          }

          .arrow-left {
            left: 2%;
          }

          .arrow-right {
            right: 2%;
          }

          .course-quick-stats {
            justify-content: center;
          }
        }

        .ready-banner {
          background: linear-gradient(rgba(15, 41, 66, 0.92), rgba(15, 41, 66, 0.92)), url(${ReadyImage});
          background-size: cover;
          background-position: center;
          color: var(--text-light);
          padding: var(--spacing-xxl) 0;
        }

        .ready-container h2 {
          font-size: 2.25rem;
          color: var(--text-light);
          text-transform: uppercase;
        }

        .ready-container p {
          max-width: 600px;
          color: #e2e8f0;
          font-size: 1.1rem;
          margin-bottom: var(--spacing-md);
          margin-left: auto;
          margin-right: auto;
        }

        /* ── Extended Description Sections ── */
        .course-extended-sections {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-top: 3rem;
          padding-top: 2.5rem;
          border-top: 2px solid #edf2f7;
        }

        /* What You Will Learn — full-width 2-col grid */
        .what-you-learn-block {
          border-left-color: var(--accent-color);
        }

        .learn-items-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem 2rem;
        }

        .learn-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.95rem;
          color: #2d3748;
          line-height: 1.5;
        }

        .learn-item-icon {
          color: var(--accent-color);
          font-size: 0.85rem;
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* Learning policy note in sidebar */
        .learning-policy-note {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem 1.2rem;
          margin-top: var(--spacing-sm);
        }

        .learning-policy-note p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 4px 0 0 0;
        }

        @media (max-width: 768px) {
          .learn-items-grid {
            grid-template-columns: 1fr;
          }
        }

        .ext-block {
          background: #f8fafc;
          border-left: 4px solid var(--accent-color);
          border-radius: 8px;
          padding: 2rem 2.5rem;
        }

        .ext-block-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ext-emoji {
          font-size: 1.3rem;
        }

        .ext-block-intro {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        /* Objectives numbered grid */
        .objectives-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }

        .objective-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1.2rem 1.4rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .objective-card:hover {
          border-color: var(--accent-color);
          box-shadow: 0 4px 14px rgba(218,41,28,0.08);
        }

        .objective-number {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--accent-color);
          opacity: 0.35;
          line-height: 1;
          flex-shrink: 0;
          font-family: var(--font-heading);
        }

        .objective-card p {
          font-size: 0.95rem;
          color: #2d3748;
          line-height: 1.55;
          margin: 0;
        }

        /* Key Topics pill grid */
        .topics-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .topic-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 30px;
          padding: 0.45rem 1rem;
          font-size: 0.88rem;
          color: var(--primary-color);
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .topic-pill:hover {
          background: var(--primary-color);
          color: #ffffff;
          border-color: var(--primary-color);
        }

        .topic-icon {
          color: var(--accent-color);
          font-size: 0.75rem;
          flex-shrink: 0;
        }

        .topic-pill:hover .topic-icon {
          color: #ffffff;
        }

        /* Audience + Prerequisites split */
        .audience-prereq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .audience-block {
          border-left-color: var(--primary-color);
        }

        .prereq-block {
          border-left-color: #38a169;
        }

        .audience-list, .prereq-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .audience-list li, .prereq-list li {
          font-size: 0.95rem;
          color: #2d3748;
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .list-arrow {
          color: var(--accent-color);
          font-size: 1rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Career Benefits cards */
        .career-block {
          border-left-color: #805ad5;
        }

        .career-benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1rem;
        }

        .career-benefit-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1.25rem 1.5rem;
          display: flex;
          gap: 0.9rem;
          align-items: flex-start;
          transition: all 0.2s ease;
        }

        .career-benefit-card:hover {
          border-color: #805ad5;
          box-shadow: 0 4px 14px rgba(128,90,213,0.1);
        }

        .career-benefit-icon {
          font-size: 1.1rem;
          color: #805ad5;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .career-benefit-card p {
          font-size: 0.95rem;
          color: #2d3748;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 768px) {
          .audience-prereq-grid {
            grid-template-columns: 1fr;
          }
          .objectives-grid {
            grid-template-columns: 1fr;
          }
          .career-benefits-grid {
            grid-template-columns: 1fr;
          }
          .ext-block {
            padding: 1.5rem;
          }
        }

        /* Payment Modal Styles */
        .payment-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(15, 41, 66, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: var(--spacing-md);
        }

        .payment-modal-content {
          background-color: white;
          padding: var(--spacing-xl);
          border-radius: 12px;
          width: 100%;
          max-width: 500px;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .payment-modal-close {
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          font-size: 2rem;
          color: var(--text-muted);
          cursor: pointer;
          line-height: 1;
        }

        .payment-modal-title {
          font-size: 1.6rem;
          color: var(--primary-color);
          margin-bottom: 4px;
        }

        .payment-modal-subtitle {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid var(--border-color);
        }

        .payment-form .form-group {
          margin-bottom: var(--spacing-md);
        }

        .payment-form label {
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--primary-color);
        }

        .payment-form input[type="text"],
        .payment-form input[type="email"],
        .payment-form input[type="tel"] {
          width: 100%;
          padding: 12px;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 1rem;
          font-family: inherit;
        }

        .amount-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .currency-symbol {
          position: absolute;
          left: 12px;
          font-weight: bold;
          color: var(--text-color);
        }

        .amount-input {
          width: 100%;
          padding: 12px 12px 12px 30px;
          border: 2px solid var(--accent-color);
          border-radius: 6px;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .payment-form .form-text {
          display: block;
          margin-top: 6px;
          font-size: 0.8rem;
        }

        .payu-submit-btn {
          margin-top: var(--spacing-md);
          padding: 14px;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          background-color: #21b04b; /* PayU style green */
        }
        
        .payu-submit-btn:hover {
          background-color: #1a8e3c;
        }

        .payu-secure-badge {
          text-align: center;
          margin-top: var(--spacing-md);
          font-size: 0.85rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
      `}</style>
    </div>
  );
};

export default CourseDetail;
