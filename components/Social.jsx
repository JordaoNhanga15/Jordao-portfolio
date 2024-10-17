import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaCalendar, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/JordaoNhanga15" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/jordao-de-oliveira/" },
  { icon: <FaCalendar />, path: "https://ngx-angular-date-range.vercel.app/" },
  // { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link 
            key={index} 
            href={item.path} 
            target="_blank" 
            rel="noopener noreferrer"
            className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
