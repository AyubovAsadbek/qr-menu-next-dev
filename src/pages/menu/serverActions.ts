"use server";

export async function fetchApiToken() {
  try {
    const res = await fetch("https://dev.commeta.uz/api-access/generate", {
      method: "POST",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch API token:", error);
    return null;
  }
}
