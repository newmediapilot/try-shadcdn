import { Separator } from "@/components/ui/separator";

export function SeparatorLocal({
  orientation = "vertical",
}: {
  orientation?: "horizontal" | "vertical";
}) {
  return <Separator orientation={orientation} />;
}
