import React from "react";

//style
import "./profile.css";
import blank from "../../img/blank.jpg";
import DonateBtn from "../../components/DonateBtn/DonateBtn";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="userProfileBody container">
      <div className="profileContentDiv">
        <div className="profileDetails">
          <div className="imgDiv">
            <img src={blank} className="profileImg" alt="userImage" />
            <form
              action="http://localhost:5000/profile"
              accept="/images"
              method="POST"
            >
              <input type="file" name="picture"></input>
              <input type="name" name="name"></input>
              <input type="submit" value="upload"></input>
            </form>
          </div>
          <div className="userDataWraper">
            <div>
              <div className="userData">
                <h3>Name</h3>
                <h3>lorem</h3>
                <div>bio</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/donate">
            <DonateBtn />
          </Link>
        </div>
        <div>user products</div>
      </div>
    </div>
  );
}

export default Profile;
