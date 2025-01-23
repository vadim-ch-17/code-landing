import { gql } from "@apollo/client";

export const GET_HEADER = gql`
  query RenderNavigation($navigationIdOrSlug: String!) {
    renderNavigation(navigationIdOrSlug: $navigationIdOrSlug) {
      path
      title
      type
      order
    }
  }
`;
