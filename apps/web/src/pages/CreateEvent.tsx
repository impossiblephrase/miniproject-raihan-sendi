"use client"
import { useState } from "react";

const CreateEventPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    date: "",
    time: "",
    location: "",
    description: "",
    availableSeats: 0,
    sale_type: "paid",
    isFree: false,
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("Event created successfully!");
      } else {
        const error = await res.json();
        setMessage(`Error: ${error.message}`);
      }
    } catch (err) {
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mb-24 mt-28">
      <h1 className="text-xl font-bold mb-4">Create an Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Event Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label className="block font-medium">Price (IDR)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label className="block font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label className="block font-medium">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label className="block font-medium">Available Seats</label>
          <input
            type="number"
            name="availableSeats"
            value={formData.availableSeats}
            onChange={handleInputChange}
            className="w-full p-2 border"
          />
        </div>
        <label className="block font-base">Ticket Types</label>
        <select
          name="sale_type"
          value={formData.sale_type}
          onChange={handleInputChange}
          className="w-full p-2 border pb-20"
        >
          <option value="paid">Paid</option>
          <option value="free">Free</option>
        </select>
        <button
          type="submit"
          className="w-full bg-cyan-700 hover:cyan-400 text-white py-2 rounded"
        >
          Create Event
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
};

export default CreateEventPage;

