import { gql } from '@apollo/client';

const GET_PENDING_STUDIES_NUMBER = gql`
  query GetPendingStudiesNumber {
    pendingStudiesNumber
  }
`;

export { GET_PENDING_STUDIES_NUMBER };
