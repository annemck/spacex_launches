import React from 'react';
import { render, fireEvent, waitForElement } from "@testing-library/react";
// import ReloadButton from '../../components/buttons/reloadButton';
// import SortButton from '../../components/buttons/sortButton';
// import FilterButton from '../../components/buttons/filterbutton';
//
// 
// it('Reload button exists', () => {
//   const{container} = render(<ReloadButton/>);
//   expect(container).toHaveTextContent('Reload');
// })
//
// it('Sort button exists', () => {
//   const{container} = render(<SortButton/>);
//   expect(container).toHaveTextContent('Sort');
// })
//
// it('Filter by year button exists', () => {
//   const{container} = render(<FilterButton/>);
//   expect(container).toHaveTextContent('Filter by Year');
// })
//
// it('Sort button changes text on click', () => {
//   const{container} = render(<ReloadButton/>);
//   fireEvent.click(getByText('Sort Descending'), 0);
//   expect(container).toHaveTextContent('Sort Ascending');
//   fireEvent.click(getByText('Sort Ascending'), 0);
//   expect(container.toHaveTextContent('Sort Decending'));
// })
