import { motion } from "framer-motion";
import Link from "next/link";
import LoadingLink from "./loading-link";

interface DropDownMenuProps {
  onClose: () => void;
 
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      className="w-screen h-screen bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-slate-300 p-6 space-y-4 absolute top-28 left-0 right-0 z-50 rounded-t-3xl overflow-y-auto"
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col flex space-y-6">
        <div className="space-y-4">
          <h3 className="text-black text-xl font-semibold">Services</h3>
          <div className="space-y-3 pl-4">
            <LoadingLink href="/services/software-development" className="block text-gray-700 text-lg" onClick={onClose}>
              Software Development
            </LoadingLink>
            <LoadingLink href="/services/api-development" className="block text-gray-700 text-lg" onClick={onClose}>
              API Development
            </LoadingLink>
            <LoadingLink href="/services/mvp-development" className="block text-gray-700 text-lg" onClick={onClose}>
              MVP Development
            </LoadingLink>
            <LoadingLink href="/services/enterprise-websites" className="block text-gray-700 text-lg" onClick={onClose}>
              Enterprise Websites
            </LoadingLink>
            <LoadingLink href="/services/ai-automation" className="block text-gray-700 text-lg" onClick={onClose}>
              AI Automation
            </LoadingLink>
            <LoadingLink href="/services/end-to-end-development" className="block text-gray-700 text-lg" onClick={onClose}>
              End-to-End Development
            </LoadingLink>
          </div>
        </div>

        <LoadingLink href="/portfolio" className="text-black text-2xl" onClick={onClose}>
          Portfolio
        </LoadingLink>

        <LoadingLink href="/blog" className="text-black text-2xl" onClick={onClose}>
          Blog
        </LoadingLink>
        
        <LoadingLink href="/about" className="text-black text-2xl" onClick={onClose}>
          About
        </LoadingLink>

        <LoadingLink href="/pricing" className="text-black text-2xl" onClick={onClose}>
          Pricing
        </LoadingLink>

        <LoadingLink href="/contact" className="text-black text-2xl" onClick={onClose}>
          Contact
        </LoadingLink>

        <LoadingLink href="/book" className="text-black text-2xl" onClick={onClose}>
          Book a call
        </LoadingLink>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;