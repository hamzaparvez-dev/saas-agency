'use client';

import { Facebook, Twitter, Linkedin, Copy } from "lucide-react";

interface ShareButtonsProps {
  shareUrl: string;
  shareText: string;
}

export default function ShareButtons({ shareUrl, shareText }: ShareButtonsProps) {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 bg-neutral-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
      >
        <Twitter className="w-4 h-4 text-white" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 bg-neutral-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
      >
        <Facebook className="w-4 h-4 text-white" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 bg-neutral-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
      >
        <Linkedin className="w-4 h-4 text-white" />
      </a>
      <button
        onClick={handleCopyLink}
        className="w-8 h-8 bg-neutral-800 hover:bg-neutral-700 rounded-full flex items-center justify-center transition-colors"
        title="Copy link"
      >
        <Copy className="w-4 h-4 text-white" />
      </button>
    </div>
  );
} 