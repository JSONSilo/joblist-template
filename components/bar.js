import Link from "next/link";

export default function Bar({q, total}) {
  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Link className="link font-semibold" href="/">All</Link>
          {q !== null ? (
            <Link href="#">Search: <span className="font-semibold underline">{q}</span></Link>
          ): null}
        </div>
        <a>Total: {total}</a>
      </div>
    </div>
  );
}