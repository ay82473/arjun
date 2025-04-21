import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Button } from "./components/ui/button";

export default function PortfolioLibrary() {
  const [activeTab, setActiveTab] = useState("about");

  const SectionTitle = ({ children }) => (
    <h2 className="text-2xl font-serif border-b pb-1 border-gray-300 mb-4">{children}</h2>
  );

  return (
    <main className="p-8 max-w-5xl mx-auto font-serif bg-white text-gray-800 leading-relaxed">
      <header className="text-center mb-10 space-y-2">
        <h1 className="text-5xl font-bold font-serif tracking-tight">Arjun Yadav</h1>
        <p className="text-lg italic text-gray-600">Writer | Editor | Publishing Enthusiast</p>
        <div className="flex justify-center gap-6 mt-3 text-blue-700">
          <a href="mailto:ay82473@gmail.com" className="hover:underline">Email</a>
          <a href="https://www.linkedin.com/in/arjun06/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://aarya-shares.blogspot.com/" target="_blank" rel="noreferrer" className="hover:underline">My Blog</a>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="hover:underline">Download CV</a>
        </div>
      </header>

      <Tabs>
        <TabsList>
          {["about", "experience", "skills", "projects", "library"].map(tab => (
            <TabsTrigger key={tab} value={tab} activeTab={activeTab} setActiveTab={setActiveTab}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="about" activeTab={activeTab}>
          <SectionTitle>About Me</SectionTitle>
          <Card><CardContent>
            With a Master's in Digital Publishing from Oxford Brookes University and over a decade of literary exploration across Asian fiction, I bring a deep love for narrative to everything I do.
            I specialize in editorial curation, immersive storytelling, and digital content workflows. Organizer of the BYOB Club and contributor at the London Book Fair.
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="experience" activeTab={activeTab}>
          <SectionTitle>Professional Experience</SectionTitle>
          {[
            { title: "Flight Club", role: "Floor Server", date: "Nov 2024 – Present", duties: ["Customer service", "Team coordination", "High-pressure problem-solving"] },
            { title: "Waterstones", role: "Bookseller", date: "Oct 2024 – Dec 2024", duties: ["Book advising", "Curating displays", "POS handling"] },
            { title: "Astral Rabbit Publishing", role: "Assistant Editor", date: "Sep 2022 – Jan 2024", duties: ["Manuscript editing", "Collaborating with authors", "Project scheduling"] },
            { title: "Inkfeathers Publishing", role: "Marketing Intern & Editor", date: "Jan 2021 – Sep 2022", duties: ["Editing Mukti: The Salvation", "Marketing content", "Author feedback"] }
          ].map((job, i) => (
            <Card key={i} className="mb-4"><CardContent>
              <h3 className="text-xl font-semibold">{job.title} — <span className="italic font-normal">{job.role}</span></h3>
              <p className="text-sm text-gray-500 mb-2">{job.date}</p>
              <ul className="list-disc list-inside space-y-1">{job.duties.map((d, j) => <li key={j}>{d}</li>)}</ul>
            </CardContent></Card>
          ))}
        </TabsContent>

        <TabsContent value="skills" activeTab={activeTab}>
          <SectionTitle>Editorial & Technical Skills</SectionTitle>
          <Card><CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Editorial:</strong> Structural editing, proofreading, narrative design</li>
              <li><strong>Publishing Tools:</strong> InDesign, Canva, Photoshop, Click-Up, Figma</li>
              <li><strong>Digital:</strong> EPUB, XML, metadata, digital-first workflows</li>
              <li><strong>Marketing:</strong> Content campaigns, audience research, email strategy</li>
            </ul>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="projects" activeTab={activeTab}>
          <SectionTitle>Featured Projects</SectionTitle>
          <Card><CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>The Rise of Ancients:</strong> Fantasy web novel (160k+ views) — serialization strategy and audience engagement</li>
              <li><strong>Dissertation on Worldbuilding:</strong> Framework for immersive fantasy structures in digital publishing</li>
              <li><strong>Mukti: The Salvation:</strong> Structural and stylistic editing for print readiness</li>
            </ul>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="library" activeTab={activeTab}>
          <SectionTitle>Digital Library</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "The Rise of Ancients", type: "Fantasy Web Novel", views: "160k+", link: "#" },
              { title: "Worldbuilding Dissertation", type: "Academic Thesis", views: "Ongoing", link: "#" },
              { title: "Mukti: The Salvation", type: "Edited Novel", views: "Portfolio Sample", link: "#" }
            ].map((item, i) => (
              <Card key={i}><CardContent>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.type}</p>
                <p className="text-sm text-gray-500 mb-1">Views: {item.views}</p>
                <Button variant="link" className="text-blue-600"><a href={item.link}>View</a></Button>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
