const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  hero: {
    title: {
      type: String,
      required: true,
    },
    breadcrumbs: {
      type: [String],
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  about: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  programDetails: [
    {
      label: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
  ],
  courses: [
    {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  ],
  benefits: [
    {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  jobRoles: {
    type: [String],
    required: true,
  },
  relatedCourses: [
    {
      title: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
