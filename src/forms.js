import { rightSide,leftSide,newTask,newProject } from "./loader.js";

export const taskForm = () => {
    const taskForm = document.createElement("form");
    newTask.style.display = "none";
    taskForm.setAttribute("id","task-form");
    taskForm.innerHTML = `
            <input type='text' name='title' id='title' placeholder="Write Task" size="75"required/>
            <input type="date" id="date" name="date">
            <button id='submit' type='button'>Create Task</button>
    ` 
    rightSide.appendChild(taskForm);
};

export const projectForm = () => {
    const projectForm = document.createElement("form");
    newProject.style.display = "none";
    projectForm.setAttribute("id","project-form");
    projectForm.innerHTML = `
        <input type='text' name='pname' id='pname' placeholder="Write Project Name" required/><br>
        <button id='submit' type='button'>Create Project</button>
    `
    leftSide.appendChild(projectForm);
};