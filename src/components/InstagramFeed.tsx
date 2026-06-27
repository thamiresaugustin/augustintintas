import { useEffect, useState } from "react";
import { Instagram, Play } from "lucide-react";

// Feed do Behold.so — busca as últimas publicações do @augustintintas
const BEHOLD_FEED_URL = "https://feeds.behold.so/Mh39VyCtYobIfxZJh0I2";

type BeholdPost = {
  id: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  caption?: string;
  sizes: {
    medium?: { mediaUrl: string };
    small?: { mediaUrl: string };
    large?: { mediaUrl: string };
  };
};

export const InstagramFeed = () => {
  const [posts, setPosts] = useState<BeholdPost[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(BEHOLD_FEED_URL)
      .then((r) => r.json())
      .then((data) => setPosts((data.posts ?? []).slice(0, 6)))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <p className="text-muted-foreground">
        Não foi possível carregar as publicações agora. Visite nosso Instagram diretamente.
      </p>
    );
  }

  if (!posts) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-2xl bg-muted animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => {
        const img = post.sizes.medium?.mediaUrl ?? post.sizes.large?.mediaUrl ?? post.sizes.small?.mediaUrl;
        return (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-brand border"
            aria-label={post.caption?.slice(0, 80) ?? "Publicação no Instagram"}
          >
            <img
              src={img}
              alt={post.caption?.slice(0, 120) ?? "Publicação Augustin Tintas"}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <Instagram className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {post.mediaType === "VIDEO" && (
              <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1.5">
                <Play className="h-4 w-4 text-white fill-white" />
              </div>
            )}
          </a>
        );
      })}
    </div>
  );
};
