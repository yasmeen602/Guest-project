import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import eventRoutes from "./routes/eventRoutes.js";
import rsvpRoutes from "./routes/rsvpRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// // Routes
app.use("/api/events", eventRoutes);
app.use("/api/rsvps", rsvpRoutes);

// app.get("/", (req, res) => {
//     res.send("hello world");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// k2hHlF3JRRxjGMPk