

export async function getJobs(page: number, query?: string) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/jobs?page=${page}&query=${query}`
    );
    return res.json();
  } catch (error) {
    throw new Error("something error");
  }
}
