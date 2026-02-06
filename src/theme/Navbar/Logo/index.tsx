import React from 'react';
import Logo from '@theme-original/Navbar/Logo';
import type {Props} from '@theme/Navbar/Logo';
import Link from '@docusaurus/Link';

export default function LogoWrapper(props: Props): JSX.Element {
  return (
    <Link href="https://wcmesh.com">
      <Logo {...props} />
    </Link>
  );
}
