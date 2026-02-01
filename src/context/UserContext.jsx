import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

/**
 * 👤 User Context Provider
 * 
 * Manages user profile data needed for astrological calculations:
 * - Name
 * - Date of Birth
 * - Time of Birth
 * - Gender
 * - Onboarding Status
 */
export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('user_profile');
    return saved ? JSON.parse(saved) : null;
  });

  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(() => {
    return localStorage.getItem('has_completed_onboarding') === 'true';
  });

  // Persist Profile Updates
  useEffect(() => {
    if (userProfile) {
      localStorage.setItem('user_profile', JSON.stringify(userProfile));
    }
  }, [userProfile]);

  // Persist Onboarding Status
  useEffect(() => {
    localStorage.setItem('has_completed_onboarding', hasCompletedOnboarding);
  }, [hasCompletedOnboarding]);

  /**
   * Update specific fields in user profile
   */
  const updateProfile = (data) => {
    setUserProfile(prev => ({ ...prev, ...data }));
  };

  /**
   * Complete onboarding flow
   */
  const completeOnboarding = () => {
    setHasCompletedOnboarding(true);
  };

  /**
   * Reset user data (Logout/Clear)
   */
  const resetUser = () => {
    setUserProfile(null);
    setHasCompletedOnboarding(false);
    localStorage.removeItem('user_profile');
    localStorage.removeItem('has_completed_onboarding');
  };

  const value = {
    userProfile,
    updateProfile,
    hasCompletedOnboarding,
    completeOnboarding,
    resetUser,
    // Derived Helpers
    isProfileComplete: !!(userProfile?.name && userProfile?.dob && userProfile?.gender)
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
