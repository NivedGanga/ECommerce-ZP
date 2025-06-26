import MuiContainer from "@/shared_features/display_elements/mui_container/muiContainer";
import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode; }) {
    return (
        <MuiContainer sx={{ height: '85vh', display: 'grid', placeContent: 'center' }}>
            <Box height={'60vh'}>
                {children}
            </Box>
        </MuiContainer>
    )
}