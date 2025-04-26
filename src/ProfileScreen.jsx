import React from 'react';
import './ProfileScreen.css';

const ProfileScreen = () => {
  // This would typically come from your authentication context/state
  const user = {
    name: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    bio: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elit. Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat. Sed Diam',
    avatarUrl: '/api/placeholder/120/120' // Placeholder image
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-section-title">Account Settings</h1>
        
        <div className="profile-header">
          <div className="profile-avatar-container">
            <img 
              src={user.avatarUrl} 
              alt="Profile avatar" 
              className="profile-avatar"
            />
            <div className="profile-avatar-edit-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
          </div>
          
          <div className="profile-user-info">
            <h2 className="profile-user-name">{user.name}</h2>
            <p className="profile-user-email">{user.email}</p>
          </div>
        </div>
        
        <div className="profile-bio">
          <p>{user.bio}</p>
        </div>
        
        <div className="profile-divider"></div>
        
        {/* Additional profile sections could be added here */}
      </div>
    </div>
  );
};

export default ProfileScreen;