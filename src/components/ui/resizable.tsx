import * as React from "react";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.PanelGroup>,
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelGroup>
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.PanelGroup
    ref={ref}
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
));
ResizablePanelGroup.displayName = ResizablePrimitive.PanelGroup.displayName;

const ResizablePanel = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.Panel>,
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Panel>
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.Panel
    ref={ref}
    className={cn("grow overflow-auto", className)}
    {...props}
  />
));
ResizablePanel.displayName = ResizablePrimitive.Panel.displayName;

const ResizableHandle = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.Handle>,
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Handle>
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.Handle
    ref={ref}
    className={cn(
      "relative flex h-6 w-6 items-center justify-center",
      className
    )}
    {...props}
  >
    <DragHandleDots2Icon className="h-4 w-4 text-muted-foreground" />
  </ResizablePrimitive.Handle>
));
ResizableHandle.displayName = ResizablePrimitive.Handle.displayName;

const ResizableHandleEdge = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.Handle>,
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Handle>
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.Handle
    ref={ref}
    className={cn(
      "absolute h-2 w-2 translate-x-[-50%] translate-y-[-50%] rotate-45 border-t border-l border-border opacity-0 transition-opacity hover:opacity-100",
      className
    )}
    {...props}
  />
));
ResizableHandleEdge.displayName = ResizablePrimitive.Handle.displayName;

export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  ResizableHandleEdge,
};
