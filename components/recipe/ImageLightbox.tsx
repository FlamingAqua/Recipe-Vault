"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  image: string;
  open: boolean;
  onClose: () => void;
};

export default function ImageLightbox({
  image,
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full bg-white p-2 text-black shadow-lg"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.img
            src={image}
            alt=""
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}