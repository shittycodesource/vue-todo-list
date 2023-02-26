import { programmingTasks, gymTasks, booksTasks, homeTasks } from './tasksArray.js';

export default [
    { 
        name: 'Gym', 
        description: 'goals', 
        id: 0,
        tasks: gymTasks 
    },
    { 
        name: 'Programming', 
        description: 'languages', 
        id: 1, 
        tasks: programmingTasks 
    },
    { 
        name: 'Books', 
        description: 'books to read', 
        id: 2, 
        tasks: booksTasks 
    },
    { 
        name: 'Home', 
        description: 'housework', 
        id: 3, 
        tasks: homeTasks 
    },
]