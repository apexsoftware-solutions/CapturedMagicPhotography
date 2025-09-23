import { useParams, Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function SessionPage() {
  const params = useParams();
  const sessionSlug = params.slug;

  // Capitalize first letter for display
  const sessionTitle = sessionSlug ? sessionSlug.charAt(0).toUpperCase() + sessionSlug.slice(1) : '';

  return (
    <div className="min-h-screen bg-white">
      {/* Return Arrow - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <button 
            className="flex items-center gap-2 bg-white/90 hover:bg-white backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            data-testid="button-return-home"
          >
            <ArrowLeft size={20} className="text-gray-700" />
            <span className="font-sans text-sm text-gray-700">Back to Home</span>
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="pt-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-script text-5xl lg:text-7xl text-primary mb-8">
            {sessionTitle} Sessions
          </h1>
          <p className="font-sans text-lg text-gray-600 mb-12">
            Coming soon... This page will showcase our beautiful {sessionSlug} photography sessions.
          </p>
        </div>
      </div>
    </div>
  );
}