import * as React from 'react';
import { reducer, AdjustmentAction } from './reducer';
import { RGBColorType } from './types';
import { createContext } from './create-context';

interface RGBContextType extends RGBColorType {
  dispatch: React.Dispatch<AdjustmentAction>;
}

const initialState: RGBColorType = {
  red: 0,
  green: 0,
  blue: 0
};

// NOTE: now we use our own (i.e. custom) `createContext`:
export const [useContext, Provider] = createContext<RGBContextType>();
// export const RGBContext = React.createContext<RGBContextType>(
//   initialState as RGBContextType
// );

export const RGBContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });

  return (
    <Provider
      value={{
        ...rgb,
        dispatch
      }}
    >
      {children}
    </Provider>
  );
};
