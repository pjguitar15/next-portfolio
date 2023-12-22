import React from "react"

const CVButton = () => {
  return (
    <div>
      <a
        className="text-light-green hover:text-black font-medium text-md lg:text-lg border hover:scale-110 px-8 py-3 border-light-green hover:border-light-green rounded-full transition duration-300 ease-in-out inline-block hover:bg-light-green"
        href="/philcob-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>
    </div>
  )
}

export default CVButton
