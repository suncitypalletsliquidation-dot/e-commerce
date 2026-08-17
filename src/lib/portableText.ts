export function portableTextToPlainText(blocks: any[] | undefined | null): string {
  if (!blocks) return "";

  return blocks
    .map((block) =>
      block?._type === "block" && Array.isArray(block.children)
        ? block.children.map((child: any) => child?.text || "").join("")
        : ""
    )
    .join(" ")
    .trim();
}
