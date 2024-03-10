import { faker } from "@faker-js/faker/locale/id_ID";

const generateFakeJob = () => {
  const postedDate = faker.date.recent({ days: 10 });

  return {
    id: faker.string.uuid(),
    name: faker.person.jobTitle(),
    location: faker.location.city(),
    salary: faker.finance.amount({ min: 1000000, max: 20000000 }),
    company: faker.company.name(),
    posted: postedDate.toLocaleDateString(), // Ubah objek Date menjadi string
    tags: [faker.person.jobArea(), faker.person.jobArea()],
    requirement: [
      faker.lorem.paragraph({ min: 1, max: 1 }),
      faker.lorem.paragraph({ min: 1, max: 1 }),
      faker.lorem.paragraph({ min: 1, max: 1 }),
      faker.lorem.paragraph({ min: 1, max: 1 }),
      faker.lorem.paragraph({ min: 1, max: 1 }),
    ],
    description: faker.lorem.paragraph({ min: 1, max: 5 })
  };
};

export const generateFakeJobs = (length: any) => {
  const jobs: any = []

  Array.from({ length: length }).forEach(() => {
    jobs.push(generateFakeJob())
  })

  return jobs
}
