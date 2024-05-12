"use client";

import { Badge } from "@/components/ui/badge"

export function Alert() {
    return (
        <div className="alert border">
            <Badge variant="default">New</Badge>
            <span className="text-sm px-2 py-1 font-semibold text-gray-500"></span>
        </div>
    )
}