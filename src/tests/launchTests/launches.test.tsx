import React from 'react';
import { render, fireEvent, waitForElement } from "@testing-library/react";
import LaunchContainer from '../../components/launches/launchContainer';
import LaunchListItem from '../../components/launches/launchListItem';


it('all 111 API items are passed to LaunchListItem component', () => {
  const {container} = render(<LaunchContainer/>);
  expect(container.findAll(<LaunchListItem/>).length).toBe(111);
})

// it('launch list item is showing text', () => {
//   const {container} = render(<LaunchListItem/>);
//   expect(container).toHaveTextContent('Launch List Item');
// })
//
// it('launch container is getting text from launch list item', () => {
//   const {container} = render(<LaunchContainer/>);
//   expect(container).toHaveTextContent('Launch List Item');
// })
