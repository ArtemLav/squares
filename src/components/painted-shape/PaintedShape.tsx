import { useState } from 'react';
import { PaintedShape as PaintedShapeType } from '../../types';
import StyledPaintedShape from './StyledPaintedShape';

interface Props {
  row: number;
  col: number;
  onHover?: (shape: PaintedShapeType) => void;
}

const PaintedShape = ({ row, col, onHover }: Props) => {
  const [active, setActive] = useState(false); // Missed type, but I would rather get this value from props and not store value for each cell

  // You add listener to every separate cell but should add just one for entire board to improve perfamance
  const handleMouseEnter = () => {
    const newActive = !active;
    setActive(newActive);

    onHover?.({ row, col, active: newActive });
  };

  return (
    <StyledPaintedShape
      onMouseEnter={handleMouseEnter}
      active={active}
      data-testid="painted-shape"
    />
  );
};

export default PaintedShape;
