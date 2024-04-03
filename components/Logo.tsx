import Link from 'next/link'
import React from 'react'

import { FiTriangle } from "react-icons/fi";

export default function Logo() {
  return (
    <Link
        className="text-xl font-bold text-teal-900 flex items-end gap-1"
        href={"/"}
      >
        <FiTriangle className="w-8 h-7 dark:text-slate-100" />
        <span className="text-xl dark:text-slate-100">Caker.ID</span>
      </Link>
  )
}
