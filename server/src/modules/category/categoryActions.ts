// Some data to make the trick
import categoryRepository from "./categoryRepository";

// Declare the actions

/* Here you code */
import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const categoryfromDB = await categoryRepository.readAll();
  if (req.query.q != null) {
    const filteredCategory = categoryfromDB.filter((category) =>
      category.name.includes(req.query.q as string),
    );

    res.json(filteredCategory);
  } else {
    res.json(categoryfromDB);
  }
};

const read: RequestHandler = async (req, res) => {
  const parsedCategoryId = Number.parseInt(req.params.id);
  const categoryfromDB = await categoryRepository.readAll();
  const category = categoryfromDB.find((c) => c.id === parsedCategoryId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

export default { browse, read };
