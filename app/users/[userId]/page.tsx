type Params = {
  params: {
    userId: number
  }
}

export default function TodosUsuario({ params: { userId } }: Params) {
  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      USUARIO DE ID {userId}
    </main>
  )
}