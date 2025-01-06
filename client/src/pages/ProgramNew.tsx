import { useNavigate } from "react-router-dom";

import ProgramNewForm from "../components/ProgramNewForm";

function ProgramNew() {
  const navigate = useNavigate();

  const newProgram = {
    title: "",
    synopsis: "",
    poster: "",
    country: "",
    year: Number(""),
    category_id: Number(""),
  };

  return (
    <ProgramNewForm
      defaultValue={newProgram}
      onSubmit={(programData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/programs`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(programData),
        })
          .then((response) => response.json())
          .then((data) => {
            navigate(`/program/${data.insertId}`);
          });
      }}
    >
      Ajouter
    </ProgramNewForm>
  );
}

export default ProgramNew;
