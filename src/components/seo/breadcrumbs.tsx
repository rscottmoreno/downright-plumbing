'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbJsonLd, BreadcrumbItem } from './json-ld';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Always include home as first item
  const fullItems: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
    ...items
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbJsonLd items={fullItems} />

      {/* Visual Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center space-x-1 text-sm ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            const isFirst = index === 0;

            return (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRight
                    className="w-4 h-4 mx-1 text-gray-400"
                    aria-hidden="true"
                  />
                )}

                {isLast ? (
                  <span
                    className="font-medium text-gray-900 dark:text-gray-100"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="flex items-center gap-1 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    {isFirst && <Home className="w-4 h-4" aria-hidden="true" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

// Utility function to generate breadcrumbs from pathname
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  let currentPath = '';
  paths.forEach((path) => {
    currentPath += `/${path}`;
    
    // Format the path name (convert kebab-case to Title Case)
    const name = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({
      name,
      url: currentPath
    });
  });

  return breadcrumbs;
}

// Component that automatically generates breadcrumbs from the current path
export function AutoBreadcrumbs({ 
  pathname, 
  customNames,
  className 
}: { 
  pathname: string;
  customNames?: Record<string, string>;
  className?: string;
}) {
  const breadcrumbs = generateBreadcrumbs(pathname);
  
  // Apply custom names if provided
  const finalBreadcrumbs = customNames
    ? breadcrumbs.map(item => ({
        ...item,
        name: customNames[item.url] || item.name
      }))
    : breadcrumbs;

  if (finalBreadcrumbs.length === 0) {
    return null;
  }

  return <Breadcrumbs items={finalBreadcrumbs} className={className} />;
}
