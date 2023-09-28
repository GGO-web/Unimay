import React from 'react';
import { ITeamPerson } from '../../../../constants';
import { Icon } from '@components/Icon/Icon';
import { Link } from 'react-router-dom';

export const TeamPerson = ({ person }: { person: ITeamPerson }) => {
  return (
    <div className="teamperson">
      <img
        className={'mb-[15px]'}
        src={person.photo}
        alt={`Фото ${person.name}`}
      />

      <div className="teamperson__name flex-center">
        <p className="text-xl text-center">{person.name}</p>
      </div>

      <div className="teamperson__description text-lg">
        <p>{person.profession}</p>
        <p>{person.age} роки</p>
        <p>{person.city}</p>
      </div>

      <div className="teamperson__social ">
        <ul className="footer__links list-reset">
          {person.socials.map((social) => {
            return (
              <li className="footer__links-item " key={social.url}>
                <Link
                  className={`footer__link`}
                  // @ts-ignore
                  to={social.url}
                  title={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon iconName={social.iconName} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
