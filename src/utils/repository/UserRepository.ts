
interface User {
  id: number
  name: string
  email: string
  password: string
}

export default class UserRepository { 

  private users: User[]
  constructor() {
    this.users = [
      {id: 1, name: "Matheus", email: "matheus@gmail.com", password: "Matheus123!"},
      {id: 2, name: "Arthur", email: "arthur@gmail.com", password: "Arthur123!"},
      {id: 3, name: "Pedro", email: "pedro@gmail.com", password: "Pedro123!"},
      {id: 4, name: "João", email: "joao@gmail.com", password: "Joao123!"},
      {id: 5, name: "Isaac", email: "isaac@gmail.com", password: "Isaac123!"},
    ]
  } 


  findByEmail(email: String): Object | null {
    let user: any = this.users.find(usr => usr.email == email)
    if(user) {
      let {password, ...rest} = user
      return rest
    }
    return null
  }

  findById(id: string): Object | null { 
    let user: any = this.users.find(usr => usr.id == parseInt(id))
    if(user) {
      let {password, ...rest} = user
      return rest
    }
    return null
  }

}