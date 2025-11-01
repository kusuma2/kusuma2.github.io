import React, { useState } from "react";

function App() {
  const [tab, setTab] = useState("intro");

  const tabs = [
    { id: "intro", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "more", label: "More" }, // changed from extras
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center">
      {/* Header */}
      <header className="text-center py-10">
        {/* Photo Placeholder */}
        <div className="flex justify-center mb-4">
          <div className="w-28 h-28 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-gray-400 text-sm">
            Your Photo
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-2 text-white">Kusuma Penta</h1>
        <p className="text-gray-400 mb-6">
          Software Engineer | Systems & Distributed Systems Enthusiast
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          <a
            href="mailto:kusumakumaripenta2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/kusuma2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kusuma-kumari-penta-b4b8b420b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* Tabs */}
      <nav className="flex space-x-6 border-b border-gray-700 mb-8">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`pb-2 px-2 font-medium transition-all ${
              tab === t.id
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-blue-300"
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
            <h2 className="text-2xl font-semibold mb-4 text-white">About Me</h2>
            <p className="leading-relaxed text-gray-300">
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
            <h2 className="text-2xl font-semibold mb-4 text-white">Experience</h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-300">
              <li>
                <strong>Oracle Cloud Infrastructure (OCI)</strong> — Software Engineer (Jun 2023 – Present)
                <br />
                Worked on File Storage Service backend; transitioned from static to dynamic block volumes, reducing storage footprint by 60%.
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
            <h2 className="text-2xl font-semibold mb-4 text-white">Projects</h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-300">
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

        {tab === "more" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">More</h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-300">
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
      <footer className="py-8 border-t border-gray-800 w-full text-center">
        <a
          href="https://drive.google.com/file/d/your-resume-link-here/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline font-medium"
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

