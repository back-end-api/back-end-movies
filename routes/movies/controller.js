const {
  Movie
} = require("../../models");

module.exports = {
  showForm: (req, res) => {
    res.render("formMovie", {
      user: req.user,
    });
  },
  editForm: (req, res) => {
    res.render("editMovie");
  },
  addMovies: async (req, res) => {
    try {
      const result = await Movie.create({
        ...req.body
      });

      res.redirect('/movies/home')
    } catch (error) {
      console.log(error);
    }
  },
  getMovies: async (req, res) => {
    try {
      const results = await Movie.find().populate("UserID");
      res.render("showdata.ejs", {
        results
      });
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  },

  getByUserID: async (req, res) => {
    try {
      const {
        UserID
      } = req.params;

      const result = await Movie.find({
        UserID
      }).populate("UserID");
      console.log(result);
      res.send({
        message: "All Movie by User ID",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateMovies: async (req, res) => {
    const {
      id
    } = req.params;

    console.log(id);
    try {
      const results = await Movie.findByIdAndUpdate(id, {
        $set: {
          ...req.body
        },
      });

      res.send({
        message: `Update data succcess`,
        results: results,
      });
    } catch (error) {
      res.send(error);
    }
  },

  deleteMovies: async (req, res) => {
    const {
      id
    } = req.params;

    try {
      const results = await Movie.deleteOne({
        _id: id
      });
      res.send({
        message: `Delete data succcess`,
        results: results,
      });
    } catch (error) {
      res.send(error);
    }
  },
};