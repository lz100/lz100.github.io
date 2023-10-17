"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {MoonIcon} from "../../public/MoonIcon";
import {SunIcon} from "../../public/SunIcon";
import { Switch } from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <Switch
    defaultSelected
    size="lg"
    color="default"
    onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    startContent={<SunIcon style={{ color: '#ffe934' }}/>}
    endContent={<MoonIcon />}
    >
    </Switch>
  )
};