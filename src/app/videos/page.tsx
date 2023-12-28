import FeedPost from "@/app/videos/videos-post";
import { Suspense } from "react";
import { postsFeedQuery } from "@/db/queries/postsFeed";

export default async function Home() {
  const posts = await postsFeedQuery.execute();

  return (
    <div className="flex flex-col divide-y" style={{ height: 3000 }}>
      <div className="text-6xl font-bold tracking-wide uppercase text-neutral-400 mt-8 ">
        Videos
      </div>
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  );
}
