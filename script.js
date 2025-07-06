// Task board – declare BEFORE anything else 
let initialTasks = [
  { id: 1, title: "Launch Epic Career", description: "Create a killer Resume", status: "todo" },
  { id: 2, title: "Master JavaScript", description: "Get comfortable with the fundamentals", status: "doing" },
  { id: 3, title: "Contribute to Open Source Projects", description: "Gain experience", status: "done" },
];

// Function – everything inside the braces 
function addTaskFromPrompt() {
  const title = prompt("Enter task title:");
  const description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();

  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  const nextId = initialTasks.length > 0
    ? Math.max(...initialTasks.map(t => t.id)) + 1
    : 1;

  const newTask = { id: nextId, title, description, status };
  initialTasks.push(newTask);
}

//
for (let i = 0; i < 3; i++) {
  addTaskFromPrompt();
}

// Show the result 
console.log("All Tasks:", initialTasks);

if (
  initialTasks >= " id: 6," 
) {
  alert("There are Enough tasks on your board, please check them in the console."); }

   const completedTasksonly = initialTasks.filter (initialTasks => initialTasks.status === "done")
 console.log("Completed Tasks:",completedTasksonly )







// Repeat the same steps for task 2
//const task2Title = prompt("Enter task 2 title:");
//const task2Description = prompt("Enter task 2 description:");
//let task2Status = prompt(
 // "Enter task 2 status (todo, doing, done):"
//).toLowerCase();

//while (
  //task2Status !== "todo" &&
 // task2Status !== "doing" &&
 // task2Status !== "done"
//) {
 // alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
//task2Status = prompt(
   // "Enter task 2 status (todo, doing, done):"
 // ).toLowerCase();
//}

// Check if task1 is done, and log it if so
//if (task1Status === "done") {
//  console.log("Title: " + task1Title + ", status: " + task1Status);
//}

// Check if task2 is done, and log it if so
//if (task2Status === "done") {
 // console.log("Title: " + task2Title + ", status: " + task2Status);
//}

// If neither task1 nor task2 is done, show a motivational message
//if (task1Status !== "done" && task2Status !== "done") {
//  console.log("No tasks completed, let's get to work!");
//}

 





 