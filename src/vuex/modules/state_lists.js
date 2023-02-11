const tasks =  [
    {
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.. ",
        completed:false,
        title: 'Lorem ipsum dolor',
        dayValue:"9 January 2023",
        date: 1673268394753,
        tags: ['lorem ipsum', 'fdsfsdf', '324324324'],
        id: 1673268394753
    },
    {
        text: 'first task',
        completed: false,
        title: 'First task',
        dayValue: '3 March 2007',
        date: 1172810970320,
        tags: ['lorem ipsum', 'fdsfsdf', '324324324'],
        id: 1172810970320
    },
    {
        text: 'before first task',
        completed: false,
        title: 'Before First task',
        dayValue: '7 July 2005',
        date: 1122790970320,
        tags: ['lorem ipsum', 'fdsfsdf', '324324324'],
        id: 1122790970320
    },
    {
        text: 'middle task',
        title: 'Middle task',
        completed: false,
        dayValue: '12 December 2022',
        date: 1672310952752,
        tags: ['lorem ipsum', 'fdsfsdf', '324324324'],
        id: 1672310952752,
    },
    { 
        text: 'lastest task',
        completed: false,
        title: 'Lastest task',
        dayValue: '1 January 2023',
        date: 1672810784122,
        tags: ['lorem ipsum', 'fdsfsdf', '324324324'],
        id: 1672810784122,
    },
    {
        text: 'before last task',
        completed: false,
        title: 'Before Last task',
        dayValue: '1 January 2023',
        date: 1672610961888,
        tags: ['lorem ipsum', 'fdsfsdf', '324324324'],
        id: 1672610961888,
    },
]

export default [
    { 
        name: 'Gym', 
        description: 'goals', 
        id: 0,
        tasks: tasks 
    },
    { 
        name: 'Programming', 
        description: 'languages', 
        id: 1, 
        tasks: tasks 
    },
    { 
        name: 'Books', 
        description: 'books to read', 
        id: 2, 
        tasks: tasks 
    },
    { 
        name: 'Home', 
        description: 'home business', 
        id: 3, 
        tasks: tasks 
    },
]