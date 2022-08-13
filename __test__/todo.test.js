let todoList = require("../todo");

const { all, dueToday, dueLater, overDue, markAsComplete, add } = todoList();

describe("Todo List Test Suite", () => {
  // test initial length of array is 0
  test("Should add a new todo", () => {
    expect(all.length).toEqual(0);
  });

  // add a new task
  test("Add a new todo", () => {
    add({
      title: "A test item",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toEqual(1);
  });

  // mark a task as complete
  test("Should mark a Todo as complete", () => {
    expect(all.length).toEqual(1);
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  // retrieve overdue items
  test("Should retrieve overdue items", () => {
    const d = new Date();
    const yesterday = new Date().setDate(d.getDate() - 1);
    add({
      title: "A overdue item",
      completed: false,
      dueDate: new Date(d.setDate(d.getDate() - 1)).toLocaleDateString("en-CA"),
    });
    expect(overDue().length).toEqual(1);
  });

  // retrieve due today items
  test("Should retrieve due today items", () => {
    add({
      title: "A due today item",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(dueToday().length).toEqual(2);
  });

  // retrieve due later items
  test("Should retrieve due later items", () => {
    const d = new Date();
    const tomorrow = new Date().setDate(d.getDate() + 1);
    add({
      title: "A due later item",
      completed: false,
      dueDate: new Date(d.setDate(d.getDate() + 1)).toLocaleDateString("en-CA"),
    });
    expect(dueLater().length).toEqual(1);
  });
});
