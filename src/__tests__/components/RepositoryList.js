import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer} from '../../components/RepositoryList'



describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          pageInfo: {
            totalCount: 8,
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
        // Add your test code here:
    
        const {debug, getByTestId, getAllByTestId, queryByTestId } = render(<RepositoryListContainer repositories={repositories} />);
        //debug();
        
        const listNames = getAllByTestId('name')
        expect(listNames[0]).toHaveTextContent('jaredpalmer/formik')
        expect(listNames[1]).toHaveTextContent('async-library/react-async')

        const listStars = getAllByTestId('starsCount')
        expect(listStars[0]).toHaveTextContent('21.9')
        expect(listStars[1]).toHaveTextContent('1.8')

        const listDescriptions = getAllByTestId('description')
        expect(listDescriptions[0]).toHaveTextContent('Build forms in React, without the tears')
        expect(listDescriptions[1]).toHaveTextContent('Flexible promise-based React data loader')
        
        const listLanguages = getAllByTestId('language')
        expect(listLanguages[0]).toHaveTextContent('TypeScript')
        expect(listLanguages[1]).toHaveTextContent('JavaScript')

        const listForks = getAllByTestId('forks')
        expect(listForks[0]).toHaveTextContent('1.6')
        expect(listForks[1]).toHaveTextContent('69')

        const listRatings = getAllByTestId('ratings')
        expect(listRatings[0]).toHaveTextContent('88')
        expect(listRatings[1]).toHaveTextContent('72')

        const listReviews = getAllByTestId('reviews')
        expect(listReviews[0]).toHaveTextContent('3')
        expect(listReviews[1]).toHaveTextContent('3')

      });
    });
  });