import { useParams } from "react-router-dom";
import RSVPForm from "../components/RSVPForm";

export default function RSVPPage() {
  const { eventId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">RSVP for Event</h1>
      <RSVPForm eventId={eventId} />
    </div>
  );
}
