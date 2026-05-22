import Image from "next/image";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  department?: string;
};

const team: TeamMember[] = [
  {
    id: "1",
    name: "Prathamesh Naik",
    role: "Founder & CEO",
    department: "Leadership",
    image: "/team/ceo.jpg",
  },
  {
    id: "2",
    name: "Shweta Kolhe",
    role: "Head of Human Resources",
    department: "Leadership",
    image: "/team/product.jpg",
  },
  {
    id: "3",
    name: "Rahul Verma",
    role: "Frontend Developer",
    department: "Engineering",
    image: "/team/dev1.jpg",
  },
  {
    id: "4",
    name: "Neha Kulkarni",
    role: "UI/UX Designer",
    department: "Design",
    image: "/team/designer.jpg",
  },
];

export default function LeadershipPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Leadership & Staff</h1>
      <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
        Meet the people building and driving our company forward.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.id}
            className="border rounded-2xl p-5 text-center hover:shadow-md transition"
          >
            <div className="relative w-28 h-28 mx-auto mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover"
              />
            </div>

            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="text-sm text-muted-foreground">
              {member.role}
            </p>

            {member.department && (
              <span className="text-xs mt-2 inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                {member.department}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
