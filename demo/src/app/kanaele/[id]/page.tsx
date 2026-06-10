import Link from "next/link";
import { channels, getChannel } from "@/data/channels";
import { getPlace } from "@/data/places";
import ReachBadge from "@/components/ReachBadge";

export function generateStaticParams() {
  return channels.map((c) => ({ id: c.id }));
}

export default async function KanalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const channel = getChannel(id);
  if (!channel) return <p>Kanal nicht gefunden.</p>;

  const place = getPlace(channel.placeId);

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/kanaele"
        className="text-sm text-emerald-700 hover:text-emerald-900 mb-4 inline-block"
      >
        &larr; Alle Kanäle
      </Link>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📢</span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl font-bold text-gray-900">{channel.name}</h1>
              <ReachBadge level={channel.visibilityScope} />
            </div>
            <p className="text-sm text-gray-400 mt-0.5">
              {channel.subscriberCount} Abonnenten
              {place ? ` · ${place.name}` : ""}
            </p>
          </div>
        </div>
        <p className="text-gray-600 mt-3">{channel.description}</p>
        <div className="mt-5">
          <button
            disabled
            className="bg-emerald-200 text-emerald-600 px-4 py-2 rounded-lg text-sm cursor-not-allowed"
          >
            Abonnieren (Demo)
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">
            Beiträge ({channel.posts.length})
          </h2>
        </div>
        <div className="divide-y divide-gray-50">
          {channel.posts.map((post) => (
            <div key={post.id} className="p-6">
              <p className="text-xs text-gray-400 mb-1">{post.postedAt}</p>
              <h3 className="font-medium text-gray-900">{post.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
