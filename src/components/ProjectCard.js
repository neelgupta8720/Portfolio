import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, url}) => {

  // const links = [
    
  //  {url:"https://github.com/neelgupta8720/JARVIS"},
  //  {url:"https://github.com/neelgupta8720/campus_connect"},
  //  {url:"https://github.com/neelgupta8720/HOME_WORK_FIREBASE"},
 
  // onclick={()=>links.map((item,index)=>(
  //   <NavLink info={links[index]}/>
  // ))} 
  //   ,]

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={url}/>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
          {/* <div>
    {links.map((item,index)=>(
      <NavLink info={links[index]}/>
    ))}
 </div> */}
        </div>
      </div>
    </Col>
  )
}
