import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footercontainer">
      <div className="informcontainer">
        <div className="optioncontainer">
          <div className="genrallinks">
            <div className="genrallinksheading">
              <h3>General Links</h3>
            </div>
            <div className="genrallinkscontant">
              <ul>
                <li className="genrallinksrow">Blog</li>
                <li className="genrallinksrow">About Us</li>
                <li className="genrallinksrow">Find Property</li>
                <li className="genrallinksrow">Area Converter</li>
                <li className="genrallinksrow">Photo Gallary</li>
              </ul>
            </div>
          </div>
          <div className="quickcontact">
            <div className="quickcontactheader">
              <h3>Quick Contact</h3>
            </div>
            <div className="quickcontent">
              <ul>
                <li>Email Us</li>
                <li>Contact</li>
                <li>Phone No</li>
                <li>Office Addess (Map)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="quickenquiry">
          <div className="quickenquiryHeader">
            <h3>Quick Enquiry</h3>
          </div>
          <div className="quickenquiryinput">
            <input type="text" name="fullname" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <input type="tel" name="phoneno" placeholder="Your Phone No" />
            <select name="propertytype">
              <option value="Buy a Property" selected="selected">
                Buy a Property
              </option>
              <option value="Rent">Rent</option>
              <option value="sell">Sell</option>
              <option value="lease">Lease</option>
            </select>
            <textarea
              name="details"
              cols="25"
              rows="4"
              class="deatils"
              placeholder="Leave a Message for us"
              maxlength="1000"
            ></textarea>
            <div className="button">
              <button type="button">send message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="reservcontainer">
        <div class="col-1">
          <hr />
          <span class="copyright">&copy; All Rights Reserved.</span>
          <br />
          <span class="memberOf">Developed &amp; Managed By Praveen Kumar</span>
        </div>
      </div>
    </div>
  );
}
