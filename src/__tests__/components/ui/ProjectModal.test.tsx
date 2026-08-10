import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import ProjectModal from "@/components/ui/ProjectModal"

vi.mock("next/image", () => ({
  default: (props: { src: string; alt?: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={props.src} alt={props.alt} />
  ),
}))

const project = {
  id: 1,
  title: "Oyato",
  slug: "oyato",
  category: "e-commerce",
  description: "A complete e-commerce platform.",
  images: ["/oyato1.png", "/oyato2.png"],
  technologies: ["Next.js", "React"],
  liveUrl: "https://example.com",
  githubUrl: null,
  featured: true,
}

describe("ProjectModal", () => {
  it("renders an accessible dialog when open", () => {
    render(<ProjectModal project={project} isOpen onClose={() => {}} />)

    const dialog = screen.getByRole("dialog")
    expect(dialog).toHaveAttribute("aria-modal", "true")
    expect(dialog).toHaveAccessibleName("Oyato")
    expect(screen.getByRole("button", { name: "Close project details" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Previous image" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Next image" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Visit Site" })).toHaveAttribute("href", "https://example.com")
  })

  it("closes when Escape is pressed", () => {
    const onClose = vi.fn()
    render(<ProjectModal project={project} isOpen onClose={onClose} />)

    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("does not render anything when closed", () => {
    render(<ProjectModal project={project} isOpen={false} onClose={() => {}} />)
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  it("shows a note when the project has no public source code", () => {
    render(<ProjectModal project={project} isOpen onClose={() => {}} />)

    expect(screen.getByText(/source code not public/i)).toBeInTheDocument()
  })

  it("hides the note and shows a source link when a GitHub URL is available", () => {
    const projectWithRepo = { ...project, githubUrl: "https://github.com/example/repo" }
    render(<ProjectModal project={projectWithRepo} isOpen onClose={() => {}} />)

    expect(screen.queryByText(/source code not public/i)).not.toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Source" })).toHaveAttribute("href", "https://github.com/example/repo")
  })
})
