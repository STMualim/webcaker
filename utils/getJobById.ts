
export async function getJobById(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/job/${id}`);
    return res.json();
  } catch (error) {
    throw new Error("error")
  }
}
