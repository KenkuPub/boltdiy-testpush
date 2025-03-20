import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function BackToDashboard() {
  const [, setLocation] = useLocation();

  return (
    <div className="mb-4 md:mb-6">
      <Button
        onClick={() => setLocation("/dashboard")}
        variant="outline"
        className="flex items-center gap-2 text-sm md:text-base"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Button>
    </div>
  );
}
