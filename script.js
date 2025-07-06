
// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task title:");
const task1Description = prompt("Enter task description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}

   // JSL03 - Assigment 
  
  // Array with objects inside

  const initialTasks =  [
  
   { id: 1,                                       // Unique ID to identify each object within array 
    title: "Launch Epic Career",                   
    description: "Create a killer Resume",        
    status: "todo",
  },
   
  
    { id: 2,
     title: "Master JavaScript",
     description: "Get comfortable with the fundamentals",
     status: "doing",
    },
   
  
   { id: 3,
     title: "Contribute to Open Source Projects",
     description: "Gain practical experience and collaborate with others in the software development community",
     status: "done",
    },
    
   { id: 4,
    title: " ",
    description: " ",
    status: " ",
  },
   
  
    { id: 5,
     title: " ",
     description: " ",
     status: " ",
    },
   
  
   { id: 6,
     title: " ",
     description: " ",
    status: " ",
    },

];

 // Checking that Array is shown in console log with a title "ALL TASKS"

 console.log(" All Tasks:", initialTasks)
 
 // Filtered all completed tasks and console logged it with a title "COMPLETED TASKS"

 const completedTasksonly = initialTasks.filter (initialTasks => initialTasks.status === "done")
 console.log("Completed Tasks:",completedTasksonly )

 // If the amount tasks are not equal to 6 then you will recieve an alert to say you have reached your limit

 if (
  initialTasks !== " id: 6," 

) {
  alert("There are Enough tasks on your board, please check them in the console."); }