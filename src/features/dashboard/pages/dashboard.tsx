"use client"

import { PageBody, PageTitle } from "@/components/ant-ui/sections/page"
import { Button } from "@/components/ui/button"
import { Book } from "lucide-react"

import { DashboardChart } from "../components/chart"

export interface DashboardPageProps {}

const DashboardPage = (props: DashboardPageProps) => {
  return (
    <PageBody className="flex flex-col gap-4">
      <PageTitle
        title="Dashboard Metrics"
        description="Overview of our sales pipeline, customer demographics, product subscriptions, and more."
        toolbar={
          <div className="flex items-center gap-2">
            <Button variant="default" icon={<Book size={16} />}>
              Add report
            </Button>
          </div>
        }
      />

      <DashboardChart />
    </PageBody>
  )
}

export default DashboardPage
