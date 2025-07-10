import { fireEvent, render, screen } from "@testing-library/react"
import ItemShowCard from "./itemShowCard"

const pushMock = jest.fn()

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: pushMock
    })
}))

describe("ItemShowCard", () => {
    it("navigates to view/{pid} when onClick is not provided", () => {
        render(<ItemShowCard pid={123} src="https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_640.jpg" />)
        const box = screen.getByRole('img').parentElement
        fireEvent.click(box!)
        expect(pushMock).toHaveBeenCalledWith('/view/123')
    })

    it("executes onClick function if passed", () => {
        const onClickMock = jest.fn()
        render(<ItemShowCard src="https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_640.jpg" onClick={onClickMock} />)
        const box = screen.getByRole('img').parentElement
        fireEvent.click(box!)
        expect(onClickMock).toHaveBeenCalled()
        expect(pushMock).not.toHaveBeenCalled()
    })
})