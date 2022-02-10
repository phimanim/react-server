const express = require("express");
const controllers = require("./auth.controllers");

const ROUTES = {
  signup: "/signup",
  login: "/login",
  logout: "/logout",
  isLoggedIn: "/login",
};

function authRouter(app) {
  const router = express.Router();

  router
    .post(ROUTES.signup, controllers.signup)
    .post(ROUTES.login, controllers.login)
    .post(ROUTES.logout, controllers.logout)
    .get(ROUTES.isLoggedIn, controllers.getLoggedInUser);

  app.use("/api", router);
}

module.exports = authRouter;
