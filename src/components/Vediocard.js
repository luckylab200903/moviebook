import React from "react";
import { Link } from "react-router-dom";

const Vediocard = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return null;
  }

  const splitGenres = (genres) => {
    return genres.map((genre) => genre.trim());
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {data.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white">
            <Link to={`/${item.show.id}`} className="block">
              <img
                className="w-full h-auto"
                src={item.show.image?.medium || "https://www.lifeandstylemag.com/wp-content/uploads/2022/02/dakota-johnson-plastic-surgery-transformation-then-now.png"}
                alt={item.show.name}
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{item.show.name}</h2>
                <p className="text-gray-700">{item.show.type}</p>
                <p className="text-gray-700">{item.show.languages}</p>
                <p className="text-gray-700">Genres: {splitGenres(item.show.genres).join(", ")}</p>
                {item.show.officialSite && (
                  <p className="text-gray-700">
                    Official Site:{" "}
                    <a href={item.show.officialSite} className="text-blue-500 hover:underline">
                      {item.show.officialSite}
                    </a>
                  </p>
                )}
                {item.show.runtime && (
                  <p className="text-gray-700">
                    Runtime: {item.show.runtime} minutes
                  </p>
                )}
                {item.show.rating && (
                  <p className="text-gray-700">
                    Rating: Average {item.show.rating.average}
                  </p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vediocard;
