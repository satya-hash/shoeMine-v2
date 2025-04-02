// pages/api/shoes.js
import {data} from '../data'

export default function handler(req, res) {
  // Handle GET requests
  if (req.method === "GET") {
    res.status(200).json(data);
  } else {
    // Handle unsupported methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
