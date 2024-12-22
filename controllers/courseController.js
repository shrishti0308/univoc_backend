const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModel");

// @desc    Get all courses
// @route   GET /api/courses
// @access  Private
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();
  res.status(200).json(courses);
});

// @desc    Get a single course
// @route   GET /api/courses/:id
// @access  Private
const getCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }
  res.status(200).json(course);
});

// @desc    Create a new course
// @route   POST /api/courses
// @access  Private
const createCourse = asyncHandler(async (req, res) => {
  const course = new Course(req.body);
  const createdCourse = await course.save();
  res.status(201).json(createdCourse);
});

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Private
const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }

  Object.assign(course, req.body);
  const updatedCourse = await course.save();
  res.status(200).json(updatedCourse);
});

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Private
const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }

  await course.remove();
  res.status(200).json({ message: "Course removed" });
});

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
