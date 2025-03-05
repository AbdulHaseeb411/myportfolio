import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ imgPath, videoPath, videoThumbnail, title, description, ghLink, demoLink, isBlog }) => {
  return (
    <Card className="project-card-view" style={{ display: "flex", flexDirection: "column" }}>
      {/* Render Video with Thumbnail if videoPath is provided */}
      {videoPath ? (
        <video
          width="100%"
          height="200px"
          controls
          poster={videoThumbnail} // Thumbnail image before play
          style={{ objectFit: "contain" }}
        >
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Card.Img
          variant="top"
          src={imgPath}
          alt="project"
          style={{
            height: "200px",
            width: "100%",
            // objectFit: "contain",
            // alignSelf: "center",
            // borderRadius: "10%",
          }}
        />
      )}

      <Card.Body style={{ display: "flex", flexDirection: "column", flexGrow: 1 ,background:"black"}}>
        <Card.Title style={{borderbottom:"solid 1px red"}}>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "12px", flexGrow: 1  }}>
          {description}
        </Card.Text>

        {/* GitHub Button */}
        {ghLink && (
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            className="mt-auto"
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <BsGithub /> &nbsp;
            {isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Demo Button - Render only if it's not a blog and demoLink exists */}
        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            className="mt-2"
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
