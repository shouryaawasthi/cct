import React from 'react';
import {
  GraduationCap,
  HelpCircle,
  RefreshCcw,
  Globe,
  BookOpenCheck,
  Users,
} from 'lucide-react';

const highlights = [
  { text: "Instructor Led Training", icon: GraduationCap },
  { text: "Weekly Doubt Clearing Session", icon: HelpCircle },
  { text: "Lifetime Assistance for Revision", icon: RefreshCcw },
  { text: "World-Wide Valid Certification", icon: Globe },
  { text: "Study Material, Assignments and Projects", icon: BookOpenCheck },
  { text: "Industry-Relevant Curriculum", icon: Users }, 
];

const TrainingHighlights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Training Highlights
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
          {highlights.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <item.icon className="text-amber-500 mt-1" size={40} />
              <span className="text-lg text-blue-900 font-medium">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrainingHighlights;
