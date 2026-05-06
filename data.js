// Mock data for the College Internship & Placement Portal
const opportunities = [
  { id:"op-1", company:"Northwind Analytics", role:"Data Science Intern", type:"Internship", location:"Bengaluru · Hybrid", stipend:"₹45,000 / month", cgpa:7.5, deadline:"2026-05-20", posted:"2026-04-28", skills:["Python","SQL","Pandas","ML"], description:"Work alongside senior data scientists on customer-segmentation models and dashboards used by Fortune-500 retail clients.", logo:"NA" },
  { id:"op-2", company:"Atlas Robotics", role:"Embedded Software Engineer", type:"Placement", location:"Pune · On-site", stipend:"₹14 LPA", cgpa:8.0, deadline:"2026-05-15", posted:"2026-04-22", skills:["C++","RTOS","ARM","ROS2"], description:"Full-time role on the autonomy team building firmware for next-generation warehouse robots.", logo:"AR" },
  { id:"op-3", company:"Lumen Capital", role:"Quant Research Intern", type:"Internship", location:"Mumbai · On-site", stipend:"₹85,000 / month", cgpa:8.5, deadline:"2026-05-12", posted:"2026-04-30", skills:["Python","Statistics","C++"], description:"Build, backtest, and ship statistical-arbitrage strategies on the Indian equities desk.", logo:"LC" },
  { id:"op-4", company:"Verdant Cloud", role:"Backend Engineer", type:"Placement", location:"Hyderabad · Remote", stipend:"₹18 LPA", cgpa:7.0, deadline:"2026-06-01", posted:"2026-04-25", skills:["Go","PostgreSQL","Kubernetes"], description:"Own services that power multi-region database orchestration for thousands of customers.", logo:"VC" },
  { id:"op-5", company:"Helix Health", role:"Product Design Intern", type:"Internship", location:"Remote", stipend:"₹35,000 / month", cgpa:7.0, deadline:"2026-05-25", posted:"2026-05-01", skills:["Figma","User Research","Prototyping"], description:"Shape patient-facing experiences across web and mobile for a Series-B health-tech company.", logo:"HH" },
  { id:"op-6", company:"Cortex AI", role:"ML Research Engineer", type:"Placement", location:"Bengaluru · Hybrid", stipend:"₹26 LPA", cgpa:8.5, deadline:"2026-05-30", posted:"2026-04-29", skills:["PyTorch","Transformers","CUDA"], description:"Train and serve foundation models for enterprise document understanding.", logo:"CX" },
];

const applications = [
  { id:"ap-1", opportunityId:"op-1", status:"Shortlisted", appliedOn:"2026-04-29", updatedOn:"2026-05-03", nextStep:"Technical interview · May 9" },
  { id:"ap-2", opportunityId:"op-3", status:"Interview",   appliedOn:"2026-05-01", updatedOn:"2026-05-04", nextStep:"Round 2 · May 11" },
  { id:"ap-3", opportunityId:"op-4", status:"Under Review",appliedOn:"2026-04-26", updatedOn:"2026-04-28" },
  { id:"ap-4", opportunityId:"op-6", status:"Applied",     appliedOn:"2026-05-05", updatedOn:"2026-05-05" },
  { id:"ap-5", opportunityId:"op-2", status:"Rejected",    appliedOn:"2026-04-23", updatedOn:"2026-04-30" },
];

const student = {
  name:"Muazzam Shaikh", rollNo:"CS21B1042", branch:"B.Tech Computer Science",
  year:"Final Year", cgpa:8.42, email:"muazzamshaikh333@gmail.com",
  phone:"+91 98765 43210", resume:"Muazzam_Shaikh_Resume_v3.pdf",
  resumeUpdated:"2026-04-18",
  skills:["Python","React","TypeScript","PostgreSQL","ML","System Design"],
};

const tpoStats = { totalStudents:412, placed:287, activeDrives:18, companies:64 };

const recentTpoActivity = [
  { who:"Cortex AI", action:"posted ML Research Engineer", when:"2h ago" },
  { who:"TPO Office", action:"shortlisted 24 students for Lumen Capital", when:"5h ago" },
  { who:"Verdant Cloud", action:"scheduled campus drive · May 18", when:"1d ago" },
  { who:"Atlas Robotics", action:"made 6 offers", when:"2d ago" },
];

const statusBadge = {
  "Applied":"badge-muted","Under Review":"badge-accent","Shortlisted":"badge-primary",
  "Interview":"badge-warn","Offered":"badge-success","Rejected":"badge-danger",
};

function getOpportunity(id){ return opportunities.find(o => o.id === id); }
function initials(n){ return n.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase(); }
