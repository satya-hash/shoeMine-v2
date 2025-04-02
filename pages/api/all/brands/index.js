// pages/api/shoes.js
import { data,brands } from "../../data";

export default function handler(req, res) {


  if (brands && brands.length > 0) {
    res.status(200).json(brands); // Return unique brands
  } else {
    res.status(404).json({ error: "No brands found" });
  }
}
