import React from "react";

//style
import "./profile.css";
import blank from "../../img/blank.jpg";
import { Link } from "react-router-dom";
function Profile() {
  return (
    
    <div className="userProfileBody container">
      {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <Link to="/profile"><li class="dropdown-item" >Profile</li></Link>
    <Link><li class="dropdown-item active" >Products</li></Link>
    <li class="dropdown-item" >Something else here</li>
    <li><hr class="dropdown-divider"/></li>
    <li class="dropdown-item" >Separated link</li>
  </ul>
</div> */}
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
