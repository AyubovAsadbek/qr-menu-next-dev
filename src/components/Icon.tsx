"use client";

import React, { useEffect, useRef } from "react";

interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: string;
  width: number;
  height: number;
  color: string;
}

const replaceColor = (svgString: string, newColor: string) => {
  const regex = /fill="(?:#[A-Fa-f0-9]{3,6}|[a-zA-Z]+)"/g;
  const replacement = `fill="${newColor}"`;
  return svgString.replace(regex, replacement);
};

export const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
  color,
  ...props
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svgElement = async () =>
      await import(`../../public/icons/${name}.svg`);

    svgElement()
      .then((svg) => {
        if (svgRef.current) {
          svgRef.current.innerHTML = replaceColor(svg.default, color);
        }
      })
      .catch((e) => {
        console.error("<strong>On loading the SVG</strong>", e);
      });
  }, [name, color]);

  return <svg width={width} height={height} ref={svgRef} {...props}></svg>;
};
