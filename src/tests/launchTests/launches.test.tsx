import React from 'react';
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { axe, toHaveNoViolations }  from "jest-axe";
import LaunchContainer from '../../components/launches/launchContainer';
import LaunchListItem from '../../components/launches/launchListItem';
import {fetchLaunchDetails} from '../../API';
import App from '../../App';

let launchList;
const fetch = require('node-fetch');
expect.extend(toHaveNoViolations);


it('should demonstrate this matcher`s usage with react testing library', async () => {
  const { container } = render(<App/>)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})


it('all 111 items are returned from API', () => {
  (async () => {
    launchList = await fetchLaunchDetails();
    expect(launchList.length).toBe(111);
  })
})

it('check 1st and last launches from API are showing', () => {
  (async () => {
    const {container} = await render(<App/>);
    expect(container).toHaveTextContent('1 FalconSat');
    expect(container).toHaveTextContent('110 SXM-7');
  })
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
