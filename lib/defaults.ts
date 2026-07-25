import type { ContentMap } from "@/lib/types"

// Fallback content, shown until the admin dashboard saves real data to
// Netlify Blobs. Mirrors what used to be hardcoded in the journal components.
export const defaults: ContentMap = {
  projects: [
    {
      slug: "movieplug",
      title: "MoviePlug",
      category: "Mobile App",
      summary:
        "An AI-powered movie recommendation app built to help users discover what to watch next. Currently live on the Play Store with 1K+ downloads.",
      caseStudy: "",
      technologies: ["Flutter", "Firebase", "AI"],
      link: "https://play.google.com/store/apps/details?id=com.ollytech.movieplug",
      repoLink: null,
      year: "2025",
      status: "Live",
      coverImage: "/mylogo.png",
      screenshots: [],
    },
    {
      slug: "voicehub",
      title: "VoiceHub",
      category: "Mobile App",
      summary:
        "A platform where artists express creativity through spoken word. VoiceHub allows creators to share poetry, storytelling, and audio art while building a community around voice-driven expression.",
      caseStudy: "",
      technologies: ["Flutter", "Firebase"],
      link: null,
      repoLink: null,
      year: "2024",
      status: "In Progress",
      coverImage: null,
      screenshots: [],
    },
    {
      slug: "stamp",
      title: "Stamp",
      category: "Mobile App",
      summary:
        "A digital memory journal designed to help people capture meaningful everyday moments. Stamp turns small life experiences into lasting memories through simple entries and reflections.",
      caseStudy: "",
      technologies: ["Flutter"],
      link: null,
      repoLink: null,
      year: "2024",
      status: "In Progress",
      coverImage: null,
      screenshots: [],
    },
  ],
  writings: [
    {
      title: "How to Build an AI Agent in Flutter Using Tool Calling",
      excerpt:
        "Learn how to build an AI agent in Flutter using tool calling. This step-by-step guide explains tools, the agentic loop, and how Flutter apps can execute real actions with AI.",
      publication: "Medium",
      date: "March 2026",
      link: "https://medium.com/@olivinegeorge/how-to-build-an-ai-agent-in-flutter-using-tool-calling-ee7e5be05188",
    },
    {
      title: "Jaspr: Building Websites with Dart the Flutter Way",
      excerpt:
        "What if Flutter developers could build real websites using Dart without fighting the web platform? Jaspr makes that possible. In this article, we explore how this lightweight framework brings a Flutter-like experience to modern web development.",
      publication: "Medium",
      date: "Jan 2026",
      link: "https://medium.com/@olivinegeorge/jaspr-building-websites-with-dart-the-flutter-way-5e05b0d3a7e1",
    },
    {
      title: "flutter_extend: The Productivity Boost Your Flutter Code Deserves",
      excerpt:
        "Flutter is great, but sometimes the boilerplate gets in the way. Tasks like navigation, padding, and layout can quickly become repetitive. flutter_extend introduces a cleaner, more expressive way to write Flutter code using simple extensions that reduce clutter and speed up development.",
      publication: "Medium",
      date: "Dec 2025",
      link: "https://medium.com/@olivinegeorge/flutter-extend-the-productivity-boost-your-flutter-code-deserves-093751c94f35",
    },
    {
      title: "Clean Architecture for Dummies",
      excerpt:
        "Clean Architecture often sounds like something reserved for senior engineers and complex systems. But at its core, it's simply about organizing code so each part of your application has a clear responsibility. In this article, we break it down using simple analogies and show how separating UI, domain, and data layers makes your code easier to maintain and scale.",
      publication: "Medium",
      date: "Dec 2025",
      link: "https://medium.com/@olivinegeorge/clean-architecture-for-dummies-6a8e48d49756",
    },
  ],
  experience: [
    {
      company: "StockApp",
      location: "Mombasa",
      role: "Software Developer",
      period: "Nov 2023 — May 2025",
      description:
        "Working on mobile and web platforms to build reliable tools that improve business workflows and user experience.",
      highlights: [
        "Developed mobile applications using Ionic to improve user engagement and feature delivery.",
        "Architected web applications using Angular, improving performance and responsiveness.",
        "Designed and integrated backend APIs using ASP.NET to support scalable data processing.",
      ],
    },
    {
      company: "Easyness",
      location: "Ghana",
      role: "Mobile App Developer Relations Engineer",
      period: "Mar 2023 — Jun 2024",
      description:
        "Focused on developer engagement, product adoption, and knowledge sharing within the developer ecosystem.",
      highlights: [
        "Built relationships with developers to gather feedback and improve product direction.",
        "Worked closely with product teams to translate developer insights into platform improvements.",
        "Delivered workshops and technical presentations on eCommerce solutions and emerging technologies.",
      ],
    },
    {
      company: "Surestep Systems & Solutions",
      location: "Nairobi",
      role: "Software Developer",
      period: "Jun 2023 — Sep 2023",
      description:
        "Worked on enterprise business systems using Microsoft Dynamics 365 Business Central (NAV), helping organizations adapt ERP workflows to their operational needs.",
      highlights: [
        "Customized and implemented business solutions using Microsoft Dynamics 365 Business Central (NAV).",
        "Collaborated with cross-functional teams to translate business requirements into functional system features.",
        "Integrated Business Central modules to ensure consistent data flow and system reliability.",
        "Developed internal software tools to support organizational processes.",
        "Trained end users on using the customized systems effectively.",
      ],
    },
    {
      company: "Tajilabs",
      location: "Nairobi",
      role: "Software Developer",
      period: "May 2022 — Nov 2022",
      description:
        "Worked on modern web applications and backend integrations while collaborating across design and development teams.",
      highlights: [
        "Built web applications using Angular, Ionic, and Node.js.",
        "Integrated third-party APIs and implemented MongoDB for efficient data management.",
        "Collaborated with designers and developers to build intuitive user interfaces.",
      ],
    },
  ],
  community: [
    {
      icon: "Users",
      role: "Community Lead",
      title: "Flutter Kisumu",
      description:
        "Helping organize developer meetups and workshops around Flutter and mobile development within the Kisumu tech ecosystem.",
    },
    {
      icon: "Mic",
      role: "GDSC Lead",
      title: "Google Developer Student Clubs — MMUST",
      description:
        "Led the developer community at Masinde Muliro University (2022–2023), organizing workshops, technical talks, and supporting students learning modern software development.",
    },
    {
      icon: "GraduationCap",
      role: "Mentor",
      title: "Developer Mentorship",
      description:
        "Supporting upcoming developers by sharing practical knowledge about building real-world applications and navigating the tech industry.",
    },
  ],
  focus: [
    {
      icon: "Bot",
      title: "Intelligent Systems",
      description:
        "Exploring how software systems can reason, plan, and act. Experimenting with LLM-powered workflows and tools that assist development.",
      status: "Active exploration",
    },
    {
      icon: "Smartphone",
      title: "Flutter Internals",
      description:
        "Going deeper into rendering pipelines, custom painters, and performance optimization. Understanding the framework beyond the widget tree.",
      status: "Ongoing learning",
    },
    {
      icon: "Sparkles",
      title: "Adaptive Mobile Apps",
      description:
        "Designing mobile experiences that adapt to user behavior and context. Exploring how intelligent systems can enhance everyday applications.",
      status: "Current experiments",
    },
  ],
}
