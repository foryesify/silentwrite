import { signal } from "@preact/signals";

export const gAppName = signal("SilentWrite")
export const gTitle = signal("Welcome")
export const gRoute = signal("/")
export const gText = signal({
    homeTitle: "Start Your Writing Here",
    homeNewEssay: "New Essay"
})
