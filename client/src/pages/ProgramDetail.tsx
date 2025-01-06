import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProgramDeleteFrom from "../components/ProgramDeleteFrom";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

const ProgramDetail = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(null as null | Program);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: Program) => {
        setProgram(data);
      });
  }, [id]);

  console.info(program);

  return (
    program && (
      <>
        <img src={program.poster} alt={`poster de ${program.title}`} />
        <h1>{program.title}</h1>
        <p>{program.synopsis}</p>
        <p>{program.year} </p>
        <Link to={`/program/${program.id}/edit`}>Modifier</Link>
        <ProgramDeleteFrom id={program.id}>Supprimer</ProgramDeleteFrom>
      </>
    )
  );
};

export default ProgramDetail;
