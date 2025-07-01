'use client'
import React, { useState } from 'react'
import CarouselTransitionButton from '@/shared_features/display_elements/carousel_transition_button/carouselTransitionButton';
import { Box } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel.css'
import ItemCard from '@/shared_features/display_elements/item_card/itemCard';
import { ProductModel } from '@/core_components/models/product_model/productModel';

function CarouselSection({ products }: { products: Array<ProductModel> }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [carouselRef, setCarouselRef] = useState<Carousel | null>(null);

    const handlePrevious = () => {
        if (carouselRef && currentSlide > 0) {
            carouselRef.previous(1);
        }
    };

    const handleNext = () => {
        if (carouselRef) {
            carouselRef.next(1);
        }
    };

    return (
        <Box marginTop={5} position={'relative'}>
            <Carousel
                ref={(el) => setCarouselRef(el)}
                ssr
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={30000}
                autoPlay
                centerMode={false}
                className=""
                customButtonGroup={
                    <CarouselTransitionButton
                        next={handleNext}
                        previous={handlePrevious}
                        isPreviousDisabled={currentSlide === 0}
                    />
                }
                containerClass="container-padding-bottom"
                dotListClass=""
                focusOnSelect={false}
                infinite={false}
                itemClass="carousel-item-padding custom-spacing"
                keyBoardControl
                minimumTouchDrag={80}
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside
                renderDotsOutside={false}
                afterChange={(previousSlide, { currentSlide }) => {
                    setCurrentSlide(currentSlide);
                }}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 100,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 5
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 3,
                        partialVisibilityGutter: 8
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
            >
                {products.map((product, index) => (
                    <ItemCard product={product} key={index} />
                ))}
            </Carousel>
        </Box>
    )
}

export default CarouselSection
