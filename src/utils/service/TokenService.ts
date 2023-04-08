import jsonwebtoken from "jsonwebtoken"
const SECRET_JWT = "JKE45235XMUIHNUS5235YC5234URAGAYSCG25435MERTAL325CG2543EAYMGCEYF"

export default class TokenService {
  encode(email: string, id: string) {
    return jsonwebtoken.sign({
      data: {
        email,
      },
      id,
      infs: {
        date: Date.now()
      }
    }, SECRET_JWT)
  }

  decode(token: string) {
    try {
      jsonwebtoken.verify(token, SECRET_JWT)
      return jsonwebtoken.decode(token)
    } catch(e) {
      throw new Error("Token expired or invalid!")
    }
  }
}
