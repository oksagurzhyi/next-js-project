import Link from "next/link";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) throw new Error("Unable to fetch posts!");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

export default async function Blog({ posts }) {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
