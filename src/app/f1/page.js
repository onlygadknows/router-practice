import Link from "next/link";
export default function F1() {
  return (
    <>
      {" "}
      <h1>F1 Page</h1>
      <div className="mt-1">
        <Link className="border p-1 bg-red-50 rounded-md" href="/f1/f2">
          Link to F2 page
        </Link>
      </div>
    </>
  );
}
