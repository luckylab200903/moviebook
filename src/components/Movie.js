import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleclick = (e) => {
    console.log("clicked");
    navigate(`/bookticket/${id}`);
  };

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.log("error fetching details", error);
      }
    };
    fetchShow();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <button className="font-bold p-4 rounded-lg text-center bg-slate-400" onClick={handleclick}>Book Ticket</button>
      </div>
      <h1 className="text-center text-3xl font-bold mb-6">{show.name}</h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
        <img className="rounded-lg shadow-md w-64 h-auto mb-4 md:mr-6" src={show.image?.medium || "https://www.lifeandstylemag.com/wp-content/uploads/2022/02/dakota-johnson-plastic-surgery-transformation-then-now.png"} alt={show.name} />
        <div className="text-lg">
          <p><span className="font-semibold">Type:</span> {show.type}</p>
          <p><span className="font-semibold">Language:</span> {show.language}</p>
          <p><span className="font-semibold">Genres:</span> {show.genres?.join(", ")}</p>
          <p><span className="font-semibold">Status:</span> {show.status}</p>
          <p><span className="font-semibold">Runtime:</span> {show.runtime} minutes</p>
          <p><span className="font-semibold">Premiered:</span> {show.premiered}</p>
          <p><span className="font-semibold">Rating:</span> {show.rating?.average}</p>
          <p><span className="font-semibold">Summary:</span> {show.summary}</p>
          <p><span className="font-semibold">Ended:</span> {show.ended}</p>
          <p><span className="font-semibold">Schedule:</span> {show.schedule?.time}</p>
          <p><span className="font-semibold">Days:</span> {show.schedule?.days[0]}</p>
          <p><span className="font-semibold">Weight:</span> {show.weight}</p>
          <p><span className="font-semibold">Network:</span> {show.network?.id} {show.network?.name}</p>
          <p><span className="font-semibold">Country:</span> {show.network?.country?.name} {show.network?.country?.code} {show.network?.country?.timezone}</p>
          {show.officialSite && (
            <a className="mt-4 block text-blue-600 hover:underline" href={show.officialSite} target="_blank" rel="noopener noreferrer">Official Site</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
