import { fireEvent, render, screen } from "@testing-library/react"
import CarouselTransitionButton from "./carouselTransitionButton"

const previousMock = jest.fn()
const nextMock = jest.fn()

describe("carouselTransitionButton", () => {
    it("calls previous if previous button is called", () => {
        render(<CarouselTransitionButton previous={previousMock} next={nextMock} />)
        const previousButton = screen.getByTestId('carousel-previous-button')
        fireEvent.click(previousButton)
        expect(previousMock).toHaveBeenCalled()
    })
    it("calls next if previous button is called", () => {
        render(<CarouselTransitionButton previous={previousMock} next={nextMock} />)
        const nextButton = screen.getByTestId('carousel-next-button')
        fireEvent.click(nextButton)
        expect(nextMock).toHaveBeenCalled()
    })
})