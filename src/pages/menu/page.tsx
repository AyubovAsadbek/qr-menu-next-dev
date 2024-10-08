import { Suspense } from "react";
import MenuPageClient from "../../components/MenuPageClient";
import { fetchApiToken } from "./serverActions";

async function MenuPage() {
  const apiToken = await fetchApiToken();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MenuPageClient initialApiToken={apiToken} />
    </Suspense>
  );
}

export default MenuPage;
