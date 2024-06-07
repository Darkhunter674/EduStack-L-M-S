// routes.js
const express = require('express');
const router = express.Router();
const userController = require('./src/usercontrol.cjs');

router.post('/user/create', userController.createUserControllerFn);
router.post('/signup', userController.signUp);
router.post('/login', userController.login);
router.post('/student/add', userController.addStudentControllerFn);
router.post('/teacher/add', userController.addTeacherControllerFn);
router.post('/courses', userController.addCourseControllerFn);
router.post('/batches', userController.addBatchControllerFn);
router.get('/courses', userController.getCoursesControllerFn);
router.get('/batches', userController.getBatchesControllerFn);
router.get('/students', userController.getStudentsControllerFn);
router.get('/teachers', userController.getTeachersControllerFn);
router.post('/timetable', userController.addTimetableControllerFn);
router.get('/timetable', userController.getTimetableControllerFn);
router.get('/studentsattendance',  userController.getAttendanceByCourseAndBatch);
router.put('/attendance/:courseId/:batchId/:studentId', userController.updateStudentAttendance);
router.post('/leave', userController.addLeaveRequestControllerFn);
router.put('/leave/status', userController.updateLeaveStatusControllerFn);
router.get('/leave', userController.getLeaveRequestsControllerFn);
router.get('/teacherprogress', userController.getProgressDataControllerFn);
router.get('/teachersessions', userController.getSessionsControllerFn);
router.get('/teacherbatches', userController.getBatchesByTeacherControllerFn);
router.get('/teacherleaves', userController.getLeavesByTeacherControllerFn);
router.get('/studentprogress', userController.getstudentProgressDataControllerFn);
router.get('/studentsessions', userController.getstudentSessionsControllerFn);
router.get('/studentfaculty', userController.getstudentfacultyControllerFn);
router.get('/studentquizes', userController.getstudentquizesControllerFn);
// routes.js
router.get('/teacher/courses', userController.getCoursesByTeacherControllerFn);
router.get('/teacher/batches', userController.getBatchesTeacherControllerFn);

router.post('/notices', userController.addNoticeControllerFn);
router.get('/notices', userController.getNoticesControllerFn);

router.post('/quizzes', userController.addQuizControllerFn);
router.get('/quizzes', userController.getQuizzesControllerFn);

router.post('/grades', userController.addGradeControllerFn);
router.get('/grades', userController.getGradesControllerFn);
router.get('/profiledata', userController.getProfileDataControllerFn);
router.get('/teacherprofiledata', userController.getteacherProfileDataControllerFn);
router.get('/student/attendance/:studentId', userController.getstudentattendanceControllerFn);
// routes.js
router.get('/studenttimetable/:studentId', userController.getstudentTimetableControllerFn);

module.exports = router;
