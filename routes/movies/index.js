const router = require("express").Router();
const { forwardAuthenticate, ensureAuthenticate } = require("../../config");

router.get("/", forwardAuthenticate, require("./controller").getMovies);
router.get("/findByUserID/:UserID", require("./controller").getByUserID);
router.post("/upload", require("./controller").addMovies);
router.put("/:id", require("./controller").updateMovies);
router.delete("/:id", require("./controller").deleteMovies);
router.get("/upload", ensureAuthenticate, require("./controller").showForm);
router.get('/home', require('./controller').getMovies)


module.exports = router;
