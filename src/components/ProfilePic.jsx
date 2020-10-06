import React from 'react'

const ProfilePic = ({image}) => {
    return (
        <div className="profile">
            <img style={{
                width: '300px',
                height: '400px',
                objectFit : 'cover'
            }} src={image} alt="cast"/>
        </div>
    )
}

export default ProfilePic
