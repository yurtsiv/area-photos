import React from 'react';
import { Link } from 'redux-little-router';
import { func } from 'prop-types';

import { routesNames } from '../../utils/constants';

import './styles.css'

export const BackBtn = () => (
  <Link className="back-btn" href={routesNames.MAP}>
    ←
  </Link>
)
