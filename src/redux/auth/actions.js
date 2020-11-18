import constants  from './constants'; 

// SIGN IN 
export const customerSignInStart = emailAndPassword => ({
    type: constants.SIGN_IN_START,
    payload: emailAndPassword
});

//SIGNUP
export const customerSignUpStart = userDetails => ({
    type: constants.SIGN_UP_START,
    payload: userDetails
});
