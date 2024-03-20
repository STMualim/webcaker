const BASE_URL_API = process.env.BASE_URL_API

export async function getJobById(id: string) {
  try {
    const res = await fetch(`${BASE_URL_API}/job/${id}`);
    return res.json();
  } catch (error) {
    throw new Error("error")
  }
}
