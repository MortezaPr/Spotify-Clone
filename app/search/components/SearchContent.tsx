"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";
import React from "react";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <div className="w-full px-8 text-neutral-400">No songs found</div>;
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-8">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <MediaItem onClick={() => {}} data={song} />
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
