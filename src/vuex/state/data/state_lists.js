import {
  programmingTasks,
  gymTasks,
  booksTasks,
  homeTasks,
} from "./tasksArray.js";

export default [
  {
    name: "Senseless 1.1.2 Update",
    description: "Things to add in 1.1.2",
    tasks: [
      {
        title: "Fix bug at task page",
        text: "Title is not showing",
        tags: [],
        listId: 1687190254280,
        date: 1687190445875,
        dayValue: "20 June 2023",
        completed: false,
        id: 1687190445875,
      },
      {
        title: "Custom colors for circles in list's nav",
        text: "",
        tags: [],
        listId: 1687190254280,
        date: 1687190344123,
        dayValue: "20 June 2023",
        completed: false,
        id: 1687190344123,
      },
      {
        title: "Ru / En Locales",
        text: "",
        tags: [],
        listId: 1687190254280,
        date: 1687190295715,
        dayValue: "20 June 2023",
        completed: true,
        id: 1687190295715,
      },
    ],
    id: 1687190254280,
  },
  {
    name: "Senseless 1.1.1 Update",
    description: "Things to update and fix",
    id: 1685669665257,
    tasks: [
      {
        title: "Fix modal window",
        text: "There's old design",
        tags: [],
        listId: 1685669665257,
        date: 1686961060795,
        dayValue: "17 June 2023",
        completed: true,
        id: 1686961060795,
      },
      {
        title: "Make header's animation",
        text: ".",
        tags: [],
        listId: 1685669665257,
        date: 1685670125354,
        dayValue: "2 June 2023",
        completed: true,
        id: 1685670125354,
      },
      {
        title: "Make possible to create tasks without descriptio",
        text: "123",
        tags: [],
        listId: 1685669665257,
        date: 1685670067146,
        dayValue: "2 June 2023",
        completed: true,
        id: 1685670067146,
      },
      {
        title: "Redesign tags",
        text: ".",
        tags: [],
        listId: 1685669665257,
        date: 1685670019418,
        dayValue: "2 June 2023",
        completed: true,
        id: 1685670019418,
      },
      {
        title: "Fix task's page",
        text: "it looks bad now",
        tags: [],
        listId: 1685669665257,
        date: 1685669972532,
        dayValue: "2 June 2023",
        completed: true,
        id: 1685669972532,
      },
      {
        title: "Fix lists's list",
        text: "It looks bad when there's a long list title",
        tags: [],
        listId: 1685669665257,
        date: 1685669846404,
        dayValue: "2 June 2023",
        completed: true,
        id: 1685669846404,
      },
      {
        title: "Redesign inputs",
        text: "i have to change this system (i dont need description for this. This title is enough)",
        tags: [],
        listId: 1685669665257,
        date: 1685669752580,
        dayValue: "2 June 2023",
        completed: true,
        id: 1685669752580,
      },
      {
        title: "Fix dark theme",
        text: "its not working now",
        tags: [],
        listId: 1685669665257,
        date: 1685669695414,
        dayValue: "2 June 2023",
        completed: true,
        id: 1685669695414,
      },
    ],
  },
  {
    name: "Gym",
    description: "goals",
    id: 0,
    tasks: gymTasks,
  },
  {
    name: "Programming",
    description: "languages",
    id: 1,
    tasks: programmingTasks,
  },
  {
    name: "Books",
    description: "books to read",
    id: 2,
    tasks: booksTasks,
  },
  {
    name: "Home",
    description: "housework",
    id: 3,
    tasks: homeTasks,
  },
];
