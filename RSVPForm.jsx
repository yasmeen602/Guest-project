import { useState } from "react";
import api from "../api";

export default function RSVPForm({ eventId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rsvpStatus: "Maybe",
    attendeesCount: 1,
    message: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/rsvps", { ...formData, eventId });
      setSuccess("Your RSVP has been submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        rsvpStatus: "Maybe",
        attendeesCount: 1,
        message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow rounded-2xl max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">RSVP Form</h2>

      {success && <p className="text-green-600 mb-3">{success}</p>}

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-3 rounded"
      />
      <select
        name="rsvpStatus"
        value={formData.rsvpStatus}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Maybe">Maybe</option>
      </select>
      <input
        type="number"
        name="attendeesCount"
        min="1"
        value={formData.attendeesCount}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
      />
      <textarea
        name="message"
        placeholder="Optional Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2"
      >
        Submit RSVP
      </button>
    </form>
  );
}
