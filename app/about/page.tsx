import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead AI Researcher",
    description: "PhD in Machine Learning with focus on healthcare applications",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Prof. Michael Rodriguez",
    role: "Medical Director",
    description: "Pulmonologist with 15 years of clinical experience",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Dr. Emily Thompson",
    role: "Data Scientist",
    description: "Specialist in healthcare data analytics and modeling",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "James Wilson",
    role: "Software Engineer",
    description: "Full-stack developer with healthcare IT expertise",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Dr. Lisa Park",
    role: "Clinical Researcher",
    description: "Specialist in COPD research and patient care",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            Our Team
          </h1>
          <p className="text-lg text-purple-700 dark:text-purple-300 max-w-2xl mx-auto">
            Meet our dedicated team of experts working to improve COPD prediction and patient care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-purple-700 dark:text-purple-300">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-purple-600 dark:text-purple-400">
                      {member.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {member.description}
                </p>
                <div className="flex gap-4">
                  <Github className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" />
                  <Linkedin className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" />
                  <Mail className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}