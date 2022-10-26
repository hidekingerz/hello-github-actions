import React from 'react';
import PropTypes from 'prop-types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TableCell, TableRow } from '@mui/material';

export function SortableItem({ id, name, calories, fat, carbs, protein }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TableRow
      key={name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{calories}</TableCell>
      <TableCell align="right">{fat}</TableCell>
      <TableCell align="right">{carbs}</TableCell>
      <TableCell align="right">{protein}</TableCell>
    </TableRow>
  );
}

SortableItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbs: PropTypes.number.isRequired,
  protein: PropTypes.number.isRequired,
};
