"use client";

import { Switch } from "@nextui-org/react";
import { SunIcon } from "./sunIcon";
import { MoonIcon } from "./moonIcon";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const switchHandler = (isSelected: any) => {
    if(isSelected) {
        setTheme('light');
        return;
    }

    setTheme('dark')
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-3 right-3">
      <Switch
        onValueChange={(value) => switchHandler(value)}
        isSelected={theme === 'light'}
        size="md"
        color="default"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      ></Switch>
    </div>
  );
}
