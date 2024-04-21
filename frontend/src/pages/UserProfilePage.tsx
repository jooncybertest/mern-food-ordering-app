import { useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

export const UserProfilePage = () => {
  const { updateUser, isLoading } = useUpdateMyUser();
  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
};
