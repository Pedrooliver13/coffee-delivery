// Packages
import { ReactElement } from 'react';
import {
  ShoppingCart as ShoppingCartIcon,
  Package as PackageIcon,
  Timer as TimerIcon,
  Coffee as CoffeeIcon,
} from 'phosphor-react';

// Components
import { SectionCardsSkeleton } from 'components/core';
import { Card } from 'components/shared';

// Hooks
import { useGetCoffees } from 'hooks/useGetCoffees';

// Assets
import CoffeeCupImage from 'assets/coffee-cup.svg';

// Styles
import * as Styled from './styles';

export const Home = (): ReactElement => {
  const { data, isLoading } = useGetCoffees();

  return (
    <>
      <Styled.SectionHero>
        <div className="container content">
          <div className="info">
            <h1 className="info__title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="info__subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ul className="info__list">
              <Styled.ItemList variant="yellow-dark">
                <div className="icon">
                  <ShoppingCartIcon size={22} weight="fill" />
                </div>
                Compra simples e segura
              </Styled.ItemList>
              <Styled.ItemList variant="base-text">
                <div className="icon">
                  <PackageIcon size={22} weight="fill" />
                </div>
                Embalagem mantém o café intacto
              </Styled.ItemList>
              <Styled.ItemList variant="yellow">
                <div className="icon">
                  <TimerIcon size={22} weight="fill" />
                </div>
                Entrega rápida e rastreada
              </Styled.ItemList>
              <Styled.ItemList variant="purple">
                <div className="icon">
                  <CoffeeIcon size={22} weight="fill" />
                </div>
                O café chega fresquinho até você
              </Styled.ItemList>
            </ul>
          </div>

          <img src={CoffeeCupImage} alt="Copo de café" />
        </div>
      </Styled.SectionHero>

      <Styled.CoffeeContent className="container">
        <h1 className="title">Nossos cafés</h1>

        {!isLoading ? (
          <section className="coffee-list">
            {data?.map((coffee) => (
              <Card key={coffee?.id} data={coffee} />
            ))}
          </section>
        ) : (
          <SectionCardsSkeleton />
        )}
      </Styled.CoffeeContent>
    </>
  );
};
