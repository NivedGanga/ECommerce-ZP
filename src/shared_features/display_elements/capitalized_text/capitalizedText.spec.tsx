import { render, screen } from "@testing-library/react";
import CapitalizedText from "./capitalizedText";

describe("CapitalizedText", () => {
    it("capitalizes the text", () => {
        render(<CapitalizedText>heading1</CapitalizedText>)
        const element = screen.getByText("heading1")
        expect(element).toHaveStyle("text-transform: uppercase")
    })
})