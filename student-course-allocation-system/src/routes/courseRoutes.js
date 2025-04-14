const express = require('express');
const CourseController = require('../controllers/courseController');

const router = express.Router();
const courseController = new CourseController();

function setRoutes(app) {
    router.post('/courses', courseController.createCourse.bind(courseController));
    router.get('/courses', courseController.getCourses.bind(courseController));
    router.post('/allocate', courseController.allocateCourse.bind(courseController));

    app.use('/api', router);
}

module.exports = setRoutes;