export const loadProfile = () => ({
  type: 'profile/loadProfile',
});
export const loadProfileSuccess = (payload: any) => ({
  type: 'profile/loadProfileSuccess',
  payload,
});
export const updateProfile = () => ({
  type: 'profile/updateProfile',
});
