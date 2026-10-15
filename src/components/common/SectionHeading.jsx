import React from "react"
import { cn } from "../../lib/utils"

const SectionHeading = React.forwardRef(({ eyebrow, title, description, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("text-center mb-12", className)} {...props}>
      {eyebrow && (
        <p className="text-sm font-medium tracking-widest uppercase text-warmOrange mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-deepNavy mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-mutedText max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
})
SectionHeading.displayName = "SectionHeading"

export { SectionHeading }