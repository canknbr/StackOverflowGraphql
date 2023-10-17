import { gql } from "@apollo/client";

export const getQuestion = gql`
  query MyQuery {
    questions {
      items {
        answer_count
        body_markdown
        question_id
        score
        title
        tags
        view_count
        creation_date
      }
    }
  }
`;

export const getQuestionQuery = gql`
  query GetQuestion($id: Int!) {
    question(questionId: $id) {
      has_more
      quota_max
      quota_remaining
      items {
        title
        answer_count
        body_markdown
        creation_date
        is_answered
        link
        question_id
        score
        tags
        view_count
        answers {
          body_markdown
          score
          answer_id
          creation_date
          is_accepted
          question_id
        }
      }
    }
  }
`;

export const searchQuery = gql`
  query MyQuery($term: String) {
    search(term: $term) {
      items {
        answer_count
        body_markdown
        question_id
        score
        title
        tags
        view_count
        creation_date
      }
    }
  }
`;
