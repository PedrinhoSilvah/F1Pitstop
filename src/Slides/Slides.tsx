// AutoSlider.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
  width: 100%;
  max-width: 1300px;
  height: 600px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 16px;

    @media (max-width: 1329px){
    max-width: 1140px;
    height: 500px;
  }

  @media (max-width: 890px){
    max-width: 740px;
    height: 300px;
  }

  @media (max-width: 768px){
    max-width: 340px;
    height: 200px;
  }
`;
const Slide = styled.img<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.8s ease;
`;

type Props = {
  images: string[];
  interval?: number; // ms
};

export default function AutoSlider({ images, interval = 3000 }: Props) {
  const [idx, setIdx] = useState(0);
  const pauseRef = React.useRef(false);

  const validImages = images.filter((src) => src && src.trim() !== "");

  useEffect(() => {
    if (validImages.length === 0) return;
    const id = setInterval(() => {
      if (!pauseRef.current) {
        setIdx((i) => (i + 1) % validImages.length);
      }
    }, interval);

    return () => clearInterval(id);
  }, [validImages.length, interval]);

  return (
    <Box
      onMouseEnter={() => (pauseRef.current = true)}
      onMouseLeave={() => (pauseRef.current = false)}
    >
      {images
        .filter((src) => src && src.trim() !== "") // ignora vazias
        .map((src, i) => (
          <Slide key={i} src={src} alt={`slide-${i}`} $active={i === idx} />
        ))}
    </Box>
  );
}
