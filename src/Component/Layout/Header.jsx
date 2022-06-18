import logo from "../../assets/images/logo.svg";

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
  return (
    <header className="header_wrapper">
      <div className="my-container">
      <div className="header_area d-flex align-items-center justify-content-between g-sm">
        <div className="log_nav_area d-flex align-items-center justify-content-between ">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul className="d-flex align-items-center justify-content-between">
              {
                menuList.map((item,index)=>{
                  return(
                    <li key={index}><a href={item.url}>{item.label}</a></li>

                  )
                } )

              }
            </ul>
          </nav>
        </div>
        <div className="header_btn_area">
          btn
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
