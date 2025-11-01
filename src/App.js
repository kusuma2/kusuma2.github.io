import React, { useState } from "react";

function App() {
  const [tab, setTab] = useState("intro");

  const tabs = [
    { id: "intro", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "extras", label: "Extras" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col items-center">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Kusuma Penta</h1>
        <p className="text-gray-600 mb-4">
          Software Engineer | Systems & Distributed Systems Enthusiast
        </p>
        <div className="space-x-6">
          <a href="mailto:kusumakumaripenta2@gmail.com" className="hover:text-blue-600">Email</a>
          <a href="https://github.com/kusuma2" target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
          <a href="https://www.linkedin.com/in/kusuma-kumari-penta-b4b8b420b/" target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
        </div>
      </header>

      {/* Tabs */}
      <nav className="flex space-x-6 border-b border-gray-300 mb-8">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`pb-2 px-2 font-medium ${
              tab === t.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div className="max-w-3xl px-6 mb-12">
        {tab === "intro" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="leading-relaxed">
              I’m a Computer Science graduate from IIT Bombay with strong interests in 
              systems programming, operating systems, and distributed systems. I’ve worked 
              on scalable storage systems and low-level performance engineering at Oracle 
              Cloud Infrastructure. I aim to pursue graduate studies focusing on systems 
              architecture, high-performance computing, and fault-tolerant design.
            </p>
          </div>
        )}

        {tab === "experience" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Oracle Cloud Infrastructure (OCI)</strong> — Software Engineer (Jun 2023 – Present)
                <br />Worked on File Storage Service backend; transitioned from static to dynamic block volumes, reducing storage footprint by 60%.
              </li>
              <li>
                Designed a lease coordination protocol over Paxos and SCSI PR for strong consistency and fault tolerance across distributed volumes.
              </li>
              <li>
                Enhanced test infrastructure by building low-cost VM clusters in Go, cutting resource usage and test time by 70%.
              </li>
            </ul>
          </div>
        )}

        {tab === "projects" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Java Execution Optimization</strong> — Optimized JVM reuse with JShell, reducing program evaluation time by 50%.
              </li>
              <li>
                <strong>Lock-free Queues</strong> — Built high-performance SPSC queues in C++ achieving 2× throughput over Boost.
              </li>
              <li>
                <strong>Operating Systems Labs</strong> — Implemented shell, process management, virtual memory, and file system modules in xv6.
              </li>
            </ul>
          </div>
        )}

        {tab === "extras" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Teaching & Extras</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Teaching Assistant for <em>CS101</em>, assisting students with programming concepts, lab sessions, and evaluations.
              </li>
              <li>
                Mentor in the DAMP program, guiding five juniors on academics and research exploration.
              </li>
              <li>
                Member of IITB Robotics Club; built a Bluetooth-controlled robot optimized for runway navigation.
              </li>
              <li>
                Participated in NSS sustainability projects, contributing to the development of a campus plastic shredder machine.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 border-t w-full text-center">
        <a
          href="https://drive.google.com/file/d/your-resume-link-here/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          View My Resume
        </a>
        <p className="text-gray-500 text-sm mt-2">
          © {new Date().getFullYear()} Kusuma Penta
        </p>
      </footer>
    </div>
  );
}

export default App;

