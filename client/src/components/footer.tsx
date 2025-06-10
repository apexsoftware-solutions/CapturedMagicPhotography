import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <div className="font-serif text-2xl mb-4">
            Captured Magic Photography
          </div>
          <p className="font-sans text-sm text-foreground/60 mb-2">
            Kimberly & Jeff Johnson | Fredericksburg, VA
          </p>
          <p className="font-sans text-sm text-foreground/60 mb-8 flex items-center justify-center gap-2">
            <Instagram size={16} />
            @capturedmagicfxbg
          </p>
          <div className="border-t border-gray-100 pt-8">
            <p className="font-sans text-xs text-foreground/40">© 2025 Captured Magic Photography. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
