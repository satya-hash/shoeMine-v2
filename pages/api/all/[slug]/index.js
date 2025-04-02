// pages/api/all/[slug].js
import { data } from "../../data";

export default function handler(req, res) {
  const { slug } = req.query;
  const shoe = data.find((shoe) => shoe.link === slug);

  if (shoe) {
    res.status(200).json(shoe);
  } else {
    res.status(404).json({ error: "Shoe not found" });
  }
}
