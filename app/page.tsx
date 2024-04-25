import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="font-bold">SearchParams</h1>
      <nav className="flex gap-4 underline">
        <Link href="?foo=bar1">1: Click here and refresh page (?foo=bar1)</Link>
        <Link href="?foo=bar2">2. Click here (?foo=bar2)</Link>
        <Link href="/">3. Click here wtf (/)</Link>
      </nav>
      <pre className="bg-gray-100 p-8">{JSON.stringify(searchParams)}</pre>
    </div>
  );
}
