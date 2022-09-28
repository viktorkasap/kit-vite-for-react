import React from 'react';
import { ToastContainer } from 'react-toastify';

import '@app/theme/styles';
import { Shop } from '@app/features';
import { Header, Main, Footer } from '@app/layouts';
import { Title, Text, Link } from '@app/components';

export const App = () => {
  return (
    <>
      <Header>
        <Title type="h1" size="h1" variant="thin" color="white">
          Products
        </Title>
      </Header>
      <Main>
        <Shop />
      </Main>
      <Footer>
        <Title type="h4" size="h4" variant="thin" color="white">
          &copy; {new Date().getFullYear()} by Victor Kasap
        </Title>

        <Link href="https://github.com/kasapvictor/react-shop-example-context" target="_blank">
          <Text color="white" type="span">
            GitHub
          </Text>
        </Link>
      </Footer>
      <ToastContainer position="bottom-right" />
    </>
  );
};
