
import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import React from 'react'
import { hp } from '@/utils/responsiveHelper';

interface Props {
  children: React.ReactNode,
  disabled?: boolean,
  bg?: any,
  press?: ((event: GestureResponderEvent) => void) | any,
  p?: number,
  pt?: number,
  pb?: number,
  pr?: number,
  mt?: number,
  mr?: number,
  ml?: number | any,
  mb?: number,
  m?: number,
  mv?: number,
  mh?: number,
  pv?: number,
  ph?: number,
  borderR?: number | undefined,
  borderLW?: number | undefined,
  borderRW?: number | undefined,
  borderTW?: number | undefined,
  borderBW?: number | undefined,
  borderW?: number | undefined,
  borderC?: string | undefined,
  pL?: number,
  flex?: number,
  justContent?: string,
  itemAlign?: string,
  flexD?: string,
  status?: undefined | any,
  gap?: number | undefined,
  borderBC?: string | undefined,
  width?: number | undefined,
  opacity?: number | undefined,
}

const Button = ({
  children,
  disabled,
  bg,
  press,
  p,
  pt,
  mb,
  borderR,
  borderC,
  borderW,
  pL,
  flex,
  justContent,
  itemAlign,
  flexD,
  borderBW,
  borderLW,
  borderTW,
  borderRW,
  status,
  gap,
  ml,
  mr,
  mt,
  m,
  pb,
  pr,
  ph,
  mh,
  mv,
  pv,
  borderBC,
  width,
  opacity,
}: Props) => {

  // Combine className and dynamic inline styles
  const dynamicStyles = {
    backgroundColor: bg,
    padding: p,
    borderRadius: borderR || hp(7),
    paddingTop: pt,
    marginBottom: mb,
    borderColor: borderC,
    borderWidth: borderW,
    paddingLeft: pL,
    flex: flex,
    justifyContent: justContent,
    alignItems: itemAlign,
    flexDirection: flexD,
    borderTopWidth: borderTW,
    borderRightWidth: borderRW,
    borderBottomWidth: borderBW,
    borderLeftWidth: borderLW,
    gap: gap,
    marginLeft: ml,
    marginRight: mr,
    marginTop: mt,
    margin: m,
    paddingBottom: pb,
    paddingRight: pr,
    paddingHorizontal: ph,
    marginVertical: mh,
    marginHorizontal: mv,
    paddingVertical: pv,
    borderBottomColor: borderBC,
    width: width,
    ...status
  };

  return (
    <TouchableOpacity
      activeOpacity={opacity || 0.7}
      disabled={disabled}
      onPress={press}
      style={dynamicStyles}  // Apply inline styles for dynamic values
    >
      {children}
    </TouchableOpacity>
  );
}

export default Button;
