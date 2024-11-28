export default async function Users() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
     

      const users = await response.json()
    console.log(users)
      return (
        <>
            {users.map((user) => (
                <h1>{user.name}</h1>
            ))}
        </>
      )
}