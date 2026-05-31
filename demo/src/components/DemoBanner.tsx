export default function DemoBanner() {
  return (
    <div className="bg-amber-100 border-b border-amber-300 text-amber-900 text-center text-sm py-2 px-4">
      <strong>Konzept-Demonstrator</strong> &mdash; Dies ist eine nicht-funktionale
      Demo mit fiktiven Daten der Kommune &bdquo;Grüntal&ldquo;.{" "}
      <a
        href="https://github.com/um-bruch/locuterra"
        className="underline hover:text-amber-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mehr erfahren
      </a>
    </div>
  );
}
