// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

/* Here you code */
import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredCategory = categories.filter((category) =>
      category.name.includes(req.query.q as string),
    );

    res.json(filteredCategory);
  } else {
    res.json(categories);
  }
};

const read: RequestHandler = (req, res) => {
  const parsedCategoryId = Number.parseInt(req.params.id);

  const category = categories.find((c) => c.id === parsedCategoryId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

export default { browse, read };
