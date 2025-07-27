import { useLocalStorage } from "react-use";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CheckCheck } from "lucide-react";
import { isTheSameHtml } from "@/lib/compare-html-diff";

export const ProModal = ({
  open,
  html,
  onClose,
}: {
  open: boolean;
  html: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [, setStorage] = useLocalStorage("html_content");
  const handleProClick = () => {
    if (!isTheSameHtml(html)) {
      setStorage(html);
    }
    window.open("https://huggingface.co/subscribe/pro?from=369ModekAi", "_blank");
    onClose(true);
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg lg:!p-8 !rounded-3xl !bg-white !border-neutral-100">
        <DialogTitle className="hidden" />
        <main className="flex flex-col items-start text-left relative pt-2">
          <div className="flex items-center justify-start -space-x-4 mb-5">
            <div className="size-14 rounded-full bg-pink-200 shadow-2xs flex items-center justify-center text-3xl opacity-50">
              🚀
            </div>
            <div className="size-16 rounded-full bg-amber-200 shadow-2xl flex items-center justify-center text-4xl z-2">
              🤩
            </div>
            <div className="size-14 rounded-full bg-sky-200 shadow-2xs flex items-center justify-center text-3xl opacity-50">
              🥳
            </div>
          </div>
         
         
        </main>
      </DialogContent>
    </Dialog>
  );
};

const ProTag = ({ className }: { className?: string }) => (
 <span></span>
  
);
export default ProModal;
