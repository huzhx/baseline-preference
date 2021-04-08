import { gql } from '@apollo/client';

const GET_PENDING_STUDIES_NUMBER = gql`
  query GetPendingStudiesNumber($userId: ID!) {
    getPendingStudiesNumber(userId: $userId)
  }
`;

export { GET_PENDING_STUDIES_NUMBER };
