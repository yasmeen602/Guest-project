import mongoose from "mongoose";

const guestRSVPSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Guest name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
      index: true,
    },
    phone: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 15,
    },
    rsvpStatus: {
      type: String,
      enum: ["Yes", "No", "Maybe"],
      default: "Maybe",
    },
    attendeesCount: {
      type: Number,
      default: 1,
      min: 1,
    },
    message: {
      type: String,
      maxlength: 500,
    },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

guestRSVPSchema.index({ email: 1, eventId: 1 });

const GuestRSVP = mongoose.model("GuestRSVP", guestRSVPSchema);
export default GuestRSVP;
