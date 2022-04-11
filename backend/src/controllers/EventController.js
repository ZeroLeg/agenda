const Event = require("../models/Event");

const eventCtrl = {};

eventCtrl.getEvents = async (req, res, next) => {
  const events = await Event.find();
  res.json(events);
};

eventCtrl.createEvent = async (req, res) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    priority: req.body.priority
  });
  await event.save();
  res.json({ status: "Event added" });
};

eventCtrl.getEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id);
  res.json(event);
};

eventCtrl.editEvent = async (req, res) => {
  const { id } = req.params;
  await Event.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Event Updated" });
};

eventCtrl.deleteEvent = async (req, res) => {
  await Event.findByIdAndRemove(req.params.id);
  res.json({ status: "Event Deleted" });
};

module.exports = eventCtrl;
