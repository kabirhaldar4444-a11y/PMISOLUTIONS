import { leadershipCourses } from './courses/leadership.js';
import { businessCourses } from './courses/business.js';
import { marketingCourses } from './courses/marketing.js';
import { hrLegalCourses } from './courses/hrLegal.js';

// ─── Legacy data kept for Solutions page cards ───────────────────────────────
export const solutionsCourses = [
  {
    id: 1,
    title: "Collaborative Communication Skills Training (Certification Program)",
    link: "https://www.pmiusservices.com/Interpersonal.html",
    isExternal: true,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Corporate Professionalism & Workplace Conduct Training (Master Training or Certification Program)",
    link: "https://www.pmiusservices.com/Etiquette.html",
    isExternal: true,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Strategic Leadership Development Program",
    link: "/",
    isExternal: false,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Confidence & Executive Presence Training",
    link: "/",
    isExternal: false,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Critical Thinking & Decision-Making Training",
    link: "/",
    isExternal: false,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Agile Project Leadership Training",
    link: "/",
    isExternal: false,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "Resilience & Change Management Training",
    link: "/",
    isExternal: false,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    title: "Influential Leadership & Public Speaking Training",
    link: "/",
    isExternal: false,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
  }
];

export const masterTrainings = [
  {
    id: 9,
    title: "Executive Leadership Presence Program Master Training",
    link: "/",
    isExternal: false,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    title: "Emotional Intelligence for Leaders Training Master Training",
    link: "/",
    isExternal: false,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    title: "Effective Business Communication Training Master Training",
    link: "/",
    isExternal: false,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    title: "Innovation & Strategic Thinking Training Master Training",
    link: "/",
    isExternal: false,
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80"
  }
];

export const checkerboardCourses = [
  {
    id: 13,
    title: "Time Management & Productivity Hacks",
    description: "Learn essential time management frameworks, priority setting matrices, and distraction-control strategies to unlock peak professional performance.",
    link: "https://www.pmiusservices.com/Time.html",
    isExternal: true,
    imageType: "clock",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    title: "Soft Skills Fundamentals Training",
    description: "Develop critical interpersonal capabilities, active listening, collaborative problem solving, and workplace etiquette that form the foundation of professional growth.",
    link: "https://www.pmiusservices.com/Soft.html",
    isExternal: true,
    imageType: "soft",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  }
];

// ─── Combined courseDetailMap: all 24 comprehensive certifications ─────────────
export const courseDetailMap = {
  ...leadershipCourses,
  ...businessCourses,
  ...marketingCourses,
  ...hrLegalCourses
};

// ─── Popular Programs (shown on Home page as featured picks) ──────────────────
export const popularPrograms = [
  {
    id: "conflictmanagementcertification",
    title: "Conflict Management Certification",
    price: "₹18,000",
    description: "Master dispute resolution strategies to foster workplace harmony and collaboration.",
    category: "Leadership & Soft Skills",
    path: "/course/conflictmanagementcertification"
  },
  {
    id: "emotionalintelligenceeqcertification",
    title: "Emotional Intelligence (EQ) Certification",
    price: "₹21,000",
    description: "Develop self-awareness and emotional regulation to lead high-performing, resilient teams.",
    category: "Leadership & Soft Skills",
    path: "/course/emotionalintelligenceeqcertification"
  },
  {
    id: "negotiationskillscertification",
    title: "Negotiation Skills Certification",
    price: "₹25,000",
    description: "Command presence in high-stakes deal negotiations and structure win-win commercial agreements.",
    category: "Leadership & Soft Skills",
    path: "/course/negotiationskillscertification"
  },
  {
    id: "publicspeakingpresentationskillscertification",
    title: "Public Speaking & Presentation Skills Certification",
    price: "₹25,000",
    description: "Overcome stage anxiety and learn to captivate large audiences with authority.",
    category: "Leadership & Soft Skills",
    path: "/course/publicspeakingpresentationskillscertification"
  },
  {
    id: "criticalthinkingcertification",
    title: "Critical Thinking Certification",
    price: "₹21,000",
    description: "Analyze data patterns, isolate cognitive biases, and make strategic operational choices.",
    category: "Leadership & Soft Skills",
    path: "/course/criticalthinkingcertification"
  },
  {
    id: "decisionmakingproblemsolvingcertification",
    title: "Decision-Making & Problem Solving Certification",
    price: "₹25,000",
    description: "Equip yourself with analytical risk assessment models to solve complex business dilemmas.",
    category: "Leadership & Soft Skills",
    path: "/course/decisionmakingproblemsolvingcertification"
  },
  {
    id: "digitalmarketingfundamentalscertification",
    title: "Digital Marketing Fundamentals Certification",
    price: "₹21,000",
    description: "Master digital marketing metrics, SEO, and paid campaign mechanics.",
    category: "Marketing & Communication",
    path: "/course/digitalmarketingfundamentalscertification"
  },
  {
    id: "hranalyticscertification",
    title: "HR Analytics Certification",
    price: "₹25,000",
    description: "Leverage people analytics and data models to drive evidence-based HR decisions.",
    category: "HR & Legal Compliance",
    path: "/course/hranalyticscertification"
  },
  {
    id: "stakeholdermanagementcertification",
    title: "Stakeholder Management Certification",
    price: "₹25,000",
    description: "Map stakeholder matrices and align complex interest groups on project parameters.",
    category: "Business & Management",
    path: "/course/stakeholdermanagementcertification"
  },
  {
    id: "workplacediversityinclusionceritification",
    title: "Workplace Diversity & Inclusion Certification",
    price: "₹21,000",
    description: "Build equitable, psychologically safe workplaces using structured D&I frameworks.",
    category: "HR & Legal Compliance",
    path: "/course/workplacediversityinclusionceritification"
  },
  {
    id: "persuasioninfluencingskillscertification",
    title: "Persuasion & Influencing Skills Certification",
    price: "₹21,000",
    description: "Learn ethical persuasion frameworks to influence project stakeholders and drive decisions.",
    category: "Leadership & Soft Skills",
    path: "/course/persuasioninfluencingskillscertification"
  },
  {
    id: "clientrelationshipmanagementcertification",
    title: "Client Relationship Management Certification",
    price: "₹21,000",
    description: "Establish high-trust client relationships and optimize long-term account value.",
    category: "Business & Management",
    path: "/course/clientrelationshipmanagementcertification"
  }
];

// ─── Professional Catalog: 4 category groups for the Courses catalog page ────
export const professionalCatalog = [
  {
    category: "Leadership & Soft Skills",
    courses: [
      { id: "conflictmanagementcertification", title: "Conflict Management Certification", price: "₹18,000" },
      { id: "decisionmakingproblemsolvingcertification", title: "Decision-Making & Problem Solving Certification", price: "₹25,000" },
      { id: "professionalcommunicationskillscertification", title: "Professional Communication Skills Certification", price: "₹21,000" },
      { id: "publicspeakingpresentationskillscertification", title: "Public Speaking & Presentation Skills Certification", price: "₹25,000" },
      { id: "interpersonalskillscertification", title: "Interpersonal Skills Certification", price: "₹18,000" },
      { id: "negotiationskillscertification", title: "Negotiation Skills Certification", price: "₹25,000" },
      { id: "persuasioninfluencingskillscertification", title: "Persuasion & Influencing Skills Certification", price: "₹21,000" },
      { id: "emotionalintelligenceeqcertification", title: "Emotional Intelligence (EQ) Certification", price: "₹21,000" },
      { id: "goalsettingachievementcertification", title: "Goal Setting & Achievement Certification", price: "₹18,000" },
      { id: "criticalthinkingcertification", title: "Critical Thinking Certification", price: "₹21,000" },
      { id: "creativethinkingcertification", title: "Creative Thinking Certification", price: "₹21,000" },
      { id: "positivepsychologycertification", title: "Positive Psychology Certification", price: "₹18,000" }
    ]
  },
  {
    category: "Business & Management",
    courses: [
      { id: "clientrelationshipmanagementcertification", title: "Client Relationship Management Certification", price: "₹21,000" },
      { id: "stakeholdermanagementcertification", title: "Stakeholder Management Certification", price: "₹25,000" },
      { id: "businessnetworkingcertification", title: "Business Networking Certification", price: "₹18,000" },
      { id: "customerexperiencemanagementcertification", title: "Customer Experience Management Certification", price: "₹21,000" }
    ]
  },
  {
    category: "Marketing & Communication",
    courses: [
      { id: "digitalmarketingfundamentalscertification", title: "Digital Marketing Fundamentals Certification", price: "₹21,000" },
      { id: "brandmanagementcertification", title: "Brand Management Certification", price: "₹25,000" },
      { id: "socialmediamarketingcertification", title: "Social Media Marketing Certification", price: "₹18,000" },
      { id: "contentmarketingcertification", title: "Content Marketing Certification", price: "₹21,000" }
    ]
  },
  {
    category: "HR & Legal Compliance",
    courses: [
      { id: "hranalyticscertification", title: "HR Analytics Certification", price: "₹25,000" },
      { id: "performanceappraisalsystemscertification", title: "Performance Appraisal Systems Certification", price: "₹21,000" },
      { id: "workplacediversityinclusionceritification", title: "Workplace Diversity & Inclusion Certification", price: "₹21,000" },
      { id: "labourlawawarvenesscertification", title: "Labour Law Awareness Certification", price: "₹18,000" }
    ]
  }
];
