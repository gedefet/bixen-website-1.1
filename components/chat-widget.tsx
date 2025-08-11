"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-80 h-96 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full flex items-center justify-center">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <div className="font-semibold text-white">Bixen AI</div>
                  <div className="text-xs text-white/60">Online</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 h-64 overflow-y-auto">
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full flex-shrink-0" />
                <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 max-w-xs">
                  <p className="text-sm text-white">
                    ¡Hola! Soy el asistente de Bixen. ¿En qué puedo ayudarte con tu proyecto de IA?
                  </p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#8B5CF6]"
                />
                <button className="w-10 h-10 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full shadow-lg shadow-[#8B5CF6]/25 flex items-center justify-center text-white hover:shadow-[#8B5CF6]/40 transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  )
}
