'use client'

import { handlerAcessUser } from "./functions/handlerAcessUser"
export default function Login(){

  const handlerLogin=(e)=>{
    e.preventDefaut();
    handlerAcessUser();
  }

  return(
    <div>
      <h1>Login</h1>
      <form>
        <input
        placeholder="E-mail"
        type="email"
        onChange={(e) => {setEmail(e.target.value)}}>
       </input>
       <input
        placeholder="Senha"
        type="password"
        onChange={(e) => {setPassword(e.target.value)}}>
       </input>
       <button>Entrar</button>
      </form>
    </div>
  )
}