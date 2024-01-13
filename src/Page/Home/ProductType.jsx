import { ShoppingCart } from "@mui/icons-material";
import { TextField } from "@mui/material";
import axios from "axios";
import { Badge, Button, Card } from "keep-react";
import { useEffect, useState } from "react";

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const inputProps = {
    step: 300,
  };

  useEffect(() => {
    axios.get('http://localhost:5050/addProduct')
      .then(res => setData(res.data))
  }, []);

  const handleSearch =(event) =>{
    setSearch(event.target.value)

  }
  const filterData = data.filter(product =>
    (typeof search == 'string') &&
    (product.productName.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase()))
    
  )

  return (
    <div className="max-w-[1440px] mx-auto ">
       <TextField sx={{marginBottom: 1}} id="search" placeholder="Search Your Product" type="search" value={search} inputProps={inputProps} onChange={handleSearch} />
      <div className="mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {filterData.map(product => (
        <Card key={product._id} className="max-w-xs overflow-hidden rounded-md">
          
            <Card.Container className="my-3 ">
              
              <img src={product.product_image} alt={product.productName} className="w-full h-60" />
            </Card.Container>
          <Card.Container className="p-6">
            <Card.Container className="flex items-center justify-between">
              <Badge size="xs" colorType="light" color="gray">
                For Sale
              </Badge>
              <Card.Title>{product.price}</Card.Title>
            </Card.Container>
            <Card.Container className="my-3">
              <Card.Title>{product.productName}</Card.Title>
              <Card.Description>
                {product.description}
              </Card.Description>
            </Card.Container>
            <Card.Container className="flex items-center justify-start gap-5">
              <Button size="sm" type="outlineGray">
                <span className="pr-2">
                  
                  <ShoppingCart size={24} />
                </span>
                Add To Cart
              </Button>
            </Card.Container>
          </Card.Container>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default AllProduct;
