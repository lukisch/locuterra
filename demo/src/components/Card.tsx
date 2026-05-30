import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  href: string;
  emoji: string;
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  children: ReactNode;
}

export default function Card({
  href,
  emoji,
  title,
  subtitle,
  badge,
  children,
}: CardProps) {
  return (
    <Link
      href={href}
      className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0 mt-0.5">{emoji}</span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-gray-900 truncate">{title}</h3>
            {badge}
          </div>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
          )}
          <div className="text-sm text-gray-600 mt-1.5 line-clamp-2">
            {children}
          </div>
        </div>
      </div>
    </Link>
  );
}
