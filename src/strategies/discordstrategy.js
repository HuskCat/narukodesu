const DiscordStrategy = require("passport-discord").Strategy;
const passport = require("passport");

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.clientId,
      clientSecret: process.env.clientSecret,
      callbackURL: process.env.clientRedirect,
      scope: ["identify", "guilds"],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile.username);
      console.log(profile.id);
      console.log(profile.guilds.length);
    }
  )
);
