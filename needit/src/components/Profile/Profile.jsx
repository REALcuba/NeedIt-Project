import React from 'react'


//style
import './profile'
import blank from '../../img/blank.jpg'
function Profile() {
  return (
    <div className='userProfile'>
        <div className='profileContentDiv'>
            <div>
                <div className='profileImgDiv'>
                    <img src={blank} alt="" />
                </div>
                <div>

                Profile
                </div>
            </div>
            <div>bio</div>
            <div>user products</div>
        </div>
    </div>
  )
}

export default Profile