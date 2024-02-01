import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Movie = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    numberOfSeats: "",
    memberName: "",
    contactNumber: "",
  });
  const navigate=useNavigate()

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

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Convert formData object to a string and store it in session storage
    sessionStorage.setItem("formData", JSON.stringify(formData));
    // Redirect or perform any other actions as needed
    console.log("Form data saved to session storage:", formData);
    navigate("/bookticket/confirmation")
  };

  // Check if show is null or not
  if (!show) {
    return <div className="text-center mt-8">Loading...</div>;
  }
  

  

  
  return (
    <div className="container mx-auto px-4 mt-8">
      <h1 className="text-center text-3xl font-bold mb-6">{show.name}</h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
        <img
          className="rounded-lg shadow-md w-64 h-auto mb-4 md:mr-6"
          src={show.image && (show.image.medium || "https://www.lifeandstylemag.com/wp-content/uploads/2022/02/dakota-johnson-plastic-surgery-transformation-then-now.png")}
          alt={show.name}
        />
        <div className="text-lg">
          <p>
            <span className="font-semibold">Type:</span> {show.type}
          </p>
          <p>
            <span className="font-semibold">Language:</span> {show.language}
          </p>
          <p>
            <span className="font-semibold">Genres:</span>{" "}
            {show.genres.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {show.status}
          </p>
          <p>
            <span className="font-semibold">Runtime:</span> {show.runtime}{" "}
            minutes
          </p>
          <p>
            <span className="font-semibold">Premiered:</span> {show.premiered}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {show.rating.average}
          </p>
          <p>
            <span className="font-semibold">Summary:</span> {show.summary}
          </p>
        </div>
      </div>
      <form className="mt-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Number of Seats:
          </label>
          <input
            className="appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            type="text"
            name="numberOfSeats"
            value={formData.numberOfSeats}
            placeholder="Enter number of seats"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Member Name:
          </label>
          <input
            className="appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            type="text"
            name="memberName"
            value={formData.memberName}
            placeholder="Enter member name"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">
            Contact Number:
          </label>
          <input
            className="appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            placeholder="Enter contact number"
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 m-4 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Submit to Pay
        </button>
      </form>
    </div>
  );
};

export default Movie;
