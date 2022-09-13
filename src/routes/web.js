const express = require("express");
const homePageControllers = require("../controllers/homePageControllers")

const router = express.Router();

const initWebRoutes = (app) => {
  router.post('/comments', homePageControllers.commentRoute)
  router.post('/Reply', homePageControllers.replyRoute)
  router.post('/user', homePageControllers.userRoute)
  return app.use('/', router)

}


module.exports = initWebRoutes;
