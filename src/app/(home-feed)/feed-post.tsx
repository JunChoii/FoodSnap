"use client";
import Image from "next/image";
import Link from "next/link";
import { type Post } from "@/db/queries/postsFeed";
import PostActions from "@/components/post-actions";
import timeAgoShort from "@/utils/timeAgoShort";
import { useEffect, useState } from "react";

import {
  likePost,
  commentPost,
  repostPost,
  sharePost,
  deletePost,
} from "./actions";

export default function FeedPost({ post }: { post: Post }) {
  const [postLoaded, setPostLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPostLoaded(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!postLoaded) {
    console.log("------------post--------------", post);
    return <LoadingSkeleton />;
  }

  function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "  ...";
    }
    return text;
  }

  function PostMedia() {
    if (!post.media) {
      return null;
    }
    if (post.media.type === "image") {
      return (
        <Link href={`/post/${post.id}`}>
          <div className="rounded-xl  aspect-square relative overflow-hidden">
            <Image
              className="object-cover"
              src={post.media.url}
              alt={post.content}
              fill={true}
            />
          </div>
        </Link>
      );
    }

    if (post.media.type === "video") {
      return (
        <Link href={`/post/${post.id}`}>
          <video
            className="rounded-xl object-contain max-w-full"
            src={post.media.url}
            controls
          />
        </Link>
      );
    }
  }
  return (
    <article className="flex flex-col gap-4 py-4 relative">
      <div className="flex gap-4 items-start w-full">
        <Link href={`/${post.user.id}`}>
          <div className="rounded-full h-10 w-10 overflow-hidden relative">
            <Image
              className="object-cover"
              src={post.user.image || "https://www.gravatar.com/avatar/?d=mp"}
              alt={post.user.name || "user image"}
              priority={true}
              fill={true}
            />
          </div>
        </Link>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center w-full">
            <Link href={`/${post.user.id}`}>
              <div>{post.user.name}</div>
            </Link>

            <Link href={`/post/${post.id}`}>
              <p className="text-left">{truncateText(post.foodname, 20)}</p>
            </Link>

            <div className="flex items-center">
              <PostActions onDelete={deletePost.bind(null, post.id)} />
            </div>
          </div>
          {/* <PostMedia /> */}
        </div>
      </div>
    </article>
  );
}

export function LoadingSkeleton() {
  return (
    <article className="flex flex-col gap-4 py-4 relative">
      <div className="flex gap-4 items-start w-full">
        <div className="rounded-full h-10 w-10 bg-gray-600 animate-pulse" />
        <div className="flex flex-col gap-2 w-full">
          <Link href="/#">
            <div>
              <div className="w-full h-10 bg-gray-600 animate-pulse rounded-xl overflow-hidden" />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
