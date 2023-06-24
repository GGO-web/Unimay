import React from 'react';
import { Link } from 'react-router-dom';

type navPageNamesType = {
  name: string;
  link: string;
};

interface NavigationPageProps {
  navPageNames: navPageNamesType[];
}

export const NavigationPage: React.FC<NavigationPageProps> = ({
  navPageNames
}) => {
  const lengthArray = navPageNames.length;

  const activePage = (id: number) => {
    return lengthArray === id + 1 ? '--lastchild' : '';
  };

  return (
    <nav className="navpage">
      {navPageNames.map((page, id) => {
        return (
          <div key={page.name} className="navpage__container">
            {/* last element active, color red */}
            <Link className={`navpage__item${activePage(id)}`} to={page.link}>
              {page.name}
            </Link>
            {/* last element hidden */}
            {id + 1 !== lengthArray && <p>&gt;&gt;</p>}
          </div>
        );
      })}
    </nav>
  );
};
