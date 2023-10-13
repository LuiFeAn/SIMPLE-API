export interface IUser {

    readonly name: string

    readonly age: number

}

class UsersRepository {

    private users: IUser []

    constructor(){
       
        this.users = [ 
            {
                name:'José Luis Cardoso',
                age:30
            },
            {
                name:'Marcelo Vinícius',
                age:20
            }
        ]

    }

    insert(user: IUser){

        this.users.push(user);

        return user;

    }

    findAll(){

        return this.users;

    }

    findOneByName(name: string){

        return this.users.find( user => user.name === name );

    }

}

export default new UsersRepository();