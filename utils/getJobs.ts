const BASE_URL_API = process.env.BASE_URL_API

export async function getJobs(page: number, query?: string) {
  try {
    const res = await fetch(
      `${BASE_URL_API}/jobs?page=${page}&query=${query}`
    );
    return res.json();
  } catch (error) {
    throw new Error("something error");
  }
}
