import footerLogo from "../../assets/images/footer_logo.svg";

function Footer() {
  return (
    <section className="footer_wrapper">
      <div className="my-container">
        <div className="footer_title_area">
          <h3 className="hero_title">
            Do you want to step in to the future before others
          </h3>
          <button type="button " className="footer_btn">
            Request Early Access
          </button>
        </div>
        <div className="footer_grid">
          <div className="footer_logo_area">
            <img src={footerLogo} alt="" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="footer_menu_item">
            <h3>Links</h3>
            <ul>
              <li> Overons</li>
              <li> Social Media</li>
              <li> Counters</li>
              <li> Contact</li>
            </ul>
          </div>
          <div className="footer_menu_item">
            <h3>Company</h3>
            <ul>
              <li> Terms & Conditions</li>
              <li> Privacy Policy </li>
              <li> Contact</li>
            </ul>
          </div>
          <div className="footer_menu_item">
            <h3>Get in touch</h3>
            <ul>
              <li> Crechterwoord K12 182 DK Alknjkcb</li>
              <li> 085-132567 </li>
              <li> info@payme.net</li>
            </ul>
          </div>
        </div>
        <p className="copyright_text">© 2021 GPT-3. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
