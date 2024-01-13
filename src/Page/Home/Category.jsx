import { Card } from "keep-react";


const Category = () => {
    return (
        <div>
            <div className="mb-3">
      

      <Card className="max-w-[250px] p-1">
        <Card.Container className="flex items-center justify-center">
          <img src="https://i.ibb.co/bv53JYC/fooditem.jpg" alt="" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
            Mobile
          </Card.Title>
        </Card.Container>
      </Card>
    </div>
        </div>
    );
};

export default Category;