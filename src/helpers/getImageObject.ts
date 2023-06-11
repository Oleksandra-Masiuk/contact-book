const getImageObject = (imageUri: string | undefined) =>
  imageUri ? {uri: imageUri} : require('../assets/user-profile.png');

export {getImageObject};
