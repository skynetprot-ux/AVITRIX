export async function apiPing() {
  try {
    const res = await fetch("http://127.0.0.1:8000/ping");
    return await res.json();
  } catch (err) {
    console.error("Ping failed:", err);
    return { status: "error" };
  }
}
