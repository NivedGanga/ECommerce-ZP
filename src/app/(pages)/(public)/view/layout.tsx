import MuiContainer from "@/shared_features/display_elements/mui_container/muiContainer";
import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode; }) {
    return (
        <MuiContainer sx={{
            height: {
                md: '85dvh'
            }, display: {
                md: 'grid',
                xs: 'block'
            }, placeContent: {
                md: 'center'
            }
        }} >
            <Box height={{
                md: '60dvh',
            }} marginBottom={{
                xs: 5,
                md: 0
            }}>
                {children}
            </Box>
        </MuiContainer>
    )
}