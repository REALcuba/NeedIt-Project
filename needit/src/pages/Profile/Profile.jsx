import React from "react";

//style
import "./profile.css";
import blank from "../../img/blank.jpg";
// import { Link } from "react-router-dom";
function Profile() {
  return (
    
    <div className="userProfileBody container">
     
      <div className="profileContentDiv">
        <div className="profileDetails">
          <div className="imgDiv">
            <img src={blank} className="profileImg" alt="userImage" />
          </div>
          <div className="userDataWraper">
            <div >
             <div className="userData">
              <h3>Name</h3>
              <h3>lorem</h3>
              <div>bio</div>
             </div>
            </div>
          </div>
        </div>
        <div>user products</div>
      </div>
    </div>
  );
}

export default Profile;
