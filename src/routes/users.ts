import * as usersController from '../controllers/users-controller';

const userRoutes = [
    {
        url:'/users',
        method:'GET',
        handler: usersController.index
    },
    {
        url:'/users',
        method:'POST',
        handler: usersController.store
    }
]

export default userRoutes