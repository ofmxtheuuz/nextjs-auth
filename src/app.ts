import express, { Request, Response, json } from "express"
import cors from "cors"
const app = express()

app.use(json())
app.use(cors())

import TokenService from "./utils/service/TokenService"
const _token = new TokenService()
import AuthService from "./utils/service/AuthService"
import UserRepository from "./utils/repository/UserRepository"
const _user = new UserRepository()

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    status: 200,
    content: "Hello, World from API!"
  })
})

app.post("/auth/login", (req: Request, res: Response) => {
  console.log(req.body)
  try {
    res.status(200).send({
      code: 200,
      codeText: "authorized",
      data: AuthService.login(req.body.email, req.body.password)
    })
  } catch(e) {
    res.status(401).send({
      code: 401,
      codeText: "unauthorized",
      data: {}
    })
  }
    
})

app.post("/auth/user", (req: Request, res: Response) => {
  try { 
    res.status(200).send({
      code: 200,
      content: _user.findById(req.body.id)
    })
  } catch(e) {
    res.status(500).send({
      code: 500,
      content: {}
    })
  }
})

app.post("/auth/token", (req: Request, res: Response) => {
  try {
    res.status(200).send({
      code: 200,
      content: _token.decode(req.body.token)
    })
  } catch(e) {
    res.status(401).send({
      code: 401,
      content: "Invalid token"
    })
  }
})

app.listen(8787, () => {
  console.log("Server running on port 8787: http://localhost:8787")
})