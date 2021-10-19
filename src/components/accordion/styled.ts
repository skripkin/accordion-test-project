import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;

  .accordion {
    
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 24px;

      font-weight: 600;
      font-size: 18px;
      line-height: 180%;
      cursor: pointer;
      -moz-user-select: none;
      -khtml-user-select: none;
      user-select: none;

      & > svg {
        min-width: 32px;
      }

      & > .accordion__plus {
        display: block;
      }

      & > .accordion__minus {
        display: none;
      }

      &_open {
        color: black;
        border-bottom: 1px solid black;

        & > .accordion__plus {
          display: none;
        }

        & > .accordion__minus {
          display: block;
        }
      }
    }

    &__dropdown {
      overflow: hidden;
      transition: all 0.2s linear;
    }

    &__dropdown-text-wrapper {
      padding-top: 12px;
      padding-bottom: 12px;
    }

    &__dropdown-text {
      margin-left: 24px;
      border-left: 1px solid $malachite;
      font-size: 16px;
      line-height: 180%;
    }

    @media (max-width: 860px) {
      &__header {
        padding-bottom: 12px;
        font-size: 16px;
      }

      &__dropdown-text {
        padding: 0 0 0 25px;
        font-size: 14px;
      }
    }

    @media (max-width: 560px) {
      &__header {
        padding-bottom: 12px;
        font-size: 16px;
      }

      &__dropdown-text {
        padding: 0 0 0 25px;
        font-size: 14px;
      }
    }

    @media (max-width: 380px) {
      &__dropdown-text {
        margin-left: 8px;
        padding: 0 0 0 18px;
      }
    }
  }
`;
