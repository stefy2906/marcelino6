'use client'
export default function Login(){
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