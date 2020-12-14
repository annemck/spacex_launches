import React from 'react';
import { render, fireEvent, waitForElement, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations }  from "jest-axe";

import ButtonContainer from '../../components/buttons/buttonContainer';
import {ReloadButton} from '../../components/buttons/reloadButton';
import {SortButton} from '../../components/buttons/sortButton';
import {FilterByYear} from '../../components/buttons/yearFilterButton';
import App from '../../App';

expect.extend(toHaveNoViolations);
let loaded = true;
let sortOrder = 'asc';
let selectedYear: number | null = null;
let years = [2006, 2007];
let handleFilter = () => {
  if (selectedYear === 2007){
    selectedYear = 2006;
  } else {
    selectedYear = 2007;
  }
}
let sort = () => {
  if (sortOrder === 'asc'){
    sortOrder = 'desc';
  } else {
    sortOrder = 'asc';
  };
}
let reload = () => {
  if (loaded){
    loaded = false;
  } else {
    loaded = true;
  }
}

it('No accessibility issues with Button Container component', async () => {
    const { container } = render(<ButtonContainer hasLoaded={loaded} sortOrder={sortOrder} sort={sort} years={years} selectedYear={selectedYear} filter={handleFilter} reload={reload}/>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
})

it('No accessibility issues with Reload Button component', async () => {
    const { container } = render(<ReloadButton reload={reload}/>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
})

it('No accessibility issues with Sort Button component', async () => {
    const { container } = render(<SortButton changeSort={sort} order={sortOrder}/>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
})

// it('No accessibility issues with Year Filter Button component', async () => {
//     const { container } = render(<FilterByYear launchYears={years} selectedYear={selectedYear} handleFilter={handleFilter}/>);
//     const results = await axe(container);
//
//     expect(results).toHaveNoViolations();
// })

test('Reload button re-fetches from API', () => {
  (async () => {
    const{container} = await render(<App/>);
    expect(container).toHaveTextContent('Loading');
    //const reload = getByTestId('reload-button') as HTMLElement;
    let reload = screen.getByRole('button', {name: /Reload/i});
    expect(container).toHaveTextContent('1 FalconSat');
    fireEvent.click(reload);
    expect(container).toHaveTextContent('Loading');
  })
})

// it('Reload button exists', () => {
//   const{container} = render(<ButtonContainer hasLoaded={loaded} sortOrder={sortOrder} sort={sort} years={years} selectedYear={selectedYear} filter={handleFilter} reload={reload}/>);
//   expect(container).toHaveTextContent('Reload');
// })


test('Filter by year button changes shown option on change', () => {
  const{getByTestId} = render(<FilterByYear launchYears={years} selectedYear={selectedYear} handleFilter={handleFilter}/>);
  const selectList = getByTestId('select_list') as HTMLSelectElement;
  expect(selectList.value).toBe('Filter by Year');
  expect(selectList.value).not.toBe('2006');
  userEvent.selectOptions(getByTestId("select_list"), ["2006"]);
  expect(selectList.value).toBe('2006');
  expect(selectList.value).not.toBe('Filter by Year');
})

// it('Filter by year button exists', () => {
//   const{container} = render(<ButtonContainer hasLoaded={loaded} sortOrder={sortOrder} sort={sort} years={years} selectedYear={selectedYear} filter={handleFilter} reload={reload}/>);
//   expect(container).toHaveTextContent('Filter by Year');
// })

test('Sort button changes text on click', async () => {
  const{rerender} = render(<ButtonContainer hasLoaded={loaded} sortOrder={sortOrder} sort={sort} years={years} selectedYear={selectedYear} filter={handleFilter} reload={reload}/>);
  expect(screen.getByRole('button', {name: /Sort Descending/i}));
  expect(sortOrder).toBe('asc');
  let sortButton = screen.getByRole('button', {name: /Sort Descending/i});
  await fireEvent.click(sortButton);
  expect(sortOrder).toBe('desc');
  rerender(<ButtonContainer hasLoaded={loaded} sortOrder={sortOrder} sort={sort} years={years} selectedYear={selectedYear} filter={handleFilter} reload={reload}/>)
  expect(screen.getByRole('button', {name: /Sort Ascending/i}));
})

// it('Sort button exists', () => {
//   const{container} = render(<ButtonContainer hasLoaded={loaded} sortOrder={sortOrder} sort={sort} years={years} selectedYear={selectedYear} filter={handleFilter} reload={reload}/>);
//   expect(container).toHaveTextContent('Sort');
// })
