
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="mt-1">
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/v1vVj1T/13185405-5092428.png" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/rHs7v2q/11461405-4739023.png" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/rGxBkFQ/24185044-6911707.png" />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
