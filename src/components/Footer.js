import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/neel-gupta-28ba89208?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwVXctDehRuq5N1KSzcwaBQ%3D%3D" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/neelgupta8720" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/neelgupta8720/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
