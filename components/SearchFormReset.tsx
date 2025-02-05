'use client';

import { X } from 'lucide-react';
import Link from 'next/link';

export default function SearchFormReset() {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;
    form ? form.reset() : null;
  };
  return (
    <>
      <button type="reset" onClick={reset}>
        <Link href="/" scroll={false} className="search-btn text-white">
          <X className="size-5" />
        </Link>
      </button>
    </>
  );
}
