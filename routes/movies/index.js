const router = require("express").Router();
const { forwardAuthenticate, ensureAuthenticate } = require("../../config");

router.get("/", forwardAuthenticate, require("./controller").getMovies);
router.get("/findByUserID/:UserID", require("./controller").getByUserID);
router.post("/", require("./controller").addMovies);
router.put("/:id", require("./controller").updateMovies);
router.delete("/:id", require("./controller").deleteMovies);

module.exports = router;
