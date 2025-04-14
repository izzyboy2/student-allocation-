class CourseController {
    constructor(courseModel) {
        this.courseModel = courseModel;
    }

    async createCourse(req, res) {
        try {
            const courseData = req.body;
            const newCourse = await this.courseModel.save(courseData);
            res.status(201).json(newCourse);
        } catch (error) {
            res.status(500).json({ message: 'Error creating course', error });
        }
    }

    async getCourses(req, res) {
        try {
            const courses = await this.courseModel.find();
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving courses', error });
        }
    }

    async allocateCourse(req, res) {
        try {
            const { courseId, studentId } = req.body;
            const allocationResult = await this.courseModel.allocate(courseId, studentId);
            res.status(200).json(allocationResult);
        } catch (error) {
            res.status(500).json({ message: 'Error allocating course', error });
        }
    }
}

export default CourseController;