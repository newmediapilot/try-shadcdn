import { ToggleGroupLocal } from "@/components/ToggleGroup.tsx";
import { ToolTipLocal } from "@/components/ToolTip.tsx";
import { ToggleLocal } from "@/components/Toggle.tsx";
import { TextareaLocal } from "@/components/TextArea.tsx";
import { TabsLocal } from "@/components/Tabs.tsx";
import { TableLocal } from "@/components/Table.tsx";
import { SwitchLocal } from "@/Switch.tsx";
import { SliderLocal } from "@/components/Slider.tsx";
import { SkeletonLocal } from "@/components/Skeleton.tsx";
import { SidebarLocal } from "@/components/Sidebar.tsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { SheetLocal } from "@/components/Sheet.tsx";
import { SeparatorLocal } from "@/components/Separator.tsx";
import { SelectLocal } from "@/components/Select.tsx";
import {ResizableLocal} from '@/components/Resizeable.tsx';
import {RadioGroupLocal} from '@/components/RadioGroup.tsx';
import {ProgressLocal} from '@/components/Progress.tsx';
import {PopoverLocal} from '@/components/Popover.tsx';
import {PaginationLocal} from '@/components/Pagination.tsx';

function Index() {
  return (
    <SidebarProvider defaultOpen={false}>
      <main>
        <section className="p-5">
          <ToggleGroupLocal />
        </section>
        <section className="p-5">
          <ToolTipLocal />
        </section>
        <section className="p-5">
          <ToggleLocal />
        </section>
        <section className="p-5">
          <TextareaLocal />
        </section>
        <section className="p-5">
          <TabsLocal />
        </section>
        <section className="p-5">
          <TableLocal />
        </section>
        <section className="p-5">
          <SwitchLocal />
        </section>
        <section className="p-5">
          <SliderLocal />
        </section>
        <section className="p-5">
          <SkeletonLocal />
        </section>
        <section className="p-5">
          <SidebarTrigger />
        </section>
        <section className="p-5">
          <SidebarLocal />
        </section>
        <section className="p-5">
          <SheetLocal />
        </section>
        <section className="p-5">
          <SeparatorLocal orientation="vertical" />
          <span>Hello</span>
          <SeparatorLocal orientation="horizontal" />
          <span>World</span>
          <SeparatorLocal orientation="vertical" />
        </section>
        <section className="p-5">
          <SelectLocal />
        </section>
        <section className="p-5">
          <TextareaLocal />
        </section>
        <section className="p-5">
          <ResizableLocal />
        </section>
        <section className="p-5">
          <RadioGroupLocal />
        </section>
        <section className="p-5">
          <ProgressLocal />
        </section>
        <section className="p-5">
          <PopoverLocal />
        </section>
        <section className="p-5">
          <PaginationLocal />
        </section>
      </main>
    </SidebarProvider>
  );
}

export default Index;
