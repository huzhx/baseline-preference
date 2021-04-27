import { gql } from '@apollo/client';

const GET_PENDING_STUDIES_NUMBER = gql`
  query GetPendingStudiesNumber {
    getPendingStudiesNumber
  }
`;

export { GET_PENDING_STUDIES_NUMBER };
