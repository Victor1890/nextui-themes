"use client";

import { Card, CardHeader, CardBody, CardFooter, Button, Popover, PopoverTrigger, PopoverContent, RangeCalendar, type DateValue, type RangeValue } from "@nextui-org/react";
import { BarChartDumb } from "./bar-chart";
import { Calendar as CalendarIcon, TrendingUpIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { generateCssVariables } from "@/utils/color.util";
import { useThemeStore } from "@/stores/theme.store";
import { IThemeType } from "@/constants";

export function QuarterlyFinancialReviewChart() {
  const { mode, theme: themeDefault } = useThemeStore();
  const [theme, setTheme] = useState<IThemeType>(themeDefault);

  const [value, setValue] = useState<RangeValue<DateValue>>({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).subtract({ years: 4 }),
  });

  const formatter = useDateFormatter({ dateStyle: "short" });

  useEffect(() => {
    const unsubscribe = useThemeStore.subscribe(({ theme }) => {
      setTheme(theme);
    });

    return () => unsubscribe();
  }, [theme, themeDefault, mode]);

  return (
    <Card isBlurred className="border-none w-full max-w-2xl bg-background/60 dark:bg-default-100/50">
      <CardHeader className="items-start flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Quarterly Financial Review</h3>
        <p className="text-sm">A graph showing the companies quarterly revenue and profit trends over the past 5 years</p>
      </CardHeader>
      <CardBody>
        <BarChartDumb className="aspect-[16/9]" />
      </CardBody>
      <CardFooter className="flex items-center justify-between p-4 gap-2">
        <Popover>
          <PopoverTrigger>
            <Button color="primary" startContent={<CalendarIcon className="h-4 w-4" />} variant="flat">
              {formatter.formatRange(new Date(value.start.toString() || Date.now()), new Date(value.end.toString() || Date.now()))}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="!p-0">
            <RangeCalendar style={generateCssVariables(theme.schemas[mode === "dark" ? "dark" : "light"])} value={value} onChange={setValue} showHelper={false} visibleMonths={2} />
          </PopoverContent>
        </Popover>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TrendingUpIcon className="h-4 w-4 fill-primary" />
          <span>+15% YoY</span>
        </div>
      </CardFooter>
    </Card>
  );
}
