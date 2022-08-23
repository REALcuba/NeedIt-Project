import React from "react";

//style
import "./profile.css";
import blank from "../../img/blank.jpg";
function Profile() {
  return (
    
    <div className="userProfileBody container">
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
      <div className="profileContentDiv">
        <div className="profileDetails">
          <div className="imgDiv">
            <img src={blank} className="profileImg" alt="user image" />
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
