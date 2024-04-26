import { Request, Response } from "express";

const searchRestaurant = async (req: Request, res: Response) => {
  try {
    const city = req.params.city;

    const searchQuery = (req.query.searchQuery as string) || "";
    const selectedCuisines = (req.query.selectedCuisines) as string | "";
    const sortOption = (req.query.sortOption as string) || "lastUpdated"
    const page = parseInt(req.query.page as string) || 1; 

    let query: any = {}
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
