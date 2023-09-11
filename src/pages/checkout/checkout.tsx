// Packages
import { ReactElement } from 'react';

// Styles
import * as Styled from './styles';

export const Checkout = (): ReactElement => {
  return (
    <Styled.CheckoutContainer className="container">
      <div className="forms">
        <h2 className="title">Complete seu pedido</h2>

        <form>
          <div className="forms--address">Formulário de endereço</div>
          <div className="forms--payment">Formulário de pagamento</div>
        </form>
      </div>

      <div className="coffees__selected">
        <h2 className="title">Cafés selecionados</h2>

        <p className="coffees__selected--form">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quis
          perspiciatis nobis, voluptatem consequatur suscipit quidem voluptas,
          vero veniam voluptatum dolores tenetur impedit magni, fuga
          voluptatibus aspernatur nemo dolorem quae!
        </p>
      </div>
    </Styled.CheckoutContainer>
  );
};
