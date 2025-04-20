
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";

interface Language {
  value: string;
  label: string;
}

const languages: Language[] = [
  { value: "en-US", label: "English (US)" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "nl", label: "Nederlands" },
  { value: "af", label: "Afrikaans" },
];

export function LanguageSelector() {
  const handleLanguageChange = (value: string) => {
    // In a real app, this would update the app's language
    console.log("Language changed to:", value);
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue="en-US">
      <SelectTrigger className="w-[180px]">
        <Globe className="mr-2 h-4 w-4" />
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.value} value={language.value}>
            {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
