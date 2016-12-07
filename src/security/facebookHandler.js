export const facebookHandler = (accessToken, refreshToken, profile, done) => {
    console.log('Access token: ' + accessToken);
    console.log('Refresh token: ' + refreshToken);
    console.log('Profile: ' + profile);
};

export const getFacebookConfig = () => {
    return {
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK
    };
};