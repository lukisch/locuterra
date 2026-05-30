import { getAccount } from "@/data/accounts";
import { getPlace } from "@/data/places";
import { resources } from "@/data/resources";
import ReachBadge from "@/components/ReachBadge";

export default function ProfilPage() {
  const user = getAccount("demo-user")!;
  const place = getPlace(user.primaryPlaceId);
  const myResources = resources.filter((r) => r.ownerId === "demo-user");

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-4">
          <span className="text-5xl">{user.avatarEmoji}</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {user.displayName}
            </h1>
            <p className="text-gray-500">{user.bio}</p>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
              <span>{"\u{1F4CD}"} {place?.name || user.primaryPlaceId}</span>
              <span>{"\u{00B7}"}</span>
              <span>Beigetreten: {user.joinedAt}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Datenschutz</h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-gray-50">
            <span className="text-gray-600">Anzeigename sichtbar für</span>
            <ReachBadge level="kommune" />
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-50">
            <span className="text-gray-600">Kontaktaufnahme erlaubt</span>
            <span className="text-emerald-700 font-medium">Nur über Direktnachricht</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-50">
            <span className="text-gray-600">Echte Identität</span>
            <span className="text-gray-700 font-medium">Pseudonym</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">Standort teilen</span>
            <span className="text-amber-700 font-medium">Nur Ortsteil</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Meine Ressourcen</h2>
        {myResources.length === 0 ? (
          <p className="text-gray-400 text-sm">
            Du hast noch keine Ressourcen eingestellt. In einer echten Version
            könntest du hier Geräte, Skills oder Hilfsangebote teilen.
          </p>
        ) : (
          <div className="space-y-2">
            {myResources.map((r) => (
              <div
                key={r.id}
                className="border border-gray-100 rounded-lg p-3"
              >
                <p className="font-medium text-gray-900 text-sm">{r.title}</p>
                <p className="text-xs text-gray-500">{r.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
