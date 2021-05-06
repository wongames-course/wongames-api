import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <A key="website" href="https://github.com/geraldobl58" target="_blank" rel="noopener noreferrer">
          Won Games
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
