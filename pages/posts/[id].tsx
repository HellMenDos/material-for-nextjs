
import { useRouter } from 'next/router'
import { getAllPosts, getOnePost, Post } from '../../services/post'
import Head from "next/head";
import Image from 'next/image'

interface PropsTypes {
  post: Post
}

export default function Param({ post }: PropsTypes) {
    const { query,back } = useRouter()

    const goBack = () => {
      back()
    }
    return (
      <>
        <Head>
          <title>{post.title}</title>
        </Head>
        <div>
          <div>Id from url {query.id}</div>
          <div>Title {post.title}</div>
          <div>Body {post.body}</div>
          <Image 
            src={`https://source.unsplash.com/random/200x200?sig=${query.id}`}
            alt="random" 
            width={150} 
            height={150}
            quality={10}
          />
          <button onClick={goBack}>Go back</button>
        </div>
      </>
    )

}

export async function getStaticProps(context: any) {
    const post = await getOnePost(context.params.id)
  
    return {
      props: {
        post: post
      }, 
      revalidate: 10,
    }
  }

export async function getStaticPaths() {
    const posts = await getAllPosts()

    return {
      paths: posts.map(({ id }) => ({ params: { id: id.toString() } })),
      fallback: false, 
    }
  }
  