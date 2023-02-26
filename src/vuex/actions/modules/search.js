export default {
    async searchTasks({getters, dispatch}, data) {
        try {
            let tasksList = [];
            const foundTasks = [];
    
            data.list
                ? tasksList = getters.getList(data.list.id).tasks // tasks from selected list
                : getters.getLists.forEach(list => tasksList = [...tasksList, ...list.tasks]); // there will be all tasks

            for (let i = 0; i <= tasksList.length - 1; i++) {
                const task = tasksList[i]; // current task
                const titleFromInput = data.title.toLowerCase();
                let tagsInTheTask = [];
                
                if (data.tags.length) {
                    tagsInTheTask = await dispatch('doesIncludeTags', {task: task, tags: data.tags});
                } else {
                    tagsInTheTask = true;
                }

                if (task.title.toLowerCase().includes( titleFromInput ) && tagsInTheTask ) {
                    foundTasks.push(task);
                }
            }

            return foundTasks;
        } catch (error) {
            throw error;
        }
    },

    doesIncludeTags({}, {task, tags}) {
        const sort = (arr) => {
            const sorted = arr.sort((a, b) => {
                if(a < b) { return -1; }
                if(a > b) { return 1; }
    
                return 0;
            });

            return sorted.map(tag => tag.toLowerCase()).join('');
        }

        const sortedTaskTags = sort(task.tags);
        const sortedDataTags = sort(tags);

        return sortedTaskTags.includes(sortedDataTags) ? true : false;
    },
}