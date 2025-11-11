import "./Projects.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import firstproject from "../../assets/westaccount.png";
import smartboxfile from "../../assets/smartboxfile.png";
import royalvacation from "../../assets/royalvacation.png";
import DimpalNails from "../../assets/DimpalNails.png";
import Adminproject from "./Adminproject";
import Sarjanhomes from "../../assets/Sarjanhomes.png";
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
      {
      image: Sarjanhomes,
      title: "Sarjan HOMES",
      description: "Sarjan HOMES real estate website",
      link: "https://dev.sarjanhomes.in",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f5f5f5", padding: "40px 0" }}>
      <Container>
        <div className="sec-title">
          <div className="title">Projects</div>
        </div>
        <div>
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                display="flex"
                justifyContent="center"
              >
                <Card
                  sx={{
                    width: 300,
                    boxShadow: 3,
                    borderRadius: 2,

                    margin: "20px",
                    transition:
                      "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
                  }}
                >
                  <CardMedia
                    sx={{ height: 200 }}
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        backgroundColor: "#002060",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#002060",
                          border: "1px solid #002060",
                        },
                      }}
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Visit Site
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="sec-title">
          <div className="title">Admin Projects</div>
          <Adminproject />
        </div>
      </Container>
    </div>
  );
}
