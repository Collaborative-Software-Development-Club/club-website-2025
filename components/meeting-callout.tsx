"use client"

import { CalendarDays, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function MeetingCallout({
  dayTime = "Wednesdays at 6pm",
  location = "Enarson Classroom Building",
}: {
  dayTime?: string
  location?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#DE3626]/20 via-white/5 to-transparent p-6 md:p-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-white">
            <CalendarDays className="h-5 w-5 text-[#ffb2ab]" />
            <span className="font-medium">{dayTime}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
