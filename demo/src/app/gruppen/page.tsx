import Card from "@/components/Card";
import ReachBadge from "@/components/ReachBadge";
import { groups } from "@/data/groups";
import { getAccount } from "@/data/accounts";
import { getPlace } from "@/data/places";

export default function GruppenPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Gruppen in Grüntal
      </h1>
      <p className="text-gray-500 mb-6">
        Lokale Initiativen, Vereine und offene Gruppen in deiner Nähe.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {groups.map((group) => {
          const steward = getAccount(group.stewardAccountId);
          const place = getPlace(group.placeId);
          return (
            <Card
              key={group.id}
              href={`/gruppen/${group.id}`}
              emoji="\u{1F465}"
              title={group.name}
              subtitle={`${group.memberCount} Mitglieder \u{00B7} ${place?.name || ""}`}
              badge={<ReachBadge level={group.visibilityScope} />}
            >
              <p>{group.description}</p>
              {steward && (
                <p className="text-xs text-gray-400 mt-1">
                  Steward: {steward.displayName}
                </p>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
