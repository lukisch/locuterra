import ReachBadge from "@/components/ReachBadge";
import { channels } from "@/data/channels";
import { getPlace } from "@/data/places";

export default function KanaelePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Informationskanäle
      </h1>
      <p className="text-gray-500 mb-6">
        Offizielle Kanäle und Neuigkeiten aus Grüntal.
      </p>
      <div className="space-y-6">
        {channels.map((ch) => {
          const place = getPlace(ch.placeId);
          return (
            <div
              key={ch.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xl">{"\u{1F4E2}"}</span>
                  <h2 className="font-semibold text-gray-900">{ch.name}</h2>
                  <ReachBadge level={ch.visibilityScope} />
                </div>
                <p className="text-sm text-gray-600 mt-1">{ch.description}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {ch.subscriberCount} Abonnenten {"\u{00B7}"} {place?.name}
                </p>
              </div>
              <div className="divide-y divide-gray-50">
                {ch.posts.map((post) => (
                  <div key={post.id} className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-400">
                        {post.postedAt}
                      </span>
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-0.5">{post.body}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
