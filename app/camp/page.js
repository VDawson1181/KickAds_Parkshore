// "use client";

import ButtonComponent from "./button";

export default async function Camp() {
    console.log("Server or client component?")

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    console.log(posts);

  return (
    <>
        <div>Camp page</div>
        <ButtonComponent />
    </>
  )
}