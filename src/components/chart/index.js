import axios from "axios";
import React from "react";

//Hooks
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Componets
import BarChart from "./components/BarChart/barchart";

//Utilities
import { convertTimeToISO } from "../../utilities/convert-time-to-ISO.util";

function App() {
  //States
  const [dataResponse, setDataResponse] = useState([]);
  const [error, setError] = useState("");

  //Watchers

  useEffect(() => {
    axios
      .get("https://extendsclass.com/api/json-storage/bin/aeefffb")
      .then((response) => {
        let result = response.data.data.map((item) => {
          return { ...item, date: new Date(item.date) };
        });

        let finalResult = [
          ...result
            .sort((a, b) => Number(a.date) - Number(b.date))
            .map((item) => {
              return {
                ...item,
                date: convertTimeToISO(item.date),
              };
            }),
        ];

        setDataResponse(finalResult);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <BarChart dataResponse={dataResponse} />
      
    </div>
  );
}

export default App;
