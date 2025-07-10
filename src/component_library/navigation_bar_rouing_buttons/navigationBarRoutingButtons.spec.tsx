import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import NavigationBarRoutingButtons from "./navigationBarRoutingButtons"

jest.mock('@/shared_features/display_elements/navigation_bar_text_button/navigationBarTextButton', () => {
    return function MockNavigationBarTextButton() {
        return <div>navigation bar text button</div>
    };
})

describe("navigationBarRoutingButtons", () => {
    render(<NavigationBarRoutingButtons />)

    beforeAll(() => {
        window.resizeTo = (width: number, height: number) => {
            Object.assign(window, {
                innerWidth: width,
                innerHeight: height,
            });
            window.dispatchEvent(new Event('resize'));
        };
    });
    it('if mobile, show tooltip and dialog', async () => {
        window.resizeTo(300, 800)
        const navigationTooltip = screen.getByTestId('mobile-navigation-tooltip')
        expect(navigationTooltip).toBeInTheDocument()
        fireEvent.click(navigationTooltip)
        await waitFor(() => {
            const navigationDialog = screen.getByTestId('mobile-navigation-buttons-dialog')
            expect(navigationDialog).toBeInTheDocument()
        })

        fireEvent.click(navigationTooltip)
        await waitFor(() => {
            expect(screen.queryByTestId('mobile-navigation-buttons-dialog')).not.toBeInTheDocument()
        })
        fireEvent.click(navigationTooltip)

        const backdrop = document.querySelector('.MuiBackdrop-root')
        if (backdrop) {
            fireEvent.click(backdrop)
            await waitFor(() => {
                expect(screen.queryByTestId('mobile-navigation-buttons-dialog')).not.toBeInTheDocument()
            })
        }
    })
})