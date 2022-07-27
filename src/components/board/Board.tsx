import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { PaintedShape as PaintedShapeType } from '../../types';
import PaintedShape from '../painted-shape/PaintedShape';
import StyledBoard from './StyledBoard';

interface Props {
  size: number;
  onPaintedShapeHover?: (shape: PaintedShapeType) => void;
}

const Board = ({ size, onPaintedShapeHover }: Props) => {
  const squareWidth = size > 0 ? `${100 / size}%` : 'auto';

  const handlePaintedShapeHover = (shape: PaintedShapeType) => {
    onPaintedShapeHover?.(shape);
  };

  return (
    <StyledBoard inputWidth={squareWidth} className="board">
      <TableContainer component={Paper}>
        {/* I would rather make this table as separate component like Playground */}
        <Table sx={{ minWidth: 650 }}>
          <TableBody>
            {Array.from(Array(size)).map((_, rowIndex) => (
              <TableRow key={`${size}-${rowIndex}`}>
                {Array.from(Array(size)).map((_, cellIndex) => (
                  <TableCell key={`${size}-${rowIndex}-${cellIndex}`}>
                    <PaintedShape
                      row={rowIndex + 1}
                      col={cellIndex + 1}
                      onHover={handlePaintedShapeHover}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledBoard>
  );
};

export default Board;
