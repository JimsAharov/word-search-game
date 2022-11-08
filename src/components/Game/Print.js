import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ReactToPrint from 'react-to-print';

import { Game } from './Game';

export const Print = () => {
    const componentRef = useRef(null);
    const componentRef2 = useRef(null);
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
      window.ref = componentRef;
      window.ref2 = componentRef2;
    return (
      <div>
        <Game rref={componentRef} />
        <button ref={componentRef2} onClick={handlePrint}>Print this out!</button>
      </div>
    );
  };
