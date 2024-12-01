import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import ProfileForm from '../../components/Profile/ProfileForm';

function Profile() {
  const navigate = useNavigate();
  const { user, updateProfile, isAuthenticated } = useAuthStore();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (data) => {
    updateProfile(data);
    // Show success message or redirect
    alert('Profile updated successfully!');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
      <ProfileForm onSubmit={handleSubmit} defaultValues={user} />
    </div>
  );
}

export default Profile;