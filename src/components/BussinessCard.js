import React from 'react';
import About from './About';
import Interest from './Interest';
import Name from './Name';
import SocialConnect from './SocialConnect';
import Photo from './Photo';
import '../App.css'
function formatName(profile){
    return profile.firstName+' '+ profile.lastName;

}
const profile={
    firstName:'Laura',
    lastName:'Smith',
    desigination:'Frontend Developer',
    website:'laurasmith.website',
    email:'hhjgf',
    linkedIn:'vfyjvg'

}
function BussinessCard() {
    
    
        return(
            <div className="outline">
            <div className="bussiness-card">
                <div className="profile-photo">
                     <Photo /> 
                </div>
                <div className='profileContent'>
                    <Name name={formatName(profile)}/>
                     <h5 className="profile-desigination">{profile.desigination}</h5>
                    <h5 className="profile-website">{profile.website}</h5> 
                </div>
                <div className='contact'>
                    <button className='email'>Email</button>
                    <button className='linkedIn'>LinkedIn</button>
                </div>
                
                    <About/>
                    <Interest/>
                
                <div className='socialMedia'>
                    <SocialConnect />
                </div>
            </div>
            </div>
        )

}
export default BussinessCard;