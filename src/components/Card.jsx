export default function Card({data}) {
  const {estate_title, image, segment_name, price, status, location, area} =
    data;

  return (
    <>
      <div className="bg-white rounded-none card">
        <figure>
          <img src={image} alt={estate_title} />
          <div className="absolute p-3 font-bold bg-green-500 border-green-500 rounded-none text-base-100 badge badge-secondary top-3 right-3">
            {status}
          </div>
        </figure>
        <div className="gap-0 p-5 text-black card-body">
          <h3 className="mb-2 text-sm text-green-500">{segment_name}</h3>
          <h2 className="card-title">{estate_title}</h2>
          <p>{location}</p>
          <div className="flex flex-wrap justify-between">
            <h2 className="font-bold text-green-500">{price}</h2>
            <h4>
              <spa className="font-semibold">Area: </spa>
              {area}
            </h4>
          </div>
          <hr className="my-3" />
          <div className="justify-center card-actions">
            <button className="text-white bg-green-500 border-none btn">
              View Property
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
