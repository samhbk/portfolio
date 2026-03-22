export function BlinkingCursor() {
  return (
    <span
      className="ml-0.5 inline-block h-4 w-[7px] animate-blink bg-gradient-to-b from-secondary to-primary align-middle shadow-[0_0_8px_rgba(34,211,238,0.5)]"
      aria-hidden
    />
  );
}
