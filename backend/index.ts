import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

const movies = [
  {
    id: 1,
    title: "The Matrix",
    description:
      "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    id: 2,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
  },
];

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/movies", (req, res) => {
  const searchTerm = req.query.search;
  const page = req.query.page;
  const tags = req.query.tags;

  const filteredMovies =
    typeof searchTerm === "string"
      ? movies.filter((movie) =>
          JSON.stringify(movie).toLowerCase().includes(searchTerm.toLowerCase())
        )
      : movies;
  res.send(filteredMovies);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
