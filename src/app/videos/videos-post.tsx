"use client";
import Link from "next/link";
import { type Post } from "@/db/queries/postsFeed";
import PostActions from "@/components/post-actions";
import timeAgoShort from "@/utils/timeAgoShort";

export default function FeedPost({ post }: { post: Post }) {
  if (!post.media || post.media.type !== "video") {
    return null;
  }

  const handleMouseOver = () => {
    const video = document.getElementById(
      `video-${post.id}`
    ) as HTMLVideoElement;
    if (video) {
      video.play();
    }
  };

  const handleMouseOut = () => {
    const video = document.getElementById(
      `video-${post.id}`
    ) as HTMLVideoElement;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <>
      <article className="flex flex-col gap-4 py-4 relative">
        <div className="flex gap-4 items-start">
          <Link href={`/${post.user.id}`}>
            <div className="rounded-full h-10 w-10 overflow-hidden relative">
              {/* ... (rest of the code remains unchanged) */}
            </div>
          </Link>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center w-full">
              {/* ... (rest of the code remains unchanged) */}
            </div>
            <Link href={`/post/${post.id}`}>
              <p className="font-light">:::See the recipe here:::</p>
            </Link>
            <Link href={`/post/${post.id}`} passHref>
              <div>
                <video
                  id={`video-${post.id}`}
                  className="rounded-xl object-contain max-w-full"
                  src={post.media.url}
                  controls
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                />
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
