const state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi', likesCount: 10},
            {id: 2, message: 'How are you?', likesCount: 15},
            {id: 2, message: 'This is a post', likesCount: 5},
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Maksim'},
            {id: 2, name: 'Mikhail'},
            {id: 3, name: 'Maria'},
            {id: 4, name: 'Makar'},
            {id: 5, name: 'Marina'}
        ],
        messagesData: [
            {id: 1, text: 'Hello'},
            {id: 2, text: 'How are you?'},
            {id: 3, text: 'What is the weather today?'},
            {id: 4, text: 'What are your hobbies?'},
            {id: 5, text: 'What music do you prefer?'}
        ],
    }


}
export default state