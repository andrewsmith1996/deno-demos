import "https://deno.land/x/dotenv/load.ts";

try {
  const response = await fetch(`https://the-one-api.dev/v2/quote`, {
    headers: {
      Authorization: `Bearer ${Deno.env.get("API_KEY")}`,
    },
  });

  const json = await response.json();
  const quotes = json.docs;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log("\n", `"${quotes[randomIndex].dialog}"`);
} catch (e) {
  console.error(e);
}
