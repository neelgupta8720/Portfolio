import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/jarvis.jpg";
import projImg2 from "../assets/img/campus_connect.png";
import projImg3 from "../assets/img/plag_check.png";
import projImg4 from "../assets/img/self-driving-cars-1030x564.jpg";
import projImg5 from "../assets/img/HR-HelpDesk1.jpg";
//import url1 from "https://github.com/neelgupta8720/React_WomenHelpline/blob/main/src/pages/Main_Home.js";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { NavLink } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";
import { Link } from "react-router-dom";

export const Projects = () => {

  // const projects = [
  //   {
  //     title: "JARVIS - Desktop Assistant",
  //     description: "Design & Development",
  //     imgUrl: projImg1,
  //     url: "https://github.com/neelgupta8720/React_WomenHelpline/blob/main/src/pages/Main_Home.js",

  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  // {
  //   title: "Business Startup",
  //   description: "Design & Development",
  //   imgUrl: projImg1,
  // },
  // {
  //   title: "Business Startup",
  //   description: "Design & Development",
  //   imgUrl: projImg2,
  // },
  // {
  //   title: "Business Startup",
  //   description: "Design & Development",
  //   imgUrl: projImg3,
  // },
  // ];

  // const internship = [
  //   {
  //     title: "JARVIS - Desktop Assistant",
  //     description: "Design & Development",
  //     imgUrl: projImg1,

  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  // ];

  // function clickme(href="https://github.com/neelgupta8720/React_WomenHelpline/blob/main/src/pages/Main_Home.js"){
  //   <a href="https://github.com/neelgupta8720/React_WomenHelpline/blob/main/src/pages/Main_Home.js"></a>
  // }

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Accomplishments</h2>
                  <p>I have more than 2 years of experience in building custom websites. I have worked with various clients in different business areas - corporate, fashion, hospitality, art, etc. My main goal is to create engaging and user friendly web experiences.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Internships</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Research Paper</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Hackathons</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <div class="cards_proj">
                          <div class="content">
                            <a href="https://github.com/neelgupta8720/JARVIS" target="_blank">
                              <div class="content-overlay"></div>
                              <img class="content-image" src={projImg1} />
                              {/* <div class="content-details">
                          <h3 class="content-title">Introduction<i ></i></h3>
                        </div> */}
                            </a>
                          </div>
                        </div>
                        <div class="cards_proj">
                          <div class="content">
                            <a href="https://github.com/neelgupta8720/campus_connect" target="_blank">
                              <div class="content-overlay"></div>
                              <img class="content-image" src={projImg2} />
                              {/* <div class="content-details">
                          <h3 class="content-title">Introduction<i ></i></h3>
                        </div> */}
                            </a>
                          </div>
                        </div>
                        <div class="cards_proj">
                          <div class="content">
                            <a href="https://github.com/neelgupta8720/React_WomenHelpline" target="_blank">
                              <div class="content-overlay"></div>
                              <img class="content-image" src={projImg3} />
                              {/* <div class="content-details">
                          <h3 class="content-title">Introduction<i ></i></h3>
                        </div> */}
                            </a>
                          </div>
                        </div>


                        {/* <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Worked with an <b>NGO </b>called HrHelpdesk (a philanthropic trust) and developed two websites for the same. The first one was a donation website where people could offer their contributions, and the second website was specialised for women, known as the womenhelpline website, in which a woman could search for helplines for various problems like sexual harassment, dowry, domestic abuse or violence, etc.</p>
                        <div class="cards_proj_rp"  >
                          {/* style={{ top: "right !important" }} */}
                          <div class="content">
                            <a href="https://hrhelpdesk.org/" target="_blank">
                              <div class="content-overlay"></div>
                              <img class="content-image" src={projImg5} />
                              {/* <div class="content-details">
                          <h3 class="content-title">Introduction<i ></i></h3>
                        </div> */}
                            </a>
                          </div>
                        </div>
                        {/* <Row>
                        {
                          internship.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Published a <b>Research Paper </b> for the 5th International Conference of IEEE on <b><i>"Self-Driving Cars in Developing Countries Like India." </i></b> It elaborates a proposed solution, with the help of Deep Learning using the CNN model on how automated vehicles face challenges against Indian terrain like potholes, unmetalled roads, illegal parking, improper traffic signs, etc.</p>

                        <div class="cards_proj_rp"  >
                          {/* style={{ top: "right !important" }} */}
                          <div class="content">
                            <a href="https://ieeexplore.ieee.org/abstract/document/10039558" target="_blank">
                              <div class="content-overlay"></div>
                              <img class="content-image" src={projImg4} />
                              {/* <div class="content-details">
                          <h3 class="content-title">Introduction<i ></i></h3>
                        </div> */}
                            </a>
                          </div>
                        </div>

                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
