import { getAllVideos } from "@/lib/videos";
import { buildPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata = buildPageMetadata({
  path: "/videos",
  section: "static",
  title: "Videos",
});

export default function VideosPage() {
  const videos = getAllVideos();

  return (
    <main className="mx-auto max-w-5xl py-16">
      <Section id="videos" label="Videos" eyebrow="Build in public">
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.id}
              className="border-4 border-zinc-900 bg-zinc-950 p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.9)]"
            >
              <div className="aspect-video bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <h2 className="mt-3 text-sm font-semibold text-white">
                {video.title}
              </h2>
              <p className="mt-1 text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500">
                {new Date(video.date).toLocaleDateString()}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}

