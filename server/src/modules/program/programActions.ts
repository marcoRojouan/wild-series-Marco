// Declare the action
import programRepository from "./programRepository";

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const programFromDB = await programRepository.readAll();

    if (req.query.q != null) {
      const filteredPrograms = programFromDB.filter((program) =>
        program.synopsis.includes(req.query.q as string),
      );

      res.json(filteredPrograms);
    } else {
      res.json(programFromDB);
    }
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const parseId = Number.parseInt(req.params.id);
    const programFromDB = await programRepository.readAll();
    const program = programFromDB.find((p) => p.id === parseId);

    if (program != null) {
      res.json(program);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const program = {
      id: Number(req.params.id),
      title: req.body.title,
      synopsis: req.body.synopsis,
      poster: req.body.poster,
      country: req.body.country,
      year: req.body.year,
      category_id: req.body.category_id,
    };

    const affectedRows = await programRepository.update(program);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newProgram = {
      title: req.body.title,
      synopsis: req.body.synopsis,
      poster: req.body.poster,
      country: req.body.country,
      year: req.body.year,
      category_id: req.body.category_id,
    };

    const insertId = await programRepository.create(newProgram);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const programId = Number(req.params.id);

    await programRepository.delete(programId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, destroy };
