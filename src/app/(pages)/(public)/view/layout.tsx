import { Box, Container } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode; }) {
    return (
        <Container sx={{ height: '85vh', display: 'grid', placeContent: 'center' }} maxWidth='md'>
            <Box height={'60vh'}>
                {children}
            </Box>
        </Container>
    )
}