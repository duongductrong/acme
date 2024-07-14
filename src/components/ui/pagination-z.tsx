"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import {
  IPaginationProps,
  NextButton,
  PageButton,
  Pagination as PaginationRoot,
  PrevButton,
} from "react-headless-pagination"
import { buttonStyles } from "./button"
import { cn } from "@/lib/tailwind"

export interface PaginationProps
  extends Omit<IPaginationProps, "edgePageCount" | "middlePagesSiblingCount" | "setCurrentPage">,
    Partial<Pick<IPaginationProps, "setCurrentPage">> {}

export const Pagination = ({
  currentPage,
  className,
  setCurrentPage,
  totalPages,
  ...props
}: PaginationProps) => {
  const handleCurrentPageCHange: IPaginationProps["setCurrentPage"] = (pageIndex) => {
    if (setCurrentPage) setCurrentPage(pageIndex)
  }

  return (
    <PaginationRoot
      {...props}
      currentPage={currentPage}
      totalPages={totalPages}
      edgePageCount={1}
      middlePagesSiblingCount={1}
      className={cn("flex items-center justify-start gap-2", className)}
      truncableClassName={buttonStyles({
        variant: "ghost",
        size: "icon",
      })}
      setCurrentPage={handleCurrentPageCHange}
    >
      <PrevButton
        className={buttonStyles({
          variant: "outline",
          size: "icon",
        })}
      >
        <ChevronLeftIcon className="text-neutral-grey-300 h-4 w-4" />
      </PrevButton>
      <div className="flex items-center justify-center gap-2 [&>li]:list-none">
        <PageButton
          activeClassName={buttonStyles({
            variant: "default",
            size: "icon",
            className: "hover:text-primary-foreground",
          })}
          className={buttonStyles({
            variant: "outline",
            size: "icon",
          })}
        />
      </div>
      <NextButton
        className={buttonStyles({
          variant: "outline",
          size: "icon",
        })}
      >
        <ChevronRightIcon className="text-neutral-grey-300 h-4 w-4" />
      </NextButton>
    </PaginationRoot>
  )
}
