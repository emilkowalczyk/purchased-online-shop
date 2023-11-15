const [products, setProducts] = useState([]);

const getProducts = async () => {
  const response = await fetch('http://127.0.0.1:3001/api/products', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  setProducts(data);
};

useEffect(() => {
  getProducts();
}, [products]);
