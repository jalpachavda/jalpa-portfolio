// import React from "react";
// import "./Projects.css";
// import card1img from "../../assets/walaravel.png";
// import card2img from "../../assets/Smart-Box-File.png";
// import card3img from "../../assets/Royal-stay-2.png";
// import firstproject from "../../assets/westaccount.png";
// import smartboxfile from "../../assets/smartboxfile.png";
// import royalvacation from "../../assets/royalvacation.png";
// // import "../../assets/westaccount.png";
// const Projects = () => {
//   return (
//     <div className="container">
//       <div className="row  align-items-center justify-content-center ">
//         <div className="col-lg-3  col-md-4 col-sm-12 mb-4 mt-4 allcard">
//           <div className="card">
//             <div className="card-image ">
//               <img
//                 className="project-logo img-fluid "
//                 src={card1img}
//                 alt="Dragon"
//               />
//             </div>
//             <div className="card-content">
//               <h3 className="title west-account mt-4">Waste Accountant</h3>
//               <p className="text">
//                 This is a premium web-based waste management system.
//               </p>
//               <a
//                 href="https://laravel.wasteaccountant.com/"
//                 className="link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View
//               </a>
//             </div>
//             <img className="card-title img-fluid" src={firstproject} />
//             {/* <h2 className="card-title">Dragon Cant</h2> */}
//           </div>
//         </div>
//         <div className="col-lg-3 allcard col-md-4 col-sm-12 mb-4 mt-4">
//           <div className="card">
//             <div className="card-image ">
//               <img
//                 className="project-logo img-fluid "
//                 src={card2img}
//                 alt="Dragon"
//               />
//             </div>
//             <div className="card-content">
//               <h3 className="title mt-4">Smart Box File</h3>
//               <p className="text">
//                 A modern React-based introduction website for a document
//                 management app.
//               </p>
//               <a
//                 href="http://smartboxfile.fairytalesoftware.com/"
//                 className="link"
//               >
//                 View
//               </a>
//             </div>
//             <img className="card-title img-fluid" src={smartboxfile} />
//           </div>
//         </div>
//         <div className=" allcard col-lg-3 col-md-4 col-sm-12 mb-4 mt-4">
//           <div className="card">
//             <div className="card-image ">
//               <img
//                 className="project-logo img-fluid "
//                 src={card3img}
//                 alt="Dragon"
//               />
//             </div>
//             <div className="card-content">
//               <h3 className="title">RoyalVacation</h3>
//               <p className="text">
//                 A clean and elegant UI design for a vacation home room booking
//                 platform.
//               </p>
//               <a href="https://jalpachavda-hb.github.io/" className="link">
//                 View
//               </a>
//             </div>
//             <img className="card-title img-fluid " src={royalvacation} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
} from "@mui/material";
import firstproject from "../../assets/westaccount.png";
import smartboxfile from "../../assets/smartboxfile.png";
import royalvacation from "../../assets/royalvacation.png";
import DimpalNails from "../../assets/DimpalNails.png";

export default function Projects() {
  const projects = [
    {
      image: firstproject,
      title: "WestAccount",
      description: "West management web app",
      link: "https://laravel.wasteaccountant.com/",
    },
    {
      image: smartboxfile,
      title: "SmartBoxFile",
      description: "Secure document management solution",
      link: "https://smartboxfile.fairytalesoftware.com/",
    },
    {
      image: royalvacation,
      title: "Royal Vacation",
      description: "Hotel booking portal",
      link: "https://jalpachavda-hb.github.io/my-app-royal/",
    },
    {
      image: DimpalNails,
      title: "Dimpal Nails",
      description: "Nail art studio portfolio",
      link: "https://dimpal-nails.vercel.app/",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {projects.map((project, index) => (
            <Card key={index} sx={{ width: "250px", flexShrink: 0 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="primary"
                >
                  Visit Site
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
