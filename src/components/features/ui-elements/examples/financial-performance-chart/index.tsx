"use client";

import { getLocalTimeZone, today } from "@internationalized/date";
import { Button, Card, CardBody, CardFooter, CardHeader, Popover, PopoverContent, PopoverTrigger, RangeCalendar, type DateValue, type RangeValue } from "@nextui-org/react";
import { useDateFormatter } from "@react-aria/i18n";
import { Calendar as CalendarIcon, TrendingUpIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { LineChartDumb } from "./line-chart";
import { useThemeStore } from "@/stores/theme.store";
import { IThemeType } from "@/constants";
import { generateCssVariables } from "@/utils/color.util";

export function FinancialPerformanceChart() {
  const { mode, theme: themeDefault } = useThemeStore();
  const [theme, setTheme] = useState<IThemeType>(themeDefault);

  const [value, setValue] = useState<RangeValue<DateValue>>({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).subtract({ years: 4 }),
  });

  const formatter = useDateFormatter({ dateStyle: "short" });

  const dateFormatter = useMemo(() => {
    return formatter.formatRange(new Date(value.start.toString()), new Date(value.end.toString()));
  }, [formatter, value]);

  console.log("dateFormatter: ", dateFormatter);

  useEffect(() => {
    const unsubscribe = useThemeStore.subscribe(({ theme }) => {
      setTheme(theme);
    });

    return () => unsubscribe();
  }, [theme, themeDefault, mode]);

  return (
    <Card className="border-none w-full max-w-2xl">
      <CardHeader className="items-start flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Financial Performance</h3>
        <p className="text-sm">Revenue and cost comparison</p>
      </CardHeader>
      <CardBody>
        <LineChartDumb className="aspect-[16/9]" />
      </CardBody>
      <CardFooter className="flex items-center justify-between p-4 gap-2">
        <Popover>
          <PopoverTrigger>
            <Button color="primary" startContent={<CalendarIcon className="h-4 w-4" />} variant="flat">
              {dateFormatter}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="!p-0">
            <RangeCalendar style={generateCssVariables(theme.schemas[mode === "dark" ? "dark" : "light"])} value={value} onChange={setValue} showHelper={false} visibleMonths={2} />
          </PopoverContent>
        </Popover>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TrendingUpIcon className="h-4 w-4 fill-primary" />
          <span>+12% YoY</span>
        </div>
      </CardFooter>
    </Card>
  );
}
