"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredNews = {
  title: "Global Climate Summit Reaches Historic Agreement",
  image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&auto=format&fit=crop&q=60",
  category: "World",
  timeAgo: "2 hours ago",
  description: "World leaders have reached a landmark agreement on climate change, pledging to reduce global emissions by 50% by 2030."
};

const topStories = [
  {
    title: "Tech Giants Announce Breakthrough in Quantum Computing",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60",
    category: "Technology",
    timeAgo: "4 hours ago"
  },
  {
    title: "Global Markets Rally as Economic Recovery Accelerates",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60",
    category: "Business",
    timeAgo: "5 hours ago"
  },
  {
    title: "Breakthrough in Renewable Energy Storage Technology",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60",
    category: "Science",
    timeAgo: "6 hours ago"
  }
];

export default function Home() {
  return (
    <div className="container py-8">
      {/* Featured News */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="relative aspect-[21/9] md:aspect-[3/1]">
            <Image
              src={featuredNews.image}
              alt={featuredNews.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <Badge className="mb-2">{featuredNews.category}</Badge>
              <h1 className="text-2xl md:text-4xl font-bold mb-2">
                {featuredNews.title}
              </h1>
              <p className="text-sm md:text-base mb-2 max-w-2xl">
                {featuredNews.description}
              </p>
              <p className="text-sm opacity-75">{featuredNews.timeAgo}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Top Stories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Top Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {topStories.map((story, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <Badge className="mb-2">{story.category}</Badge>
                <h3 className="font-semibold mb-2">{story.title}</h3>
                <p className="text-sm text-muted-foreground">{story.timeAgo}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["World", "Politics", "Business", "Technology", "Science", "Sports", "Entertainment", "Health"].map((category) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-lg group-hover:scale-110 transition-transform">
                  {category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}