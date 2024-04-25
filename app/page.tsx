import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <nav className="flex gap-2">
        <Link href="/">None</Link>
        <Link href="?foo=bar1">bar1</Link>
        <Link href="?foo=bar2">bar2</Link>
        <Link href="?foo=bar3">bar3</Link>
      </nav>
      <div>
        <pre className="bg-gray-100 p-8">{JSON.stringify(searchParams)}</pre>
      </div>
    </div>
  );
}
