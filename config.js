/**
 * ============================================================
 *  PORTFOLIO CONFIGURATION
 *  Edit this file to personalize your portfolio.
 *  The index.html template reads all content from here.
 * ============================================================
 */
const PORTFOLIO_CONFIG = {

  /* ── Identity ─────────────────────────────────────────── */
  name:        "Ananda Vidya Sagar Katakam",
  title:       "Principal Architect - DataOps",
  profileImage: "images/profile.jpg",   // path relative to index.html
  subtitle:    "Seasoned Cloud Architect designing enterprise-grade solutions for Fortune 500 companies across AWS, Azure, and Data/AI platforms.",

  /* ── Contact (display values — keep masked for privacy) ── */
  contact: {
    email:    "k.ana*****@gmail.com",
    phone:    "+1 (9**) *** - **99",
    location: "Duluth, GA",
  },

  /* ── Social / Professional links ─────────────────────── */
  social: [
    { label: "GitHub",   icon: "fab fa-github",   url: "https://github.com/sagar0819" },
    { label: "LinkedIn", icon: "fab fa-linkedin",  url: "https://www.linkedin.com/in/kavs-66a6a037/" },
  ],

  /* ── Hero value chips (link to #business-impact) ─────── */
  valueChips: [
    "AWS & Azure Cloud",
    "Data & AI Platform",
    "Security & Observability",
    "Platform Engineering",
    "Cloud FinOps",
  ],

  /* ── Professional Summary (HTML strings) ─────────────── */
  summary: [
    `<strong>Accomplished Cloud Architect</strong> designing enterprise-grade cloud solutions that balance innovation, security, and cost. Architected and delivered cloud-native platforms, secure multicloud infrastructure, data pipelines, and AIOps  for Fortune 500 companies (Medtronic, US Foods) across regulated industries.`,
    `Deep expertise across <strong>cloud security</strong> (IAM, HIPAA compliance, encryption), <strong>AI/ML platforms</strong> (Databricks, AWS Bedrock, LangSmith), <strong>infrastructure automation</strong> (Terraform frameworks), and <strong>observability</strong> (CloudWatch, Splunk). Passionate about platform engineering and FinOps — building systems that scale securely and sustainably.`,
  ],

  /* ── Business Impact ──────────────────────────────────── */
  businessImpact: {
    intro: "Led continuous cloud cost-optimization and platform modernization programs that delivered measurable savings while strengthening security, governance, and observability.",
    items: [
      {
        title: "AWS Cloud & Data Platform FinOps",
        text:  "Led FinOps programs focused on AWS Cloud and data platform ecosystems (Databricks, Fivetran, Immuta, Atlan), delivering measurable savings through rightsizing, Savings Plans/Reserved Instances, automated cleanup, lifecycle policies, and governance-driven cost administration and reporting.",
      },
      {
        title: "Cross-cutting",
        text:  "Implemented security controls (encryption/KMS, IAM best practices, VPC endpoints), observability, and CI/CD for infrastructure and Databricks platform automation to maintain compliance and reduce MTTR.",
      },
      {
        title: "People & Delivery",
        text:  "Mentored interns and junior engineers, established code review practices and training to raise team capability and accelerate delivery.",
      },
    ],
  },

  /* ── Technical Skills ────────────────────────────────── */
  skills: [
    {
      category: "Automation & Cloud",
      items: [
        { name: "Terraform (IaC)",          tooltip: "Infrastructure as Code" },
        { name: "AWS CloudFormation",        tooltip: "AWS stack orchestration" },
        { name: "Ansible",                   tooltip: "Configuration automation" },
        { name: "GitHub Actions (CI/CD)",    tooltip: "GitHub workflows & Actions" },
        { name: "Azure DevOps",              tooltip: "Azure pipelines" },
        { name: "Docker",                    tooltip: "Containerization" },
        { name: "Kubernetes",                tooltip: "Container orchestration" },
        { name: "Helm",                      tooltip: "Package manager for K8s" },
      ],
    },
    {
      category: "Languages & Data",
      items: [
        { name: "Python",                    tooltip: "Scripting & backend" },
        { name: "Bash/Shell",                tooltip: "Shell scripting" },
        { name: "SQL",                       tooltip: "Database queries" },
        { name: "Databricks (Delta, SQL)",   tooltip: "Unified analytics platform" },
        { name: "Snowflake",                 tooltip: "Cloud data warehouse" },
        { name: "DynamoDB",                  tooltip: "NoSQL database" },
        { name: "Kafka",                     tooltip: "Event streaming" },
      ],
    },
    {
      category: "Cloud Security",
      items: [
        { name: "IAM",                       tooltip: "Identity & Access Management" },
        { name: "KMS",                       tooltip: "AWS Key Management Service" },
        { name: "Data Encryption",           tooltip: "Data at-rest & in-transit" },
        { name: "VPC Endpoints",             tooltip: "Private cloud endpoints" },
        { name: "Security Architecture",     tooltip: "Designing secure systems" },
        { name: "HIPAA Compliance",          tooltip: "Healthcare data compliance" },
        { name: "Network Security",          tooltip: "Network firewalls & rules" },
        { name: "Security Monitoring",       tooltip: "CloudWatch, Splunk alerts" },
      ],
    },
  ],

  /* ── Experience ──────────────────────────────────────── */
  experience: [
    {
      role:     "Principal Architect DataOps",
      company:  "Medtronic, Inc.",
      location: "Duluth, Georgia",
      dates:    "Jan 2024 – Present",
      bullets: [
        "Designed and developed Terraform modules for infrastructure provisioning, ensuring modularity, reusability, and scalability across projects & environments.",
        "Implemented CI pipelines for Terraform modules to automate testing, validation and deployment processes, ensuring reliability and consistency in infrastructure provisioning using tools such as GitHub Actions, Terraform Tests, tflint, KICS.",
        "Designed automated Data Pipelines to move data from on-premises to AWS Cloud and Cloud-based warehouse.",
        "Assisted in designing Modern data platform, which can be replicated for various business streams and in various regions around the world.",
        "Worked with various internal and external vendors to ingest, transform and load data in AWS and in Snowflake in real time using Messages platform such as Kafka.",
        "Implemented data privacy and data minimization solutions by using data encryption and decryption algorithms using Aws managed KMS key to protect sensitive information in AWS S3.",
        "Designed and implemented secure infrastructure on AWS, leveraging services such as Amazon S3, KMS, IAM, DynamoDB, Glue, Athena, MWAA, VPC Endpoints, etc. to safeguard sensitive data and ensure compliance with HIPAA regulations.",
        "Designed and developed the CICD pipelines to manage the Databricks resources configuration such as Network, Workspaces, Catalog, Storage, Groups, Grants, Compute, etc. using Terraform, GitHub Actions workflow.",
        "Designed and implemented the private network connectivity between Databricks AWS Account, corporate AWS Account, Fivetran, Immuta, and Atlan.",
        "Establish and enforce version control processes with GitHub, including branching strategies, code review, continuous integration, to maintain code quality and collaboration efficiency across the team.",
        "Lead the Data Operations by providing technical guidance, mentorship, and support to foster collaboration, innovation, and continuous learning in a dynamic environment.",
      ],
    },
    {
      role:     "Lead Cloud Engineer",
      company:  "US Foods, Inc.",
      location: "Rosemont, Illinois",
      dates:    "Feb 2023 – Jan 2024",
      bullets: [
        "Defined and driven the technical roadmaps to streamline cloud infrastructure operations, cost efficiency model, security, and identified areas of efficiency.",
        "Defined and driven technical maturity roadmaps to streamline cloud infrastructure operations, security, and efficiency.",
        "Engaged with product managers, architects, peers and internal stakeholders to deliver compelling software releases with differentiated cloud offerings.",
        "Provided the oversight on operations support for a large cross section of cloud services, providing consistent delivery and resolution.",
        "Defined automation and standard build/support model across the converged systems to deliver same look, feel and experience for consumers leveraging cloud services.",
        "Collaborated with other technology teams to define and develop cross-functional technology stack interactions.",
        "Provided the leadership and collaboration to engage cross organizationally to promote change and carve out new technology and software.",
        "Documented the SOPs, and MVPs.",
        "Conducted and participated in the code reviews.",
        "Operated as a mentor to junior members on the team.",
      ],
    },
    {
      role:     "Lead Application Developer",
      company:  "US Foods, Inc.",
      location: "Rosemont, Illinois",
      dates:    "Dec 2021 – Feb 2023",
      bullets: [
        "Lead the team of 6-8 developers, done the peer code reviews, and monitored the tasks progression of team using Jira.",
        "Reviewed the project objectives and determine best technology to apply.",
        "Designed and built large scale datasets for a wide range of consumer needs.",
        "Designed and developed the data pipelines using bamboo, Lambda functions and Elastic MapReduce.",
        "Designed and configured the private network connectivity between multi-cloud platforms.",
        "Developed and implemented technical roadmaps for business-critical applications hosted on Cloud Platform.",
        "Develop best practice standards for solution design and data structures.",
        "Analyze new data sources to understand quality, availability and content.",
        "Written the technical design documentation.",
        "Created and executed the unit tests.",
        "Provided the required support to QA team during testing.",
        "Mentored less experienced members of the development team.",
      ],
    },
    {
      role:     "Sr. Application Developer",
      company:  "US Foods, Inc.",
      location: "Tempe, Arizona",
      dates:    "Dec 2018 – Dec 2021",
      bullets: [
        "Developed and Implemented automation & lifecycle management of various services in AWS using bamboo pipelines and CloudFormation templates.",
        "Designed and created the physical/logical diagrams in Lucidchart for various business applications hosted in Public Cloud.",
        "Defined the migration strategy and implemented the Code Artifact to centralize and manage python, java internal/external dependencies.",
        "Worked with minimal supervision and provided the status updates and escalations to leadership as appropriate.",
        "Developed detailed system requirement specifications and technical design documents for small, medium and large business functions.",
        "Developed high quality code and configurations for new applications, databases, interface programs and write Unit Test cases to verify correctness of functionality.",
        "Conducted and participated in code reviews as part of oversight into team delivery.",
        "Documented the code, FAQs, system functionality, setup documents and support resolution processes.",
        "Developed, coordinated and released targeted application bug fixes.",
        "Provided application support as part of an on-call rotation to work on resolving outages and user questions.",
      ],
    },
    {
      role:     "AWS Developer",
      company:  "Molina Technologies LLC",
      client:   "US Foods, Inc.",
      location: "Rosemont, Illinois",
      dates:    "Sep 2017 – Dec 2018",
      bullets: [
        "Designed and implemented centralized monitoring in enterprise cloud integrating with observability tools such as Splunk.",
        "Developed chef cookbooks for configuration management and automated provisioning using CICD tools such as Jenkins and Terraform.",
        "Involved in Planning, Design, Development and Testing of various Business Applications and automation of Infrastructure on Cloud platforms.",
        "Designed AWS patterns and NoSQL database solutions, and maintained Python scripts for serverless applications.",
        "Configured Red Hat Cluster Nodes and developed Cron scripts for operations and monitoring.",
        "Utilized GitHub, Jenkins, Confluence, Chef, JIRA, REST API, Bash/Shell, Python, Java, JavaScript, SQL, Linux/Windows.",
      ],
    },
  ],

  /* ── Education ────────────────────────────────────────── */
  education: [
    {
      degree:      "Executive MBA (Information Technology)",
      institution: "Ottawa University",
      location:    "Surprise, AZ",
      dates:       "06/2020 to 07/2022",
    },
    {
      degree:      "Masters in Computer Science",
      institution: "Central Michigan University",
      location:    "Mt. Pleasant, MI",
      dates:       "08/2015 to 05/2017",
    },
  ],

  /* ── Certifications ───────────────────────────────────── */
  certifications: [
    { name: "AWS Databricks Platform Architect",          url: "https://credentials.databricks.com/e617b598-9e67-435a-bbcb-36f54492c331#acc.RnFv4JUX" },
    { name: "Generative AI Fundamentals",                 url: "https://credentials.databricks.com/2161d7d0-bd58-445d-98a8-a9a274d9b8cd#acc.EogCIlan" },
    { name: "Certified Scrum Product Owner",              url: "https://bcert.me/sfafhllox" },
    { name: "Getting Started with AWS Machine Learning",  url: "https://coursera.org/share/4edf73496402479777978985126bf2a1" },
    { name: "AWS Developer Associate",                    url: "https://www.youracclaim.com/badges/9ae8e1b7-51c2-4592-be47-9de4bdb5baa5/public_url" },
  ],

};
