const express = require("express");

const router = express.Router();

// Temporary in-memory data
let tours = [];

// CREATE TOUR
router.post("/", (req, res) => {
    const { title, location, price, description } = req.body;

    if (!title || !location || price === undefined || !description) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const tour = {
        id: Date.now().toString(),
        title,
        location,
        price,
        description
    };

    tours.push(tour);

    res.status(201).json({
        success: true,
        message: "Tour created successfully",
        tour
    });
});

// GET ALL TOURS
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        count: tours.length,
        tours
    });
});

// UPDATE TOUR
router.put("/:id", (req, res) => {
    const tour = tours.find(t => t.id === req.params.id);

    if (!tour) {
        return res.status(404).json({
            success: false,
            message: "Tour not found"
        });
    }

    const { title, location, price, description } = req.body;

    if (title !== undefined) tour.title = title;
    if (location !== undefined) tour.location = location;
    if (price !== undefined) tour.price = price;
    if (description !== undefined) tour.description = description;

    res.status(200).json({
        success: true,
        message: "Tour updated successfully",
        tour
    });
});

// DELETE TOUR
router.delete("/:id", (req, res) => {
    const index = tours.findIndex(t => t.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Tour not found"
        });
    }

    tours.splice(index, 1);

    res.status(200).json({
        message: "Tour deleted successfully"
    });
});

module.exports = router;