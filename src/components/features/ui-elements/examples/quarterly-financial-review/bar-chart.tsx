import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { HTMLAttributes } from "react";

export function BarChartDumb(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <ChartContainer
                config={{
                    desktop: {
                        label: "Desktop",
                        color: "hsl(var(--chart-1))",
                    },
                }}
                className="min-h-[300px] w-full"
            >
                <BarChart
                    accessibilityLayer
                    data={[
                        { month: "January", desktop: 186 },
                        { month: "February", desktop: 305 },
                        { month: "March", desktop: 237 },
                        { month: "April", desktop: 73 },
                        { month: "May", desktop: 209 },
                        { month: "June", desktop: 214 },
                    ]}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}