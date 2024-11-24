import { cookies } from "next/headers";

export default function AboutPage() {
  const cookieSore = cookies();
  const theme = cookieSore.get("theme");

  console.log(theme);

  console.log("About server component");
  return <h1>About Page. Yezzer</h1>;
}
