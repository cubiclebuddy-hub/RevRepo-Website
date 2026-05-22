import Link from "next/link";

type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  phone?: string;
};

const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    location: "Pune, India",
    type: "Full-time",
    description:
      "We are looking for a React/Next.js developer to build and maintain web applications.",
    phone: "+91 9876543210",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description:
      "Design clean and modern interfaces for our SaaS platform.",
    phone: "+91 9876543210",
  },
];

export default function CareersPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Careers</h1>
      <p className="text-muted-foreground mb-10">
        Join our team and build impactful products with us.
      </p>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {job.location} • {job.type}
                </p>
              </div>

              {job.phone && (
                <a
                  href={`tel:${job.phone}`}
                  className="text-sm bg-black text-white px-4 py-2 rounded-lg hover:opacity-80"
                >
                  Call Now
                </a>
              )}
            </div>

            <p className="text-sm mt-4 text-muted-foreground">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
