"use client"
import { motion } from "framer-motion"

const Marquee = () => {
  const text = "Artisan Studio"

  return (
    <div className="w-full py-20 mt-10 bg-[#414A37] rounded-tr-2xl rounded-tl-2xl overflow-hidden">
      <div className="border-y-2 border-[#DBC2A6]">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <span className="text-[13rem] font-bold uppercase leading-none text-[#DBC2A6] pr-4">{text}</span>
          <span className="text-[13rem] font-bold uppercase leading-none text-[#DBC2A6] pr-4">{text}</span>
          <span className="text-[13rem] font-bold uppercase leading-none text-[#DBC2A6] pr-4">{text}</span>
          <span className="text-[13rem] font-bold uppercase leading-none text-[#DBC2A6] pr-4">{text}</span>
          <span className="text-[13rem] font-bold uppercase leading-none text-[#DBC2A6] pr-4">{text}</span>
          <span className="text-[13rem] font-bold uppercase leading-none text-[#DBC2A6] pr-4">{text}</span>
          <span className="text-[13rem] font-bold uppercase leading-none text-[#DBC2A6] pr-4">{text}</span>
          <span className="text-[13rem] font-bold uppercase leading-none text-[#DBC2A6] pr-4">{text}</span>
          <span className="text-[13rem] font-bold uppercase leading-none text-[#DBC2A6] pr-4">{text}</span>
          <span className="text-[13rem] font-bold uppercase leading-none text-[#DBC2A6] pr-4">{text}</span>
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee