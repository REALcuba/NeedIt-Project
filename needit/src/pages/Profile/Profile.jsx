import React from "react";

//style
import "./profile.css";
import blank from "../../img/blank.jpg";
import DonateBtn from "../../components/DonateBtn/DonateBtn"
import { Link } from "react-router-dom";
import Datafetching from "../../components/Datafetching/Datafetching";


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
              <Datafetching/>
             <div className="userData">
              {/* <h3>Name</h3>
              <h3>lorem</h3>
              <div>bio</div> */}
             </div>
            </div>
          </div>
        </div> 
        <div>
         
        <Link to="/donate">    
          <DonateBtn/>
            </Link>
        </div>
        <div>user products</div>
      </div>
    </div>
  );
}

export default Profile;
