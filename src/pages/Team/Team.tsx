import React from 'react';

import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import { Heading } from '@components/Heading/Heading';

import { Breadcrumbs } from '@components/Breadcrumbs/Breadcrumbs';
import { Sidenav } from '@components/Navigation/Sidenav';
import { TeamPerson } from '@pages/Team/components/TeamPerson/TeamPerson';
import { TEAM_PERSONS, TEAM_BREADCRUMBS } from '../../constants';
import { FlexGroup } from '@components/FlexGroup/FlexGroup';
import { Paragraph } from '@components/Paragraph/Paragraph';

export const Team = () => {
  return (
    <section className="home page-section">
      <div className="home__container page-section__container">
        <Header />

        <Sidenav />

        <main className="main">
          <section className="team">
            <div className="team__container container">
              <Breadcrumbs items={TEAM_BREADCRUMBS} />
              <Heading className="mb-[52px]">КОМАНДА</Heading>

              <FlexGroup gap={20} column>
                <Paragraph>
                  Овучення аніме - це важливий елемент в створенні якісного
                  продукту, який максимально передає емоції та атмосферу
                  оригінальної роботи. Один з провідних гравців у цій галузі -
                  це компанія <strong>&quot;UnimayMedia&quot;</strong>.{' '}
                  <strong>&quot;UnimayMedia&quot;</strong> є однією з провідних
                  компаній, що спеціалізується на локалізації та овученні аніме
                  для україномовної аудиторії. Вони пропонують широкий вибір
                  аніме-серіалів та повнометражних фільмів, що дозволяє
                  прихильникам аніме насолоджуватися їх улюбленими творами у
                  високій якості і з максимальним комфортом.
                </Paragraph>

                <Paragraph>
                  Компанія &quot;UnimayMedia&quot; має багатий досвід та високий
                  рівень професіоналізму у своїй галузі. Вони працюють з великою
                  кількістю аніме-студій та продюсерів, що дозволяє їм
                  отримувати доступ до широкого асортименту аніме-робіт. Крім
                  того, &quot;UnimayMedia&quot; активно працює над розвитком
                  інтерактивної платформи для потокової передачі аніме-контенту,
                  що забезпечує зручний та швидкий доступ до нових та класичних
                  аніме-творів для шанувальників жанру з усього світу.
                </Paragraph>

                <Paragraph>
                  У цілому, &quot;UnimayMedia&quot;є однією з найбільших та
                  найвідоміших компаній в світі овучення аніме, яка забезпечує
                  фанатів аніме якісним та професійним продуктом, що гідний
                  оригінальної роботи.
                </Paragraph>
              </FlexGroup>

              <div className="team__persons">
                {TEAM_PERSONS.map((person) => (
                  <TeamPerson key={person.name} person={person} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </section>
  );
};
