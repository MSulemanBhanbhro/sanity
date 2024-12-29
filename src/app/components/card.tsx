import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

// Define the Post type
type Post = {
  title: string;
  summary: string;
  image: string;
  slug: string;
};

const Card = async () => {

  const query = `*[_type=='post'] | order(_createdAt asc){
    summary, title, image,
    "slug":slug.current
  }`;
  const posts: Post[] = await client.fetch(query);
  console.log(posts);

  return (
    <>
      <section className="text-gray-600 body-font">
        <h1 className="text-center mt-[80px] text-2xl md:text-4xl font-semibold">Most Recent Blogs</h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap items-center gap-8 -m-4">
            {
              posts.map((post) => (
                <div className="md:h-[110vh] h-auto md:w-[30%] sm:w-full w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" key={post.slug}>
                  <Image
                    className="w-full h-64 sm:h-48 md:h-56 object-cover object-center"
                    src={urlFor(post.image).url()}
                    alt="blog"
                    width={500}
                    height={500}
                  />
                  <div className="p-6">
                    <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                      {post.title}
                    </h1>
                    <p className="scroll-m-20 text-lg tracking-tight mb-4">
                      {post.summary}
                    </p>
                    <div className="flex items-center flex-wrap">
                      <Link href={`/blog/${post.slug}`} className="text-indigo-500 inline-flex items-center gap-2 md:mb-2 lg:mb-0">
                        Read more  <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Card;
