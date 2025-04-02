
// pages/api/shoes.js
import {data} from '../../../data'

export default function handler(req, res) {
    const { slug } = req.query;
    const brand = data.filter((product) => product.brand.toLowerCase() === slug.toLowerCase());

    if (brand) {
      res.status(200).json(brand);
    } else {
      res.status(404).json({ error: "brand not found" });
    }
}
