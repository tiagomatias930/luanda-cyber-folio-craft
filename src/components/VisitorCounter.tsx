import { useState, useEffect } from "react";
import { Eye } from "lucide-react";

const COUNTER_KEY = "tiago-matias-portfolio";
const COUNTER_API = `https://api.counterapi.dev/v1/${COUNTER_KEY}/visits/up`;

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(COUNTER_API);
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        setCount(data.count);
      } catch {
        // Fallback: localStorage-based counter
        const stored = localStorage.getItem("portfolio-visit-count");
        const localCount = stored ? parseInt(stored, 10) + 1 : 1;
        localStorage.setItem("portfolio-visit-count", String(localCount));
        setCount(localCount);
        setHasError(true);
      }
    };

    fetchCount();
  }, []);

  if (count === null) {
    return (
      <div className="flex items-center justify-center gap-2 text-gray-600 text-xs">
        <Eye size={14} className="animate-pulse" />
        <span className="font-mono">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
      <Eye size={14} className="text-cyan-400/70" />
      <span className="font-mono">
        <span className="text-cyan-400">{count.toLocaleString()}</span> {count === 1 ? "visitor" : "visitors"}
      </span>
    </div>
  );
};

export default VisitorCounter;
