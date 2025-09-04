import GuestRSVP from "../models/GuestRSVP.js";

export const createRSVP = async (req, res) => {
  try {
    const rsvp = await GuestRSVP.create(req.body);
    res.status(201).json(rsvp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getRSVPsByEvent = async (req, res) => {
  try {
    const rsvps = await GuestRSVP.find({ eventId: req.params.eventId });
    res.json(rsvps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
