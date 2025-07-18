import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader, SidebarTrigger,
} from "@/components/ui/sidebar"

export function SidebarLocal() {
  return (
      <Sidebar>
          <SidebarHeader />
          <SidebarContent>
              <SidebarGroup />
              <SidebarGroup />
          </SidebarContent>
          <SidebarFooter>
              <SidebarTrigger />
          </SidebarFooter>
      </Sidebar>
  );
}
