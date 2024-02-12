class ClassProfile {
  nickname: string
  name: string
  email: string
  mobileNumber: string
  id: number

  constructor(
    apelido: string,
    nome: string,
    email: string,
    numeroCelular: string,
    id: number
  ) {
    ;(this.nickname = apelido),
      (this.name = nome),
      (this.email = email),
      (this.mobileNumber = numeroCelular),
      (this.id = id)
  }
}

export default ClassProfile
