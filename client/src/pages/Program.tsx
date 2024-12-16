import { useLoaderData } from "react-router-dom";

const Program = () => {
  type programType = {
    id: number;
    title: string;
    synopsis: string;
    poster: string;
    country: string;
    year: string;
  };

  const data = useLoaderData() as programType[];

  return (
    <div className="flex flex-row gap-8">
      {data?.map((data) => (
        <section key={data.id} className="bg-slate-500 w-64">
          <img src={data.poster} alt={`poster de ${data.title}`} />
          <p>{data.title}</p>
          <p>{data.synopsis}</p>
          <p>{data.year} </p>
        </section>
      ))}
    </div>
  );
};

export default Program;
