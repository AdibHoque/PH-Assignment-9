import {useParams, useLoaderData} from "react-router-dom";

export default function Estates() {
  const {id} = useParams();
  const dat = useLoaderData();
  const data = dat[id - 1];
  const {
    estate_title,
    description,
    image,
    segment_name,
    price,
    status,
    location,
    area,
    facilities,
  } = data;
  return (
    <>
      <div className="h-[86vh] hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row">
          <img src={image} className="lg:max-w-[50%] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-yellow-500">
              {estate_title}
            </h1>
            <p className="text-yellow-600">{segment_name}</p>
            <p className="py-6">{description}</p>

            <h4>
              <span className="font-semibold">Location: </span>
              {location}
            </h4>
            <h4>
              <span className="font-semibold">Facilities: </span>
              {facilities.join(", ")}
            </h4>
            <h4>
              <span className="font-semibold">Area: </span>
              {area}
            </h4>
            <h4>
              <span className="font-semibold">Price: </span>
              <span className="font-bold text-yellow-500">{price}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
