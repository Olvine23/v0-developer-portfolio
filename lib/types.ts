export type ProjectStatus = "Live" | "In Progress" | "Community"

export type Project = {
  slug: string
  title: string
  category: string
  summary: string
  caseStudy: string
  technologies: string[]
  link: string | null
  repoLink: string | null
  year: string
  status: ProjectStatus
  coverImage: string | null
  screenshots: string[]
}

export type Writing = {
  title: string
  excerpt: string
  publication: string
  date: string
  link: string
}

export type ExperienceItem = {
  company: string
  location: string
  role: string
  period: string
  description: string
  highlights: string[]
}

export type CommunityIcon = "Users" | "Mic" | "GraduationCap"

export type CommunityItem = {
  icon: CommunityIcon
  role: string
  title: string
  description: string
}

export type FocusIcon = "Bot" | "Smartphone" | "Sparkles"

export type FocusItem = {
  icon: FocusIcon
  title: string
  description: string
  status: string
}

export type ContentMap = {
  projects: Project[]
  writings: Writing[]
  experience: ExperienceItem[]
  community: CommunityItem[]
  focus: FocusItem[]
}

export type SectionName = keyof ContentMap
