export type Job = {
    id: string;
    name: string;
    location: string;
    salary: string;
    company: string;
    posted: string;
    tags: string[];
    requirement: string[]
    description: string
}

export type NavLink = {
    id: number;
    name: string;
    href: string;
}