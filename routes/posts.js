import express from "express";

const getTriangleType = (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const c = req.query.c;

  if (!a || !b || !c) return res.status(400).json({message: "missing parameter in query"});
  //equilateral
  if (a===b && b===c)
    return res.status(200).json("EQUILATERAL");
  //isosceles
  else if (a===b || a===c || b===c)
    return res.status(200).json("ISOCELES");
  //scalene
  else if (a!==b && b!==c)
    return res.status(200).json("SCALENE");
  else return res.status(500).json("this is not a recognised triangle");
};

const router = express.Router();

router.get("/", getTriangleType);

export default router;
