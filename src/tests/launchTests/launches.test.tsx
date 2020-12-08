import React from 'react';
import { render, fireEvent, waitForElement } from "@testing-library/react";
import LaunchContainer from '../components/launches/launchContainer';
import LaunchListItem from '../components/launches/launchListItem';


it('launch list item is showing text', () => {
  const {listItem} = render(<LaunchListItem/>);
  expect(listItem).toHaveTextContent('Launch List Item');
})

it('launch container is getting text from launch list item', () => {
  const {container} = render(<LaunchContainer/>);
  expect(container).toHaveTextContent('Launch List Item');
})
