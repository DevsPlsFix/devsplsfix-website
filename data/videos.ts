export interface Video {
  id: string; // YouTube ID
  title: string;
  date: string; // ISO
  relatedToolSlugs?: string[];
}

export const videos: Video[] = [
  {
    id: "dQw4w9WgXcQ",
    title: "DEVS PLS FIX: Placeholder Video",
    date: "2025-01-01",
    relatedToolSlugs: ["example-tool"],
  },
];

