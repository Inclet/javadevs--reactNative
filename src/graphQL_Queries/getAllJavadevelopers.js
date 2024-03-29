import gql from 'graphql-tag';
const javadeveloper = gql`
  query {
    search(query: "location:kigali", type: USER, first: 100) {
      userCount
      edges {
        node {
          ... on User {
            name
            login
            avatarUrl
            starredRepositories {
              totalCount
            }
            repositories {
              totalCount
            }
            followers {
              totalCount
            }
            following {
              totalCount
            }
            projects {
              totalCount
            }
          }
        }
      }
    }
    viewer {
      avatarUrl
    }
  }
`;

export default javadeveloper;
