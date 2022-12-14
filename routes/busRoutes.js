const express = require("express");
const router = express.Router();
const {
  addBusData,
  getBusData,
  getStopsData,
  addStopsData,
  updateStopsData,
  busStops,
  updateLocation,
  getLocationData,
} = require("./controller/dataController");

router.post("/getBus", getBusData);
router.get("/getStops", getStopsData);
router.post("/postBus", addBusData);
router.post("/postStops", addStopsData);
router.post("/updateStops", updateStopsData);
router.post("/getBusStops", busStops);
router.post("/location", updateLocation);
router.post("/getLocation", getLocationData);
module.exports = router;
