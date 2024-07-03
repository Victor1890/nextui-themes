"use client"

import {
    ToggleButton,
    ToggleButtonItem
} from "@/components/ui"
import { useState } from "react"
import { PREVIEW_MODES } from "./constants"

export function Preview() {

    const [previewMode, setPreviewMode] = useState<string>(PREVIEW_MODES.uiElements)

    return (
        <section className="w-full px-4 md:px-6">
            <div className="my-6">
                <div className="flex items-center justify-center text-center mb-6">
                    <ToggleButton defaultValue={previewMode} onChange={setPreviewMode}>
                        <ToggleButtonItem value={PREVIEW_MODES.uiElements}>UI Elements</ToggleButtonItem>
                        <ToggleButtonItem value={PREVIEW_MODES.minimalistPage}>Minimalist Page</ToggleButtonItem>
                    </ToggleButton>
                </div>
            </div>
        </section>
    )
}