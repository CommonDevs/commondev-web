import React from "react";
import PropTypes from "prop-types";
import "./styles/style.css";
import {ImFacebook2} from "react-icons/im";
import {FaTwitterSquare} from "react-icons/fa"
import {ImInstagram} from "react-icons/im";
import {ImLinkedin} from "react-icons/im";
import {FiMail} from "react-icons/fi";
import {FaGithub} from "react-icons/fa";
import {FaPinterestSquare} from "react-icons/fa";
import {ImYoutube} from "react-icons/im";



export default function Footer() {
    const description = "";
    const title = "";
    const columns = []
   return <FooterComponent 
      description={description} 
      title={title}
      columns={columns}
      mail="commondevsteam@gmail.com"
      twitter="commonDevs"
      github="commonDevs"
      copyright="Common Devs"
      iconColor="white"
      backgroundColor="#202020"
      fontColor="white"
      copyrightColor="darkgrey"
   />;
  };

  
function FooterComponent(props,{ children, ...restProps }) {
		return (
            <div style={{ backgroundColor: props.backgroundColor || "bisque" }} className="footer-container">
                {props.title && props.description && props.columns ?
                <div className="first-row">
                    <div classNanpm i react-iconsme="col-about">
                            <div style={{ color: props.fontColor || "black" }} className="first-title">{props.title}</div> 
                            <div style={{ color: props.fontColor || "black" }} className="description">{props.description}</div>
                    </div>
                    {props.columns.map(column => (
                        <div className="columns">
                            <div style={{ color: props.fontColor || "black" }} className="second-title">{column.title}</div>
                            {column.resources.map(resource => (
                                <div key={resource.id}>
                                    <a href={`${resource.link}`} target="_blank"   rel="noreferrer"style={{ color: props.fontColor || "black" }} className="resources">{resource.name}</a>
                                </div>
                            ))}
                        </div>
                    ))} 
                </div>
                :null}
                {props.facebook !== undefined || props.linkedin !== undefined || props.gmail !== undefined  || props.instagram !== undefined  || props.twitter !== undefined || props.pinterest !== undefined || props.youtube !== undefined ?
                <div className="social-media-col">
                    <div className="social-media">
                    {props.twitter !== undefined ? <a href={`https://www.twitter.com/${props.twitter}`} target="_blank"   rel="noreferrer"className="socialMediaLogo"><FaTwitterSquare color={`${props.iconColor || "black" }`} size={25}/> </a> : ""}
                    {props.mail !== undefined ? <a href={`mailto:${props.mail}`} target="_blank"   rel="noreferrer"className="socialMediaLogo"><FiMail color={`${props.iconColor || "black" }`} size={25}/> </a> : ""}
                        {props.facebook !== undefined ? <a href={`https://www.facebook.com/${props.facebook}`} target="_blank"   rel="noreferrer"className="socialMediaLogo"><ImFacebook2 color={`${props.iconColor || "black" }`} size={25}/> </a> : ""}
                        {props.linkedin !== undefined ? <a href={`https://www.linkedin.com/in/${props.linkedin}`} target="_blank"   rel="noreferrer"className="socialMediaLogo"><ImLinkedin color={`${props.iconColor || "black" }`} size={25}/> </a> : ""}
                        {props.instagram !== undefined ? <a href={`https://www.instagram.com/${props.instagram}`} target="_blank"   rel="noreferrer"className="socialMediaLogo"><ImInstagram color={`${props.iconColor || "black" }`} size={25}/> </a> : ""}
                        {props.pinterest !== undefined ? <a href={`https://www.pinterest.com/${props.pinterest}`} target="_blank"   rel="noreferrer"className="socialMediaLogo"><FaPinterestSquare color={`${props.iconColor || "black" }`} size={25}/> </a> : ""}
                        {props.github !== undefined ? <a href={`https://github.com/${props.github}`} target="_blank"   rel="noreferrer"className="socialMediaLogo"><FaGithub color={`${props.iconColor || "black" }`} size={25}/> </a> : ""}
                        {props.youtube !== undefined ? <a href={`https://www.youtube.com/channel/${props.youtube}`} target="_blank"   rel="noreferrer"className="socialMediaLogo"><ImYoutube color={`${props.iconColor || "black" }`} size={25}/> </a> : ""}
                    </div>
                </div> : ""}
{props.copyright ?
                <div>
                    <div style={{ color: props.copyrightColor || "grey" }} className="copyright">Copyright &copy; {props.copyright}</div>
                </div> :null}
            </div>
        );
}

FooterComponent.propTypes = {
    description: PropTypes.string,
    linkedin: PropTypes.string,
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    mail: PropTypes.string,
    youtube: PropTypes.string,
    pinterest: PropTypes.string,
    title: PropTypes.string,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            resources: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string,
                    link: PropTypes.string
                })
            )
        })
    ),
    copyright: PropTypes.string,
    iconColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    copyrightColor: PropTypes.string
};
