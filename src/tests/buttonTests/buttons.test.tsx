import React from 'react';
import { render, fireEvent, waitForElement, screen } from "@testing-library/react";

import ButtonContainer from '../../components/buttons/buttonContainer';
//import ReloadButton from '../../components/buttons/reloadButton';
import {SortButton} from '../../components/buttons/sortButton';
//import FilterByYear from '../../components/buttons/yearFilterbutton';
import App from '../../App';

let loaded = true;
let sortOrder = 'asc';
let sort = () => {
  if (sortOrder === 'asc'){
    sortOrder = 'desc';
  } else {
    sortOrder = 'asc';
  };
}


// it('Reload button exists', () => {
//   const{container} = render(<ButtonContainer/>);
//   expect(container).toHaveTextContent('Reload');
// })
//

// it('Filter by year works', () => {
//   let year = 2006;
//   const{rerender} = render(<App/>);
//   let filterButton = screen.getByRole('button', {name: /Filter by Year/i});
//
// })
//
// it('Filter by year button exists', () => {
//   const{container} = render(<ButtonContainer/>);
//   expect(container).toHaveTextContent('Filter By Year');
// })

test('Sort button changes text on click', async () => {
  const{rerender} = render(<ButtonContainer loaded={loaded} sortOrder={sortOrder} sort={sort}/>);
  expect(screen.getByRole('button', {name: /Sort Descending/i}));
  expect(sortOrder).toBe('asc');
  let sortButton = screen.getByRole('button', {name: /Sort Descending/i});
  await fireEvent.click(sortButton);
  expect(sortOrder).toBe('desc');
  rerender(<ButtonContainer loaded={loaded} sortOrder={sortOrder} sort={sort}/>)
  expect(screen.getByRole('button', {name: /Sort Ascending/i}));
})

// it('Sort button exists', () => {
//   const{container} = render(<ButtonContainer loaded={loaded} sortOrder={sortOrder} sort={sort}/>);
//   expect(container).toHaveTextContent('Sort');
// })
