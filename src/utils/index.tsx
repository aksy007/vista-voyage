import { Stack, type StackProps } from "@mui/material";

export const StackRow = (props: StackProps) => (
  <Stack {...props} direction={"row"} />
);
export const StackCol = (props: StackProps) => (
  <Stack {...props} direction={"column"} />
);

// Helper function to generate initials
export function getInitials(name: string): string {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}
