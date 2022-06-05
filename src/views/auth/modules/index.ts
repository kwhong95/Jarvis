import { auth } from "configs";

export const SignInWithSocialMedia = (
  provider: firebase.default.auth.AuthProvider
) =>
  new Promise<firebase.default.auth.UserCredential>((resolve, reject) => {
    auth
      .signInWithPopup(provider)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
