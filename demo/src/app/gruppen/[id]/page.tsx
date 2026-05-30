import Link from "next/link";
import { groups, getGroup } from "@/data/groups";
import { getAccount, accounts } from "@/data/accounts";
import { getPlace } from "@/data/places";
import ReachBadge from "@/components/ReachBadge";

export function generateStaticParams() {
  return groups.map((g) => ({ id: g.id }));
}

export default async function GruppenDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const group = getGroup(id);
  if (!group) return <p>Gruppe nicht gefunden.</p>;

  const steward = getAccount(group.stewardAccountId);
  const place = getPlace(group.placeId);
  const sampleMembers = accounts.slice(0, 4);

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/gruppen"
        className="text-sm text-emerald-700 hover:text-emerald-900 mb-4 inline-block"
      >
        &larr; Alle Gruppen
      </Link>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{"\u{1F465}"}</span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl font-bold text-gray-900">{group.name}</h1>
              <ReachBadge level={group.visibilityScope} />
            </div>
            <p className="text-sm text-gray-400 mt-0.5">
              {group.memberCount} Mitglieder {"\u{00B7}"}{" "}
              {group.membershipPolicy === "offen"
                ? "Offene Gruppe"
                : group.membershipPolicy === "einladung"
                  ? "Nur mit Einladung"
                  : "Auf Genehmigung"}
            </p>
          </div>
        </div>
        <p className="text-gray-600 mt-3">{group.description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          {place && (
            <Link
              href={`/orte/${place.id}`}
              className="text-emerald-700 hover:underline"
            >
              {"\u{1F4CD}"} {place.name}
            </Link>
          )}
          {steward && (
            <span>
              Steward: {steward.avatarEmoji} {steward.displayName}
            </span>
          )}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h2 className="font-semibold text-gray-900 mb-3">Mitglieder (Auszug)</h2>
        <div className="flex flex-wrap gap-3">
          {sampleMembers.map((a) => (
            <div
              key={a.id}
              className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2"
            >
              <span className="text-lg">{a.avatarEmoji}</span>
              <span className="text-sm text-gray-700">{a.displayName}</span>
            </div>
          ))}
          {group.memberCount > sampleMembers.length && (
            <div className="flex items-center text-sm text-gray-400 px-3 py-2">
              +{group.memberCount - sampleMembers.length} weitere
            </div>
          )}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="font-semibold text-gray-900 mb-2">Beitreten</h2>
        <p className="text-sm text-gray-600 mb-3">
          {group.membershipPolicy === "offen"
            ? "Diese Gruppe ist offen. In einer echten Version könntest du direkt beitreten."
            : "Diese Gruppe erfordert eine Genehmigung durch den Steward."}
        </p>
        <button
          disabled
          className="bg-emerald-200 text-emerald-600 px-4 py-2 rounded-lg text-sm cursor-not-allowed"
        >
          Beitreten (Demo)
        </button>
      </div>
    </div>
  );
}
