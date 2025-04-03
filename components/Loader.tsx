import { cn } from "@/lib/utils";

interface LoadingProps {
  className?: string;
}

const Loader = ({ className = "" }: LoadingProps) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-blue-200"></div>
        <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  );
};

export default Loader;
