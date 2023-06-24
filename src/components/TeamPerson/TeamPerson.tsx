import React from 'react';
import photo_2 from '../../assets/photo/2.png';
import { socialLinks } from '../../constants';
import { Icon } from '@components/Icon/Icon';
import { Link } from 'react-router-dom';

interface TeamPersonProps {
  photo: string;
  name: string;
  profession: string;
  city: string;
  age: string;
  facebook: string;
  instagram: string;
  tiktok: string;
}

export const TeamPerson: React.FC<TeamPersonProps> = ({
  photo,
  name,
  profession,
  city,
  age,
  facebook,
  instagram,
  tiktok
}) => {
  const socialIcons = (link: {
    url: string;
    label: string;
    icon: string;
  }) => {};
  return (
    <div className="teamperson">
      <img src={photo} alt="foto" width={300} height={396} />
      <div className="teamperson__name flex-center">
        <p className="text-xl">{name}</p>
      </div>
      <div className="teamperson__descripttion text-lg ">
        <p>{profession}</p>
        <p>{age}</p>
        <p>{city}</p>
      </div>
      <div className="teamperson__social ">
        <ul className="footer__links list-reset">
          {socialLinks.map((link) => {
            return (
              <li className="footer__links-item " key={link.url}>
                <Link
                  className={`footer__link`}
                  //@ts-ignore
                  to={
                    link.label === 'Facebook' && facebook !== undefined
                      ? facebook
                      : '' ||
                        (link.label === 'Instagram' && instagram !== undefined)
                      ? instagram
                      : '' || (link.label === 'Tictok' && tiktok !== undefined)
                      ? tiktok
                      : ''
                  }
                  title={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon iconName={link.icon} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
