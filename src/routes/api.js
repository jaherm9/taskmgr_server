const express=require("express");
const UsersController = require("../controllers/UsersController");
const TasksController = require("../controllers/TasksController");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");

const router=express.Router();



router.post("/registration", UsersController.regi);
router.post("/login", UsersController.login);
router.post("/profileUpdate", AuthVerifyMiddleware, UsersController.profileUpdate);

router.post("/createTask", AuthVerifyMiddleware, TasksController.createTask);
router.get("/updateTask/:id/:status", AuthVerifyMiddleware, TasksController.updateTask);
router.get("/listTaskByStatus/:status", AuthVerifyMiddleware, TasksController.listTaskByStatus);
router.get("/taskStatusCount", AuthVerifyMiddleware, TasksController.taskStatusCount);


module.exports=router;