"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import * as React from "react"

import { cn } from "@/lib/tailwind"
import { ForwardRefComponent } from "@/types/react-polymorphic"

export type MenuItemNode = {
  type?: "group" | "item"
  label?: React.ReactNode | string
  key?: string
  children?: MenuItemNode[]
  icon?: any
  href?: string
}

export type MenuProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>

const Menu = AccordionPrimitive.Root

const MenuItem = React.forwardRef(
  ({ component: Comp = AccordionPrimitive.Item, className, ...props }, ref) => (
    <Comp ref={ref} className={cn(className)} {...props} />
  ),
) as ForwardRefComponent<
  typeof AccordionPrimitive.Item,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>
MenuItem.displayName = "MenuItem"

export interface MenuGroupProps {
  label: React.ReactNode
}

const MenuGroup = React.forwardRef(
  ({ component: Comp = "div", children, label, className, ...props }, ref) => (
    <Comp {...props} className={cn("mb-3", className)} ref={ref}>
      <label className={cn("mb-2 block text-[13px] font-medium text-page-group-label")}>
        {label}
      </label>
      <div className="flex flex-col gap-[2px]">{children}</div>
    </Comp>
  ),
) as ForwardRefComponent<"div", MenuGroupProps>

MenuGroup.displayName = "MenuGroup"

export interface MenuEntryProps extends React.ComponentPropsWithoutRef<"button"> {
  active?: boolean
}

const MenuEntry = React.forwardRef(
  ({ component: Comp = "button", className, children, active, ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(
        "cursor-pointer",
        "flex flex-1 items-center justify-start gap-3 rounded-md px-2 py-[6px] text-sm font-medium",
        "hover:bg-primary/5",
        "transition-all [&[data-state=open]>svg.collapse-icon]:rotate-180",
        active ? "bg-primary/5 text-primary" : null,
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  ),
) as ForwardRefComponent<"button", MenuEntryProps>
MenuEntry.displayName = "MenuEntry"

const MenuTrigger = React.forwardRef(
  ({ component: Comp = "button", className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <MenuEntry
        component={AccordionPrimitive.Trigger}
        ref={ref}
        className={cn(className)}
        {...props}
        asChild
      >
        <Comp>
          {children}
          <ChevronDownIcon className="collapse-icon ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </Comp>
      </MenuEntry>
    </AccordionPrimitive.Header>
  ),
) as ForwardRefComponent<
  typeof AccordionPrimitive.Trigger,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>
MenuTrigger.displayName = AccordionPrimitive.Trigger.displayName

const MenuText = React.forwardRef(
  ({ component = "button", className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <MenuEntry ref={ref} component={component} className={cn(className)} {...props}>
        {children}
      </MenuEntry>
    </AccordionPrimitive.Header>
  ),
) as ForwardRefComponent<"button", React.ComponentPropsWithoutRef<"button">>
MenuText.displayName = "MenuText"

const MenuContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
MenuContent.displayName = AccordionPrimitive.Content.displayName

export interface MenuComposerContextProps {
  components?: {
    link?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  }

  defaultSelectedKeys?: string[]
}

const MenuComposerContext = React.createContext<MenuComposerContextProps>(
  {} as MenuComposerContextProps,
)

const useMenuComposerContext = () => {
  return React.useContext(MenuComposerContext)
}

export type MenuComposerProps = React.ComponentPropsWithoutRef<typeof Menu> & {
  items?: MenuItemNode[]
  defaultSelectedKeys?: string[]
  components?: MenuComposerContextProps["components"]
}

const MenuComposer = React.forwardRef(
  ({ className, items = [], defaultSelectedKeys = [], components, ...props }, ref) => {
    const values = React.useMemo<MenuComposerContextProps>(
      () => ({ components: { link: "a", ...components }, defaultSelectedKeys }),
      [components, defaultSelectedKeys],
    )

    return (
      <MenuComposerContext.Provider value={values}>
        <Menu {...props} className={cn("w-full", className)}>
          <MenuItems items={items ?? []} />
        </Menu>
      </MenuComposerContext.Provider>
    )
  },
) as ForwardRefComponent<typeof Menu, MenuProps & MenuComposerProps>

MenuComposer.displayName = MenuComposer.displayName || "MenuComposer"

interface MenuItemsProps {
  items: MenuItemNode[]
  nested?: boolean
}

const MenuItems = ({ items, nested }: MenuItemsProps) => {
  return items.map((menuItem) => {
    if (menuItem?.type === "group") {
      return (
        <MenuGroup key={`${menuItem.key}`} label={menuItem?.label ?? "unknown"}>
          {menuItem?.children?.map((menuChildItem) => {
            const menuChildItemKey = `${menuItem.key}-${menuChildItem?.key}`

            return (
              <MenuItemRenderer
                key={menuChildItemKey}
                parentKey={menuItem.key}
                item={menuChildItem}
                nested={nested}
              />
            )
          })}
        </MenuGroup>
      )
    }

    return <MenuItemRenderer key={menuItem.key} item={menuItem} nested={nested} />
  })
}

interface MenuItemRendererProps {
  parentKey?: string
  item: Partial<MenuItemNode>
  nested?: boolean
}

const MenuItemRenderer = ({ parentKey, item, nested }: MenuItemRendererProps) => {
  const ctx = useMenuComposerContext()

  const hasChild = !!item.children?.length
  const menuChildItemKey = `${parentKey}-${item?.key}`

  const MenuItemKeeper = hasChild ? MenuTrigger : (MenuText as any)

  const nextProps = item.href ? { href: item.href } : {}

  return (
    <MenuItem value={menuChildItemKey}>
      <MenuItemKeeper
        {...nextProps}
        component={item.href ? ctx.components?.link : "button"}
        className={cn(nested ? "pl-9" : null)}
        active={ctx.defaultSelectedKeys?.includes(item.href ?? "")}
      >
        {item.icon} {item.label}
      </MenuItemKeeper>
      {hasChild ? (
        <MenuContent className={cn("rounded-md", nested ? "pl-4" : null)}>
          <MenuItems items={item?.children || []} nested />
        </MenuContent>
      ) : null}
    </MenuItem>
  )
}

export { Menu, MenuComposer, MenuContent, MenuEntry, MenuGroup, MenuItem, MenuText, MenuTrigger }
