import { fireEvent, render, screen } from "@testing-library/react"
import AccordionOptionCheckbox from "./accordionOptionCheckbox"

const handleSelectionMock = jest.fn()
const handleRemoveMock = jest.fn()
describe("accordion Option Checkbox", () => {
    it('should call handleSelection if not checked', () => {
        render(<AccordionOptionCheckbox
            count={10}
            label="test label"
            handleRemove={handleRemoveMock}
            handleSelection={handleSelectionMock}
        />)
        const checkBox = screen.getByRole('checkbox')
        fireEvent.click(checkBox)
        expect(handleSelectionMock).toHaveBeenCalled()
    })
    it('should call handleRemove if not checked', () => {
        render(<AccordionOptionCheckbox
            count={10}
            label="test label"
            checked
            handleRemove={handleRemoveMock}
            handleSelection={handleSelectionMock}
        />)
        const checkBox = screen.getByRole('checkbox')
        fireEvent.click(checkBox)
        expect(handleRemoveMock).toHaveBeenCalled()
    })
})