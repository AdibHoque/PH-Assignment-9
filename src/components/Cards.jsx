import {useEffect, useState} from "react";
import Card from "./Card";

export default function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/estates.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="px-4 lg:px-24">
        <h1 className="mt-6 text-5xl font-bold text-center text-yellow-500 animate__animated animate__bounce font-merriweather banner-font">
          Luxury Estates
        </h1>
        <div className="grid grid-cols-1 gap-4 my-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((d) => (
            <Card key={d.id} data={d}></Card>
          ))}
        </div>
      </div>
    </>
  );
}
