import logo from "../../assets/images/logo.svg";
import Button from "../Button/Button";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const menuList = [
  {
    label: "Home",
    url: "",
  },
  {
    label: "What is GPT?",
    url: "",
  },
  {
    label: "Open AI",
    url: "",
  },
  {
    label: "Case Studies",
    url: "",
  },
  {
    label: "Library",
    url: "",
  },
];
function Header() {
  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <header className="header_wrapper">
      <div className="my-container">
        <div className="header_area d-flex align-items-center justify-content-between g-sm">
          <div className="log_nav_area d-flex align-items-center justify-content-between ">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <nav className={`${toggleMenu ? "navbarActive" : ""}`}>
              <ul className="d-flex align-items-center justify-content-between">
                {menuList.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.url}>{item.label}</a>
                    </li>
                  );
                })}
                <li className="header_btn">
                  <Button buttonText="  Sign in" background={false} />
                </li>
                <li className="header_btn">
                  <Button buttonText="  Sign up" />
                </li>
              </ul>
            </nav>
          </div>
          <div className="header_btn_area">
            <ul className="button_list d-flex align-items-center flex-wrap-wrap g-lg">
              <li className="header_btn">
                <Button buttonText="  Sign in" background={false} />
              </li>
              <li className="header_btn">
                <Button buttonText="  Sign up" />
              </li>
              <li className="toggle_list">
                <RiMenu3Line
                  size={27}
                  onClick={() => settoggleMenu(true)}
                  className={`${toggleMenu ? "hide_icon" : "show_icon"}`}
                />
                <AiOutlineClose
                  size={27}
                  onClick={() => settoggleMenu(false)}
                  className={`${toggleMenu ? "show_icon" : "hide_icon"}`}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
