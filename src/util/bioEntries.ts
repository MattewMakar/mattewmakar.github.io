export interface BioEntry {
  inlineSummary: string;
  summary: string;
  description: string;
  lottie: string;
  time: string;
  link?: string;
}
export const education: Array<BioEntry> = [
  {
    inlineSummary: "Seneca College",
    summary: "Computer programming Diploma",
    description:
      "Graduated with high honours and a gpa 4.0 studied mobile development, web development and distributed programming techniques and database administration.also studied about security and a variety of operating systems including Windows, UNIX, Linux and IBM Business Computing.",
    lottie: "csStudy.json",
    time: "2021",
  },
  {
    inlineSummary: "Alexandria University",
    summary: "Bachelor of Accounting and Finance",
    description:
      "Studied how to interpret and analyze financial data. and how to analyze big financial data sets with modern financial softwares.",
    lottie: "study.json",
    time: "2012",
  },
];
export const experience: Array<BioEntry> = [
  {
    inlineSummary: "Intermediate Full stack developer",
    summary: "Medchart",
    description:
      "High scalable .NET serverless API to support collect health record and patient consents .Use REACT framework on the front end to build portals to the request and release of health information for healthcare providers, lawyers, insurance providers, and patients. Technology I use TypeScript, React ,.NETcore, cosmos db database , Auth0, AD for authentication , Azure functions, rollup, storybook.",
    time: "Nov 2021 - Present",
    lottie: "healthcare.json",
    link: "https://www.medchart.ca/",
  },
  {
    inlineSummary: "Full stack developer",
    summary: "Sigfox Canada",
    description:
      "Developed high scalable NodeJS REST API to support a multi tenants application with different IOT use cases. Developed and maintain different IOT use cases ( asset tracking , occupancy monitoring , weather applications). Designed a Restful backend server to the admin dashboard and to connect to SQL database. Designed a scalable relational database to store users and devices data. Develop an admin dashboard that allows users to track movement of IOT devices. Technology: TypeScript, React ,Express, Socket io , SQL database , JWT for authentication , Azure.",
    time: "Jan 2021 - Nov 2021",
    lottie: "iotApp.json",
    link: "https://www.sigfox.com/en",
  },
  {
    inlineSummary: "Full stack developer",
    summary: "FONTUR international",
    description:
      "Developed high scalable NodeJS REST API to support a multi tenants application with different IOT use cases. Developed and maintain different IOT use cases ( asset tracking , occupancy monitoring , weather applications). Designed a Restful backend server to the admin dashboard and to connect to SQL database. Design a scalable relational database to store users and devices data. Developed an admin dashboard that allows users to track movement of IOT devices. Technology: TypeScript, React ,Express, Socket io , SQL database , JWT for authentication , Azure",
    time: "Aug 2020 - Nov 2021",
    lottie: "tracking.json",
    link: "https://www.fonturinternational.com/",
  },
  {
    inlineSummary: "Full stack developer",
    summary: "Canada Summer Job - internship",
    description:
      "Helped Developing a cross platform mobile app for St. Mark cathedral (government program for non-profit)",
    time: "Jun 2020 - Aug 2020",
    lottie: "dashboard.json",
    link: "https://stmarkstoronto.ca/",
  },
  {
    inlineSummary: "Financial Accountant",
    summary: "Winsafe Corp.",
    description:
      "Financial Accounting: Examined and analyzed journal and ledger entries, bank statements, inventories, expenditures, tax returns and other accounting and financial records, documents and systems of departments within organizations to ensure financial recording accuracy and compliance with established accounting standards, procedures and internal controls.",
    time: "Aug 2019 - Jul 2020",
    lottie: "accountant.json",
    link: "https://www.winsafe.com/",
  },
  {
    inlineSummary: "Relationship manager",
    summary: "NBE Bank",
    description:
      "Served wealth clients by delivering exceptional customer service through completing transactions, engaging in needs-based conversations.",
    time: "Sep 2014 - Feb 2019",
    lottie: "bank.json",
    link: "https://www.nbe.com.eg/",
  },
];
