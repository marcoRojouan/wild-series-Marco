// Declare the action
import programRepository from "./programRepository";

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const programFromDB = await programRepository.readAll();

  if (req.query.q != null) {
    const filteredPrograms = programFromDB.filter((program) =>
      program.synopsis.includes(req.query.q as string),
    );

    res.json(filteredPrograms);
  } else {
    res.json(programFromDB);
  }
};

const read: RequestHandler = async (req, res) => {
  const parseId = Number.parseInt(req.params.id);
  const programFromDB = await programRepository.readAll();
  const program = programFromDB.find((p) => p.id === parseId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

// Export it to import it somewhere else

export default { browse, read };
