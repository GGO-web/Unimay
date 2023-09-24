import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbsItem {
  name: string;
  link?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbsItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__container">
        {items.map((page, id) => {
          return (
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to={page.link || '#'}>
                {page.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
