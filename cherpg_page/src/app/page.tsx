import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureProps {
  title: string
  description: string
  icon: React.ReactNode
}

interface TestimonialProps {
  name: string
  level: string
  comment: string
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <Card className="bg-[#f0d9b5]">
    <CardHeader>
      <CardTitle className="flex items-center">
        <div className="mr-2 text-[#4a4a4a]">{icon}</div>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
)

const Testimonial: React.FC<TestimonialProps> = ({ name, level, comment }) => (
  <Card className="bg-[#e8c184] border-2 border-[#b58863]">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <div className="text-sm text-gray-600">{level} Player</div>
    </CardHeader>
    <CardContent>
      <p>"{comment}"</p>
    </CardContent>
  </Card>
)

export default function LandingPage() {
  const features: FeatureProps[] = [
    { title: "Chess Tutorials", description: "Interactive lessons for players from beginner to advanced levels", icon: <BookIcon /> },
    { title: "RPG Quests", description: "Engage in epic quests that teach chess strategies and history", icon: <SwordIcon /> },
    { title: "Character Customization", description: "Create and level up your unique chess hero", icon: <UserIcon /> },
    { title: "Puzzle Challenges", description: "Solve chess puzzles to earn rewards and experience", icon: <PuzzleIcon /> },
    { title: "Multiplayer Battles", description: "Challenge friends or random opponents worldwide", icon: <UsersIcon /> },
    { title: "Pixel Art Style", description: "Immerse yourself in a charming 2D pixelated world", icon: <PixelIcon /> },
  ]

  const testimonials: TestimonialProps[] = [
    { name: "Artem", level: "Beginner", comment: "CheRPG made learning chess fun and addictive!" },
    { name: "Aidos", level: "Intermediate", comment: "The RPG elements keep me coming back. Great way to improve!" },
    { name: "Uldanay", level: "Advanced", comment: "Even as an experienced player, I found new challenges and enjoyment." },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#f0d9b5] text-[#4a4a4a] pixelated items-center">
      <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-between border-b-2 border-[#b58863]">
        <Link className="flex items-center justify-center" href="#">
          <ChessKnightIcon className="h-8 w-8 text-[#b58863]" />
          <span className="ml-2 text-2xl font-bold">CheRPG</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#cta">
            Play Now
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <div className="max-w-7xl mx-auto w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Master Chess with RPG Adventure
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Learn chess strategies while embarking on an epic pixelated journey. Level up your skills and your character!
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-[#b58863] hover:bg-[#8f563b] text-white">Start Your Adventure</Button>
                <Button variant="outline" className="border-[#b58863] text-[#b58863] hover:bg-[#b58863] hover:text-white">
                  Watch Trailer (coming soon)
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-[#b58863]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">Game Features</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Player Testimonials</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-[#b58863] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Chess Adventure?</h2>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Join thousands of players learning chess through exciting RPG quests and battles!
                </p>
              </div>
              <div className="space-x-4">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer"> 
                <Button className="bg-white text-[#b58863] hover:bg-gray-200">Play Now for Free</Button>  </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAJsO3hB6noPegHl2R1cLFx7rPZ2iblptIKDw67ffaEd__qQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white text-[#b58863] hover:bg-white hover:bg-gray-200]">
                  HELP ME
                </Button> </a>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t-2 border-[#b58863]">
        <p className="text-xs text-gray-700">© 2024 CheRPG. All rights reserved. (maybe?)</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service that we don't have rn
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy of nothing
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ChessKnightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
      <path d="M14 7s.5-1 2-1 2.5 1.5 2.5 1.5L19 9c0 1-1 2-1 2l-2 1-6 4v3" />
      <path d="M10 17s0-2.8-3-4.8" />
    </svg>
  )
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function SwordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line x1="13" x2="19" y1="19" y2="13" />
      <line x1="16" x2="20" y1="16" y2="20" />
      <line x1="19" x2="21" y1="21" y2="19" />
    </svg>
  )
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function PuzzleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 4.001 12c0-.617.236-1.234.706-1.704L6.293 8.71a.979.979 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.98.98 0 0 1 .276-.837l1.611-1.611a2.404 2.404 0 0 1 1.704-.706 2.404 2.404 0 0 1 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 4.001 12c0-.617.236-1.234.706-1.704L6.293 8.71a.979.979 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.98.98 0 0 1 .276-.837l1.611-1.611a2.404 2.404 0 0 1 1.704-.706 2.404 2.404 0 0 1 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function PixelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <rect width="8" height="8" x="13" y="3" rx="2" />
      <rect width="8" height="8" x="3" y="13" rx="2" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  )
}