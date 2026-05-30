import { ReachLevel } from "@/data/types";

const reachLabels: Record<ReachLevel, string> = {
  privat: "Privat",
  gruppe: "Gruppe",
  ort: "Ort",
  dorf: "Dorf/Ortsteil",
  kommune: "Kommune",
  region: "Region",
  land: "Land",
  national: "National",
  transnational: "Transnational",
};

const reachColors: Record<ReachLevel, string> = {
  privat: "bg-gray-100 text-gray-700",
  gruppe: "bg-blue-100 text-blue-700",
  ort: "bg-teal-100 text-teal-700",
  dorf: "bg-emerald-100 text-emerald-700",
  kommune: "bg-green-100 text-green-800",
  region: "bg-amber-100 text-amber-700",
  land: "bg-orange-100 text-orange-700",
  national: "bg-red-100 text-red-700",
  transnational: "bg-purple-100 text-purple-700",
};

export default function ReachBadge({ level }: { level: ReachLevel }) {
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${reachColors[level]}`}
    >
      {reachLabels[level]}
    </span>
  );
}
