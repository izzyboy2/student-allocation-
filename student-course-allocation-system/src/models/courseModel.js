class CourseModel {
    constructor(courseId, courseName, credits) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.credits = credits;
    }

    save() {
        // Logic to save the course to the database
    }

    static find(courseId) {
        // Logic to find a course by its ID from the database
    }

    static findAll() {
        // Logic to find all courses from the database
    }
}

module.exports = CourseModel;