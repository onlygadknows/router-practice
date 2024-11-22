import { headers } from "next/headers";
export async function GET(request) {
  const requestHeaders = new Headers(request.headers);

  const headerList = headers();
  const theme = request.cookies.get("theme");
  //   console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log(theme);

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
