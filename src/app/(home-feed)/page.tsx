import FeedPost from "@/app/(home-feed)/feed-post";
import {LoadingSkeleton} from "@/app/(home-feed)/feed-post";
import { postsFeedQuery } from "@/db/queries/postsFeed";
import { useState, useEffect } from "react";
import { Suspense } from "react";

export default async function Home() {


  const posts = await postsFeedQuery.execute();

  return (
    <>
      <div className="flex flex-col divide-y" style={{ height: 3000 }}>
        <div className="text-6xl font-bold tracking-wide uppercase text-neutral-400 mt-8">
          All
        </div>
        <Suspense fallback={<LoadingSkeleton />}>
          {posts.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </Suspense>
      </div>
    </>
  );
}
