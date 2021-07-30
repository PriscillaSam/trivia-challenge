import './Welcome.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'common';

function Welcome() {
  return (
    <div className="Welcome">
      <div className="Welcome__container">
        <h1 className="Welcome__header">Welcome to the Trivia Challenge</h1>
        <p>You will be presented with 10 True or False questions.</p>
        <p className="Welcome__info">Can you score a 100%? Let’s find out.</p>

        <NavLink to="/questions">
          <Button variant="primary">
            Question 1
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default Welcome;
