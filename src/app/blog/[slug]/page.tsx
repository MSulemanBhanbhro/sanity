import { client } from '@/sanity/lib/client';
import { PortableText } from 'next-sanity';
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';
import React from 'react';

// Page component for dynamic route
const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title, summary, image, content,
    author->{bio, image, name}
  }[0]`;

  const post = await client.fetch(query);
  console.log(post);

  return (
    <>
      <article className="mt-12 mb-24 px-8 2xl:px-12 flex flex-col gap-y-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
          {post.title}
        </h1>

        <Image
          src={urlFor(post.image).url()}
          width={500}
          height={500}
          alt="AI for everyone"
          className="rounded"
        />

        <section>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Summary
          </h2>
          <p className="scroll-m-20 text-2xl my-4 tracking-tight">
            {post.summary}
          </p>
        </section>

        <section className="px-2 sm:px-8 md:px-2 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
          <Image
            src={urlFor(post.author.image).url()}
            width={200}
            height={200}
            alt="author"
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
          <div className="flex flex-col gap-1">
            <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {post.author.name}
            </h3>
            <p className="italic scroll-m-20 text-2xl my-2 tracking-tight">
              {post.author.bio}
            </p>
          </div>
        </section>

        <section className="scroll-m-20 text-xl tracking-tight">
          <PortableText value={post.content} />
        </section>
      </article>
    </>
  );
};

export default Page;
