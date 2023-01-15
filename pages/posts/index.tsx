import Link from 'next/link'
import { FC, useState } from 'react'
import { getAllPosts,Post } from '../../services/post'


interface PropsTypes {
  posts: Post[]
}

export default function Main({ posts }: PropsTypes)  {
  const [filterData, setFilterData] = useState<string>('')

  const changeFilterData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterData(event.target.value)
  }
  
  return (
  <div>
    <h1>Posts</h1>
    <input placeholder='Search' value={filterData} onChange={changeFilterData} />
    <div>
      {posts
        .filter(({ title }) => title.includes(filterData))
        .map((item) => <div>
          <Link href={`posts/${item.id}`}>{item.title}</Link>
        </div>
      )}
    </div>
  </div>
  )
}


export async function getServerSideProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts
    }, 
  }
}