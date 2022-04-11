const express = require("express");
const router = express.Router();

const event = require("../controllers/EventController");

router.get("/", event.getEvents);

router.post("/", event.createEvent);

router.get("/:id", event.getEvent);

router.put("/:id", event.editEvent);

router.delete("/:id", event.deleteEvent);

module.exports = router;