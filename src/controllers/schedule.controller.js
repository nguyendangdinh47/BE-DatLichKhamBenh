import { scheduleService } from "../services";
import { timeSlotService } from "../services";
import ApiError from "../utils/ApiError ";
import catchAsync from "../utils/catchAsync";
import helpers from "../utils/helpers";

const getAll = catchAsync(async (req, res) => {
  const schedules = await scheduleService.getAll();
  if (!schedules) {
    throw new ApiError(404, "users not found");
  }
  return res.send(schedules);
});

const getById = catchAsync(async (req, res) => {
  const schedule = await scheduleService.getById(req.params.id);
  if (!schedule) {
    throw new ApiError(404, "users not found");
  }
  return res.send(schedule);
});

const create = catchAsync(async (req, res) => {
  const formData = req.body;
  formData.id = helpers.generatorID("SD");

  await timeSlotService.createBulk(formData.data, formData.id);
  const createSchedule = await scheduleService.create(formData);

  if (!createSchedule) {
    throw new ApiError(404, "users not found");
  }
  return res.send(createSchedule);
});

const update = catchAsync(async (req, res) => {
  const scheduleId = req.params.id;
  const formData = req.body;
  const updateSchedule = await scheduleService.update(scheduleId, formData);
});

module.exports = { getAll, getById, create, update };