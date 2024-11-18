'use client';
// Next
import Link from "next/link";

export default function CategoriesPage() { 
  const categories: string[] = ["common", "empathogen", "psychodelic", "stimulant", "dissociative", "depressant", "deliriant", "tentative", "opioid", "barbiturate", "benzodiazepine", "research-chemical", "nootropic", "supplement", "habit-forming"]; // TODO fetch from database

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shop by category</h2>
        </div>
    
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category: string, index: number) => (
            <Link key={index} href={`/shop?category=${category}`} className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.041 13.862A4.999 4.999 0 0 1 17 17.831V21M7 3v3.169a5 5 0 0 0 1.891 3.916M17 3v3.169a5 5 0 0 1-2.428 4.288l-5.144 3.086A5 5 0 0 0 7 17.831V21M7 5h10M7.399 8h9.252M8 16h8.652M7 19h10"></path>
              </svg>
              <span className="text-sm font-medium text-gray-900 dark:text-white">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}