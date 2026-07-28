import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, X, Lock } from 'lucide-react';
import { createPortal } from 'react-dom';

const PROTON_URL = 'https://meet.proton.me/join/id-9RGK3VBYCC#pwd-lhLISGH6A4jQ';

interface ConsultationButtonProps {
  className?: string;
}

export function ConsultationButton({ className }: ConsultationButtonProps) {
  const [open, setOpen] = useState(false);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        Request an Encrypted Consultation <ArrowRight className="w-4 h-4" />
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.72)' }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Encrypted Consultation"
          >
            {/* Panel — stops click propagation so it doesn't close on inner click */}
            <div
              className="relative w-full max-w-md bg-[#F5F2EC] border border-[#D9CABA]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 p-1 text-[#4A5240] hover:text-[#2B2B28] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="px-8 py-12 flex flex-col items-center text-center gap-6">
                {/* Icon cluster */}
                <div className="flex items-center justify-center w-14 h-14 border border-[#D9CABA] bg-[#EAE6DC]">
                  <ShieldCheck className="w-7 h-7 text-[#4A5240]" />
                </div>

                {/* Heading */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B59A72] mb-3">
                    Encrypted Consultation
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl text-[#2B2B28] leading-snug">
                    Begin Your Encrypted<br />Session
                  </h2>
                </div>

                {/* Body copy */}
                <p className="font-mono text-[11px] text-[#4A5240] leading-relaxed max-w-xs">
                  Your consultation is conducted over Proton Meet — end-to-end encrypted, zero tracking, sovereign communications.
                </p>

                {/* Divider */}
                <div className="w-full border-t border-[#D9CABA]" />

                {/* CTA */}
                <a
                  href={PROTON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-4 w-full bg-[#2B2B28] text-[#F5F2EC] px-8 py-5 font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#4A5240] transition-colors"
                >
                  Join Encrypted Meeting <ArrowRight className="w-4 h-4" />
                </a>

                {/* Footer note */}
                <div className="flex items-center gap-2 text-[#4A5240]/50">
                  <Lock className="w-3 h-3" />
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em]">
                    Opens in a new tab · Proton Meet E2E Encrypted
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
