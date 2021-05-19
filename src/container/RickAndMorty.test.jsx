import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import RickAndMorty from './RickAndMorty';
import mockData from './chracters.json'
import { MemoryRouter, Route } from 'react-router';
import Details from './Details';

const server = setupServer(rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(mockData))
}))

describe('Rick and Morty API', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('Render a list of characters to the page', async () => {
render(<MemoryRouter><RickAndMorty/></MemoryRouter>)
        screen.getByAltText('spinner')

        const ul = await screen.findByRole('list', {name: 'characters'})
        expect(ul).toMatchSnapshot();

        const button = await screen.findByRole('button', { name: 'pages'})
        userEvent.click(button);

        waitFor(() => {
            screen.getByAltText('Rick Sanchez')
            screen.getByText('Human')
        })
    })

    it('Render a single character', async () => {
        render(<MemoryRouter initialEntries={['/3']}>
        <Route path='/:id'>
            <Details />
        </ Route>
    </MemoryRouter>) 

        screen.getByAltText('spinner');
        const ul = await screen.findByRole('list', {name: 'character'})
        expect(ul).toMatchSnapshot();

        return waitFor(() => {
            screen.getByAltText('Summer Smith')
            screen.getByText('Alive');
        })
    })
})