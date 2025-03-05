import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import articlescraping from "../assets/projects/img/1735731999031.mp4";
import project from "../assets/projects/project.png";
import webscrapeth from "../assets/projects/scraping-articles/example scraped articles/image.png";  // Corrected import
import emailscraping from "../assets/projects/email-screaping.mp4";  // Corrected import
import visaAutobot from "../assets/projects/visa-autobot-chromeextension.mp4"; // Corrected video import
import krypto from "../assets/projects/scraping-articles/image.png";
import job from "../assets/projects/job-platform-workflow.mp4";
import jobpic from "../assets/projects/image.png";
import jobpicth from "../assets/projects/img/image.png";
import webresearcher from "../assets/projects/img/1735732090881.mp4";
import webresearcherth from "../assets/projects/hq720.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
            videoThumbnail={webresearcherth}
              videoPath={webresearcher}
              isBlog={false}
              title="Gen-AI Excel Assistant (GPT-4 & Grok)"
  description={
    <>
      - AI-powered Excel automation tool built with MERN stack. <br />
      - Integrates GPT-4 and Grok for seamless AI interactions. <br />
      - Uses the React Excel Spreadsheet library for dynamic data handling. <br />
      - Enables users to automate tasks and generate insights from Excel data. <br />
      - Unlocks limitless automation possibilities for businesses and professionals.
    </>
  }
/>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={visaAutobot}  // Use imported video file
              isBlog={false}
              videoThumbnail={project}
              title="Visa AutoBot - Chrome Extension"
  description={
    <>
      - Chrome extension for automating visa application form filling. <br />
      - Built with JavaScript and Selenium for seamless automation. <br />
      - Reduces manual effort and speeds up the application process. <br />
      - Ensures accurate data entry and improves efficiency. <br />
      - User-friendly and easy to integrate into the browser.
    </>
  }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            videoThumbnail={jobpic}
              videoPath={job}
              isBlog={false}
              title="Job Platform - Stripe Integration (Custom)"
              description={
                <>
                  - Built with Spring Boot (backend) and Angular (frontend). <br />
                  - Fully customized Stripe payment integration for secure transactions. <br />
                  - Two roles: Customer & Service Provider. <br />
                  - Customers create jobs and make payments via Stripe (payment intent generated). <br />
                  - Jobs appear in the service provider's job list. <br />
                  - Service providers connect and verify their Stripe accounts (custom process, no Stripe-hosted UI). <br />
                  - Providers apply for jobs, and payments are held in escrow. <br />
                  - Once the customer approves, payment is captured and transferred to the provider's account.
                </>
              }

/>
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
  videoThumbnail={webscrapeth}
  videoPath={emailscraping}
  isBlog={false}
  title="Web-Scraping Bot"
  description={
    <>
      - Developed a Python script to automate email extraction from websites. <br />
      - Processed 15,000 customer-provided website URLs from a CSV file. <br />
      - Efficiently scraped emails, reducing manual effort and saving time. <br />
      - Designed to handle large-scale data with optimized performance. <br />
      - Eliminated repetitive tasks by automating the entire workflow.
    </>
  }
  ghLink="https://github.com/AbdulHaseeb411/Email-scraping-bot-All-kind-of-web-"
/>

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            videoThumbnail={jobpicth}
              videoPath={articlescraping}
              isBlog={false}
              title="Article Scraping Bot"
    description={
      <>
        - Developed an article scraper to extract content from websites. <br />
        - Allows scraping based on a date parameter for targeted results. <br />
        - Integrated translation functionality as per client requirements. <br />
        - Efficiently automates content extraction, reducing manual effort. <br />
        - Built to handle large-scale data scraping with optimized performance.
      </>
    }ghLink="https://github.com/AbdulHaseeb411/Article-Scraping-bot-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="WhatsApp Messaging Automation Bot"
  description={
    <>
      - Developed a bot to automate WhatsApp messaging via Web & Desktop apps. <br />
      - Reads contact names or numbers from an Excel file. <br />
      - Sends customized messages to users automatically. <br />
      - Supports both WhatsApp Web and Desktop versions. <br />
      - Efficiently handles bulk messaging, saving time and effort.
    </>
  }ghLink="https://github.com/AbdulHaseeb411/WebWhatsapp-DesktopWhatsapp-Messaging-Automation-bot"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
