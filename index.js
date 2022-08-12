const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const d = new Date();
    return all.filter((task) => task.dueDate < formattedDate(d));
  };

  const dueToday = () => {
    const d = new Date();
    return all.filter((task) => task.dueDate == formattedDate(d));
  };

  const dueLater = () => {
    const d = new Date();
    return all.filter((task) => task.dueDate > formattedDate(d));
  };

  const toDisplayableList = (list) => {
    let output = "";
    list.forEach((task) => {
      output += `[${task.completed ? "X" : " "}] ${task.title} ${
        task.dueDate == formattedDate(new Date()) ? "" : task.dueDate
      }\n`;
    });
    return output;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var d = new Date();
const today = formattedDate(d);
const yesterday = formattedDate(new Date(d.setDate(d.getDate() - 1)));
const tomorrow = formattedDate(new Date(d.setDate(d.getDate() + 1)));

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue\n");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today\n");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later\n");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
