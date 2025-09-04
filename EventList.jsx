import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event._id} className="p-4 bg-white shadow rounded-2xl">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-600">{new Date(event.date).toDateString()}</p>
            <p className="text-gray-500">{event.location}</p>
            <Link
              to={`/rsvp/${event._id}`}
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              RSVP Now
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
