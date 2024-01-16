'use client';
import {
  Typography,
  Box,
  Card,
  Container,
  Button,
  styled
} from '@mui/material';
import BaseLayout from 'src/layouts/BaseLayout';
import { Watermark } from 'watermark-js-plus';
import Link from 'src/components/Link';
import Head from 'next/head';
import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {

 if(typeof window !== "undefined"){
  const watermark = new Watermark({
    content: 'www.cyberevangelists.com',
    width: 200,
    height: 200,
    rotate: 22,
    layout: 'grid',
    gridLayoutOptions: {
      rows: 2,
      cols: 2,
      gap: [20, 20],
      matrix: [[1, 0], [0, 1]]
    },
    advancedStyle: {
      type: 'linear',
      colorStops: [
        {
          offset: 0,
          color: 'grey'
        },
        {
          offset: 1,
          color: 'grey'
        }
      ]
    },
    onSuccess: () => {
      // success callback
    }
  })
  watermark.create();
 }

  return (
    <OverviewWrapper>
      <Head>
        <title>Cyberevangelists NextJS Javascript Admin Dashboard</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <Button
                  component={Link}
                  href="/dashboards/tasks"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  Live Preview
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Hero />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography textAlign="center" variant="subtitle1">
          Crafted by
          <Link
            href="https://cyberevangelists.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '5px' }}
          >
            cyberevangelists.com
          </Link>
        </Typography>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};
