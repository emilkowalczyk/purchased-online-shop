import { useContext } from 'react';
import { ContentWrapper } from '../assets/styles/GlobalStyle';
import { ProductContext } from '../providers/ProductProvider';

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <section>
      <ContentWrapper>
        {products.map((product) => (
          <div key={product._id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}$</p>
          </div>
        ))}
      </ContentWrapper>
    </section>
  );
};

export default Home;
