import React from 'react';
import {
  AvatarButton,
  Container,
  Navbar,
  Dropdown,
} from '@edx/paragon';
import edXLogo from '@edx/brand/logo.svg';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform/config';

/**
 * React component for the invite page error case. Renders a minimal header
 * with just a logo that is not linked.
 */
const ErrorPageHeader = () => {
  const config = getConfig();
  const authenticatedUser = getAuthenticatedUser();
  const { username, profileImage } = authenticatedUser;

  return (
    <header>
      <Navbar bg="white" expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand>
            <img
              src={edXLogo}
              alt="edX logo"
              width={50}
            />
          </Navbar.Brand>
          <nav aria-label="Secondary" className="nav secondary-menu-container align-items-center ml-auto">
            <a href={config.LEARNER_SUPPORT_URL} className="text-gray-700 mr-3">
              Help
            </a>
            <Dropdown>
              <Dropdown.Toggle showLabel as={AvatarButton} src={profileImage.imageUrlMedium}>
                {username}
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{ maxWidth: 280 }}
                alignRight
              >
                <Dropdown.Item href={`${config.LOGOUT_URL}?next=${global.location}`}>Sign out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default ErrorPageHeader;