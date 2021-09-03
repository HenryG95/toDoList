import { inbox,newTask,newProject} from "./loader.js";
import {taskForm, projectForm} from "./forms.js";

newTask.addEventListener("click",taskForm);
newProject.addEventListener("click",projectForm);
inbox.addEventListener("click", () => {
    console.log("hi");
})