import React from 'react';

import { Button, Navbar } from '@/components/common';

import FrontNavbarBrand from './brand';

const FrontNavbar = () => {
  return (
    <Navbar>
      <FrontNavbarBrand />

      <Navbar.Position>
        <Navbar.Menu>
          <Navbar.Item path='/puppies'>
            <Button
              variants={['rounded']}
              className='is-primary'
            >
              ADOPT HERE
            </Button>
          </Navbar.Item>
        </Navbar.Menu>
      </Navbar.Position>
    </Navbar>
  );
};

export default FrontNavbar;
