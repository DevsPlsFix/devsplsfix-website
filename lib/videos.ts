import { videos, type Video } from "@/data/videos";

export function getAllVideos(): Video[] {
  return videos.slice().sort((a, b) => b.date.localeCompare(a.date));
}

export function getVideosForTool(slug: string): Video[] {
  return videos.filter((video) => video.relatedToolSlugs?.includes(slug));
}

