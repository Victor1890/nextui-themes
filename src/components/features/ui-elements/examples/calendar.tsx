import { RangeCalendar as RangeCalendarUI } from '@nextui-org/react'

export function RangeCalendar() {

    return (
        <div className="flex gap-x-4">
            <RangeCalendarUI aria-label="Date (No Selection)" />
        </div>
    )
}