import { Link } from "react-router-dom";
import "./header.css";
import { useGlobalContext } from "../Context/Context";
import tag from "../../assets/taghname.png";

export default function Header() {
  const data = useGlobalContext();
  const logout = () => {
    if (localStorage.getItem("SetData")) {
      localStorage.removeItem("SetData");
      data.setvirifi({ ...data.virifi, username: "" });
    }
  };

  return (
    <div className="header">
      <div className="contactinfo">
        <div className="contact">
          <div>
            <a className="footer__btn" href="mailto:praveen21@navgurukul.org">
              praveen21@navgurukul.org
            </a>
          </div>
          <div>
            <span>Phone No : 9599334028</span>
          </div>
        </div>
        <div className="contactbutton">
          <div className="message">
            <button type="button">Send Email</button>
          </div>
          <div className="sms">
            <button type="button">
              <i className="fa fa-envelope-o"> Send SMS</i>
            </button>
          </div>
          <div className="whatsapp">
            <button type="button">
              <a href="https://wa.me/qr/NJEGXOCG7VZRF1" target="_blank">
                <i className="fa fa-whatsapp"> Wehatsapp me</i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="tagname">
        <img src={tag} alt="Tagname" />
      </div>
      <div className="headercontainer">
        <Link to="./"> Home</Link>
        <Link to="./">Menu</Link>
        {data.virifi.username ? (
          <>
            <Link
              to="/"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Link>
            <h2>{data.virifi.username}</h2>
          </>
        ) : (
          <>
            <Link to="./singup"> Singup</Link>
            <Link to="./login">Login</Link>
          </>
        )}
      </div>
      <div className="slideimage">
      </div>
    </div>
  );
}
