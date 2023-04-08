import UserRepository from "../repository/UserRepository"
import TokenService from "./TokenService"

class AuthService {

  private _r: UserRepository = new UserRepository()
  private _token: TokenService = new TokenService()
  login(email: string, password: string) {
    const user: any = this._r.findByEmail(email)
    if(user) {
      if(password == user.password) {
        console.log("entrou")
        return {
            status: 200,
            statusText: "approved",
            content: {
              access_token: this._token.encode(email, user.id)
            }
        }
      }
    }
    throw new Error("Incorrect email or(and) password!")
  }

}

export default new AuthService()