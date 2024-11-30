
export default async function Users() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );

  const cats = await response.json();

  console.log(cats);
  return (
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {cats.map((cat) => (
        <div key={cat.id}>
          <img
            src={cat.url}
            alt={cat.url}
            className="object-cover object-center w-full h-40 max-w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
