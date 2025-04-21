import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Button } from "./components/ui/button";

export default function PortfolioLibrary() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = ["about", "experience", "skills", "projects", "library"];
  const tabTitles = {
    about: "About Me",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    library: "Library"
  };

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-6 font-sans">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Arjun Yadav</h1>
        <p className="text-lg text-gray-600">Writer | Editor | Digital Publishing Specialist</p>
        <div className="flex justify-center gap-4 mt-2 text-blue-600">
          <a href="mailto:ay82473@gmail.com" className="hover:underline">Email</a>
          <a href="https://www.linkedin.com/in/arjun06/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </header>

      <Tabs>
        <TabsList>
          {tabs.map(tab => (
            <TabsTrigger key={tab} value={tab} activeTab={activeTab} setActiveTab={setActiveTab}>
              {tabTitles[tab]}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="about" activeTab={activeTab}>
          <Card>
            <CardContent>
              A passionate writer with a Master's in Digital Publishing from Oxford Brookes University.
              With over a decade of experience in analysing Asian fiction, editing manuscripts, and managing digital publishing projects, I blend narrative insight with technical precision.
              Organiser of the BYOB Club and volunteer at the London Book Fair.
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="experience" activeTab={activeTab}>
          {[
            {
              title: "Flight Club",
              role: "Floor Server",
              date: "Nov 2024 – Present",
              details: [
                "Delivered exceptional customer service and managed high-pressure situations.",
                "Coordinated with multiple teams and resolved guest concerns swiftly."
              ]
            },
            {
              title: "Waterstones",
              role: "Bookseller",
              date: "Oct 2024 – Dec 2024",
              details: [
                "Advised customers and curated engaging book displays.",
                "Handled transactions and assisted with stock management."
              ]
            },
            {
              title: "Astral Rabbit Publishing",
              role: "Assistant Editor",
              date: "Sep 2022 – Jan 2024",
              details: [
                "Edited and localized manuscripts, managed projects in Click-Up.",
                "Collaborated with authors to improve flow, tone, and structure."
              ]
            },
            {
              title: "Inkfeathers Publishing",
              role: "Marketing Intern & Editor",
              date: "Jan 2021 – Sep 2022",
              details: [
                "Edited ‘Mukti: The Salvation’ and managed publishing timelines.",
                "Provided structural feedback and aligned revisions with standards."
              ]
            }
          ].map((job, idx) => (
            <Card key={idx} className="mb-4">
              <CardContent>
                <h2 className="text-xl font-semibold">{job.title} — {job.role}</h2>
                <p className="text-sm text-gray-500">{job.date}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {job.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="skills" activeTab={activeTab}>
          <Card>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Editorial & Content Creation:</strong> Editing, proofreading, marketing copy.</li>
                <li><strong>Digital Publishing:</strong> EPUB formatting, metadata, content structuring.</li>
                <li><strong>Tools:</strong> Canva, Photoshop, Click-Up, Figma, Jira.</li>
                <li><strong>Technical:</strong> HTML, XML, Microsoft Office, Adobe InDesign, Audition.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" activeTab={activeTab}>
          <Card>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>The Rise of Ancients:</strong> Fantasy web novel with 160k+ views — storytelling, audience growth, and digital publishing.</li>
                <li><strong>Dissertation Project:</strong> Framework for immersive worldbuilding in fantasy fiction — analysing narrative structure and publishing strategies.</li>
                <li><strong>Book Editing:</strong> Mukti: The Salvation — manuscript refinement and structural coherence.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="library" activeTab={activeTab}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "The Rise of Ancients", type: "Fantasy Web Novel", views: "160k+", link: "#" },
              { title: "Dissertation on Worldbuilding", type: "Academic Paper", views: "In Progress", link: "#" },
              { title: "Mukti: The Salvation", type: "Edited Book", views: "Available in Portfolio", link: "#" }
            ].map((item, idx) => (
              <Card key={idx}>
                <CardContent>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.type}</p>
                  <p className="text-sm text-gray-500">Views: {item.views}</p>
                  <Button variant="link" className="text-blue-600">
                    <a href={item.link}>View</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}