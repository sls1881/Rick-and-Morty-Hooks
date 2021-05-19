import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import RickAndMorty from './RickAndMorty';
import mockData from './chracters.json'
import { MemoryRouter } from 'react-router';

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

        waitFor(() => {
            screen.getByAltText('Rick Sanchez')
            screen.getByText('Human')
        })
    })
})